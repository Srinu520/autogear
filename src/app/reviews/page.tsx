import { business, reviewHighlights, reviewKeywords } from "@/lib/siteData";
import { CtaGroup } from "@/components/CtaGroup";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Reviews",
  description: "4.7 star rating with 212 reviews from customers.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="border-b border-sky-500/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Reviews
          </p>
          <h1 className="mt-3 font-heading text-4xl text-white md:text-5xl text-shadow-accent">
            Reviews
          </h1>
          <p className="mt-4 text-gray-400">
            {business.rating} star ({business.reviewCount} reviews)
          </p>
          <div className="mt-6">
            <CtaGroup showNotes whatsappSource="Reviews hero CTA" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl text-white">Highlight reviews</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviewHighlights.map((quote) => (
              <Reveal key={quote} hover>
                <div className="outline-card rounded-2xl border border-white/10 p-5 text-sm text-gray-200 transition hover:border-sky-500/40">
                  {quote}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-sky-500/20 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl text-white">Review keyword cloud</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {reviewKeywords.map((keyword) => (
              <Reveal key={keyword} hover>
                <span className="rounded-full border border-sky-500/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 transition hover:border-sky-500/70">
                  {keyword}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl text-white">What customers love</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Reveal hover>
              <div className="outline-card rounded-2xl border border-white/10 p-5 transition hover:border-sky-500/40">
                Honest recommendations
              </div>
            </Reveal>
            <Reveal hover>
              <div className="outline-card rounded-2xl border border-white/10 p-5 transition hover:border-sky-500/40">
                Professional installation
              </div>
            </Reveal>
            <Reveal hover>
              <div className="outline-card rounded-2xl border border-white/10 p-5 transition hover:border-sky-500/40">
                Calm and knowledgeable mechanic
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-sky-500/20 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-white">
              Directions and quick contact
            </h2>
            <p className="text-gray-400">{business.address}</p>
            <CtaGroup showNotes whatsappSource="Reviews directions block" />
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
    </>
  );
}


