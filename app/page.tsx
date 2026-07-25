import BenefitsRow from "@/components/blocks/BenefitsRow";
import CategoryGrid from "@/components/blocks/CategoryGrid";
import FeatureBannerCard from "@/components/blocks/FeatureBannerCard";
import FeaturedProductsGrid from "@/components/blocks/FeaturedProductsGrid";
import NewsletterCTA from "@/components/blocks/NewsletterCTA";
import TestimonialsSlider from "@/components/blocks/TestimonialsSlider";
import HighImpactHero from "@/components/heros/HighImpact";

export default function Home() {
  return (
    <>
      <HighImpactHero />
      <FeatureBannerCard />
      <CategoryGrid />
      <FeaturedProductsGrid />
      <TestimonialsSlider />
      <BenefitsRow />
      <NewsletterCTA />
    </>
  );
}
