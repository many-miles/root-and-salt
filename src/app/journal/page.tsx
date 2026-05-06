import type { Metadata } from "next";
import { BlogGrid } from "@/components/journal/BlogGrid";
import { FeaturedArticle } from "@/components/journal/FeaturedArticle";
import { NewsletterBanner } from "@/components/layout/NewsletterBanner";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Journal | Root & Salt",
  description:
    "Food stories, coastal living, hosting, slow living, and kitchen notes.",
};

export default function JournalPage() {
  const featured = blogPosts.find((post) => post.isFeatured) ?? blogPosts[0];

  return (
    <>
      <section className="container py-16">
        <p className="text-xs uppercase tracking-[0.18em] text-olive">
          Food stories and coastal living
        </p>
        <h1 className="editorial mt-4 text-6xl md:text-7xl">Journal</h1>
        <div className="mt-10">
          <FeaturedArticle post={featured} />
        </div>
        <div className="mt-12">
          <BlogGrid posts={blogPosts} />
        </div>
      </section>
      <NewsletterBanner />
    </>
  );
}
