export type CategoryCard = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export type ProductCard = {
  title: string;
  price: string;
  image: string;
  link: string;
};

export type TestimonialCard = {
  testimonial: string;
  name: string;
  image: string | null;
};

export type BenefitsCard = {
  title: string;
  descriptionStrong: string;
  description: string;
};
