"use client";

import React, { useEffect } from "react";
import { LOGIN_URL, NAV_AUTH_SCRIPT_URL } from "../config/appLinks";

const SCRIPT_ID = "tf-nav-auth-script";

type AuthLoginLinkProps = {
  loginLabel: string;
  dashboardLabel?: string;
  className?: string;
};

/**
 * Session-aware Login / Dashboard control.
 * Loads https://app.tidyflowapp.com/embed/nav-auth.js against #tf-login.
 */
export default function AuthLoginLink({
  loginLabel,
  dashboardLabel = "Go to dashboard",
  className = "",
}: AuthLoginLinkProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = NAV_AUTH_SCRIPT_URL;
      script.async = true;
      script.dataset.selector = "#tf-login";
      script.dataset.loginLabel = loginLabel;
      script.dataset.dashboardLabel = dashboardLabel;
      document.body.appendChild(script);
    } else {
      script.dataset.loginLabel = loginLabel;
      script.dataset.dashboardLabel = dashboardLabel;
      const w = window as Window & { TidyFlowNavAuth?: { refresh?: () => void } };
      w.TidyFlowNavAuth?.refresh?.();
    }
  }, [loginLabel, dashboardLabel]);

  return (
    <a id="tf-login" href={LOGIN_URL} className={className}>
      {loginLabel}
    </a>
  );
}
