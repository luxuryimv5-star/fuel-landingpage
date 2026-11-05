"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col flex-1 bg-background text-foreground">
      <main className="flex-1 flex items-center justify-center px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-center"
        >
          <Image
            src="/img/logo.png"
            alt="FUEL logo"
            width={64}
            height={64}
            priority
            className="mx-auto mb-8 h-20 w-20"
          />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Coming Soon
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            FUEL is heading to the App Store soon. Enter your email below and
            we&rsquo;ll let you know the moment it&rsquo;s available for download.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent outline-none"
            />
            <Button size="lg">Notify Me</Button>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
