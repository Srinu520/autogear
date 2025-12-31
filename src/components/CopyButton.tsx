"use client";

import { useState } from "react";

type CopyButtonProps = {
  text: string;
  label?: string;
};

export function CopyButton({ text, label = "Copy address" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button className="copy-button" type="button" onClick={handleCopy}>
      {label}
      <span className={`copy-toast ${copied ? "copy-toast--visible" : ""}`}>
        Copied!
      </span>
    </button>
  );
}
