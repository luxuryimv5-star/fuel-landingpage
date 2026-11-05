"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GitBranch, X, Globe } from "lucide-react";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#team", label: "Team" },
] as const;

const SOCIAL_LINKS = [
  { href: "https://github.com", label: "GitHub", icon: GitBranch },
  { href: "https://twitter.com", label: "Twitter", icon: X },
  { href: "https://instagram.com", label: "Instagram", icon: Globe },
] as const;

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setYear(new Date().getFullYear()));
    return (): void => {
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <footer className="border-t border-border bg-background pt-14 pb-8 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-tight text-foreground">
              FUEL
            </span>
          </div>
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="border-t border-border pt-6 text-center text-xs text-muted-foreground"
        >
          <p>
            FUEL — Find cheaper, safer gas stations nearby.{" "}
            {year ? (
              <span className="block md:inline">
                © {year} FUEL. All rights reserved.
              </span>
            ) : (
              <span className="block md:inline">© FUEL. All rights reserved.</span>
            )}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
