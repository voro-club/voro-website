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
      "@id": "https://voroapp.com/#organization",
      name: "Voro, Co.",
      url: "https://voroapp.com",
      logo: "https://voroapp.com/images/logo.svg",
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@voroapp.com",
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
      "@id": "https://voroapp.com/#website",
      url: "https://voroapp.com",
      name: "Voro",
      publisher: { "@id": "https://voroapp.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://voroapp.com/#webpage",
      url: "https://voroapp.com",
      name: "Voro — Expand Your Circle | Meet People Through Clubs & Events",
      isPartOf: { "@id": "https://voroapp.com/#website" },
      about: { "@id": "https://voroapp.com/#organization" },
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
