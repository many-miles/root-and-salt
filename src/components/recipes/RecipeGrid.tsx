"use client";

import { useMemo, useState } from "react";
import type { Recipe } from "@/types/recipe";
import { recipeCategories } from "@/data/recipes";
import { RecipeCard } from "./RecipeCard";
import { RecipeFilters } from "./RecipeFilters";
import { RecipeSearch } from "./RecipeSearch";

export function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      recipes.filter((recipe) => {
        const matchesCategory =
          category === "All" ||
          recipe.category === category ||
          recipe.tags.includes(category);
        const matchesSearch =
          `${recipe.title} ${recipe.description} ${recipe.tags.join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [category, query, recipes],
  );

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-[1fr_300px] md:items-center">
        <RecipeFilters
          active={category}
          categories={["All", ...recipeCategories]}
          onChange={setCategory}
        />
        <RecipeSearch onChange={setQuery} value={query} />
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
