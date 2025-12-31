import Link from "next/link";
import { business, navLinks } from "@/lib/siteData";
import { Stars } from "./Stars";

export function SiteHeader() {
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
      </div>
    </header>
  );
}


