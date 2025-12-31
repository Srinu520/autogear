import Link from "next/link";
import {
  business,
  trustChips,
  servicesPreview,
  featuredUpgrades,
  howItWorks,
  reviewQuotes,
  faqs,
} from "@/lib/siteData";
import { CtaGroup } from "@/components/CtaGroup";
import { Stars } from "@/components/Stars";
import { CopyButton } from "@/components/CopyButton";
import { Reveal } from "@/components/Reveal";
import { GalleryPreview } from "@/components/GalleryPreview";
import { ButtonLink } from "@/components/ButtonLink";

export default function Home() {
  const whatsappDisabled = business.whatsappDisplay === "Needs confirmation";

  return (
    <>
      <section className="section section--hero">
        <div className="container hero">
          <div className="hero__copy">
            <Reveal>
              <div className="stack">
                <Stars />
                <h1 className="hero__title">
                  Professional Car Accessories & Upgrades in Dommasandra
                </h1>
                <p className="hero__subtitle">
                  Rated 4.7\u2605 by 212 customers. Known for professional
                  fitting, honest suggestions, and reliable electrical repairs.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="hero__badges">
                <span className="badge badge--pulse">Open {business.hours}</span>
                <span className="badge">{business.addressShort}</span>
              </div>
            </Reveal>
            <Reveal>
              <CtaGroup showNotes />
            </Reveal>
          </div>
          <Reveal className="hero__visual">
            <div className="hero__visual-content">
              Warm cosy install moment placeholder - interior close-up or
              lighting upgrade.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="trust-strip">
            {trustChips.map((chip) => (
              <div key={chip} className="trust-card">
                {chip}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <Reveal>
            <div className="stack">
              <h2 className="section-title">Services preview</h2>
              <p className="section-lead">
                Clear categories with honest recommendations and neat fitting.
              </p>
            </div>
          </Reveal>
          <div className="cards grid grid-3">
            {servicesPreview.map((service) => (
              <Reveal key={service.title} className="card">
                <h3 className="card__title">{service.title}</h3>
                <p className="muted">{service.description}</p>
                <Link href={service.href} className="card__link">
                  Explore <span aria-hidden="true">-&gt;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <Reveal>
            <div className="stack">
              <h2 className="section-title">Featured upgrades</h2>
              <p className="section-lead">
                Problem to upgrade to result, done cleanly.
              </p>
            </div>
          </Reveal>
          <div className="feature-tiles">
            {featuredUpgrades.map((item) => (
              <Reveal key={item.title} className="feature-tile">
                <h3>{item.title}</h3>
                <p className="muted">Problem: {item.problem}</p>
                <p className="muted">Upgrade: {item.upgrade}</p>
                <p className="muted">Result: {item.result}</p>
                <ButtonLink
                  href={business.whatsappHref}
                  variant="ghost"
                  disabled={whatsappDisabled}
                  note={whatsappDisabled ? "Needs confirmation" : undefined}
                  className="feature-tile__cta"
                >
                  {item.cta}
                </ButtonLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack">
          <Reveal>
            <div className="stack">
              <h2 className="section-title">How it works</h2>
              <p className="section-lead">
                Simple steps from recommendation to handover.
              </p>
            </div>
          </Reveal>
          <div className="steps">
            {howItWorks.map((step) => (
              <Reveal key={step.title} className="step">
                <div className="step__icon" aria-hidden="true">
                  {step.icon}
                </div>
                <span>{step.title}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <Reveal>
            <div className="stack">
              <h2 className="section-title">Work gallery preview</h2>
              <p className="section-lead">
                Clean fitting, neat finishing, and quality checks.
              </p>
            </div>
          </Reveal>
          <GalleryPreview />
          <Link href="/gallery" className="btn btn--secondary">
            View Full Gallery
          </Link>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack">
          <Reveal>
            <div className="stack">
              <h2 className="section-title">Review highlights</h2>
              <p className="section-lead">
                4.7\u2605 | 212 reviews from customers in Dommasandra.
              </p>
            </div>
          </Reveal>
          <div className="reviews-slider">
            {reviewQuotes.map((quote) => (
              <Reveal key={quote} className="review-card">
                <p>{quote}</p>
                <div className="keyword-cloud">
                  <span className="keyword">Honest</span>
                  <span className="keyword">Clean fitting</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/reviews" className="btn btn--ghost">
            Read More Reviews
          </Link>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack">
          <Reveal>
            <div className="stack">
              <h2 className="section-title">Why customers trust us</h2>
              <p className="section-lead">
                Honest recommendations, professional installation, and calm
                customer interaction.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-3">
            <div className="card">Honest recommendations - only what is required.</div>
            <div className="card">Professional fitting with clean finishing.</div>
            <div className="card">Strong electrical repair capability.</div>
          </div>
          <p className="muted">Owner and team details: Needs confirmation.</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container location-card">
          <div className="stack">
            <h2 className="section-title">Location snapshot</h2>
            <p className="section-lead">{business.address}</p>
            <CopyButton text={business.address} />
            <p className="muted">Open {business.hours}</p>
            <CtaGroup showNotes />
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
          <Reveal>
            <div className="stack">
              <h2 className="section-title">FAQ preview</h2>
              <p className="section-lead">Quick answers before you visit.</p>
            </div>
          </Reveal>
          <div className="accordion">
            {faqs.slice(0, 3).map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p className="muted">{item.answer}</p>
              </details>
            ))}
          </div>
          <Link href="/contact" className="btn btn--secondary">
            View Full FAQ
          </Link>
        </div>
      </section>
    </>
  );
}
