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
          Precision in Every <em>Stitch</em>
        </h2>
        <div className="space-y-2.5">
          <p>
            <strong>Baba Tailors</strong> brings together traditional
            craftsmanship and modern tailoring to create garments that fit
            perfectly and stand the test of time. Every stitch is{" "}
            <strong>carefully planned</strong>, measured, and finished to
            reflect our commitment to quality.
          </p>
          <p>
            We believe great tailoring is never rushed. From taking precise
            measurements to delivering a <strong>flawless finish</strong>, every
            garment is crafted with attention to detail using techniques refined
            through
            <strong>years of experience</strong>.
          </p>
          <p>
            Whether it's a daily wear shalwar kameez, a business suit, or a
            wedding sherwani, each piece is{" "}
            <strong>tailored to your measurements</strong>, style, and
            occasion—because true confidence begins with the perfect fit.
          </p>
        </div>
      </FeatureBannerCard>

      <FeatureBannerCard variant="card" imagePosition="right">
        <h2 className="mb-5">
          From The First <em>Stitch</em>
        </h2>
        <div className="space-y-2.5">
          <p>
            <strong>The Story:</strong> We started with a simple belief: great
            clothing should feel personal. In a world filled with ready-made
            garments and rushed production, we wanted to bring back the{" "}
            <strong>art of tailoring</strong>—where every measurement matters
            and every piece is <strong>made with purpose</strong>.
          </p>
          <p>
            Our early days were spent <strong>perfecting the details</strong>{" "}
            others overlooked. We focused on precise measurements, quality
            stitching, and timeless designs that{" "}
            <strong>deliver comfort and confidence</strong>. We learned that
            true craftsmanship is not about following trends, but about creating
            <strong>garments that feel right</strong> for the person wearing
            them.
          </p>
          <p>
            We chose the path of <strong>patience and precision</strong>. Taking
            the time to understand each customer, refine every stitch, and
            deliver exceptional finishing wasn't the easiest way to grow a
            business, but it was the only way that{" "}
            <strong>felt authentic</strong>.
          </p>
          <p>
            Today, <strong>Baba Tailors</strong> continues with the same
            dedication that started it all. We don't just stitch clothes.{" "}
            <strong>
              We create pieces that become part of your most memorable moments.
            </strong>
          </p>
        </div>
      </FeatureBannerCard>

      <BenefitsRow />
      <NewsletterCTA />
    </>
  );
}
