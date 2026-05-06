import Image from "next/image";
import type { BlogPost } from "@/types/blog";

export function ArticleLayout({ post }: { post: BlogPost }) {
  return (
    <article className="py-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-olive">{post.category} · {post.date}</p>
        <h1 className="editorial mt-4 text-5xl md:text-7xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-charcoal/70">{post.excerpt}</p>
      </div>
      <div className="relative mx-auto mt-10 aspect-[16/9] max-w-5xl overflow-hidden rounded-lg">
        <Image alt="" className="image-treatment object-cover" fill src={post.image} />
      </div>
      <div className="prose-soft mx-auto mt-10 max-w-3xl">
        {post.content.map((paragraph, index) =>
          index === 1 ? (
            <blockquote className="my-8 border-l-2 border-olive pl-6 editorial text-3xl leading-10 text-charcoal" key={paragraph}>{paragraph}</blockquote>
          ) : (
            <p key={paragraph}>{paragraph}</p>
          )
        )}
      </div>
    </article>
  );
}
