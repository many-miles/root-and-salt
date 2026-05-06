import { Button } from "@/components/ui/Button";
import { MembershipBenefits } from "@/components/membership/MembershipBenefits";

export function MembershipPreview() {
  return (
    <section className="py-20">
      <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-olive">
            Join the monthly table.
          </p>
          <h2 className="editorial mt-3 text-5xl">
            Your recipe home by the sea.
          </h2>
          <p className="mt-5 leading-8 text-charcoal/70">
            Access nourishing recipes, guided videos, seasonal collections, and
            slow kitchen rituals designed to bring people together.
          </p>
          <Button className="mt-7" href="/membership">
            View membership
          </Button>
        </div>
        <MembershipBenefits />
      </div>
    </section>
  );
}
