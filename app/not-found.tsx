import type { Metadata } from "next";
import { Link } from "@/components/ui/link";

export const metadata: Metadata = {
  title: "Page Not Found | Baba Tailors",
  description:
    "The page you're looking for doesn't exist or may have been moved. Visit Baba Tailors to explore our premium men's tailoring services, custom suits, shalwar kameez, and wedding sherwanis.",

  robots: {
    index: false,
    follow: false,
    nocache: true,
  },

  openGraph: {
    title: "Page Not Found | Baba Tailors",
    description:
      "The requested page could not be found. Return to Baba Tailors to discover premium men's tailoring and custom-made garments.",
    url: "https://www.babatailors.com/404",
    siteName: "Baba Tailors",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/alteration.jpg",
        width: 1200,
        height: 630,
        alt: "Baba Tailors - Page Not Found",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | Baba Tailors",
    description:
      "The page you're looking for could not be found. Visit Baba Tailors for premium men's tailoring.",
    images: ["/images/alteration.jpg"],
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full pt-32">
      <h1>404</h1>
      <h2 className="mb-2.5">Page Not Found</h2>
      <p className="mb-10">The page you are looking for does not exist.</p>
      <Link href="/" variant="outline" showArrow>
        Back To Home
      </Link>
    </div>
  );
}
