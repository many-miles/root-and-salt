import Link from "next/link";
import { BrandDivider } from "@/components/brand/BrandDivider";
import { Wordmark } from "@/components/brand/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-sand/45 py-12">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-7 text-charcoal/70">
              A coastal kitchen rooted in nourishment, connection, and the heart of home.
            </p>
          </div>
          <FooterColumn title="Kitchen" links={[["Recipes", "/recipes"], ["Videos", "/videos"], ["Membership", "/membership"]]} />
          <FooterColumn title="Story" links={[["Journal", "/journal"], ["About", "/about"], ["Contact", "/contact"]]} />
          <FooterColumn title="Legal" links={[["Privacy", "/privacy"], ["Terms", "/terms"], ["Refund policy", "/refund-policy"]]} />
        </div>
        <BrandDivider />
        <div className="flex flex-col justify-between gap-4 text-xs uppercase tracking-[0.14em] text-charcoal/55 md:flex-row">
          <p>Rooted in nourishment, seasoned by the sea.</p>
          <p>Jeffreys Bay, South Africa</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-olive">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-charcoal/70">
        {links.map(([label, href]) => (
          <Link className="transition hover:text-olive" href={href} key={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
