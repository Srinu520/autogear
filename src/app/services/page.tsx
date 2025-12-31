import Image from "next/image";
import { CtaGroup } from "@/components/CtaGroup";
import { ServicesNav } from "@/components/ServicesNav";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
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
      <section className="border-b border-sky-500/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Services
          </p>
          <h1 className="mt-3 font-heading text-4xl text-white md:text-5xl text-shadow-accent">
            Services & Upgrades
          </h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Professional fitting, honest recommendations, and reliable electrical
            repairs.
          </p>
          <div className="mt-6">
            <CtaGroup showNotes />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[240px_1fr]">
          <ServicesNav sections={sections} />
          <div className="space-y-10">
            {servicesCatalog.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-24 space-y-4"
              >
                <Reveal>
                  <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
                    <div className="relative h-32 overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src={section.image}
                        alt={`${section.title} placeholder`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 220px"
                      />
                    </div>
                    <div>
                      <h2 className="font-heading text-3xl text-white">
                        {section.title}
                      </h2>
                      <p className="mt-2 max-w-3xl text-gray-400">
                        {section.intro}
                      </p>
                    </div>
                  </div>
                </Reveal>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <Reveal key={item.name} hover>
                      <details className="group rounded-2xl border border-white/10 bg-neutral-950/70 p-5 transition hover:border-sky-500/40">
                        <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-white">
                          <span>{item.name}</span>
                          <span className="text-sky-400 transition group-open:rotate-90">
                            &gt;
                          </span>
                        </summary>
                        <div className="mt-4 grid gap-4 text-sm text-gray-400 md:grid-cols-2">
                          <div>
                            <strong className="text-white">Includes</strong>
                            <ul className="mt-2 list-disc space-y-1 pl-4">
                              {item.includes.map((line) => (
                                <li key={line}>{line}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <strong className="text-white">Recommended for</strong>
                            <ul className="mt-2 list-disc space-y-1 pl-4">
                              {item.recommendedFor.map((line) => (
                                <li key={line}>{line}</li>
                              ))}
                            </ul>
                          </div>
                          {item.notes ? (
                            <div className="md:col-span-2">
                              <strong className="text-white">Trust note</strong>
                              <p className="mt-2 text-gray-400">{item.notes}</p>
                            </div>
                          ) : null}
                          <div className="md:col-span-2">
                            <ButtonLink
                              href={business.whatsappHref}
                              variant="secondary"
                              disabled={whatsappDisabled}
                              note={
                                whatsappDisabled ? "Needs confirmation" : undefined
                              }
                            >
                              {item.cta}
                            </ButtonLink>
                          </div>
                        </div>
                      </details>
                    </Reveal>
                  ))}
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
              href={business.whatsappHref}
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


