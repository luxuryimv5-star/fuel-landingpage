import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "FUEL";
const siteUrl = "https://fuel-us.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | FUEL",
    default: "FUEL — Find cheaper, safer gas stations nearby",
  },
  description:
    "FUEL helps drivers find the cheapest, safest, and most vehicle-appropriate gas stations nearby. Real-time prices, vehicle matching, and neighborhood safety scoring in one clean map.",
  keywords: [
    "fuel app",
    "gas prices",
    "cheapest gas stations",
    "gas station finder",
    "vehicle fuel type",
    "gas station safety",
    "Find My iPhone for gas",
    "fuel savings",
  ],
  authors: [{ name: "FUEL Team", url: siteUrl }],
  creator: "FUEL Team",
  publisher: "FUEL Team",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "FUEL — Find cheaper, safer gas stations nearby",
    description:
      "FUEL helps drivers find the cheapest, safest, and most vehicle-appropriate gas stations nearby.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/img/logo.png",
        width: 400,
        height: 400,
        alt: "FUEL logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUEL — Find cheaper, safer gas stations nearby",
    description:
      "FUEL helps drivers find the cheapest, safest, and most vehicle-appropriate gas stations nearby.",
    images: ["/img/logo.png"],
    creator: "@fuelapp",
    site: "@fuelapp",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
