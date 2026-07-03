/**
 * Public pricing plans from TidyFlow management API.
 * Marketing copy stays local; prices & limits come from the API.
 */

export type PlanCode = "STARTUP" | "STANDARD" | "PREMIUM";

export interface NormalizedPlan {
  code: PlanCode;
  id: string;
  name: string;
  currency: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  maxProperties: number | null;
  maxCleaners: number | null;
  maxManagers: number | null;
  maxAiOperations: number | null;
  maxInvoicesPerMonth: number | null;
  maxPhotoVerificationsPerMonth: number | null;
  maxPdfGenerationsPerMonth: number | null;
  isPopular: boolean;
  trialDays: number;
  description: string;
  features: string[];
}

/** Static marketing wording — prices/limits are overridden by API */
export const PLAN_UI_COPY: Record<
  PlanCode,
  { description: string; features: string[] }
> = {
  STARTUP: {
    description: "Ideal for growing cleaning agencies establishing their initial routes.",
    features: [
      "Core scheduling & GPS logs",
      "AI cleaner assignment",
      "AI checklist generation",
      "Capped AI photo verification",
      "Standard invoice PDFs",
      "Google Sheets real-time sync"
    ]
  },
  STANDARD: {
    description: "Best for established residential and commercial operations.",
    features: [
      "Everything in Startup",
      "Full client invoicing modules",
      "AI Invoice Assist integration",
      "100 PDF reports / month",
      "Higher cap AI photo verification",
      "Timesheet wage rules engine",
      "Live Rota Builder dispatch"
    ]
  },
  PREMIUM: {
    description: "Engineered for enterprise facility operations and massive teams.",
    features: [
      "Everything in Standard",
      "Unlimited PDF exports & reports",
      "Deep AI business insights",
      "Unlimited AI operations",
      "Multi-company / Multi-tenant",
      "Full CSV & database exports",
      "24/7 VIP priority support"
    ]
  }
};

const PLAN_ORDER: PlanCode[] = ["STARTUP", "STANDARD", "PREMIUM"];

const FALLBACK_PLANS: NormalizedPlan[] = [
  {
    code: "STARTUP",
    id: "startup",
    name: "Startup",
    currency: "USD",
    monthlyPrice: 9,
    annualMonthlyPrice: 7,
    maxProperties: 10,
    maxCleaners: 5,
    maxManagers: 2,
    maxAiOperations: 50,
    maxInvoicesPerMonth: 5,
    maxPhotoVerificationsPerMonth: 30,
    maxPdfGenerationsPerMonth: 20,
    isPopular: false,
    trialDays: 14,
    ...PLAN_UI_COPY.STARTUP
  },
  {
    code: "STANDARD",
    id: "standard",
    name: "Standard",
    currency: "USD",
    monthlyPrice: 79,
    annualMonthlyPrice: 63,
    maxProperties: 50,
    maxCleaners: 25,
    maxManagers: 10,
    maxAiOperations: 500,
    maxInvoicesPerMonth: 100,
    maxPhotoVerificationsPerMonth: 200,
    maxPdfGenerationsPerMonth: 100,
    isPopular: true,
    trialDays: 14,
    ...PLAN_UI_COPY.STANDARD
  },
  {
    code: "PREMIUM",
    id: "premium",
    name: "Premium",
    currency: "USD",
    monthlyPrice: 149,
    annualMonthlyPrice: 119,
    maxProperties: null,
    maxCleaners: null,
    maxManagers: null,
    maxAiOperations: null,
    maxInvoicesPerMonth: null,
    maxPhotoVerificationsPerMonth: null,
    maxPdfGenerationsPerMonth: null,
    isPopular: false,
    trialDays: 14,
    ...PLAN_UI_COPY.PREMIUM
  }
];

function asRecord(val: unknown): Record<string, unknown> | null {
  return val && typeof val === "object" && !Array.isArray(val)
    ? (val as Record<string, unknown>)
    : null;
}

