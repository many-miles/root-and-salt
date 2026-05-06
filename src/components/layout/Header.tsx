import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

const links = [
  ["Recipes", "/recipes"],
  ["Journal", "/journal"],
  ["Videos", "/videos"],
  ["About", "/about"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-warm/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium text-charcoal/75 md:flex">
          {links.map(([label, href]) => (
            <Link className="transition hover:text-olive" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button href="/login" variant="ghost">
            Login
          </Button>
          <Button href="/membership">Join</Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
