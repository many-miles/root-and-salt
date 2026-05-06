export function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="aspect-video overflow-hidden rounded-lg bg-charcoal">
      <iframe allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="h-full w-full" src={src} title={title} />
    </div>
  );
}
