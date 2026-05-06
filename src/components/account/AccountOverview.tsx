import { Button } from "@/components/ui/Button";

export function AccountOverview() {
  return (
    <section className="rounded-lg bg-sand/55 p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-olive">Member dashboard</p>
      <h1 className="editorial mt-3 text-5xl">Welcome back to the table</h1>
      <p className="mt-4 text-charcoal/70">Subscription status: <strong>Free placeholder</strong></p>
      <Button className="mt-6" href="/membership">Upgrade membership</Button>
    </section>
  );
}
