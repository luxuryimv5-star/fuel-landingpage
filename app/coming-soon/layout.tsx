import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon — FUEL",
  description:
    "FUEL is coming soon to the App Store. Sign up to be notified when you can download FUEL and start finding cheaper, safer gas stations nearby.",
};

export default function ComingSoonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
