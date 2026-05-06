import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import type { Recipe } from "@/types/recipe";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipes/${recipe.slug}`}>
      <Card className="group h-full overflow-hidden bg-warm transition hover:-translate-y-1 hover:shadow-soft">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image alt="" className="image-treatment object-cover transition duration-500 group-hover:scale-105" fill src={recipe.image} />
          <Badge className="absolute left-4 top-4 bg-warm/90">{recipe.isPremium ? "Members" : "Free"}</Badge>
        </div>
        <div className="p-5">
          <p className="text-xs uppercase tracking-[0.15em] text-olive">{recipe.category}</p>
          <h3 className="editorial mt-2 text-2xl">{recipe.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-charcoal/68">{recipe.description}</p>
          <div className="mt-5 flex flex-wrap gap-4 text-xs text-charcoal/60">
            <span className="inline-flex items-center gap-1"><Clock size={14} /> {recipe.prepTime} prep</span>
            <span className="inline-flex items-center gap-1"><Users size={14} /> Serves {recipe.servings}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
