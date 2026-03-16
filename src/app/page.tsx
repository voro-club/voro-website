import { SiteNav } from "@/components/sections/SiteNav";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PersonalityTags } from "@/components/sections/PersonalityTags";
import { Communities } from "@/components/sections/Communities";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.voro.club/#organization",
      name: "Voro, Co.",
      url: "https://www.voro.club",
      logo: "https://www.voro.club/images/voro.svg",
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@voro.club",
        contactType: "customer support",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "1500 N Grant St, Suite R",
        addressLocality: "Denver",
        addressRegion: "CO",
        postalCode: "80203",
        addressCountry: "US",
      },
    },
    {
      "@type": "MobileApplication",
      name: "Voro",
      operatingSystem: "iOS, Android",
      applicationCategory: "SocialNetworkingApplication",
      description:
        "Meet new people through interest-based clubs, group profiles with your friends, and in-person events.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: undefined,
    },
    {
      "@type": "WebSite",
      "@id": "https://www.voro.club/#website",
      url: "https://www.voro.club",
      name: "Voro",
      publisher: { "@id": "https://www.voro.club/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.voro.club/#webpage",
      url: "https://www.voro.club",
      name: "Voro — Expand Your Circle | Meet People Through Clubs & Events",
      isPartOf: { "@id": "https://www.voro.club/#website" },
      about: { "@id": "https://www.voro.club/#organization" },
      description:
        "Voro is the social discovery app for meeting new people through interest-based clubs, group profiles with friends (Circles), and real-life events.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <SiteNav />
        <Hero />
        <HowItWorks />
        <PersonalityTags />
        <Communities />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
