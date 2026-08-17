/**
 * Where live public pricing lives.
 * Plans are published on the app host (app.tidyflowapp.com/api/public/plans).
 * The older api.tidyflowapp.com host can still return a stale $9 catalog —
 * we try every host and skip that legacy payload.
 */

function asRecord(val: unknown): Record<string, unknown> | null {
  return val && typeof val === "object" && !Array.isArray(val)
    ? (val as Record<string, unknown>)
    : null;
}

function plansList(data: unknown): unknown[] | null {
  const root = asRecord(data);
  if (Array.isArray(root?.data)) return root.data;
  if (Array.isArray(data)) return data;
  // Single-plan detail payloads (`/api/public/plans/STARTUP`)
  if (root && (root.tier || root.code || root.monthlyPrice !== undefined || root.plan)) {
    const inner = asRecord(root.plan);
    return [inner || root];
  }
  return null;
}

function looksLikePlansEnvelope(data: unknown): boolean {
  const list = plansList(data);
  return Boolean(list && list.length > 0);
}

/** Old public catalog: Startup $9 / 10 properties / 5 cleaners */
function isLegacyCatalog(data: unknown): boolean {
  const list = plansList(data);
  if (!list) return true;
  for (const item of list) {
    const obj = asRecord(item);
    if (!obj) continue;
    const tier = String(obj.tier || obj.code || "").toUpperCase();
    if (tier !== "STARTUP") continue;
    const price = Number(obj.monthlyPrice);
    const limits = asRecord(obj.limits);
    const cleaners = Number(limits?.cleaners ?? obj.cleaners);
    const properties = Number(limits?.properties ?? obj.properties);
    if (price === 9 || (cleaners === 5 && properties === 10)) return true;
  }
  return false;
}

export function plansUpstreamBases(): string[] {
  const env = (process.env.TIDYFLOW_API_URL || "").replace(/\/$/, "").trim();
  const bases = ["https://app.tidyflowapp.com", env, "https://api.tidyflowapp.com"].filter(Boolean);
  return [...new Set(bases)];
}

export async function fetchPublicPlansUpstream(path = "/api/public/plans"): Promise<{
  data: unknown;
  from: string;
}> {
  const suffixes = path.startsWith("/") ? path : `/${path}`;
  const bases = plansUpstreamBases();

  const settled = await Promise.allSettled(
    bases.map(async (base) => {
      const url = `${base}${suffixes}`;
      const upstream = await fetch(url, {
        headers: { Accept: "application/json", "Cache-Control": "no-cache" },
        signal: AbortSignal.timeout(8000),
        cache: "no-store",
      });
      if (!upstream.ok) {
        throw new Error(`Failed to load plans (${upstream.status}) from ${base}`);
      }
      const data: unknown = await upstream.json();
      return { data, from: url, base };
    })
  );

  const ok = settled
    .filter((r): r is PromiseFulfilledResult<{ data: unknown; from: string; base: string }> => r.status === "fulfilled")
    .map((r) => r.value)
    .filter((r) => looksLikePlansEnvelope(r.data));

  const fresh = ok.find((r) => r.base.includes("app.tidyflowapp.com") && !isLegacyCatalog(r.data))
    || ok.find((r) => !isLegacyCatalog(r.data));

  if (fresh) return { data: fresh.data, from: fresh.from };

  const lastError = settled
    .filter((r): r is PromiseRejectedResult => r.status === "rejected")
    .map((r) => (r.reason instanceof Error ? r.reason.message : String(r.reason)))
    .join("; ") || "Could not reach TidyFlow plans API.";

  throw new Error(
    ok.length
      ? "Plans API only returned a stale catalog (Startup $9). Use https://app.tidyflowapp.com/api/public/plans."
      : lastError
  );
}
