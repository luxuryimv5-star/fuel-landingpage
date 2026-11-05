"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface HeroProps {
  readonly sectionId?: string;
}

export function Hero({ sectionId = "hero" }: HeroProps) {
  return (
    <section
      id={sectionId}
      className="relative flex flex-col items-center justify-center pt-20 pb-24 px-6 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-32 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <span className="inline-flex self-start w-fit items-center gap-2 rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground uppercase tracking-wider">
            Coming Soon to the App Store
          </span>
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight"
          >
            Find cheaper, safer gas<span className="block lg:hidden"></span>
            <br />
            stations nearby.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            FUEL helps drivers find the cheapest, safest, and most
            vehicle-appropriate gas stations nearby — styled after Find My
            iPhone, but for gas stations. Real-time prices, vehicle matching,
            and neighborhood safety scoring in one clean map.
          </motion.p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/coming-soon">
              <Button size="lg">
                Download on App Store <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
            >
              How it works
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-1 bg-muted/20 rounded-2xl blur opacity-30 animate-pulse" />
            <Image
              src="/img/logo.png"
              alt="FUEL app preview on iPhone"
              width={400}
              height={600}
              className="relative rounded-2xl border border-border shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <span>Find stations near you</span>
        </div>
        <Separator orientation="vertical" className="h-4" />
        <div className="flex items-center gap-2">
          <span>Vehicle-matched pricing</span>
        </div>
        <Separator orientation="vertical" className="h-4" />
        <div className="flex items-center gap-2">
          <span>Neighborhood safety scoring</span>
        </div>
      </div>
    </section>
  );
}
