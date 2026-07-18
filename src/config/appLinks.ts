/** Mobile app store links — set NEXT_PUBLIC_IOS_APP_URL / NEXT_PUBLIC_ANDROID_APP_URL in .env */
export const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL || "https://apps.apple.com/app/tidyflow";
export const ANDROID_APP_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.tidyflow.app";

/** App subscription checkout (marketing Pricing page CTAs) */
export const SUBSCRIBE_BASE_URL =
  process.env.NEXT_PUBLIC_SUBSCRIBE_URL || "https://app.tidyflowapp.com/subscribe";

export type SubscribePlanSlug = "startup" | "standard" | "premium";

export function subscribeUrlForPlan(planCode?: string | null): string {
  const code = (planCode || "").toUpperCase();
  if (code === "STARTUP") return `${SUBSCRIBE_BASE_URL}/startup`;
  if (code === "STANDARD") return `${SUBSCRIBE_BASE_URL}/standard`;
  if (code === "PREMIUM") return `${SUBSCRIBE_BASE_URL}/premium`;
  return SUBSCRIBE_BASE_URL;
}
