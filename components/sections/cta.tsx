"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAProps {
  readonly sectionId?: string;
}

export function CTA({ sectionId = "cta" }: CTAProps) {
  return (
    <section
      id={sectionId}
      className="py-20 px-6 sm:py-28 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6"
        >
          Ready to save on every fill-up?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Link href="/coming-soon">
            <Button size="lg">
              Download on App Store <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
