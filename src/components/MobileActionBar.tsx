import { business, mapHref } from "@/lib/siteData";

export function MobileActionBar() {
  const callDisabled = business.phoneDisplay === "Needs confirmation";
  const whatsappDisabled = business.whatsappDisplay === "Needs confirmation";

  return (
    <div className="mobile-bar">
      <a
        href={callDisabled ? "#" : business.phoneHref}
        className={`mobile-bar__item ${callDisabled ? "is-disabled" : ""}`}
        aria-disabled={callDisabled}
      >
        Call
      </a>
      <a
        href={whatsappDisabled ? "#" : business.whatsappHref}
        className={`mobile-bar__item ${whatsappDisabled ? "is-disabled" : ""}`}
        aria-disabled={whatsappDisabled}
      >
        WhatsApp
      </a>
      <a href={mapHref} className="mobile-bar__item">
        Directions
      </a>
    </div>
  );
}
