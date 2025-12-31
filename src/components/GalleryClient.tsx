"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  buildWhatsappHref,
  buildWhatsappMessage,
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
  const heroItem = galleryItems[0];
  const previewItems = galleryItems.slice(1, 3);
  const stats = [
    {
      label: "Rating",
      value: `${business.rating} star (${business.reviewCount} reviews)`,
    },
    {
      label: "Installation",
      value: "Clean fitting and neat finishing.",
    },
    {
      label: "Interior",
      value: "Same-day interior work when feasible.",
    },
    {
      label: "Repairs",
      value: "Electrical and system repairs.",
    },
  ];
  const tileHeights = ["h-44", "h-52", "h-60", "h-48"];

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
      <div className="outline-card rounded-2xl border border-white/10 p-5">
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
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-500">
          Drag to compare
        </p>
      </div>
    );
  };

  return (
    <>
      <section className="border-b border-sky-500/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <Reveal>
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Gallery
                  </p>
                  <h1 className="font-heading text-4xl text-white md:text-5xl text-shadow-accent">
                    Our Work
                  </h1>
                  <p className="line-accent max-w-2xl text-gray-400">
                    Clean fitting, neat finishing, and quality checks.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="outline-card rounded-2xl border border-white/10 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-sm text-gray-200">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal className="outline-card rounded-3xl border border-sky-500/20 p-5">
              <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={heroItem.image}
                  alt={`${heroItem.title} placeholder`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-sky-500/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                  {heroItem.category}
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {previewItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative h-24 overflow-hidden rounded-xl border border-white/10"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} placeholder`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gray-300">
                      {item.category}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-500">
                Tap any tile to open the lightbox
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="outline-card flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
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
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500">
                <span>Showing {filteredItems.length} items</span>
                <span className="rounded-full border border-sky-500/40 px-3 py-1 text-sky-200">
                  {activeFilter ?? "All"}
                </span>
                {activeFilter ? (
                  <button
                    type="button"
                    className="rounded-full border border-white/10 px-3 py-1 text-gray-300 transition hover:border-sky-500/40 hover:text-white"
                    onClick={() => setActiveFilter(null)}
                  >
                    Clear
                  </button>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-6xl px-6">
          {filteredItems.length === 0 ? (
            <div className="outline-card rounded-2xl border border-white/10 p-6 text-gray-300">
              No gallery items for this filter yet. Try another category.
            </div>
          ) : (
            <div className="columns-1 gap-4 [column-fill:_balance] md:columns-2 lg:columns-3">
              {filteredItems.map((item, index) => {
                const heightClass = tileHeights[index % tileHeights.length];
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    className="group mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/60 text-left transition hover:border-sky-500/40"
                    onClick={() => setSelectedIndex(index)}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    aria-label={`Open ${item.title}`}
                  >
                    <div className={`relative ${heightClass}`}>
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
                    <div className="border-t border-white/5 px-5 py-4">
                      <p className="text-sm font-semibold text-gray-200 transition group-hover:text-white">
                        {item.title}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-sky-500/20 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
            <Reveal>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  Before and After
                </p>
                <h2 className="font-heading text-3xl text-white">
                  Before and after highlights
                </h2>
                <p className="text-gray-400">
                  Slide to compare installations and interior upgrades.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                    <span>Infotainment installs with clean fitment.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                    <span>Interior combo upgrades and neat finishing.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                    <span>Lighting upgrades with alignment checks.</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
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
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="outline-card rounded-3xl border border-sky-500/30 p-8">
              <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <h2 className="font-heading text-2xl text-white">
                    Share your car model to get suggestions
                  </h2>
                  <p className="mt-3 text-gray-400">
                    Honest recommendations based on what is required for your vehicle.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <ButtonLink
                    href={buildWhatsappHref(
                      buildWhatsappMessage({
                        source: "Gallery page CTA",
                        category: "Gallery",
                        service: "Work gallery inquiry",
                      })
                    )}
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
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Include: car model, desired upgrade, and budget range.
                  </p>
                </div>
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



