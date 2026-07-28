import type {
  BenefitsCard,
  CategoryCard,
  ProductCard,
  TestimonialCard,
} from "@/types";

export const CATEGORY_GRID: CategoryCard[] = [
  {
    title: "Shalwar Kameez",
    description:
      "Traditional stitching with modern fitting and premium finishing.",
    link: "/shalwar-kameez",
    image: true,
  },
  {
    title: "Sherwani Tailoring",
    description: "Elegant wedding wear tailored to your exact measurements.",
    link: "/sherwani-tailoring",
    image: true,
  },
  {
    title: "Suit Tailoring",
    description: "Custom suits designed for business and special occasions.",
    link: "/suit-tailoring",
    image: true,
  },
  {
    title: "Waistcoat Tailoring",
    description: "Classic styles finished with precision and clean detailing.",
    link: "/waistcoat-tailoring",
    image: true,
  },
  {
    title: "Kurta Pajama",
    description: "Comfortable tailoring for everyday and festive occasions.",
    link: "/kurta-pajama",
    image: true,
  },
  {
    title: "Pant Tailoring",
    description: "Perfectly fitted trousers with quality craftsmanship.",
    link: "/pant-tailoring",
    image: false,
  },
];

export const PRODUCT_GRID: ProductCard[] = [
  {
    title: "Custom Shalwar Kameez",
    price: "PKR 2,000",
    image: true,
    link: "/custom-shalwar-kameez",
  },
  {
    title: "Sherwani Tailoring",
    price: "PKR 12,000",
    image: true,
    link: "/sherwani-tailoring",
  },
  {
    title: "Suit Tailoring",
    price: "PKR 8,500",
    image: true,
    link: "/suit-tailoring",
  },
];

export const TESTIMONIALS: TestimonialCard[] = [
  {
    testimonial: "Absolutely in love with stiching. Too classy, too elegant ✨️",
    name: "Muhammad Murtaza",
    image: "/images/testimonials/jane-doe.jpg",
  },
  {
    testimonial:
      "Very good excelent working two peice three peice all groom suits itemes bespok stithing master i have highly recomended for all groom stitch you favorate suites baba tailors",
    name: "Imran Sohail",
    image: "/images/testimonials/john-smith.jpg",
  },
  {
    testimonial:
      "this is one and only professional tailor in gujranwala best stitching master very good bespok three peice suite making",
    name: "Tanha Khan",
    image: "/images/testimonials/emily-johnson.jpg",
  },
];

export const BENEFITS: BenefitsCard[] = [
  {
    title: "Perfect Fit",
    descriptionStrong: "Every garment is tailored",
    description:
      " to your exact measurements, ensuring exceptional comfort, confidence, and a flawless fit every time.",
  },
  {
    title: "Fine Craftsmanship",
    descriptionStrong: "Every stitch is completed",
    description:
      " with precision and care, reflecting the experience and attention to detail behind our tailoring.",
  },
  {
    title: "Premium Finish",
    descriptionStrong: "From clean stitching",
    description:
      " to refined detailing, each garment is finished to the highest standards for lasting quality and style.",
  },
];

export const FOOTER = [
  {
    title: "SHOP",
    links: [
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "All", href: "/shop-all" },
      { name: "Tees", href: "/tees" },
      { name: "Bottoms", href: "/bottoms" },
      { name: "Outerwear", href: "/outerwear" },
      { name: "Headwear", href: "/headwear" },
    ],
  },
  {
    title: "BRAND",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  {
    title: "SOCIAL",
    links: [
      { name: "Facebook", href: "https://www.facebook.com" },
      { name: "Instagram", href: "https://www.instagram.com" },
      { name: "Twitter", href: "https://www.twitter.com" },
      { name: "Pinterest", href: "https://www.pinterest.com" },
    ],
  },
];

export const HERO_SLIDES = [
  {
    name: "Shalwar Kameez",
    description:
      "Expertly tailored shalwar kameez crafted to your exact measurements for lasting comfort, style, and a perfect fit.",
    price: "PKR 2,000",
  },
  {
    name: "Designer Shalwar Kameez",
    description:
      "Premium designer stitching with refined detailing and modern cuts, tailored for special occasions and everyday elegance.",
    price: "PKR 3,500",
  },
  {
    name: "Suit Tailoring",
    description:
      "Custom-made suits designed with precision craftsmanship, delivering a sharp fit for business and formal occasions.",
    price: "PKR 8,500",
  },
  {
    name: "Sherwani",
    description:
      "Elegant sherwanis tailored for weddings and celebrations, combining traditional craftsmanship with a flawless fit.",
    price: "PKR 12,000",
  },
  {
    name: "Waistcoat",
    description:
      "Classic and contemporary waistcoats stitched to complement your outfit with exceptional finishing and comfort.",
    price: "PKR 5,000",
  },
  {
    name: "Kurta Pajama",
    description:
      "Comfortable kurta pajama tailoring featuring clean stitching, premium finishing, and a fit made just for you.",
    price: "PKR 2,500",
  },
  {
    name: "Coat Tailoring",
    description:
      "Custom coats tailored with careful attention to detail, offering timeless style, comfort, and durability.",
    price: "PKR 7,500",
  },
  {
    name: "Pant Tailoring",
    description:
      "Perfectly fitted trousers tailored to your measurements with clean lines and superior craftsmanship.",
    price: "PKR 2,000",
  },
  {
    name: "Alterations",
    description:
      "Professional clothing alterations to improve fit, comfort, and appearance while preserving the original garment.",
    price: "From PKR 500",
  },
  {
    name: "Uniform Tailoring",
    description:
      "High-quality uniform stitching for schools, businesses, and organizations with reliable workmanship and timely delivery.",
    price: "From PKR 2,500",
  },
];
