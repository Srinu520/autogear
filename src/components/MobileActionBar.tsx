"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  buildWhatsappHref,
  buildWhatsappMessage,
  business,
  mapHref,
} from "@/lib/siteData";

export function MobileActionBar() {
  const callDisabled = business.phoneDisplay === "Needs confirmation";
  const whatsappDisabled = business.whatsappDisplay === "Needs confirmation";
  const pathname = usePathname();
  const pageLabel = useMemo(() => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/services":
        return "Services";
      case "/gallery":
        return "Gallery";
      case "/reviews":
        return "Reviews";
      case "/contact":
        return "Contact";
      default:
        return "Site";
    }
  }, [pathname]);
  const whatsappHref = buildWhatsappHref(
    buildWhatsappMessage({
      source: `Mobile action bar (${pageLabel})`,
    })
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-sky-500/20 bg-slate-950/90 py-3 text-xs font-semibold text-gray-200 md:hidden">
      <a
        href={callDisabled ? "#" : business.phoneHref}
        className={`transition ${
          callDisabled ? "pointer-events-none opacity-40" : "hover:text-white"
        }`}
        aria-disabled={callDisabled}
      >
        Call
      </a>
      <a
        href={whatsappDisabled ? "#" : whatsappHref}
        className={`transition ${
          whatsappDisabled ? "pointer-events-none opacity-40" : "hover:text-white"
        }`}
        aria-disabled={whatsappDisabled}
      >
        WhatsApp
      </a>
      <a href={mapHref} className="transition hover:text-white">
        Directions
      </a>
    </div>
  );
}


