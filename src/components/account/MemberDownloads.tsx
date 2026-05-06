import { Download } from "lucide-react";

export function MemberDownloads() {
  return (
    <section>
      <h2 className="editorial text-4xl">Member downloads</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {["May meal plan", "Coastal grocery list", "Sunday table menu"].map((item) => (
          <button className="flex items-center justify-between rounded-lg border border-charcoal/10 bg-warm p-5 text-left" key={item}>
            <span>{item}</span>
            <Download className="text-olive" size={18} />
          </button>
        ))}
      </div>
    </section>
  );
}
