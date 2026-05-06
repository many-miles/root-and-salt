import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/journal/ArticleLayout";
import { BlogCard } from "@/components/journal/BlogCard";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/blogPosts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return {
    title: `${post?.title ?? "Journal"} | Root & Salt`,
    description: post?.excerpt,
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: post.author,
  };

  return (
    <div className="container">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        type="application/ld+json"
      />
      <ArticleLayout post={post} />
      <section className="mx-auto max-w-3xl rounded-lg bg-sand/55 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-olive">
          From our table to yours.
        </p>
        <h2 className="editorial mt-3 text-4xl">
          Bring the recipes into your kitchen
        </h2>
        <Button className="mt-6" href="/membership">
          Join the membership
        </Button>
      </section>
      <section className="py-16">
        <h2 className="editorial text-4xl">Related posts</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <BlogCard key={item.id} post={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
