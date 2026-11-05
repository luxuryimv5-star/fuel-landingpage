import type { Metadata } from "next";
import { Navbar } from "@/components/nav/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Team } from "@/components/sections/team";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "FUEL — Find cheaper, safer gas stations nearby",
  description:
    "FUEL helps drivers find the cheapest, safest, and most vehicle-appropriate gas stations nearby. Real-time prices, vehicle matching, and neighborhood safety scoring in one clean map.",
  openGraph: {
    title: "FUEL — Find cheaper, safer gas stations nearby",
    description:
      "FUEL helps drivers find the cheapest, safest, and most vehicle-appropriate gas stations nearby.",
    type: "website",
    url: "https://fuelapp.com",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Team />
        <CTA />
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FUEL",
            url: "https://fuelapp.com",
            logo: "https://fuelapp.com/img/logo.png",
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
            url: "https://fuelapp.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://fuelapp.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </div>
  );
}
