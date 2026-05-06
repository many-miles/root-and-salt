import Image from "next/image";
import type { Recipe } from "@/types/recipe";
import { Badge } from "@/components/ui/Badge";

export function RecipeHero({ recipe }: { recipe: Recipe }) {
  return (
    <section className="grid gap-8 py-12 md:grid-cols-[0.85fr_1fr] md:items-center">
      <div>
        <Badge>
          {recipe.isPremium ? "Members-only recipe" : "Free recipe"}
        </Badge>
        <h1 className="editorial mt-5 text-5xl md:text-7xl">{recipe.title}</h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-charcoal/70">
          {recipe.description}
        </p>
        <div className="mt-7 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          {[
            ["Prep", recipe.prepTime],
            ["Cook", recipe.cookTime],
            ["Serves", String(recipe.servings)],
            ["Level", recipe.difficulty],
          ].map(([label, value]) => (
            <div
              className="rounded-lg border border-charcoal/10 bg-sand/50 p-4"
              key={label}
            >
              <p className="text-xs uppercase tracking-[0.16em] text-olive">
                {label}
              </p>
              <p className="mt-1 font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative aspect-4/5 overflow-hidden rounded-lg">
        <Image
          alt=""
          className="image-treatment object-cover"
          fill
          priority
          src={recipe.image}
        />
      </div>
    </section>
  );
}
