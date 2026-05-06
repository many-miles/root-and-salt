import { blogPosts } from "@/data/blogPosts";
import { BlogCard } from "@/components/journal/BlogCard";

export function JournalPreview() {
  return (
    <section className="bg-warm py-20">
      <div className="container">
        <p className="text-xs uppercase tracking-[0.18em] text-olive">
          Kitchen stories
        </p>
        <h2 className="editorial mt-3 text-5xl">Journal</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
