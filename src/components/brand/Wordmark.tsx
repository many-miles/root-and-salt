import Link from "next/link";

export function Wordmark() {
  return (
    <Link className="inline-flex flex-col leading-none" href="/">
      <span className="editorial text-2xl text-charcoal">Root & Salt</span>
      <span className="script mt-1 text-sm text-olive">by Chanél</span>
    </Link>
  );
}
