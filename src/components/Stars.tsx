"use client";

import { motion } from "framer-motion";

type StarsProps = {
  ratingText?: string;
};

export function Stars({ ratingText = "4.7 star" }: StarsProps) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${ratingText}`}>
      {[...Array(5)].map((_, index) => (
        <motion.span
          key={`star-${index}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 * index, duration: 0.4 }}
          aria-hidden="true"
          className="block h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]"
        >
        </motion.span>
      ))}
    </div>
  );
}

