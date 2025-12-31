import { business } from "@/lib/siteData";

export function OpenNowBadge() {
  return (
    <div className="open-now" aria-live="polite">
      <span className="open-now__dot" />
      <div className="open-now__text">
        <span className="open-now__status">{business.openStatus}</span>
        <span className="open-now__hours">Open {business.hours}</span>
      </div>
    </div>
  );
}
