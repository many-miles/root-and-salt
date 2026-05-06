import { Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PremiumLock() {
  return (
    <div className="lock-grid rounded-lg border border-olive/20 bg-sand/45 p-8 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-olive text-warm"><Lock size={18} /></div>
      <h2 className="editorial mt-4 text-3xl">Members gather here</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-charcoal/70">
        This premium recipe includes the guided video, notes from Chanél, printable PDF, and related meal plan.
      </p>
      <Button className="mt-5" href="/membership">Join the membership</Button>
    </div>
  );
}
