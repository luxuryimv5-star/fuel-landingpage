"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavLink {
  readonly href: string;
  readonly label: string;
}

const NAV_LINKS: readonly NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#team", label: "Team" },
  { href: "#cta", label: "Download" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const handleScroll = useCallback((): void => {
    let current = "hero";
    for (const link of NAV_LINKS) {
      const id = link.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = id;
        }
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToSection = (href: string): void => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/img/logo.png"
            alt="FUEL logo"
            width={32}
            height={32}
            priority
            className="h-8 w-8"
          />
          <span className="font-bold text-lg tracking-tight text-foreground">
            FUEL
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e): void => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-accent-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/coming-soon">
            <Button variant="outline" size="sm">
              Download on App Store
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-foreground"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e): void => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`block text-sm font-medium py-2 px-4 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground ${
                      isActive ? "bg-accent text-accent-foreground" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/coming-soon">
                <Button variant="outline" className="w-full">
                  Download on App Store
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
