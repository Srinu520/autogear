"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <button
      className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950/60 px-4 py-2 text-sm font-semibold text-gray-200 transition hover:border-sky-500/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
      type="button"
      onClick={handleCopy}
    >
      {label}
      <AnimatePresence>
        {copied ? (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute -top-8 right-0 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white shadow-lg"
          >
            Copied!
          </motion.span>
        ) : null}
      </AnimatePresence>
    </button>
  );
}

