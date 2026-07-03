import React from "react";
import logoSrc from "../../assets/logo.png";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 40, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <img
        src={logoSrc}
        alt="TidyFlow"
        width={size}
        height={size}
        className="shrink-0 rounded-2xl transition-transform hover:scale-105 duration-200 object-cover"
        style={{ width: size, height: size }}
      />

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Tidy<span className="text-brand-amber">Flow</span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-medium mt-0.5">
            Operations Hub
          </span>
        </div>
      )}
    </div>
  );
}
