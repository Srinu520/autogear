import Link from "next/link";
import { business, navLinks } from "@/lib/siteData";
import { Stars } from "./Stars";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span className="brand__name">{business.name}</span>
          <span className="brand__meta">Dommasandra, Bengaluru</span>
        </Link>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav__link">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="rating-pill" aria-label="Rating 4.7 star">
          <Stars />
          <span className="rating-pill__text">
            {business.rating} star ({business.reviewCount} reviews)
          </span>
        </div>
      </div>
    </header>
  );
}
