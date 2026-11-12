import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Team } from "@/components/sections/team";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "FUEL — Find cheaper, safer gas stations nearby",
  description:
    "FUEL helps drivers find the cheapest, safest, and most vehicle-appropriate gas stations nearby. Real-time prices, vehicle matching, and neighborhood safety scoring in one clean map.",
  openGraph: {
    title: "FUEL — Find cheaper, safer gas stations nearby",
    description:
      "FUEL helps drivers find the cheapest, safest, and most vehicle-appropriate gas stations nearby.",
    type: "website",
    url: "https://fuel-us.com",
  },
};

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Team />
        <CTA />
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FUEL",
            url: "https://fuel-us.com",
            logo: "https://fuel-us.com/img/logo.png",
            description:
              "FUEL helps drivers find the cheapest, safest, and most vehicle-appropriate gas stations nearby.",
            sameAs: [
              "https://github.com/fuelapp",
              "https://twitter.com/fuelapp",
              "https://instagram.com/fuelapp",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              availableLanguage: "en",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FUEL",
            url: "https://fuel-us.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://fuel-us.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}
