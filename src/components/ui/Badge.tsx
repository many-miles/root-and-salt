import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-olive/25 bg-warm/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-olive",
        className,
      )}
      {...props}
    />
  );
}
