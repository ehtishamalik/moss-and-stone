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
          Crafted with <em>Care</em>
        </h1>
        <p className="mb-10">
          Every stitch reflects years of experience and dedication. Baba Tailors
          combines traditional craftsmanship with modern tailoring to deliver
          garments that fit perfectly and look exceptional.
        </p>

        <Button variant="outline" showArrow>
          Learn More
        </Button>
      </FeatureBannerCard>

      <CategoryGrid />
      <FeaturedProductsGrid />
      <TestimonialsSlider />
      <BenefitsRow />
      <NewsletterCTA />
    </>
  );
}
