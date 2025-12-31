"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  galleryFilters,
  galleryItems,
  beforeAfterShowcase,
  business,
} from "@/lib/siteData";
import { ButtonLink } from "@/components/ButtonLink";

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

  const BeforeAfterCard = ({ title }: { title: string }) => {
    const [value, setValue] = useState(50);
    return (
      <div className="before-after">
        <h3>{title}</h3>
        <div
          className="before-after__media"
          style={{ ["--slider" as string]: `${value}%` }}
        >
          <div className="before-after__before">Before</div>
          <div className="before-after__after">After</div>
        </div>
        <input
          type="range"
          min="10"
          max="90"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          aria-label={`${title} before and after slider`}
        />
      </div>
    );
  };

  return (
    <>
      <section className="section section--hero">
        <div className="container stack">
          <h1 className="hero__title">Our Work</h1>
          <p className="hero__subtitle">
            Clean fitting, neat finishing, and quality checks.
          </p>
          <div className="filter-chips">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                className={`filter-chip ${
                  activeFilter === filter ? "is-active" : ""
                }`}
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
        </div>
      </section>

      <section className="section">
        <div className="container masonry">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) =>
                event.key === "Enter" && setSelectedIndex(index)
              }
            >
              <div className="gallery-item__media">
                <span>{item.category}</span>
              </div>
              <div className="gallery-item__caption">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack">
          <h2 className="section-title">Before and after highlights</h2>
          <div className="grid grid-3">
            {beforeAfterShowcase.map((item) => (
              <BeforeAfterCard key={item.title} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack">
          <div className="card">
            <h2>Share your car model to get suggestions</h2>
            <p className="muted">
              Honest recommendations based on what is required for your vehicle.
            </p>
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
      </section>

      {selectedItem ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="lightbox__card"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) =>
              handleTouchStart(event.touches[0].clientX)
            }
            onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
          >
            <div className="lightbox__media">{selectedItem.title}</div>
            <p className="muted">{selectedItem.category}</p>
            <div className="lightbox__actions">
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => setSelectedIndex(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
