import { business, faqs, mapHref } from "@/lib/siteData";
import { CtaGroup } from "@/components/CtaGroup";
import { ButtonLink } from "@/components/ButtonLink";
import { CopyButton } from "@/components/CopyButton";

export const metadata = {
  title: "Contact and Location",
  description: "Contact and visit the auto accessories store in Dommasandra.",
};

export default function ContactPage() {
  const callDisabled = business.phoneDisplay === "Needs confirmation";
  const whatsappDisabled = business.whatsappDisplay === "Needs confirmation";

  return (
    <>
      <section className="section section--hero">
        <div className="container stack">
          <h1 className="hero__title">Contact & Visit</h1>
          <p className="hero__subtitle">We're open {business.hours}.</p>
          <CtaGroup showNotes />
        </div>
      </section>

      <section className="section">
        <div className="container location-card">
          <div className="stack">
            <h2 className="section-title">Map and address</h2>
            <p className="section-lead">{business.address}</p>
            <CopyButton text={business.address} />
            <p className="muted">Parking: Needs confirmation</p>
            <a className="btn btn--secondary" href={mapHref}>
              Get Directions
            </a>
          </div>
          <iframe
            className="map-embed"
            title="Map preview"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              business.address
            )}&output=embed`}
            loading="lazy"
          />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack">
          <h2 className="section-title">Hours</h2>
          <div className="card">
            <p>Open {business.hours}.</p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack">
          <h2 className="section-title">Contact options</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Call</h3>
              <p className="muted">Phone: {business.phoneDisplay}</p>
              <ButtonLink
                href={business.phoneHref}
                variant="primary"
                disabled={callDisabled}
                note={callDisabled ? "Needs confirmation" : undefined}
              >
                Call Now
              </ButtonLink>
            </div>
            <div className="card">
              <h3>WhatsApp</h3>
              <p className="muted">WhatsApp: {business.whatsappDisplay}</p>
              <ButtonLink
                href={business.whatsappHref}
                variant="secondary"
                disabled={whatsappDisabled}
                note={whatsappDisabled ? "Needs confirmation" : undefined}
              >
                WhatsApp for Quote
              </ButtonLink>
            </div>
          </div>
          <div className="card">
            <h3>Contact form</h3>
            <form className="form">
              <label className="form__field">
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label className="form__field">
                Phone
                <input type="tel" placeholder="Phone number" />
              </label>
              <label className="form__field">
                Car model
                <input type="text" placeholder="Car model" />
              </label>
              <label className="form__field">
                Service need
                <input type="text" placeholder="Infotainment, interior, lighting" />
              </label>
              <label className="form__field">
                Message
                <textarea placeholder="Tell us what you need" rows={4} />
              </label>
              <button
                className="btn btn--primary btn--disabled"
                type="submit"
                disabled
              >
                Submit (Needs confirmation)
              </button>
              <p className="muted">
                Form submission method needs confirmation.
              </p>
              <p className="muted">Email for form submissions: Needs confirmation.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <h2 className="section-title">FAQ</h2>
          <div className="accordion">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p className="muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
