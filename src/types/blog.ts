export type BlogCategory =
  | "Food stories"
  | "Coastal living"
  | "Hosting"
  | "Slow living"
  | "Kitchen notes"
  | "Wellness food"
  | "Behind Root & Salt";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: BlogCategory;
  image: string;
  date: string;
  author: string;
  isFeatured: boolean;
};
