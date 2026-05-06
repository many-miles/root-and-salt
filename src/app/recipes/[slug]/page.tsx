import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { IngredientsList } from "@/components/recipes/IngredientsList";
import { MethodSteps } from "@/components/recipes/MethodSteps";
import { PremiumLock } from "@/components/recipes/PremiumLock";
import { RecipeHero } from "@/components/recipes/RecipeHero";
import { RecipeVideo } from "@/components/recipes/RecipeVideo";
import { RelatedRecipes } from "@/components/recipes/RelatedRecipes";
import { recipes } from "@/data/recipes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);
  return { title: `${recipe?.title ?? "Recipe"} | Root & Salt`, description: recipe?.description };
}

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);
  if (!recipe) notFound();

  const related = recipes.filter((item) => recipe.relatedRecipeIds.includes(item.id));
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    image: recipe.image,
    recipeYield: recipe.servings,
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps
  };

  return (
    <div className="container">
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }} type="application/ld+json" />
      <RecipeHero recipe={recipe} />
      {recipe.isPremium && <PremiumLock />}
      <div className="grid gap-10 py-12 lg:grid-cols-[0.7fr_1fr]">
        <IngredientsList ingredients={recipe.ingredients} />
        <div className="grid gap-10">
          <MethodSteps steps={recipe.steps} />
          <RecipeVideo recipe={recipe} />
          <div className="rounded-lg border border-charcoal/10 bg-warm p-6">
            <h2 className="editorial text-3xl">Notes from Chanél</h2>
            <p className="mt-3 leading-7 text-charcoal/70">{recipe.notes}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="button" variant="secondary">Save recipe</Button>
              <Button type="button" variant="secondary">Download PDF</Button>
            </div>
          </div>
        </div>
      </div>
      <RelatedRecipes recipes={related} />
    </div>
  );
}
