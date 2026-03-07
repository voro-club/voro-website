"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";

const competitors = [
  {
    logo: "B",
    colorClass: "bg-[#FFD520] text-foreground",
    name: "Bumble",
    issue: "high-pressure UX, optimized for 1:1 matching, not community",
  },
  {
    logo: "G",
    colorClass: "bg-white text-foreground text-[11px]",
    name: "Geneva",
    issue: "group chat only, no discovery, no events, no in real life loop",
  },
  {
    logo: "P",
    colorClass: "bg-[#FF3366] text-white italic",
    name: "Partiful",
    issue: "events only, one-off use case, no retention or monetization",
  },
  {
    logo: "M",
    colorClass: "bg-[#ED1C40] text-white",
    name: "Meetup",
    issue: "older audience, transactional, not built for Gen Z",
  },
  {
    logo: "f",
    colorClass: "bg-[#1877F2] text-white text-base font-black",
    name: "Facebook",
    issue: "bloated, not Gen Z native, flooded with scams and AI content",
  },
];

function CompetitorBox() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-[20px] bg-primary p-10 text-white"
    >
      <h3 className="mb-6 text-xl font-bold">
        Everyone solves a piece. No one solves the system.
      </h3>
      <ul className="space-y-0">
        {competitors.map((c, i) => (
          <li
            key={c.name}
            className="flex items-start gap-3.5 border-b border-white/12 py-3 text-base leading-[1.6] text-white/85 transition-all duration-400 last:border-b-0"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-16px)",
              transitionDelay: `${i * 120}ms`,
            }}
          >
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[13px] font-extrabold ${c.colorClass}`}
            >
              {c.logo}
            </span>
            <span>
              <strong className="font-bold text-white">{c.name}</strong> &mdash;{" "}
              {c.issue}
            </span>
          </li>
        ))}
      </ul>
      <div
        className="mt-5 flex items-start gap-3.5 rounded-xl border border-white/25 bg-white/12 px-5 py-4 text-base leading-[1.5] text-white transition-all duration-400"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transitionDelay: "650ms",
        }}
      >
        <Image
          src="/images/voro.svg"
          alt="Voro"
          width={28}
          height={28}
          className="mt-0.5 shrink-0"
        />
        <span>
          <strong className="font-bold">Voro</strong> is the first platform to
          connect groups, communities, and events in one place.
        </span>
      </div>
    </div>
  );
}

export function ProblemSection() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid items-start gap-20 md:grid-cols-2">
          <ScrollReveal>
            <div>
              <p className="mb-4 text-base font-extrabold uppercase tracking-[2px] text-[#008199]/75">
                The Problem
              </p>
              <h2 className="mb-8 text-4xl font-extrabold text-foreground md:text-5xl">
                Younger generations are lonelier than ever. And existing apps
                aren&apos;t helping.
              </h2>
              <div className="space-y-5 text-lg leading-[1.85] text-foreground">
                <p>
                  73% of Gen Z report feeling isolated. 79% report dating app
                  burnout. The tools people have for meeting others are either{" "}
                  <strong className="font-bold text-primary">
                    too high-pressure
                  </strong>{" "}
                  (dating apps optimizing for &ldquo;the one&rdquo;) or{" "}
                  <strong className="font-bold text-primary">
                    too passive
                  </strong>{" "}
                  (social media optimizing for content, not connection).
                </p>
                <p>
                  Meanwhile, the natural structures that used to bring people
                  together &mdash; dorms, offices, neighborhoods &mdash; have
                  weakened. A generation navigating new cities, post-COVID social
                  atrophy, and the pressure of 1:1 online interactions has no
                  good place to turn.
                </p>
                <p>
                  <strong className="font-bold text-primary">
                    There&apos;s no centralized place to find, join, and stay
                    connected to the communities forming in your city.
                  </strong>{" "}
                  Voro is building that.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <CompetitorBox />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
