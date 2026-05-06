"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Tabs({
  tabs,
}: {
  tabs: { label: string; content: React.ReactNode }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-charcoal/10 pb-3">
        {tabs.map((tab, index) => (
          <button
            className={cn(
              "rounded-full px-4 py-2 text-sm transition",
              active === index
                ? "bg-olive text-warm"
                : "bg-sand/60 text-charcoal",
            )}
            key={tab.label}
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-6">{tabs[active].content}</div>
    </div>
  );
}
