import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { authPlaceholder } from "@/lib/supabase";

export default function LoginPage() {
  return (
    <AuthShell title="Welcome back" subtitle="Sign in to your Root & Salt table.">
      <Input placeholder="Email address" type="email" />
      <Input placeholder="Password" type="password" />
      <Button type="button">Login with Supabase</Button>
      <p className="text-center text-xs text-charcoal/55">{authPlaceholder.signInMessage}</p>
      <Link className="text-center text-sm text-olive" href="/signup">Create an account</Link>
    </AuthShell>
  );
}

function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <section className="container grid min-h-[70vh] place-items-center py-16"><div className="w-full max-w-md rounded-lg bg-sand/55 p-6"><h1 className="editorial text-5xl">{title}</h1><p className="mt-3 text-sm text-charcoal/70">{subtitle}</p><div className="mt-6 grid gap-4">{children}</div></div></section>;
}
