import {
  buildWhatsappHref,
  buildWhatsappMessage,
  business,
  faqs,
  mapHref,
} from "@/lib/siteData";
import { CtaGroup } from "@/components/CtaGroup";
import { ButtonLink } from "@/components/ButtonLink";
import { CopyButton } from "@/components/CopyButton";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Contact and Location",
  description: "Contact and visit the auto accessories store in Dommasandra.",
};

export default function ContactPage() {
  const callDisabled = business.phoneDisplay === "Needs confirmation";
  const whatsappDisabled = business.whatsappDisplay === "Needs confirmation";

  return (
    <>
      <section className="border-b border-sky-500/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Contact
          </p>
          <h1 className="mt-3 font-heading text-4xl text-white md:text-5xl text-shadow-accent">
            Contact & Visit
          </h1>
          <p className="mt-4 text-gray-400">We are open {business.hours}.</p>
          <div className="mt-6">
            <CtaGroup showNotes whatsappSource="Contact hero CTA" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              <h2 className="font-heading text-3xl text-white">Map and address</h2>
              <p className="text-gray-400">{business.address}</p>
              <CopyButton text={business.address} />
              <p className="text-sm text-gray-500">Parking: Needs confirmation</p>
              <ButtonLink href={mapHref} variant="secondary">
                Get Directions
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal>
            <iframe
              className="h-80 w-full rounded-2xl border border-white/10"
              title="Map preview"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                business.address
              )}&output=embed`}
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-sky-500/20 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl text-white">Hours</h2>
          <div className="mt-4 rounded-2xl border border-white/10 bg-neutral-950/70 p-5 text-sm text-gray-200">
            Open {business.hours}.
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl text-white">Contact options</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Reveal hover>
              <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5 transition hover:border-sky-500/40">
                <h3 className="text-lg font-semibold text-white">Call</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Phone: {business.phoneDisplay}
                </p>
                <div className="mt-4">
                  <ButtonLink
                    href={business.phoneHref}
                    variant="primary"
                    disabled={callDisabled}
                    note={callDisabled ? "Needs confirmation" : undefined}
                  >
                    Call Now
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
            <Reveal hover>
              <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5 transition hover:border-sky-500/40">
                <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
                <p className="mt-2 text-sm text-gray-400">
                  WhatsApp: {business.whatsappDisplay}
                </p>
                <div className="mt-4">
                  <ButtonLink
                    href={buildWhatsappHref(
                      buildWhatsappMessage({
                        source: "Contact page WhatsApp card",
                        category: "Contact",
                      })
                    )}
                    variant="secondary"
                    disabled={whatsappDisabled}
                    note={whatsappDisabled ? "Needs confirmation" : undefined}
                  >
                    WhatsApp for Quote
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-6 rounded-2xl border border-sky-500/20 bg-neutral-950/70 p-6">
              <h3 className="text-lg font-semibold text-white">Contact form</h3>
              <form className="mt-4 grid gap-4 text-sm text-gray-300">
                <label className="grid gap-2">
                  Name
                  <input
                    className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-white"
                    type="text"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2">
                  Phone
                  <input
                    className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-white"
                    type="tel"
                    placeholder="Phone number"
                  />
                </label>
                <label className="grid gap-2">
                  Car model
                  <input
                    className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-white"
                    type="text"
                    placeholder="Car model"
                  />
                </label>
                <label className="grid gap-2">
                  Service need
                  <input
                    className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-white"
                    type="text"
                    placeholder="Infotainment, interior, lighting"
                  />
                </label>
                <label className="grid gap-2">
                  Message
                  <textarea
                    className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-white"
                    placeholder="Tell us what you need"
                    rows={4}
                  />
                </label>
                <button
                  className="w-fit rounded-full border border-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400"
                  type="submit"
                  disabled
                >
                  Submit (Needs confirmation)
                </button>
                <p className="text-xs text-gray-500">
                  Form submission method needs confirmation.
                </p>
                <p className="text-xs text-gray-500">
                  Email for form submissions: Needs confirmation.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-sky-500/20 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl text-white">FAQ</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
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
        </div>
      </section>
    </>
  );
}


