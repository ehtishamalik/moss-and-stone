import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import "@/styles/index.scss";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const satoshi = localFont({
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        satoshi.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col section-gap">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
