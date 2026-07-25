"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/**
 * Module-level promise so the script is injected once and every widget instance
 * (including ones mounted after client-side navigation) awaits the same load.
 * This fixes the bug where the widget only appeared after a hard refresh:
 * next/script's onLoad fires only on the first document load, so widgets mounted
 * via SPA navigation never learned the script was ready.
 */
let turnstileLoader: Promise<void> | null = null;

function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (turnstileLoader) return turnstileLoader;

  turnstileLoader = new Promise<void>((resolve) => {
    const finish = () => resolve();

    // Script tag may already exist (e.g. injected by a previous page's widget).
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://challenges.cloudflare.com/turnstile/"]'
    );

    // Poll as a safety net: covers the case where the tag exists and has already
    // executed (load event long gone) between our check and listener attach.
    const poll = window.setInterval(() => {
      if (window.turnstile) {
        window.clearInterval(poll);
        finish();
      }
    }, 100);

    const attach = (el: HTMLScriptElement) => {
      el.addEventListener("load", () => {
        window.clearInterval(poll);
        finish();
      });
      el.addEventListener("error", () => {
        window.clearInterval(poll);
        turnstileLoader = null; // allow retry on next mount
        finish();
      });
    };

    if (existing) {
      attach(existing);
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    attach(script);
    document.head.appendChild(script);
  });

  return turnstileLoader;
}

interface TurnstileWidgetProps {
  siteKey: string;
  onToken: (token: string | null) => void;
}

export default function TurnstileWidget({ siteKey, onToken }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useEffect(() => {
    let cancelled = false;

    loadTurnstile().then(() => {
      if (cancelled || !window.turnstile || !containerRef.current || widgetIdRef.current) return;

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: "dark",
        callback: (token) => onTokenRef.current(token),
        "expired-callback": () => onTokenRef.current(null),
        "error-callback": () => onTokenRef.current(null),
      });
    });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // widget may already be gone if the container unmounted first
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey]);

  return (
    <div ref={containerRef} className="flex justify-center min-h-[65px]" aria-label="Security check" />
  );
}

/** Reset widget after a failed submission (call from parent via ref pattern). */
export function resetTurnstileWidget(widgetId: string | null) {
  if (widgetId && window.turnstile) {
    window.turnstile.reset(widgetId);
  }
}
