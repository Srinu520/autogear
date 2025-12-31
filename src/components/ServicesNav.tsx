"use client";

import Link from "next/link";
import { useScrollSpy } from "@/hooks/useScrollSpy";

type ServicesNavProps = {
  sections: { id: string; title: string }[];
};

export function ServicesNav({ sections }: ServicesNavProps) {
  const activeId = useScrollSpy(sections.map((section) => section.id));

  return (
    <nav
      className="sticky top-24 hidden max-h-[70vh] flex-col gap-2 rounded-2xl border border-white/10 bg-neutral-950/70 p-4 text-sm text-gray-300 md:flex"
      aria-label="Services categories"
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className={`rounded-full px-4 py-2 transition ${
            activeId === section.id
              ? "bg-sky-500/20 text-sky-200"
              : "hover:text-white"
          }`}
        >
          {section.title}
        </Link>
      ))}
    </nav>
  );
}

