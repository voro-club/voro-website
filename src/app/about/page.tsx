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
    canonical: "https://www.voro.club/about",
  },
  openGraph: {
    title: "About Us | Voro",
    description:
      "Meet the team behind Voro — a group-first social discovery app built from the shared experience of moving somewhere new and wanting in-person connection.",
    url: "https://www.voro.club/about",
    images: [{ url: "/images/voro-fav.png", alt: "Voro" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/voro-fav.png"],
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
