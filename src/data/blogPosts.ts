import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "story-behind-root-and-salt",
    title: "The Story Behind Root & Salt",
    excerpt: "A coastal kitchen shaped by family, memory, and the quiet rituals of feeding people well.",
    content: [
      "Root & Salt began with a table, a coastline, and the kind of food that says stay a little longer. Chanél created the brand as a tribute to the homes that shape us, and especially to her dad Vincent, whose warmth still seasons the way she cooks.",
      "The root is nourishment: food that grounds the body and brings people back to themselves. The salt is the sea: flavour, preservation, memory, and the coastal rhythm of Jeffreys Bay.",
      "This is not food for performance. It is food for connection, made slowly enough to notice the people around you."
    ],
    category: "Behind Root & Salt",
    image: "/images/journal/story.svg",
    date: "2026-03-02",
    author: "Chanél",
    isFeatured: true
  },
  {
    id: "b2",
    slug: "why-food-feels-like-home",
    title: "Why Food Feels Like Home",
    excerpt: "On the emotional geography of meals, memory, and the recipes we return to.",
    content: [
      "Food remembers. It remembers the hands that made it, the rooms it was served in, and the ordinary days that became family stories without anyone trying.",
      "At Root & Salt, home is not a perfect table. It is the feeling of being fed with care."
    ],
    category: "Food stories",
    image: "/images/journal/home.svg",
    date: "2026-03-12",
    author: "Chanél",
    isFeatured: false
  },
  {
    id: "b3",
    slug: "slow-morning-jeffreys-bay",
    title: "A Slow Morning in Jeffreys Bay",
    excerpt: "Coffee, sea wind, citrus on the counter, and breakfast without rushing.",
    content: [
      "There is a softness to coastal mornings before the day has made demands. The kitchen is quiet. The kettle clicks. The first light lands on the counter.",
      "A slow morning meal does not need to be elaborate. It needs one good thing, made with attention."
    ],
    category: "Coastal living",
    image: "/images/journal/jeffreys-bay.svg",
    date: "2026-03-24",
    author: "Chanél",
    isFeatured: false
  },
  {
    id: "b4",
    slug: "root-and-salt-pantry",
    title: "The Root & Salt Pantry",
    excerpt: "The olive oil, grains, herbs, citrus, and sea salt that hold a week of good meals together.",
    content: [
      "A calm pantry is not about having everything. It is about having enough of the right things to cook intuitively.",
      "Olive oil, lemons, lentils, herbs, yoghurt, good salt, grains, and a few seasonal vegetables can become breakfast, lunch, supper, and something to share."
    ],
    category: "Kitchen notes",
    image: "/images/journal/pantry.svg",
    date: "2026-04-02",
    author: "Chanél",
    isFeatured: false
  },
  {
    id: "b5",
    slug: "host-without-stress",
    title: "How to Host Without the Stress",
    excerpt: "A gentler way to gather, with food that lets you stay present at your own table.",
    content: [
      "Hosting becomes lighter when the food is generous rather than complicated. Choose one anchor dish, one bright salad, bread, and something sweet or simple to finish.",
      "People remember how it felt to be welcomed more than they remember whether every plate matched."
    ],
    category: "Hosting",
    image: "/images/journal/hosting.svg",
    date: "2026-04-14",
    author: "Chanél",
    isFeatured: false
  },
  {
    id: "b6",
    slug: "cooking-with-what-you-have",
    title: "Cooking With What You Have",
    excerpt: "A practical note on making nourishing meals from a few honest ingredients.",
    content: [
      "The best kitchen skill is learning to see possibility. A tin of lentils, the last herbs, a spoon of yoghurt, and a lemon can become a meal that feels cared for.",
      "Cooking this way builds confidence. It also makes the kitchen feel less like a place of rules and more like a place of rhythm."
    ],
    category: "Slow living",
    image: "/images/journal/cooking.svg",
    date: "2026-04-26",
    author: "Chanél",
    isFeatured: false
  }
];

export const blogCategories = [
  "Food stories",
  "Coastal living",
  "Hosting",
  "Slow living",
  "Kitchen notes",
  "Wellness food",
  "Behind Root & Salt"
];
