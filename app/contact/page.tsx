import type { Metadata } from "next";
import BenefitsRow from "@/components/blocks/BenefitsRow";
import ContactForm from "@/components/blocks/Contact";
import NewsletterCTA from "@/components/blocks/NewsletterCTA";
import LowImpactHero from "@/components/heros/LowImpact";
import { SERVER_URL } from "@/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SERVER_URL),
  title: "Contact Baba Tailors | Visit Our Tailoring Shop",
  description:
    "Visit Baba Tailors in Gujranwala for premium men's tailoring. Get custom-fitted shalwar kameez, suits, sherwanis, and expert tailoring services designed around your measurements.",

  keywords: [
    "Contact Baba Tailors",
    "tailor Gujranwala",
    "visit tailor",
    "custom tailoring",
    "men's tailor",
    "suit tailoring",
    "shalwar kameez tailoring",
    "wedding sherwani",
  ],

  alternates: {
    canonical: `${SERVER_URL}/contact`,
  },

  openGraph: {
    title: "Contact Baba Tailors",
    description:
      "Visit Baba Tailors and experience premium tailoring with precision fitting and exceptional craftsmanship.",
    url: `${SERVER_URL}/contact`,
    siteName: "Baba Tailors",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SERVER_URL}/images/alteration.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Baba Tailors",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Baba Tailors",
    description:
      "Book your visit and experience premium men's tailoring in Gujranwala.",
    images: [`${SERVER_URL}/images/alteration.jpg`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {
  return (
    <>
      <LowImpactHero />
      <ContactForm />
      <BenefitsRow />
      <NewsletterCTA />
    </>
  );
}
