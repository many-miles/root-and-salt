import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { Button } from "@/components/ui/Button";

export function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <section className="grid gap-8 rounded-lg bg-sand/55 p-4 md:grid-cols-[1fr_0.9fr] md:items-center md:p-8">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md">
        <Image alt="" className="image-treatment object-cover" fill src={post.image} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-olive">Featured article</p>
        <h2 className="editorial mt-3 text-4xl md:text-5xl"><Link href={`/journal/${post.slug}`}>{post.title}</Link></h2>
        <p className="mt-4 leading-8 text-charcoal/70">{post.excerpt}</p>
        <Button className="mt-6" href={`/journal/${post.slug}`} variant="secondary">Read article</Button>
      </div>
    </section>
  );
}
