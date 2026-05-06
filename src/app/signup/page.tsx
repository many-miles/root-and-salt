import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function SignupPage() {
  return (
    <section className="container grid min-h-[70vh] place-items-center py-16">
      <div className="w-full max-w-md rounded-lg bg-sand/55 p-6">
        <h1 className="editorial text-5xl">Join Root & Salt</h1>
        <p className="mt-3 text-sm text-charcoal/70">
          Create a Supabase-backed member account placeholder.
        </p>
        <div className="mt-6 grid gap-4">
          <Input placeholder="Name" />
          <Input placeholder="Email address" type="email" />
          <Input placeholder="Password" type="password" />
          <Button type="button">Create account</Button>
          <Link className="text-center text-sm text-olive" href="/login">
            Already have an account?
          </Link>
        </div>
      </div>
    </section>
  );
}
