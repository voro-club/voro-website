import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PersonalityTags } from "@/components/sections/PersonalityTags";
import { Communities } from "@/components/sections/Communities";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <PersonalityTags />
      <Communities />
      <FinalCTA />
      <Footer />
    </main>
  );
}
