import type { Recipe } from "@/types/recipe";
import { RecipeCard } from "./RecipeCard";

export function RelatedRecipes({ recipes }: { recipes: Recipe[] }) {
  return (
    <section className="py-12">
      <h2 className="editorial text-4xl">Related recipes</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
