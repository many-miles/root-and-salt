import { OliveBranchIcon } from "@/components/brand/OliveBranchIcon";
import { WaveIcon } from "@/components/brand/WaveIcon";

export function BrandEssence() {
  return (
    <section className="py-20">
      <div className="container grid gap-8 md:grid-cols-[0.85fr_1fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-olive">
            Simple food. Deep connection.
          </p>
          <h2 className="editorial mt-4 text-5xl md:text-6xl">
            Where food feels like home.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-sand/60 p-6">
            <OliveBranchIcon className="text-olive" />
            <h3 className="editorial mt-5 text-3xl">Root</h3>
            <p className="mt-3 text-sm leading-7 text-charcoal/70">
              Nourishment, grounding, family memory, and the meals that bring us
              back to ourselves.
            </p>
          </div>
          <div className="rounded-lg bg-sand/60 p-6">
            <WaveIcon className="text-olive" />
            <h3 className="editorial mt-5 text-3xl">Salt</h3>
            <p className="mt-3 text-sm leading-7 text-charcoal/70">
              Ocean, flavour, preservation, connection, and the coastal rhythm
              of Jeffreys Bay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
