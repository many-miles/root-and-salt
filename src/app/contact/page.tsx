import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export const metadata: Metadata = {
  title: "Contact | Root & Salt",
  description: "Contact Root & Salt in Jeffreys Bay, South Africa.",
};

export default function ContactPage() {
  return (
    <section className="container grid gap-10 py-16 md:grid-cols-[0.8fr_1fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-olive">
          Jeffreys Bay, South Africa
        </p>
        <h1 className="editorial mt-4 text-6xl">Contact</h1>
        <p className="mt-5 leading-8 text-charcoal/70">
          For collaborations, member questions, or a note from your kitchen to
          ours.
        </p>
        <div className="mt-8 grid gap-2 text-sm text-charcoal/70">
          <p>Email: hello@rootandsalt.co.za</p>
          <p>Instagram: @rootandsalt</p>
          <p>TikTok: @rootandsalt</p>
        </div>
      </div>
      <form className="grid gap-4 rounded-lg bg-sand/55 p-6">
        <Input placeholder="Your name" />
        <Input placeholder="Email address" type="email" />
        <textarea
          className="min-h-40 rounded-lg border border-charcoal/15 bg-warm p-4 text-sm outline-none focus:border-olive"
          placeholder="Your message"
        />
        <Button type="button">Send message</Button>
      </form>
    </section>
  );
}
