import type { Metadata } from "next";
import { InvestorNav } from "@/components/sections/investors/InvestorNav";
import { InvestorHero } from "@/components/sections/investors/InvestorHero";
import { ProblemSection } from "@/components/sections/investors/ProblemSection";
import { FlywheelSection } from "@/components/sections/investors/FlywheelSection";
import { StrategySection } from "@/components/sections/investors/StrategySection";
import { RoadmapSection } from "@/components/sections/investors/RoadmapSection";
import { TractionSection } from "@/components/sections/investors/TractionSection";
import { MarketSection } from "@/components/sections/investors/MarketSection";
import { BusinessModelSection } from "@/components/sections/investors/BusinessModelSection";
import { InvestorCTA } from "@/components/sections/investors/InvestorCTA";
import { InvestorFooter } from "@/components/sections/investors/InvestorFooter";

export const metadata: Metadata = {
  title: "Investors & Partners",
  description:
    "Voro is a group-first social platform turning online discovery into in-person connection through Clubs, Circles, and Events.",
  robots: { index: false, follow: false },
  openGraph: {
    images: [{ url: "/images/VORO_SOLO.png", alt: "Voro" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/VORO_SOLO.png"],
  },
};

function SectionDivider() {
  return (
    <div
      aria-hidden
      className="h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-25"
    />
  );
}

export default function InvestorsPage() {
  return (
    <main className="min-h-screen font-sans">
      <InvestorNav />
      <InvestorHero />
      <ProblemSection />
      <SectionDivider />
      <FlywheelSection />
      <SectionDivider />
      <StrategySection />
      <SectionDivider />
      <RoadmapSection />
      <SectionDivider />
      <TractionSection />
      <BusinessModelSection />
      <SectionDivider />
      <MarketSection />
      <InvestorCTA />
      <InvestorFooter />
    </main>
  );
}
