import type { Metadata } from "next";
import { SiteNav } from "@/components/sections/SiteNav";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Voro — a group-first social discovery app built from the shared experience of moving somewhere new and wanting in-person connection.",
  alternates: {
    canonical: "https://voroapp.com/about",
  },
  openGraph: {
    title: "About Us | Voro",
    description:
      "Meet the team behind Voro — a group-first social discovery app built from the shared experience of moving somewhere new and wanting in-person connection.",
    url: "https://voroapp.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans">
      <SiteNav />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
      <Footer />
    </main>
  );
}
