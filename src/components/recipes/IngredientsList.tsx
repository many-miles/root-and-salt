export function IngredientsList({ ingredients }: { ingredients: string[] }) {
  return (
    <div className="rounded-lg bg-sand/55 p-6">
      <h2 className="editorial text-3xl">Ingredients</h2>
      <ul className="mt-5 grid gap-3 text-sm text-charcoal/75">
        {ingredients.map((ingredient) => <li className="border-b border-charcoal/10 pb-3" key={ingredient}>{ingredient}</li>)}
      </ul>
    </div>
  );
}
