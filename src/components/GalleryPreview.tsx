"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { galleryFilters, galleryItems } from "@/lib/siteData";

export function GalleryPreview() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (!activeFilter) return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeFilter]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIndex]);

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {galleryFilters.map((filter) => (
          <button
            key={filter}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              activeFilter === filter
                ? "border-sky-500/70 text-sky-200"
                : "border-white/10 text-gray-400 hover:border-sky-500/40 hover:text-gray-200"
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60`}
            onClick={() =>
              setActiveFilter(activeFilter === filter ? null : filter)
            }
            type="button"
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/60"
            role="button"
            tabIndex={0}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={(event) => event.key === "Enter" && setSelectedIndex(index)}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="relative h-44">
              <Image
                src={item.image}
                alt={`${item.title} placeholder`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-sky-500/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                {item.category}
              </div>
            </div>
            <div className="border-t border-white/5 px-6 py-4 text-sm font-semibold text-gray-200 transition group-hover:text-white">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 px-6"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-xl rounded-2xl border border-white/10 bg-neutral-950/90 p-6"
              onClick={(event) => event.stopPropagation()}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              <div className="relative h-64 overflow-hidden rounded-xl border border-sky-500/30">
                <Image
                  src={selectedItem.image}
                  alt={`${selectedItem.title} placeholder`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 720px"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-200">
                {selectedItem.title}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-500">
                {selectedItem.category}
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-200 hover:border-sky-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                  onClick={() => setSelectedIndex(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}