function pick<T>(obj: Record<string, unknown>, keys: string[]): T | undefined {
  for (const key of keys) {
    if (obj[key] !== undefined && obj[key] !== null) return obj[key] as T;
  }
  return undefined;
}

function toNumber(val: unknown): number | null {
  if (val === null || val === undefined || val === "" || val === "unlimited") return null;
  const n = Number(val);
  return Number.isFinite(n) ? n : null;
}

function normalizeCode(raw: unknown): PlanCode | null {
  const s = String(raw || "").toUpperCase();
  if (s === "STARTUP" || s === "STANDARD" || s === "PREMIUM") return s;
  return null;
}

/** Unwrap `{ success, currency, data }` envelopes from management API */
export function unwrapApiPayload(payload: unknown): unknown {
  const root = asRecord(payload);
  if (!root) return payload;
  if (root.data !== undefined) return root.data;
  if (root.plan !== undefined) return root.plan;
  return payload;
}

function readLimit(
  obj: Record<string, unknown>,
  limitsKey: string,
  scopeKey: string
): number | null {
  const limits = asRecord(obj.limits);
  const scope = asRecord(obj.scope);
  const fromLimits = limits ? toNumber(limits[limitsKey]) : null;
  if (fromLimits !== null) return fromLimits;
  const fromScope = scope ? toNumber(scope[scopeKey]) : null;
  if (fromScope !== null) return fromScope;
  return toNumber(obj[limitsKey]) ?? toNumber(obj[scopeKey]);
}

const FEATURE_FLAG_LABELS: Record<string, string> = {
  aiPhotoAnalysis: "AI photo verification",
  aiInsights: "AI business insights dashboard",
  aiAssignment: "AI cleaner assignment",
  aiTaskSuggestions: "AI checklist suggestions",
  invoicesEnabled: "Client invoicing modules",
  aiInvoiceAssist: "AI Invoice Assist"
};

function featuresFromFlags(flags: Record<string, unknown>, code: PlanCode): string[] {
  const enabled = Object.entries(FEATURE_FLAG_LABELS)
    .filter(([key]) => flags[key] === true)
    .map(([, label]) => label);
  if (!enabled.length) return PLAN_UI_COPY[code].features;
  const base = PLAN_UI_COPY[code].features.filter(
    (f) => !enabled.some((e) => f.toLowerCase().includes(e.split(" ")[0].toLowerCase()))
  );
  return [...base.slice(0, 2), ...enabled, ...base.slice(2)].filter(
    (v, i, arr) => arr.indexOf(v) === i
  );
}

/** Normalize a single plan object from management API */
export function normalizePlan(raw: unknown, fallback?: NormalizedPlan): NormalizedPlan | null {
  const obj = asRecord(raw);
  if (!obj) return fallback || null;

  const code =
    normalizeCode(pick(obj, ["tier", "code", "planCode", "id", "slug"])) ||
    (fallback?.code ?? null);
  if (!code) return fallback || null;

  const copy = PLAN_UI_COPY[code];
  const monthly = toNumber(pick(obj, ["monthlyPrice", "monthly_price", "price"])) ?? fallback?.monthlyPrice ?? 0;
  const annualMonthly =
    toNumber(pick(obj, ["annualMonthlyPrice", "annual_monthly_price"])) ??
    (monthly > 0 ? Math.round(monthly * 0.8 * 100) / 100 : fallback?.annualMonthlyPrice ?? 0);

  const featureFlags = asRecord(obj.features);
  const features = featureFlags ? featuresFromFlags(featureFlags, code) : copy.features;

  return {
    code,
    id: code.toLowerCase(),
    name: String(pick(obj, ["label", "displayName", "name", "title"]) || fallback?.name || code),
    currency: String(pick(obj, ["currency"]) || fallback?.currency || "USD"),
    monthlyPrice: monthly,
    annualMonthlyPrice: annualMonthly,
    maxProperties: readLimit(obj, "properties", "maxProperties"),
    maxCleaners: readLimit(obj, "cleaners", "maxCleaners"),
    maxManagers: readLimit(obj, "managers", "maxManagers"),
    maxAiOperations: readLimit(obj, "aiRequestsPerMonth", "aiRequestsPerMonth"),
    maxInvoicesPerMonth: readLimit(obj, "invoicesPerMonth", "maxInvoicesPerMonth"),
    maxPhotoVerificationsPerMonth: readLimit(obj, "photoVerificationsPerMonth", "maxPhotoVerificationsPerMonth"),
    maxPdfGenerationsPerMonth: readLimit(obj, "pdfGenerationsPerMonth", "maxPdfGenerationsPerMonth"),
    isPopular: Boolean(pick(obj, ["isPopular", "popular", "recommended"]) ?? (code === "STANDARD")),
    trialDays: toNumber(pick(obj, ["trialDays", "trial_days"])) ?? fallback?.trialDays ?? 14,
    description: String(pick(obj, ["description", "summary", "tagline"]) || copy.description),
    features
  };
}

