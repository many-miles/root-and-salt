import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  href?: never;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  href: string;
};

const styles = {
  primary: "bg-olive text-warm hover:bg-charcoal",
  secondary: "border border-charcoal/35 text-charcoal hover:border-olive hover:text-olive",
  ghost: "text-charcoal hover:bg-sand/60"
};

export function Button(props: ButtonProps | LinkButtonProps) {
  const { className, variant = "primary", children, ...rest } = props;
  const classes = cn(
    "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition",
    styles[variant],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link className={classes} href={props.href}>
        {children as ReactNode}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
