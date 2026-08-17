import { NextResponse } from "next/server";
import { fetchPublicPlansUpstream } from "@/src/lib/plansUpstream";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code: raw } = await params;
    const code = String(raw || "").toUpperCase();
    const { data, from } = await fetchPublicPlansUpstream(`/api/public/plans/${encodeURIComponent(code)}`);
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, no-cache, max-age=0, must-revalidate",
        Pragma: "no-cache",
        "X-TidyFlow-Plans-From": from,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Could not reach TidyFlow plans API.";
    console.error("Plan detail proxy error:", error);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
