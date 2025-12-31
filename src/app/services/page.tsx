import { CtaGroup } from "@/components/CtaGroup";
import { ServicesNav } from "@/components/ServicesNav";
import { ButtonLink } from "@/components/ButtonLink";
import { business, servicesCatalog } from "@/lib/siteData";

export const metadata = {
  title: "Services and Upgrades",
  description:
    "Clear services catalog for infotainment, interior works, lighting upgrades, and electrical repairs.",
};

export default function ServicesPage() {
  const sections = servicesCatalog.map((section) => ({
    id: section.id,
    title: section.title,
  }));
  const whatsappDisabled = business.whatsappDisplay === "Needs confirmation";

  return (
    <>
      <section className="section section--hero">
        <div className="container stack">
          <h1 className="hero__title">Services & Upgrades</h1>
          <p className="hero__subtitle">
            Professional fitting, honest recommendations, and reliable electrical
            repairs.
          </p>
          <CtaGroup showNotes />
        </div>
      </section>

      <section className="section">
        <div className="container services-layout">
          <ServicesNav sections={sections} />
          <div className="services-content">
            {servicesCatalog.map((section) => (
              <div key={section.id} id={section.id} className="service-section">
                <h2 className="section-title">{section.title}</h2>
                <p className="section-lead">{section.intro}</p>
                {section.items.map((item) => (
                  <div key={item.name} className="service-card">
                    <details>
                      <summary>{item.name}</summary>
                      <div className="service-card__meta">
                        <div>
                          <strong>Includes</strong>
                          <ul className="list">
                            {item.includes.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <strong>Recommended for</strong>
                          <ul className="list">
                            {item.recommendedFor.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        </div>
                        {item.notes ? (
                          <div>
                            <strong>Trust note</strong>
                            <p className="muted">{item.notes}</p>
                          </div>
                        ) : null}
                        <ButtonLink
                          href={business.whatsappHref}
                          variant="secondary"
                          disabled={whatsappDisabled}
                          note={whatsappDisabled ? "Needs confirmation" : undefined}
                        >
                          {item.cta}
                        </ButtonLink>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack">
          <h2 className="section-title">Why choose us</h2>
          <div className="grid grid-3">
            <div className="card">Honest recommendations - only what is required.</div>
            <div className="card">Professional fitting and clean finishing.</div>
            <div className="card">Reasonable pricing and friendly guidance.</div>
          </div>
          <ButtonLink
            href={business.whatsappHref}
            variant="secondary"
            disabled={whatsappDisabled}
            note={whatsappDisabled ? "Needs confirmation" : undefined}
          >
            Talk to us on WhatsApp
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
