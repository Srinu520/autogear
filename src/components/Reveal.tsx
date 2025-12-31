"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  hover = false,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow: "0 20px 60px rgba(56, 189, 248, 0.15)",
            }
          : undefined
      }
      whileTap={hover ? { scale: 0.99 } : undefined}
    >
      {children}
    </motion.div>
  );
}
