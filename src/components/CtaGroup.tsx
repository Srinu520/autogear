import { buildWhatsappHref, buildWhatsappMessage, business, mapHref } from "@/lib/siteData";
import { ButtonLink } from "./ButtonLink";

type CtaGroupProps = {
  className?: string;
  compact?: boolean;
  showNotes?: boolean;
  whatsappSource?: string;
  whatsappCategory?: string;
  whatsappService?: string;
};

export function CtaGroup({
  className = "",
  compact = false,
  showNotes = false,
  whatsappSource = "General inquiry",
  whatsappCategory,
  whatsappService,
}: CtaGroupProps) {
  const callDisabled = business.phoneDisplay === "Needs confirmation";
  const whatsappDisabled = business.whatsappDisplay === "Needs confirmation";
  const whatsappHref = buildWhatsappHref(
    buildWhatsappMessage({
      source: whatsappSource,
      category: whatsappCategory,
      service: whatsappService,
    })
  );

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${compact ? "text-sm" : ""} ${className}`}
    >
      <ButtonLink
        href={business.phoneHref}
        variant="primary"
        disabled={callDisabled}
        note={showNotes && callDisabled ? "Needs confirmation" : undefined}
      >
        Call Now
      </ButtonLink>
      <ButtonLink
        href={whatsappHref}
        variant="secondary"
        disabled={whatsappDisabled}
        note={showNotes && whatsappDisabled ? "Needs confirmation" : undefined}
      >
        WhatsApp for Quote
      </ButtonLink>
      <ButtonLink href={mapHref} variant="ghost">
        Get Directions
      </ButtonLink>
    </div>
  );
}
