import type { Video } from "@/types/video";
import { getEmbedUrl } from "@/lib/video";

const rawVideos = [
  ["v1", "Cook With Me: Lemon Herb Chicken", "A guided supper video for the Root & Salt signature chicken.", "Cook with me", "/images/recipes/lemon-herb-chicken.svg", "vimeo", "https://vimeo.com/824804225", true, "18 min"],
  ["v2", "Slow Morning Breakfast Bowl", "A calm breakfast ritual with yoghurt, citrus, honey, and olive oil.", "Recipe videos", "/images/recipes/breakfast-bowl.svg", "youtube", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", false, "7 min"],
  ["v3", "Setting a Coastal Table", "Simple hosting details for a table that feels warm and effortless.", "Hosting", "/images/journal/hosting.svg", "vimeo", "https://vimeo.com/76979871", true, "12 min"],
  ["v4", "The Root & Salt Pantry Staples", "The ingredients Chanél keeps close for easy nourishing meals.", "Kitchen basics", "/images/journal/pantry.svg", "youtube", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", false, "9 min"],
  ["v5", "Easy Sunday Lunch", "A relaxed member table with salad, potatoes, chicken, and bread.", "Seasonal meals", "/images/recipes/sunday-salad.svg", "vimeo", "https://vimeo.com/824804225", true, "24 min"],
  ["v6", "Sea Salt Roasted Potatoes", "Crispy potatoes with rosemary, lemon, and flaky sea salt.", "Recipe videos", "/images/recipes/roasted-potatoes.svg", "youtube", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", false, "6 min"]
] as const;

export const videos: Video[] = rawVideos.map(([id, title, description, category, thumbnail, provider, url, isPremium, duration]) => ({
  id,
  title,
  description,
  category,
  thumbnail,
  provider,
  embedUrl: getEmbedUrl(provider, url),
  isPremium,
  duration
}));

export const videoCategories = ["Cook with me", "Recipe videos", "Hosting", "Kitchen basics", "Seasonal meals"];
