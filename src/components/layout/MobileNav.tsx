"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const links = [
  ["Membership", "/membership"],
  ["Recipes", "/recipes"],
  ["Journal", "/journal"],
  ["Videos", "/videos"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button aria-label="Open navigation" className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/15" onClick={() => setOpen(true)}>
        <Menu size={18} />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-warm p-6">
          <div className="flex justify-end">
            <button aria-label="Close navigation" className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/15" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <nav className="mt-10 grid gap-5 editorial text-4xl">
            {links.map(([label, href]) => (
              <Link href={href} key={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
          <Button className="mt-10 w-full" href="/membership">
            Join the membership
          </Button>
        </div>
      )}
    </div>
  );
}
