import { business, reviewHighlights, reviewKeywords } from "@/lib/siteData";
import { CtaGroup } from "@/components/CtaGroup";

export const metadata = {
  title: "Reviews",
  description: "4.7 star rating with 212 reviews from customers.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="section section--hero">
        <div className="container stack">
          <h1 className="hero__title">Reviews</h1>
          <p className="hero__subtitle">
            {business.rating}\u2605 ({business.reviewCount} reviews)
          </p>
          <CtaGroup showNotes />
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <h2 className="section-title">Highlight reviews</h2>
          <div className="reviews-strip">
            {reviewHighlights.map((quote) => (
              <div key={quote} className="review-card">
                <p>{quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack">
          <h2 className="section-title">Review keyword cloud</h2>
          <div className="keyword-cloud">
            {reviewKeywords.map((keyword) => (
              <span key={keyword} className="keyword">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack">
          <h2 className="section-title">What customers love</h2>
          <div className="grid grid-3">
            <div className="card">Honest recommendations</div>
            <div className="card">Professional installation</div>
            <div className="card">Calm and knowledgeable mechanic</div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container location-card">
          <div className="stack">
            <h2 className="section-title">Directions and quick contact</h2>
            <p className="section-lead">{business.address}</p>
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
    </>
  );
}
