import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About | Root & Salt",
  description: "Meet Chanél and the story behind Root & Salt."
};

export default function AboutPage() {
  return (
    <section className="container py-16">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1fr] md:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
          <Image alt="" className="image-treatment object-cover" fill src="/images/lifestyle/chanel-kitchen.svg" />
        </div>
        <div>
          <p className="script text-2xl text-olive">by Chanél</p>
          <h1 className="editorial mt-2 text-6xl md:text-7xl">A coastal kitchen with family at its root.</h1>
          <div className="mt-6 grid gap-5 leading-8 text-charcoal/72">
            <p>Root & Salt is a coastal kitchen by Chanél, inspired by her dad Vincent, the rhythm of Jeffreys Bay, and the kind of food that makes people feel held.</p>
            <p>The brand is rooted in nourishment, connection, and the heart of home. It is healthy but comforting, thoughtful but never fussy, and always designed for sharing.</p>
            <p>From slow breakfasts to Sunday table suppers, Root & Salt celebrates food as a way back to each other.</p>
          </div>
          <Button className="mt-8" href="/membership">Join the table</Button>
        </div>
      </div>
    </section>
  );
}
