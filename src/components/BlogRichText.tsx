import React from "react";
import Link from "next/link";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders blog paragraph text with markdown-style [label](/path) internal links. */
export function BlogRichText({ text, className }: { text: string; className?: string }) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(LINK_RE.source, "g");

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    const href = match[2];
    const isInternal = href.startsWith("/");
    if (isInternal) {
      nodes.push(
        <Link
          key={`${href}-${match.index}`}
          href={href}
          className="text-brand-amber font-semibold underline underline-offset-2 decoration-brand-amber/40 hover:decoration-brand-amber"
        >
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a
          key={`${href}-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-amber font-semibold underline underline-offset-2 decoration-brand-amber/40 hover:decoration-brand-amber"
        >
          {label}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <p className={className}>{nodes.length ? nodes : text}</p>;
}
