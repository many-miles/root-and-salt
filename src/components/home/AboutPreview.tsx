import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="bg-sand/45 py-20">
      <div className="container grid gap-10 md:grid-cols-[0.9fr_1fr] md:items-center">
        <div className="relative aspect-4/5 overflow-hidden rounded-lg">
          <Image
            alt=""
            className="image-treatment object-cover"
            fill
            src="/images/lifestyle/chanel-kitchen.svg"
          />
        </div>
        <div>
          <p className="script text-2xl text-olive">by Chanél</p>
          <h2 className="editorial mt-2 text-5xl">
            A kitchen shaped by family and coast.
          </h2>
          <p className="mt-5 leading-8 text-charcoal/70">
            Inspired by her dad Vincent and coastal life in Jeffreys Bay, Chanél
            cooks for the place where food becomes connection: the table.
          </p>
          <Button className="mt-7" href="/about" variant="secondary">
            Read the story
          </Button>
        </div>
      </div>
    </section>
  );
}
