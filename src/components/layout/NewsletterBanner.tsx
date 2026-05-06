import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function NewsletterBanner() {
  return (
    <section className="bg-olive py-14 text-warm">
      <div className="container grid gap-6 md:grid-cols-[1fr_420px] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] opacity-75">From our table to yours</p>
          <h2 className="editorial mt-3 text-4xl md:text-5xl">Letters from the coastal kitchen</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-warm/78">
            Recipes, slow kitchen notes, seasonal ideas, and nourishing rituals from Chanél.
          </p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row">
          <Input aria-label="Email address" className="bg-warm text-charcoal" placeholder="Email address" type="email" />
          <Button className="bg-charcoal hover:bg-sand hover:text-charcoal" type="button">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
