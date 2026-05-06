import type { Metadata } from "next";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";
import { recipes } from "@/data/recipes";

export const metadata: Metadata = {
  title: "Recipes | Root & Salt",
  description: "Browse nourishing coastal recipes from Root & Salt."
};

export default function RecipesPage() {
  return (
    <section className="container py-16">
      <p className="text-xs uppercase tracking-[0.18em] text-olive">Where food feels like home.</p>
      <h1 className="editorial mt-4 text-6xl md:text-7xl">Recipe library</h1>
      <p className="mt-5 max-w-2xl leading-8 text-charcoal/70">Free and member recipes for breakfast, family meals, hosting, coastal suppers, and healthy comfort food.</p>
      <div className="mt-10">
        <RecipeGrid recipes={recipes} />
      </div>
    </section>
  );
}
