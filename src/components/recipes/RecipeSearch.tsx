import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";

export function RecipeSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="relative block">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-salt"
        size={16}
      />
      <Input
        className="pl-10"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search recipes"
        value={value}
      />
    </label>
  );
}
