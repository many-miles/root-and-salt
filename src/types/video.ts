import type { VideoProvider } from "./recipe";

export type VideoCategory = "Cook with me" | "Recipe videos" | "Hosting" | "Kitchen basics" | "Seasonal meals";

export type Video = {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  thumbnail: string;
  provider: VideoProvider;
  embedUrl: string;
  isPremium: boolean;
  duration: string;
};
