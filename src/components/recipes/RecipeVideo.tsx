import type { Recipe } from "@/types/recipe";
import { getEmbedUrl } from "@/lib/video";

export function RecipeVideo({ recipe }: { recipe: Recipe }) {
  return (
    <section className="rounded-lg bg-charcoal p-4 text-warm">
      <div className="aspect-video overflow-hidden rounded-md bg-charcoal/70">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
          src={getEmbedUrl(recipe.videoProvider, recipe.videoUrl)}
          title={`${recipe.title} video`}
        />
      </div>
      <p className="mt-3 text-xs uppercase tracking-[0.16em] text-warm/65">
        {recipe.videoProvider} embed placeholder · supports public, private, or unlisted videos
      </p>
    </section>
  );
}
