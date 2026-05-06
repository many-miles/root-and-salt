"use client";

import { useState } from "react";
import type { Video } from "@/types/video";
import { videoCategories } from "@/data/videos";
import { Modal } from "@/components/ui/Modal";
import { RecipeFilters } from "@/components/recipes/RecipeFilters";
import { VideoCard } from "./VideoCard";
import { VideoEmbed } from "./VideoEmbed";

export function VideoGrid({ videos }: { videos: Video[] }) {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<Video | null>(null);
  const filtered =
    category === "All"
      ? videos
      : videos.filter((video) => video.category === category);

  return (
    <div>
      <RecipeFilters
        active={category}
        categories={["All", ...videoCategories]}
        onChange={setCategory}
      />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {filtered.map((video) => (
          <VideoCard
            key={video.id}
            onPlayAction={(video) => setActive(video)}
            video={video}
          />
        ))}
      </div>
      <Modal onCloseAction={() => setActive(null)} open={Boolean(active)}>
        {active && <VideoEmbed src={active.embedUrl} title={active.title} />}
      </Modal>
    </div>
  );
}
