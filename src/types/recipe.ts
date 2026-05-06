export type RecipeCategory =
  | "Breakfast"
  | "Lunch"
  | "Dinner"
  | "Snacks"
  | "Healthy comfort food"
  | "Coastal meals"
  | "Hosting"
  | "Seasonal"
  | "Family meals";

export type VideoProvider = "youtube" | "vimeo";

export type Recipe = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: RecipeCategory;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: "Easy" | "Medium";
  isPremium: boolean;
  videoProvider: VideoProvider;
  videoUrl: string;
  ingredients: string[];
  steps: string[];
  notes: string;
  tags: string[];
  relatedRecipeIds: string[];
};
