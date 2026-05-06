import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { Card } from "@/components/ui/Card";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/journal/${post.slug}`}>
      <Card className="group h-full overflow-hidden bg-warm transition hover:-translate-y-1">
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            alt=""
            className="image-treatment object-cover transition duration-500 group-hover:scale-105"
            fill
            src={post.image}
          />
        </div>
        <div className="p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-olive">
            {post.category}
          </p>
          <h3 className="editorial mt-2 text-2xl">{post.title}</h3>
          <p className="mt-3 text-sm leading-6 text-charcoal/68">
            {post.excerpt}
          </p>
        </div>
      </Card>
    </Link>
  );
}
