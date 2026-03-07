"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltCard } from "@/components/ui/tilt-card";

const insights = [
  {
    num: "01",
    delay: 0,
    text: (
      <>
        Younger generations are{" "}
        <strong className="text-primary">lonelier</strong> than ever.
      </>
    ),
  },
  {
    num: "02",
    delay: 150,
    text: (
      <>
        Dating apps are{" "}
        <strong className="text-primary">too high-pressure</strong> &amp;
        friend-making apps are often awkward and unengaging.
      </>
    ),
  },
  {
    num: "03",
    delay: 300,
    text: (
      <>
        Meeting people in real life feels{" "}
        <strong className="text-primary">intimidating</strong> and{" "}
        <strong className="text-primary">inaccessible</strong>.
      </>
    ),
  },
];

function StatCards() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          insights.forEach((item, i) => {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, item.delay);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-4">
      {insights.map((item, i) => (
        <TiltCard
          key={item.num}
          className={`h-full transition-all duration-500 ${
            visible[i]
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0"
          }`}
        >
          <div className="flex h-full items-start gap-6 rounded-[20px] border border-black/7 bg-white p-9">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white">
              {item.num}
            </div>
            <div className="text-lg leading-[1.7] text-foreground">
              {item.text}
            </div>
          </div>
        </TiltCard>
      ))}
    </div>
  );
}

export function AboutStory() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mt-16 grid items-start gap-20 md:grid-cols-2">
          <ScrollReveal>
            <div>
              <p className="mb-4 text-base font-extrabold uppercase tracking-[2px] text-[#008199]/75">
                How We Got Here
              </p>
              <h2 className="mb-8 text-4xl font-extrabold text-foreground md:text-5xl">
                Every generation rebuilds how people meet.
              </h2>
              <div className="space-y-5 text-lg leading-[1.85] text-foreground">
                <p>
                  Courtney and Holly both moved to new cities as adults — new
                  jobs, new neighborhoods, and the exciting (if occasionally
                  overwhelming) task of building a social life from the ground
                  up.
                </p>
                <p>
                  What they noticed pretty quickly:{" "}
                  <strong className="font-bold text-primary">
                    everything is easier with a friend by your side.
                  </strong>{" "}
                  The run club you&apos;d been meaning to try, the neighborhood
                  bar you kept walking past, the group chat you joined but never
                  showed up for — none of it felt as approachable solo as it did
                  with even one familiar face.
                </p>
                <p>
                  The problem wasn&apos;t a lack of things to do. Cities are
                  full of communities, events, and people worth knowing. The
                  problem was the on-ramp. There was no cohesive way to plug in
                  as a group, discover what was happening locally, and go do it
                  together.
                </p>
                <p>
                  That&apos;s Voro. A group-first social platform built around
                  the way friendships actually form: through shared experiences,
                  familiar faces, and showing up to things together.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="md:sticky md:top-24">
            <StatCards />
          </div>
        </div>
      </div>
    </section>
  );
}
