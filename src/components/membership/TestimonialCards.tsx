const testimonials = [
  ["It feels like Chanél is gently cooking beside you.", "Founding member"],
  ["The recipes are simple, but they make our week feel more cared for.", "Family table subscriber"],
  ["Premium without feeling precious. Warm, useful, beautiful.", "Coastal kitchen reader"]
];

export function TestimonialCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map(([quote, name]) => (
        <blockquote className="rounded-lg bg-sand/55 p-6" key={quote}>
          <p className="editorial text-2xl leading-8">“{quote}”</p>
          <cite className="mt-5 block text-xs uppercase tracking-[0.16em] text-olive">{name}</cite>
        </blockquote>
      ))}
    </div>
  );
}
