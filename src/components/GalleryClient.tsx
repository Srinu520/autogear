"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  galleryFilters,
  galleryItems,
  beforeAfterShowcase,
  business,
} from "@/lib/siteData";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";

export function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (!activeFilter) return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeFilter]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleNext, handlePrev, selectedIndex]);

  const handleTouchStart = (value: number) => setTouchStart(value);
  const handleTouchEnd = (value: number) => {
    if (touchStart === null) return;
    const delta = touchStart - value;
    if (Math.abs(delta) > 40) {
      if (delta > 0) handleNext();
      if (delta < 0) handlePrev();
    }
    setTouchStart(null);
  };

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const BeforeAfterCard = ({
    title,
    beforeImage,
    afterImage,
  }: {
    title: string;
    beforeImage: string;
    afterImage: string;
  }) => {
    const [value, setValue] = useState(50);
    return (
      <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
        <h3 className="font-heading text-lg text-white">{title}</h3>
        <div className="relative mt-4 h-48 overflow-hidden rounded-xl border border-white/5 bg-neutral-900">
          <Image
            src={beforeImage}
            alt={`${title} before placeholder`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div
            className="absolute inset-0 border-l border-sky-500/60"
            style={{ clipPath: `inset(0 0 0 ${value}%)` }}
          >
            <Image
              src={afterImage}
              alt={`${title} after placeholder`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
          <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gray-300">
            Before
          </div>
          <div className="absolute right-3 top-3 rounded-full border border-sky-500/60 bg-slate-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-sky-200">
            After
          </div>
        </div>
        <input
          type="range"
          min="10"
          max="90"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          aria-label={`${title} before and after slider`}
          className="mt-4 w-full"
        />
      </div>
    );
  };

  return (
    <>
      <section className="border-b border-sky-500/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Gallery
              </p>
              <h1 className="font-heading text-4xl text-white md:text-5xl text-shadow-accent">
                Our Work
              </h1>
              <p className="max-w-2xl text-gray-400">
                Clean fitting, neat finishing, and quality checks.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2">
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
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/60"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) =>
                event.key === "Enter" && setSelectedIndex(index)
              }
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={`${item.title} placeholder`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
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
      </section>

      <section className="border-y border-sky-500/20 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-heading text-3xl text-white">
              Before and after highlights
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {beforeAfterShowcase.map((item) => (
              <Reveal key={item.title} hover>
                <BeforeAfterCard
                  title={item.title}
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="rounded-2xl border border-sky-500/30 bg-neutral-950/70 p-8">
              <h2 className="font-heading text-2xl text-white">
                Share your car model to get suggestions
              </h2>
              <p className="mt-3 text-gray-400">
                Honest recommendations based on what is required for your vehicle.
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={business.whatsappHref}
                  variant="secondary"
                  disabled={business.whatsappDisplay === "Needs confirmation"}
                  note={
                    business.whatsappDisplay === "Needs confirmation"
                      ? "Needs confirmation"
                      : undefined
                  }
                >
                  WhatsApp for Quote
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
              className="w-full max-w-2xl rounded-2xl border border-white/10 bg-neutral-950/90 p-6"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={(event) =>
                handleTouchStart(event.touches[0].clientX)
              }
              onTouchEnd={(event) =>
                handleTouchEnd(event.changedTouches[0].clientX)
              }
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
            >
              <div className="relative h-72 overflow-hidden rounded-xl border border-sky-500/30">
                <Image
                  src={selectedItem.image}
                  alt={`${selectedItem.title} placeholder`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-200">
                {selectedItem.title}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-500">
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



