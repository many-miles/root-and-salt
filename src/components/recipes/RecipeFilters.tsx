import { cn } from "@/lib/utils";

export function RecipeFilters({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          className={cn(
            "shrink-0 rounded-full border px-4 py-2 text-sm transition",
            active === category
              ? "border-olive bg-olive text-warm"
              : "border-charcoal/12 bg-warm text-charcoal/70 hover:border-olive",
          )}
          key={category}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
