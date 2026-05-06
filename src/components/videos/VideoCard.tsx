"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import type { Video } from "@/types/video";
import { Badge } from "@/components/ui/Badge";

export function VideoCard({ video, onPlay }: { video: Video; onPlay: (video: Video) => void }) {
  return (
    <button className="group overflow-hidden rounded-lg border border-charcoal/10 bg-warm text-left shadow-soft transition hover:-translate-y-1" onClick={() => onPlay(video)}>
      <div className="relative aspect-video overflow-hidden">
        <Image alt="" className="image-treatment object-cover transition duration-500 group-hover:scale-105" fill src={video.thumbnail} />
        <span className="absolute inset-0 grid place-items-center bg-charcoal/22 text-warm"><Play size={34} /></span>
        <Badge className="absolute left-4 top-4 bg-warm/90">{video.isPremium ? "Members" : "Free"}</Badge>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-olive">{video.category} · {video.duration}</p>
        <h3 className="editorial mt-2 text-2xl">{video.title}</h3>
        <p className="mt-2 text-sm leading-6 text-charcoal/68">{video.description}</p>
      </div>
    </button>
  );
}
