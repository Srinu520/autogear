type StarsProps = {
  ratingText?: string;
};

export function Stars({ ratingText = "4.7\u2605" }: StarsProps) {
  return (
    <div className="stars" aria-label={`Rating ${ratingText}`}>
      {[...Array(5)].map((_, index) => (
        <span className="star" key={`star-${index}`} aria-hidden="true">
          {"\u2605"}
        </span>
      ))}
    </div>
  );
}
