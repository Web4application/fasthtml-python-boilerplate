export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <section className="hero container">
      <div className="kicker">{kicker}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
