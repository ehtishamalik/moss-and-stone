import type { CategoryCard, ProductCard, TestimonialCard } from "@/types";

export const CATEGORY_GRID: CategoryCard[] = [
  {
    title: "TEES",
    description: "Discover our range of stylish and comfortable clothing.",
    link: "/tees",
    image: true,
  },
  {
    title: "BOTTOMS",
    description: "Discover our range of stylish and comfortable clothing.",
    link: "/bottoms",
    image: true,
  },
  {
    title: "OUTERWEAR",
    description: "Discover our range of stylish and comfortable clothing.",
    link: "/outerwear",
    image: true,
  },
  {
    title: "HEADWEAR",
    description: "Discover our range of stylish and comfortable clothing.",
    link: "/headwear",
    image: true,
  },
  {
    title: "NEW ARRIVALS",
    description: "Discover our range of stylish and comfortable clothing.",
    link: "/new-arrivals",
    image: true,
  },
  {
    title: "SHOP ALL",
    description: "Discover our range of stylish and comfortable clothing.",
    link: "/shop-all",
    image: false,
  },
];

export const PRODUCT_GRID: ProductCard[] = [
  {
    title: "Rekaxed Cargo Pant",
    price: "$29.99",
    image: true,
    link: "/rekaxed-cargo-pant",
  },
  {
    title: "Structure Hoodie",
    price: "$49.99",
    image: true,
    link: "/structure-hoodie",
  },
  {
    title: "Heavyweight Crewneck Sweatshirt",
    price: "$89.99",
    image: true,
    link: "/heavyweight-crewneck-sweatshirt",
  },
];

export const TESTIMONIALS: TestimonialCard[] = [
  {
    testimonial:
      "Moss & Stone has completely changed my wardrobe. The quality is unmatched!",
    name: "Jane Doe",
    image: "/images/testimonials/jane-doe.jpg",
  },
  {
    testimonial:
      "I love the timeless designs and the comfort of their clothing. Highly recommend!",
    name: "John Smith",
    image: "/images/testimonials/john-smith.jpg",
  },
  {
    testimonial:
      "The customer service is fantastic, and the products are even better. I'm a loyal fan now!",
    name: "Emily Johnson",
    image: "/images/testimonials/emily-johnson.jpg",
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
