"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { IPhoneFrame } from "@/components/ui/iphone-frame";

const features = [
  {
    title: "Explore Clubs",
    subtitle: "Start with what you're into.",
    description:
      "Clubs are the communities that already exist: hiking crews, fitness people, nightlife regulars, creative types. They just finally have a home. Join solo. Show up as yourself.",
    imagePlaceholder: "Explore Clubs Screenshot",
    images: [{ src: "/images/explore.png", alt: "Explore clubs screen" }],
  },
  {
    title: "Bring your friends - or come solo.",
    subtitle: "Bring your friends - or come solo.",
    description:
      "A Circle is your friend group on Voro - 2 to 6 people, one shared profile, looking to meet more people together. Less pressure. More fun. (Flying solo works too.)",
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
      "Every Club has a live feed of what's actually happening - casual hangs, hosted events, spontaneous plans. No more \"what are you doing this weekend?\" with no answer.",
    imagePlaceholder: "Club Feed Screenshot",
    images: [{ src: "/images/uscfm.jpeg", alt: "USC Founding Members club \u2014 see what's happening and show up" }],
  },
];

function LightboxOverlay({
  feature,
  onClose,
}: {
  feature: (typeof features)[number];
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [handleClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Expanded view: ${feature.title}`}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      />

      <div
        className="relative z-10 flex items-center justify-center gap-6 px-8 transition-all duration-300 ease-out md:gap-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.85)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {feature.images?.map((img) => (
          <IPhoneFrame
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[350px]"
          />
        ))}
      </div>

      <button
        onClick={handleClose}
        className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Close expanded view"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}

export function HowItWorks() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      <section id="how-it-works" aria-label="How it works" className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <ScrollReveal>
          <div className="mx-auto max-w-[90rem]">
            <div className="mb-14 text-center">
              <h2 className="text-4xl font-bold md:text-5xl">How It Works</h2>
              <p className="mt-8 text-center text-[25px] font-medium leading-[100%] tracking-normal text-[#008199]/75">
                Find people who are actually into what you're into. Then show up.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => (
                <TiltCard key={feature.title} className="h-full">
                  <Card className={`h-full overflow-hidden rounded-xl border border-black/5 shadow-none ${feature.images ? "gap-0 py-0" : ""}`}>
                    {feature.images ? (
                      <div
                        className="flex items-center justify-center gap-4 bg-muted/30 px-4 py-8 transition-opacity lg:cursor-pointer lg:hover:opacity-90"
                        onClick={() => {
                          if (window.innerWidth >= 1024) setExpandedIndex(index);
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Expand ${feature.title} preview`}
                        onKeyDown={(e) => {
                          if (window.innerWidth < 1024) return;
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setExpandedIndex(index);
                          }
                        }}
                      >
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

      {expandedIndex !== null && (
        <LightboxOverlay
          feature={features[expandedIndex]}
          onClose={() => setExpandedIndex(null)}
        />
      )}
    </>
  );
}
