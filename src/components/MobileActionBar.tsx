import { business, mapHref } from "@/lib/siteData";

export function MobileActionBar() {
  const callDisabled = business.phoneDisplay === "Needs confirmation";
  const whatsappDisabled = business.whatsappDisplay === "Needs confirmation";

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
        href={whatsappDisabled ? "#" : business.whatsappHref}
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


