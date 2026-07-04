import { NextResponse } from "next/server";

const TIDYFLOW_API_URL = (process.env.TIDYFLOW_API_URL || "https://api.tidyflowapp.com").replace(
  /\/$/,
  ""
);

export async function GET() {
  try {
    const upstream = await fetch(`${TIDYFLOW_API_URL}/api/public/plans`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 300 },
    });
    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      return NextResponse.json(
        {
          error: `Failed to load plans (${upstream.status})`,
          detail: text.slice(0, 200) || undefined,
        },
        { status: upstream.status }
      );
    }
    const data = await upstream.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Plans list proxy error:", error);
    return NextResponse.json(
      { error: error.message || "Could not reach TidyFlow plans API." },
      { status: 502 }
    );
  }
}
