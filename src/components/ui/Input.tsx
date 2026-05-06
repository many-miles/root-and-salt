import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-full border border-charcoal/15 bg-warm px-4 text-sm outline-none transition placeholder:text-salt focus:border-olive",
        className,
      )}
      {...props}
    />
  );
}
