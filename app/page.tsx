import BenefitsRow from "@/components/blocks/BenefitsRow";
import CategoryGrid from "@/components/blocks/CategoryGrid";
import FeatureBannerCard from "@/components/blocks/FeatureBannerCard";
import FeaturedProductsGrid from "@/components/blocks/FeaturedProductsGrid";
import NewsletterCTA from "@/components/blocks/NewsletterCTA";
import TestimonialsSlider from "@/components/blocks/TestimonialsSlider";
import HighImpactHero from "@/components/heros/HighImpact";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <HighImpactHero />
      <FeatureBannerCard fullWidth>
        <h1 className="mb-5">
          Soft as <em>Moss</em> <br /> Durable as <em>Stone</em>
        </h1>
        <p className="mb-10">
          We reject the temporary. In a world of fast trends, we choose the slow
          path. Moss & Stone is built on a foundation of earth-toned essentials,
          crafted from organic fibers designed to weather the seasons with you.
          Quiet luxury isn't about the price tag—it's about the feeling of
          wearing something real.
        </p>

        <Button>Read Story</Button>
      </FeatureBannerCard>
      <CategoryGrid />
      <FeaturedProductsGrid />
      <TestimonialsSlider />
      <BenefitsRow />
      <NewsletterCTA />
    </>
  );
}
