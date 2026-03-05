"use client";

import { useRef, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const features = [
  {
    title: "Explore Clubs",
    subtitle: "Start with what you're into.",
    description:
      "Clubs organize the communities that already exist \u2014 hiking, nightlife, fitness, creativity, niche energy. Join solo and show up as yourself.",
    imagePlaceholder: "Explore Clubs Screenshot",
  },
  {
    title: "Connect solo \u2014 or with your friends.",
    subtitle: "Connect solo \u2014 or with your friends.",
    description:
      "A Circle is a shared group profile (2\u20136 friends) who want to meet more people together. You can also swipe solo.",
    imagePlaceholder: "Silverlake Sirens Screenshot",
  },
  {
    title: "Club Feed",
    subtitle: "See what\u2019s happening and show up.",
    description:
      "Clubs have live feeds of real-world plans \u2014 casual hangs, hosted events, group meetups. Everything in one place.",
    imagePlaceholder: "Club Feed Screenshot",
  },
];

const MAX_TILT = 4; // degrees — subtle cursor-follow tilt

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({
        x: -y * MAX_TILT,
        y: x * MAX_TILT,
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  // Shadow offset follows tilt so it looks like a fixed light source (top-left)
  const shadowX = 4 + tilt.y * 1.5;
  const shadowY = 6 + tilt.x * 1.5;
  const shadowBlur = 12 + Math.abs(tilt.x) * 0.5 + Math.abs(tilt.y) * 0.5;
  const boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px -4px rgba(0,0,0,0.12), ${shadowX * 0.6}px ${shadowY * 0.6}px 8px -6px rgba(0,0,0,0.08)`;

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="h-full rounded-xl transition-all duration-150 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          boxShadow,
        }}
      >
        {children}
      </div>
    </div>
  );
}

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
                <Card className="h-full overflow-hidden border-0 shadow-none">
                  <div className="aspect-4/3 w-full bg-muted/30">
                    <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                      {feature.imagePlaceholder}
                    </div>
                  </div>
                  <CardContent className="pt-4">
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
