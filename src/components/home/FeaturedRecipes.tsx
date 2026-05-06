import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { Button } from "@/components/ui/Button";

export function FeaturedRecipes() {
  return (
    <section className="bg-sand/35 py-20">
      <div className="container">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-olive">
              Cooked with heart, shared with love.
            </p>
            <h2 className="editorial mt-3 text-5xl">Featured recipes</h2>
          </div>
          <Button href="/recipes" variant="secondary">
            Explore recipes
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {recipes.slice(0, 3).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
