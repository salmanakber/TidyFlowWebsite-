import React from "react";

function formatInline(text: string, keyPrefix: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${keyPrefix}-t-${i}`}>{part}</span>;
  });
}

interface BotMessageContentProps {
  text: string;
  variant?: "bot" | "user";
}

/**
 * Renders TidyBot replies with light markdown: **bold**, bullets, numbered lists, emojis.
 */
export default function BotMessageContent({ text, variant = "bot" }: BotMessageContentProps) {
  const lines = text.split("\n");
  const boldClass = variant === "user" ? "font-bold text-slate-950" : "font-semibold text-white";

  return (
    <div className="space-y-1.5 text-sm sm:text-xs leading-relaxed">
      {lines.map((line, index) => {
        const trimmed = line.trimEnd();
        if (!trimmed) {
          return <div key={index} className="h-0.5" aria-hidden />;
        }

        const bulletMatch = trimmed.match(/^[-•*]\s+(.+)/);
        if (bulletMatch) {
          return (
            <div key={index} className="flex gap-2 items-start pl-0.5">
              <span className="text-brand-amber shrink-0 mt-0.5" aria-hidden>
                •
              </span>
              <span className="flex-1">
                {formatInline(bulletMatch[1], `l${index}`).map((node, i) =>
                  React.isValidElement(node) && node.type === "strong"
                    ? React.cloneElement(node as React.ReactElement<{ className?: string }>, {
                        key: `bl-${index}-${i}`,
                        className: boldClass
                      })
                    : node
                )}
              </span>
            </div>
          );
        }

        const numberedMatch = trimmed.match(/^(\d+)[.)]\s+(.+)/);
        if (numberedMatch) {
          return (
            <div key={index} className="flex gap-2 items-start pl-0.5">
              <span className="text-brand-amber font-mono text-[10px] shrink-0 mt-0.5">{numberedMatch[1]}.</span>
              <span className="flex-1">{formatInline(numberedMatch[2], `n${index}`)}</span>
            </div>
          );
        }

        return (
          <p key={index} className="m-0">
            {formatInline(trimmed, `p${index}`).map((node, i) =>
              React.isValidElement(node) && node.type === "strong"
                ? React.cloneElement(node as React.ReactElement<{ className?: string }>, {
                    key: `pl-${index}-${i}`,
                    className: boldClass
                  })
                : node
            )}
          </p>
        );
      })}
    </div>
  );
}
