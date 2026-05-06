import { AccountOverview } from "@/components/account/AccountOverview";
import { MemberDownloads } from "@/components/account/MemberDownloads";
import { SavedRecipes } from "@/components/account/SavedRecipes";
import { videos } from "@/data/videos";
import { VideoGrid } from "@/components/videos/VideoGrid";

export default function AccountPage() {
  return (
    <section className="container grid gap-12 py-16">
      <AccountOverview />
      <SavedRecipes />
      <MemberDownloads />
      <section>
        <h2 className="editorial text-4xl">Continue watching</h2>
        <div className="mt-6">
          <VideoGrid videos={videos.slice(0, 3)} />
        </div>
      </section>
      <button className="w-fit rounded-full border border-charcoal/20 px-5 py-3 text-sm">
        Logout placeholder
      </button>
    </section>
  );
}
