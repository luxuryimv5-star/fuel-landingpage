"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Fuel,
  Clock,
  Award,
  Smartphone,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Feature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: React.ElementType;
}

interface FeaturesProps {
  readonly sectionId?: string;
}

const FEATURES: readonly Feature[] = [
  {
    id: "cheapest-prices",
    title: "Cheapest prices",
    description: "Real-time gas prices from nearby stations so you never overpay at the pump.",
    icon: Fuel,
  },
  {
    id: "safety-scoring",
    title: "Neighborhood safety",
    description: "Safety scores per station so you can choose the safest stop, not just the closest.",
    icon: ShieldCheck,
  },
  {
    id: "vehicle-matching",
    title: "Vehicle-matched fuel",
    description: "Stations filtered and ranked by your vehicle's fuel type requirements.",
    icon: Smartphone,
  },
  {
    id: "map-view",
    title: "Map-based discovery",
    description: "Find My iPhone style map view with pin-dropped stations clustered by location.",
    icon: MapPin,
  },
  {
    id: "distance-aware",
    title: "Distance awareness",
    description: "See exactly how far each station is from your current location.",
    icon: Clock,
  },
  {
    id: "verified-data",
    title: "Verified prices",
    description: "Price freshness validated within 24 hours so you know what you're seeing is current.",
    icon: Award,
  },
];

export function Features({ sectionId = "features" }: FeaturesProps) {
  return (
    <section
      id={sectionId}
      className="py-20 px-6 sm:py-28 lg:py-32 bg-background"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            id="features-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Everything you need to fuel smarter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Real-time pricing, vehicle matching, and safety scoring — designed
            for drivers, not just stations.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + FEATURES.indexOf(feature) * 0.05, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card className="group-hover:border-border/50 transition-colors">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-base font-semibold">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
