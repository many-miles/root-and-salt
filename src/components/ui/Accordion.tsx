"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-charcoal/10 rounded-lg border border-charcoal/10 bg-warm">
      {items.map((item, index) => (
        <div key={item.question}>
          <button className="flex w-full items-center justify-between gap-4 p-5 text-left" onClick={() => setOpen(open === index ? -1 : index)}>
            <span className="font-medium">{item.question}</span>
            <ChevronDown className={cn("shrink-0 transition", open === index && "rotate-180")} size={18} />
          </button>
          {open === index && <p className="px-5 pb-5 text-sm leading-7 text-charcoal/70">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
