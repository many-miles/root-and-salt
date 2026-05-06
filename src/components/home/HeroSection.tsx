import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-charcoal text-warm">
      <Image
        alt=""
        className="image-treatment object-cover opacity-72"
        fill
        priority
        src="/images/brand/coastal-table.svg"
      />
      <div className="absolute inset-0 bg-linear-to-r from-charcoal/70 via-charcoal/30 to-transparent" />
      <div className="container relative flex min-h-[78vh] items-center py-20">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-warm/72">
            Rooted in nourishment, seasoned by the sea.
          </p>
          <h1 className="editorial mt-5 text-7xl md:text-8xl">Root & Salt</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-warm/82">
            A coastal kitchen rooted in nourishment, connection, and the heart
            of home.
          </p>
          <p className="mt-4 text-warm/70">
            Recipes, videos, meal inspiration, and kitchen stories from a
            coastal home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/membership">Join the membership</Button>
            <Button
              className="border-warm/50 text-warm hover:border-warm hover:text-warm"
              href="/recipes"
              variant="secondary"
            >
              Explore recipes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
