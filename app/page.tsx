import type { Metadata } from "next";
import BenefitsRow from "@/components/blocks/BenefitsRow";
import CategoryGrid from "@/components/blocks/CategoryGrid";
import FeatureBannerCard from "@/components/blocks/FeatureBannerCard";
import FeaturedProductsGrid from "@/components/blocks/FeaturedProductsGrid";
import NewsletterCTA from "@/components/blocks/NewsletterCTA";
import TestimonialsSlider from "@/components/blocks/TestimonialsSlider";
import HighImpactHero from "@/components/heros/HighImpact";
import { Link } from "@/components/ui/link";
import { SERVER_URL } from "@/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SERVER_URL),
  title: "Baba Tailors | Premium Men's Tailoring in Gujranwala",
  description:
    "Experience premium men's tailoring at Baba Tailors. From custom shalwar kameez and business suits to wedding sherwanis, every garment is crafted with precision, perfect fitting, and exceptional craftsmanship.",

  keywords: [
    "Baba Tailors",
    "men's tailor",
    "tailor in Gujranwala",
    "custom tailoring",
    "shalwar kameez tailoring",
    "custom suits",
    "wedding sherwani",
    "premium tailoring",
    "men's fashion",
    "perfect fit",
  ],

  alternates: {
    canonical: SERVER_URL,
  },

  openGraph: {
    title: "Baba Tailors | Premium Men's Tailoring",
    description:
      "Traditional craftsmanship meets modern tailoring. Custom-made garments with precision, premium finishing, and the perfect fit.",
    url: SERVER_URL,
    siteName: "Baba Tailors",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SERVER_URL}/images/alteration.jpg`,
        width: 1200,
        height: 630,
        alt: "Baba Tailors - Premium Men's Tailoring",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Baba Tailors | Premium Men's Tailoring",
    description:
      "Custom tailoring for shalwar kameez, suits, and sherwanis with exceptional craftsmanship.",
    images: [`${SERVER_URL}/images/alteration.jpg`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

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

        <Link href="/about" variant="outline" showArrow>
          Learn More
        </Link>
      </FeatureBannerCard>

      <CategoryGrid />
      <FeaturedProductsGrid />
      <TestimonialsSlider />
      <BenefitsRow />
      <NewsletterCTA />
    </>
  );
}
