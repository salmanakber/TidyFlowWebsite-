import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    port: Number(process.env.PORT || 3050),
    env: process.env.NODE_ENV || "development",
    uptime: Math.floor(process.uptime()),
  });
}
