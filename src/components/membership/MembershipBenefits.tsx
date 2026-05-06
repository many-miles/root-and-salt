import {
  BookOpen,
  Download,
  Leaf,
  ListChecks,
  PlayCircle,
  Sparkles,
} from "lucide-react";

const benefits = [
  ["Weekly recipes", BookOpen],
  ["Recipe videos", PlayCircle],
  ["Meal plans", ListChecks],
  ["Grocery lists", Leaf],
  ["Seasonal collections", Sparkles],
  ["Downloadable recipe PDFs", Download],
];

export function MembershipBenefits() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map(([label, Icon]) => (
        <div
          className="rounded-lg border border-charcoal/10 bg-warm p-5"
          key={label as string}
        >
          <Icon className="text-olive" size={22} />
          <h3 className="mt-4 font-medium">{label as string}</h3>
          <p className="mt-2 text-sm leading-6 text-charcoal/65">
            Designed to make the week feel calmer, warmer, and easier to share.
          </p>
        </div>
      ))}
    </div>
  );
}
