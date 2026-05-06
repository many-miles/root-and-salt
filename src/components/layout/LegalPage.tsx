export function LegalPage({ title, body }: { title: string; body: string }) {
  return (
    <section className="container max-w-3xl py-16">
      <h1 className="editorial text-6xl">{title}</h1>
      <p className="mt-6 leading-8 text-charcoal/70">{body}</p>
    </section>
  );
}
