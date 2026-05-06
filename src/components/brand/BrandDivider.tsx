import { WaveIcon } from "./WaveIcon";

export function BrandDivider() {
  return (
    <div className="my-10 flex items-center gap-5 text-olive/70">
      <div className="h-px flex-1 bg-charcoal/10" />
      <WaveIcon />
      <div className="h-px flex-1 bg-charcoal/10" />
    </div>
  );
}
