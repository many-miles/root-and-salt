"use client";

import { useState } from "react";
import type { BlogPost } from "@/types/blog";
import { blogCategories } from "@/data/blogPosts";
import { BlogCard } from "./BlogCard";
import { RecipeFilters } from "@/components/recipes/RecipeFilters";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? posts : posts.filter((post) => post.category === category);

  return (
    <div>
      <RecipeFilters active={category} categories={["All", ...blogCategories]} onChange={setCategory} />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {filtered.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
    </div>
  );
}
