import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/recipes/RecipeCard";

export function SavedRecipes() {
  return (
    <section>
      <h2 className="editorial text-4xl">Saved recipes</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {recipes.slice(0, 3).map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
      </div>
    </section>
  );
}
