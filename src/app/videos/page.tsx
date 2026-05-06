import type { Metadata } from "next";
import { VideoGrid } from "@/components/videos/VideoGrid";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Videos | Root & Salt",
  description: "Recipe videos and cook-with-me content from Root & Salt."
};

export default function VideosPage() {
  return (
    <section className="container py-16">
      <p className="text-xs uppercase tracking-[0.18em] text-olive">Cook with me</p>
      <h1 className="editorial mt-4 text-6xl md:text-7xl">Video library</h1>
      <p className="mt-5 max-w-2xl leading-8 text-charcoal/70">Public videos and private or unlisted member embeds can live here without hosting video files in the website.</p>
      <div className="mt-10"><VideoGrid videos={videos} /></div>
    </section>
  );
}
