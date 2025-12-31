"use client";

import { useEffect, useMemo, useState } from "react";
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
      <div className="filter-chips">
        {galleryFilters.map((filter) => (
          <button
            key={filter}
            className={`filter-chip ${activeFilter === filter ? "is-active" : ""}`}
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
      <div className="masonry">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="gallery-item"
            role="button"
            tabIndex={0}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={(event) => event.key === "Enter" && setSelectedIndex(index)}
          >
            <div className="gallery-item__media">
              <span>{item.category}</span>
            </div>
            <div className="gallery-item__caption">{item.title}</div>
          </div>
        ))}
      </div>

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
