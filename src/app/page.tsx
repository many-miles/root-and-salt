import { AboutPreview } from "@/components/home/AboutPreview";
import { BrandEssence } from "@/components/home/BrandEssence";
import { FeaturedRecipes } from "@/components/home/FeaturedRecipes";
import { HeroSection } from "@/components/home/HeroSection";
import { JournalPreview } from "@/components/home/JournalPreview";
import { MembershipPreview } from "@/components/home/MembershipPreview";
import { NewsletterBanner } from "@/components/layout/NewsletterBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandEssence />
      <FeaturedRecipes />
      <MembershipPreview />
      <JournalPreview />
      <AboutPreview />
      <NewsletterBanner />
    </>
  );
}
