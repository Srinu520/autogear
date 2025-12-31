"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { business, navLinks } from "@/lib/siteData";
import { Stars } from "./Stars";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const activePath = useMemo(() => pathname ?? "/", [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [activePath]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-500/20 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex flex-col gap-1">
          <span className="font-heading text-lg font-semibold text-white">
            {business.name}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Dommasandra, Bengaluru
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-300 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative transition hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-sky-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-neutral-950/60 px-4 py-2 text-xs text-gray-300 md:flex">
          <Stars />
          <span>
            {business.rating} star ({business.reviewCount} reviews)
          </span>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-neutral-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-200 transition hover:border-sky-500/40 hover:text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className="flex flex-col gap-1">
            <span className="h-0.5 w-4 rounded-full bg-gray-200" />
            <span className="h-0.5 w-6 rounded-full bg-gray-200" />
            <span className="h-0.5 w-5 rounded-full bg-gray-200" />
          </span>
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="mx-auto mt-20 w-[92%] max-w-sm rounded-2xl border border-white/10 bg-slate-950/95 p-6"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              id="mobile-nav"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Navigate
              </p>
              <nav className="mt-4 flex flex-col gap-2 text-sm font-semibold text-gray-200">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl border border-white/10 px-4 py-3 transition ${
                      activePath === link.href
                        ? "border-sky-500/50 text-sky-200"
                        : "hover:border-sky-500/30 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}


