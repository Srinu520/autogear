"use client";

import Link from "next/link";
import { useScrollSpy } from "@/hooks/useScrollSpy";

type ServicesNavProps = {
  sections: { id: string; title: string }[];
};

export function ServicesNav({ sections }: ServicesNavProps) {
  const activeId = useScrollSpy(sections.map((section) => section.id));

  return (
    <nav className="anchor-nav" aria-label="Services categories">
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className={`anchor-link ${activeId === section.id ? "is-active" : ""}`}
        >
          {section.title}
        </Link>
      ))}
    </nav>
  );
}
