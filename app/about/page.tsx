import BenefitsRow from "@/components/blocks/BenefitsRow";
import FeatureBannerCard from "@/components/blocks/FeatureBannerCard";
import NewsletterCTA from "@/components/blocks/NewsletterCTA";
import MediumImpactHero from "@/components/heros/MediumImpact";

export default function About() {
  return (
    <>
      <MediumImpactHero />

      <FeatureBannerCard variant="card">
        <h2 className="mb-5">
          Truly <em>Transparent</em>
        </h2>
        <div className="space-y-2.5">
          <p>
            <strong>Moss &amp; Stone</strong>, quiet luxury for the modern
            minimalist. Inspired by the resilience of the natural world, our
            garments are designed, engineered, and crafted to outlast the trend
            cycle.
          </p>
          <p>
            We’re proud to reject the industry standard of "fast and cheap."
            Instead, we support a supply chain that honors the earth—using only{" "}
            <strong>GOTS certified organic cotton</strong> and{" "}
            <strong>eliminating 100% of plastic</strong> from our process.
          </p>
          <p>
            A textured, timeless, and versatile wardrobe to ground your everyday
            life. Experience the difference in our materials:
          </p>
        </div>
      </FeatureBannerCard>

      <FeatureBannerCard variant="card" imagePosition="right">
        <h2 className="mb-5">
          From The <em>Ground Up</em>
        </h2>
        <div className="space-y-2.5">
          <p>
            <strong>The Story:</strong> We were tired of clothing that felt
            disposable. The industry was shouting "faster, cheaper, newer," but
            we were looking for <strong>silence</strong>. We wanted garments
            that felt <strong>substantial</strong>—pieces that didn't just cover
            you, but grounded you.
          </p>
          <p>
            Our early days were spent obsessing over what others overlooked. We
            tested countless fabrics, rejecting anything synthetic or lifeless.
            We looked to nature—
            <strong>the resilience of stone, the softness of moss</strong>
            —and realized that the best design had already been done by the{" "}
            <strong>earth</strong>.
          </p>
          <p>
            We chose the hard path. Sourcing{" "}
            <strong>GOTS-certified cotton</strong> and{" "}
            <strong>eliminating plastics</strong> wasn't the easiest way to
            start a business, but it was the only way that felt honest.
          </p>
          <p>
            Today, we remain a small team dedicated to that original purpose. We
            don't chase trends. <strong>We build archives.</strong>
          </p>
        </div>
      </FeatureBannerCard>

      <BenefitsRow />
      <NewsletterCTA />
    </>
  );
}
