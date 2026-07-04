import { NextResponse } from "next/server";

const TIDYFLOW_API_URL = (process.env.TIDYFLOW_API_URL || "https://api.tidyflowapp.com").replace(
  /\/$/,
  ""
);

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code: raw } = await params;
    const code = String(raw || "").toUpperCase();
    const upstream = await fetch(
      `${TIDYFLOW_API_URL}/api/public/plans/${encodeURIComponent(code)}`,
      {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(8000),
        next: { revalidate: 300 },
      }
    );
    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      return NextResponse.json(
        {
          error: `Failed to load plan ${code} (${upstream.status})`,
          detail: text.slice(0, 200) || undefined,
        },
        { status: upstream.status }
      );
    }
    const data = await upstream.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Plan detail proxy error:", error);
    return NextResponse.json(
      { error: error.message || "Could not reach TidyFlow plans API." },
      { status: 502 }
    );
  }
}