export function normalizePlansList(payload: unknown): NormalizedPlan[] {
  const unwrapped = unwrapApiPayload(payload);
  const list = Array.isArray(unwrapped)
    ? unwrapped
    : Array.isArray((unwrapped as { plans?: unknown })?.plans)
      ? (unwrapped as { plans: unknown[] }).plans
      : null;

  if (!list) return [...FALLBACK_PLANS];

  const byCode = new Map<PlanCode, NormalizedPlan>();
  for (const item of list) {
    const itemCode = normalizeCode(asRecord(item)?.tier || asRecord(item)?.code);
    const fallback = FALLBACK_PLANS.find((p) => p.code === itemCode);
    const plan = normalizePlan(item, fallback);
    if (plan) byCode.set(plan.code, plan);
  }

  return PLAN_ORDER.map((code) => byCode.get(code) || FALLBACK_PLANS.find((p) => p.code === code)!);
}

export function mergePlan(base: NormalizedPlan, detail: NormalizedPlan | null): NormalizedPlan {
  if (!detail) return base;
  return { ...base, ...detail, features: detail.features.length ? detail.features : base.features };
}

export async function fetchPublicPlans(): Promise<{ plans: NormalizedPlan[]; fromApi: boolean }> {
  try {
    const res = await fetch("/api/plans");
    if (!res.ok) throw new Error(`Plans API ${res.status}`);
    const listPayload = await res.json();
    let plans = normalizePlansList(listPayload);

    if (plans.every((p, i) => p.monthlyPrice === FALLBACK_PLANS[i]?.monthlyPrice && listPayload?.success)) {
      // List may be sparse — enrich each tier from detail endpoint
    }

    const enriched = await Promise.all(
      PLAN_ORDER.map(async (code) => {
        const base = plans.find((p) => p.code === code) || FALLBACK_PLANS.find((p) => p.code === code)!;
        try {
          const detailRes = await fetch(`/api/plans/${code}`);
          if (!detailRes.ok) return base;
          const detailPayload = await detailRes.json();
          const detail = normalizePlan(unwrapApiPayload(detailPayload), base);
          return mergePlan(base, detail);
        } catch {
          return base;
        }
      })
    );

    return { plans: enriched, fromApi: true };
  } catch {
    return { plans: [...FALLBACK_PLANS], fromApi: false };
  }
}

export function formatPlanLimit(value: number | null): string {
  if (value === null) return "Unlimited";
  return `Up to ${value}`;
}

export function formatAiOps(value: number | null): string {
  if (value === null) return "Unlimited";
  return `${value} ops / month`;
}

export function recommendPlanCode(
  properties: number,
  cleaners: number,
  plans: NormalizedPlan[]
): PlanCode {
  const ordered = [...plans].sort((a, b) => PLAN_ORDER.indexOf(a.code) - PLAN_ORDER.indexOf(b.code));
  for (const plan of ordered) {
    const propsOk = plan.maxProperties === null || properties <= plan.maxProperties;
    const cleanersOk = plan.maxCleaners === null || cleaners <= plan.maxCleaners;
    if (propsOk && cleanersOk) return plan.code;
  }
  return "PREMIUM";
}
