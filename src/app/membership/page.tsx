import type { Metadata } from "next";
import { FAQ } from "@/components/membership/FAQ";
import { MembershipBenefits } from "@/components/membership/MembershipBenefits";
import { PricingCards } from "@/components/membership/PricingCards";
import { TestimonialCards } from "@/components/membership/TestimonialCards";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Membership | Root & Salt",
  description: "Join the monthly Root & Salt recipe table.",
};

export default function MembershipPage() {
  return (
    <>
      <section className="soft-ring py-20">
        <div className="container max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-olive">
            Join the monthly table.
          </p>
          <h1 className="editorial mt-4 text-6xl md:text-8xl">
            Your monthly recipe table
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-charcoal/70">
            Access nourishing recipes, guided videos, seasonal collections, and
            slow kitchen rituals designed to bring people together.
          </p>
          <Button className="mt-8" href="#pricing">
            Choose your plan
          </Button>
        </div>
      </section>
      <section className="container py-16">
        <MembershipBenefits />
      </section>
      <section className="container py-16" id="pricing">
        <PricingCards />
      </section>
      <section className="container py-16">
        <h2 className="editorial mb-8 text-5xl">Kind words</h2>
        <TestimonialCards />
      </section>
      <section className="container py-16">
        <h2 className="editorial mb-8 text-5xl">Questions before you join</h2>
        <FAQ />
      </section>
    </>
  );
}
