/** Mobile app store links — set VITE_IOS_APP_URL / VITE_ANDROID_APP_URL in .env */
export const IOS_APP_URL =
  import.meta.env.VITE_IOS_APP_URL || "https://apps.apple.com/app/tidyflow";
export const ANDROID_APP_URL =
  import.meta.env.VITE_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.tidyflow.app";
