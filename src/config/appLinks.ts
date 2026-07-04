/** Mobile app store links — set NEXT_PUBLIC_IOS_APP_URL / NEXT_PUBLIC_ANDROID_APP_URL in .env */
export const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL || "https://apps.apple.com/app/tidyflow";
export const ANDROID_APP_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.tidyflow.app";
