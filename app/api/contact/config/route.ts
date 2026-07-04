import { NextResponse } from "next/server";
import { isBrevoConfigured } from "@/src/lib/brevo";

export async function GET() {
  return NextResponse.json({
    configured: isBrevoConfigured(),
    provider: "brevo",
  });
}
