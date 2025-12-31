import { business, mapHref } from "@/lib/siteData";
import { ButtonLink } from "./ButtonLink";

type CtaGroupProps = {
  className?: string;
  compact?: boolean;
  showNotes?: boolean;
};

export function CtaGroup({
  className = "",
  compact = false,
  showNotes = false,
}: CtaGroupProps) {
  const callDisabled = business.phoneDisplay === "Needs confirmation";
  const whatsappDisabled = business.whatsappDisplay === "Needs confirmation";

  return (
    <div className={`cta-group ${compact ? "cta-group--compact" : ""} ${className}`}>
      <ButtonLink
        href={business.phoneHref}
        variant="primary"
        disabled={callDisabled}
        note={showNotes && callDisabled ? "Needs confirmation" : undefined}
      >
        Call Now
      </ButtonLink>
      <ButtonLink
        href={business.whatsappHref}
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
