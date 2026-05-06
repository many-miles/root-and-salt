import { Check } from "lucide-react";
import { pricing } from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricing.map((tier) => (
        <Card className={cn("p-6", tier.isFeatured && "border-olive bg-olive text-warm")} key={tier.id}>
          <p className={cn("text-xs uppercase tracking-[0.16em]", tier.isFeatured ? "text-warm/70" : "text-olive")}>{tier.name}</p>
          <div className="mt-5 flex items-end gap-2">
            <span className="editorial text-5xl">{tier.price}</span>
            <span className={cn("pb-2 text-sm", tier.isFeatured ? "text-warm/65" : "text-charcoal/60")}>{tier.interval}</span>
          </div>
          <p className={cn("mt-4 text-sm leading-7", tier.isFeatured ? "text-warm/78" : "text-charcoal/70")}>{tier.description}</p>
          <ul className="mt-6 grid gap-3 text-sm">
            {tier.features.map((feature) => (
              <li className="flex gap-2" key={feature}><Check size={16} /> {feature}</li>
            ))}
          </ul>
          <Button className={cn("mt-7 w-full", tier.isFeatured && "bg-warm text-charcoal hover:bg-charcoal hover:text-warm")} href={`/membership?plan=${tier.id}`}>
            {tier.cta}
          </Button>
          <p className={cn("mt-3 text-center text-xs", tier.isFeatured ? "text-warm/60" : "text-charcoal/50")}>Stripe Checkout placeholder</p>
        </Card>
      ))}
    </div>
  );
}
