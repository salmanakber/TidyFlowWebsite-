import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 40, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img
        src="/logo.png"
        alt="TidyFlow cleaning operations software"
        width={size}
        height={size}
        className="shrink-0 rounded-xl transition-transform hover:scale-105 duration-200 object-cover"
        style={{ width: size, height: size }}
        decoding="async"
      />

      {showText && (
        <div className="flex flex-col leading-none min-w-0">
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white">
            Tidy<span className="text-brand-amber">Flow</span>
          </span>
          <span className="hidden sm:block font-mono text-[9px] uppercase tracking-widest text-slate-400 font-medium mt-0.5">
            Operations Hub
          </span>
        </div>
      )}
    </div>
  );
}
