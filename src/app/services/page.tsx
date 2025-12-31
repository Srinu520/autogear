import Image from "next/image";
import { CtaGroup } from "@/components/CtaGroup";
import { ServicesNav } from "@/components/ServicesNav";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import {
  buildWhatsappHref,
  buildWhatsappMessage,
  business,
  servicesCatalog,
} from "@/lib/siteData";

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
      <section className="border-b border-sky-500/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Services
              </p>
              <h1 className="mt-3 font-heading text-4xl text-white md:text-5xl text-shadow-accent">
                Services & Upgrades
              </h1>
              <p className="mt-4 max-w-2xl text-gray-400">
                Professional fitting, honest recommendations, and reliable
                electrical repairs.
              </p>
              <div className="mt-6">
                <CtaGroup showNotes whatsappSource="Services hero CTA" />
              </div>
            </div>
            <Reveal className="outline-card rounded-3xl border border-sky-500/20 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                At a glance
              </p>
              <div className="mt-4 space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                  <span>
                    {servicesCatalog.length} service categories across
                    accessories, upgrades, and repairs.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                  <span>
                    {business.rating} star rating from {business.reviewCount} reviews.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                  <span>Open {business.hours}.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                  <span>{business.addressShort}.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                  <span>Same-day interior work when feasible.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[240px_1fr]">
          <ServicesNav sections={sections} />
          <div className="space-y-16">
            <div className="flex flex-wrap gap-2 md:hidden">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300 transition hover:border-sky-500/40 hover:text-white"
                >
                  {section.title}
                </a>
              ))}
            </div>
            {servicesCatalog.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-24 space-y-6"
              >
                <div className="outline-card rounded-3xl border border-sky-500/20 p-6">
                  <Reveal>
                    <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:items-center">
                      <div className="relative h-36 overflow-hidden rounded-xl border border-white/10">
                        <Image
                          src={section.image}
                          alt={`${section.title} placeholder`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 240px"
                        />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-sky-300">
                          Category
                        </p>
                        <h2 className="mt-2 font-heading text-2xl text-white">
                          {section.title}
                        </h2>
                        <p className="mt-3 text-sm text-gray-400">
                          {section.intro}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <div className="mt-6 grid gap-4">
                    {section.items.map((item) => (
                      <Reveal key={item.name} hover>
                        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-sky-500/40">
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                                Service
                              </p>
                              <h3 className="mt-2 font-heading text-lg text-white">
                                {item.name}
                              </h3>
                            </div>
                            <ButtonLink
                              href={buildWhatsappHref(
                                buildWhatsappMessage({
                                  source: "Services catalog card",
                                  category: section.title,
                                  service: item.name,
                                })
                              )}
                              variant="secondary"
                              disabled={whatsappDisabled}
                              note={
                                whatsappDisabled ? "Needs confirmation" : undefined
                              }
                              className="w-full sm:w-auto"
                            >
                              {item.cta}
                            </ButtonLink>
                          </div>
                          <div className="mt-4 grid gap-4 text-sm text-gray-400 md:grid-cols-2">
                            <div>
                              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                                Includes
                              </p>
                              <ul className="mt-2 list-disc space-y-1 pl-4">
                                {item.includes.map((line) => (
                                  <li key={line}>{line}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                                Recommended for
                              </p>
                              <ul className="mt-2 list-disc space-y-1 pl-4">
                                {item.recommendedFor.map((line) => (
                                  <li key={line}>{line}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {item.notes ? (
                            <div className="mt-4 rounded-xl border border-sky-500/20 bg-slate-950/70 px-4 py-3 text-xs text-gray-300">
                              <span className="text-sky-200">Trust note:</span>{" "}
                              {item.notes}
                            </div>
                          ) : null}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sky-500/20 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl text-white">Why choose us</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="outline-card rounded-2xl border border-white/10 p-5">
              Honest recommendations - only what is required.
            </div>
            <div className="outline-card rounded-2xl border border-white/10 p-5">
              Professional fitting and clean finishing.
            </div>
            <div className="outline-card rounded-2xl border border-white/10 p-5">
              Reasonable pricing and friendly guidance.
            </div>
          </div>
          <div className="mt-6">
            <ButtonLink
              href={buildWhatsappHref(
                buildWhatsappMessage({
                  source: "Services page CTA",
                  category: "Why choose us",
                })
              )}
              variant="secondary"
              disabled={whatsappDisabled}
              note={whatsappDisabled ? "Needs confirmation" : undefined}
            >
              Talk to us on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}


