import Image from "next/image";
import {
  business,
  heroImage,
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
      <section className="relative overflow-hidden border-b border-sky-500/20 py-20">
        <div className="absolute inset-0 bg-lines opacity-30" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Reveal>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Stars />
                  <span className="text-xs uppercase tracking-[0.3em]">
                    4.7 star rating
                  </span>
                </div>
                <h1 className="font-heading text-4xl text-white md:text-5xl text-shadow-accent">
                  Professional Car Accessories & Upgrades in Dommasandra
                </h1>
                <p className="max-w-xl text-gray-400">
                  Rated 4.7 star by 212 customers. Known for professional
                  fitting, honest suggestions, and reliable electrical repairs.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-sky-500/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                  Open {business.hours}
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                  {business.addressShort}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <CtaGroup showNotes />
            </Reveal>
          </div>
          <Reveal className="outline-card relative rounded-3xl border border-sky-500/30 p-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300">
                Install moment
              </p>
              <p className="text-lg text-gray-200">
                Warm cosy install moment placeholder - interior close-up or
                lighting upgrade.
              </p>
              <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={heroImage}
                  alt="Placeholder install moment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-4">
          {trustChips.map((chip) => (
            <Reveal
              key={chip}
              hover
              className="outline-card rounded-2xl border border-white/10 p-4 text-sm font-semibold text-gray-200"
            >
              <span className="line-accent">{chip}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-sky-500/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Services
              </p>
              <h2 className="font-heading text-3xl text-white">
                Services preview
              </h2>
              <p className="max-w-2xl text-gray-400">
                Clear categories with honest recommendations and neat fitting.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {servicesPreview.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05} hover>
                <div className="outline-card overflow-hidden rounded-2xl border border-white/10 transition hover:border-sky-500/40">
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} placeholder`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      {service.description}
                    </p>
                    <ButtonLink
                      href={service.href}
                      variant="ghost"
                      className="mt-4"
                    >
                      Explore -&gt;
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sky-500/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Spotlight
              </p>
              <h2 className="font-heading text-3xl text-white">
                Featured upgrades
              </h2>
              <p className="max-w-2xl text-gray-400">
                Problem to upgrade to result, done cleanly.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredUpgrades.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} hover>
                <div className="outline-card overflow-hidden rounded-2xl border border-sky-500/20">
                  <div className="relative h-40">
                    <Image
                      src={item.image}
                      alt={`${item.title} placeholder`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                  <h3 className="font-heading text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400">
                    Problem: {item.problem}
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    Upgrade: {item.upgrade}
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Result: {item.result}
                  </p>
                  <ButtonLink
                    href={business.whatsappHref}
                    variant="secondary"
                    disabled={whatsappDisabled}
                    note={whatsappDisabled ? "Needs confirmation" : undefined}
                    className="mt-5"
                  >
                    {item.cta}
                  </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sky-500/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Process
              </p>
              <h2 className="font-heading text-3xl text-white">How it works</h2>
              <p className="max-w-2xl text-gray-400">
                Simple steps from recommendation to handover.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {howItWorks.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05} hover>
                <div className="outline-card rounded-2xl border border-white/10 p-5 transition hover:border-sky-500/40">
                  <div className="text-xs uppercase tracking-[0.3em] text-sky-300">
                    Step {index + 1}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-white">
                    {step.title}
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Icon: {step.icon}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sky-500/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Gallery
              </p>
              <h2 className="font-heading text-3xl text-white">
                Work gallery preview
              </h2>
              <p className="max-w-2xl text-gray-400">
                Clean fitting, neat finishing, and quality checks.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-6">
              <GalleryPreview />
            </div>
          </Reveal>
          <div className="mt-6">
            <ButtonLink href="/gallery" variant="secondary">
              View Full Gallery
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-sky-500/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Reviews
              </p>
              <h2 className="font-heading text-3xl text-white">
                Review highlights
              </h2>
              <p className="max-w-2xl text-gray-400">
                4.7 star | 212 reviews from customers in Dommasandra.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviewQuotes.map((quote, index) => (
              <Reveal key={quote} delay={index * 0.05} hover>
                <div className="outline-card rounded-2xl border border-white/10 p-5 transition hover:border-sky-500/40">
                  <p className="text-sm text-gray-200">{quote}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-sky-300">
                    <span>Honest</span>
                    <span>Clean fitting</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <ButtonLink href="/reviews" variant="ghost">
              Read More Reviews
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-sky-500/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Trust
              </p>
              <h2 className="font-heading text-3xl text-white">
                Why customers trust us
              </h2>
              <p className="max-w-2xl text-gray-400">
                Honest recommendations, professional installation, and calm
                customer interaction.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="outline-card rounded-2xl border border-white/10 p-5 transition hover:border-sky-500/40">
              Honest recommendations - only what is required.
            </div>
            <div className="outline-card rounded-2xl border border-white/10 p-5 transition hover:border-sky-500/40">
              Professional fitting with clean finishing.
            </div>
            <div className="outline-card rounded-2xl border border-white/10 p-5 transition hover:border-sky-500/40">
              Strong electrical repair capability.
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Owner and team details: Needs confirmation.
          </p>
        </div>
      </section>

      <section className="border-t border-sky-500/10 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-white">Location snapshot</h2>
            <p className="text-gray-400">{business.address}</p>
            <CopyButton text={business.address} />
            <p className="text-sm text-gray-500">Open {business.hours}</p>
            <CtaGroup showNotes />
          </div>
          <iframe
            className="h-80 w-full rounded-2xl border border-white/10"
            title="Map preview"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              business.address
            )}&output=embed`}
            loading="lazy"
          />
        </div>
      </section>

      <section className="border-t border-sky-500/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                FAQ
              </p>
              <h2 className="font-heading text-3xl text-white">FAQ preview</h2>
              <p className="max-w-2xl text-gray-400">
                Quick answers before you visit.
              </p>
            </div>
          </Reveal>
          <div className="mt-6 space-y-3">
            {faqs.slice(0, 3).map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-white/10 bg-neutral-950/60 px-5 py-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-gray-400">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-6">
            <ButtonLink href="/contact" variant="secondary">
              View Full FAQ
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}


