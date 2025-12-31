import Link from "next/link";
import { business, navLinks } from "@/lib/siteData";

export function SiteFooter() {
  return (
    <footer className="border-t border-sky-500/20 bg-slate-950/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="font-heading text-lg text-white">{business.name}</h3>
          <p className="text-sm text-gray-400">{business.category}</p>
          <p className="text-sm text-gray-400">{business.address}</p>
          <p className="text-sm text-gray-400">Open {business.hours}</p>
          <p className="text-sm text-gray-400">Phone: {business.phoneDisplay}</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Quick links
          </h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Social
          </h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            {business.socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="hover:text-white">
                {social.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500">Social links need confirmation.</p>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-gray-500">
        Local NAP consistent across site. All rights reserved.
      </div>
    </footer>
  );
}


