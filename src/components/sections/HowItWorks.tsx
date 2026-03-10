"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { IPhoneFrame } from "@/components/ui/iphone-frame";

const features = [
  {
    title: "Explore Clubs",
    subtitle: "Start with what you're into.",
    description:
      "Clubs organize the communities that already exist \u2014 hiking, nightlife, fitness, creativity, niche energy. Join solo and show up as yourself.",
    imagePlaceholder: "Explore Clubs Screenshot",
    images: [{ src: "/images/explore.png", alt: "Explore clubs screen" }],
  },
  {
    title: "Connect solo \u2014 or with your friends.",
    subtitle: "Connect solo \u2014 or with your friends.",
    description:
      "A Circle is a shared group profile (2\u20136 friends) who want to meet more people together. You can also swipe solo.",
    imagePlaceholder: "Silverlake Sirens Screenshot",
    images: [
      { src: "/images/penelope.png", alt: "Penelope profile screen" },
      { src: "/images/sirens.png", alt: "Silverlake Sirens circle screen" },
    ],
  },
  {
    title: "Club Feed",
    subtitle: "See what\u2019s happening and show up.",
    description:
      "Clubs have live feeds of real-world plans \u2014 casual hangs, hosted events, group meetups. Everything in one place.",
    imagePlaceholder: "Club Feed Screenshot",
    images: [{ src: "/images/uscfm.jpeg", alt: "USC Founding Members club — see what's happening and show up" }],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-label="How Voro works" className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">How Voro Works</h2>
            <p className="mt-8 text-center text-[25px] font-medium leading-[100%] tracking-normal text-[#008199]/75">
              Online discovery → real-life connection.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <TiltCard key={feature.title} className="h-full">
                <Card className={`h-full overflow-hidden rounded-xl border border-black/5 shadow-none ${feature.images ? "gap-0 py-0" : ""}`}>
                  {feature.images ? (
                    <div className="flex items-center justify-center gap-4 bg-muted/30 px-4 py-8">
                      {feature.images.map((img) => (
                        <IPhoneFrame
                          key={img.src}
                          src={img.src}
                          alt={img.alt}
                          compact
                          className="w-[140px] md:w-[160px] lg:w-[180px]"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="aspect-4/3 w-full bg-muted/30">
                      <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                        {feature.imagePlaceholder}
                      </div>
                    </div>
                  )}
                  <CardContent className={feature.images ? "px-6 py-5" : "pt-4"}>
                    <h3 className="text-lg font-semibold">{feature.subtitle}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
