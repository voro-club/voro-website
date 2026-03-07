"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const tabs = [
  {
    id: "live",
    label: "What\u2019s Live",
    items: [
      <>App live on the <strong>iOS App Store</strong> in Denver and Los Angeles</>,
      <><strong>Clubs</strong> fully functional: interest-based communities with real leaders</>,
      <><strong>Circles</strong> (group discovery swiping) live in app</>,
      <><strong>Events</strong> feature in active development</>,
      <><strong>Svenn AI</strong> social copilot in development</>,
    ],
  },
  {
    id: "gtm",
    label: "Go-To-Market",
    items: [
      <>Founder-led content on <strong>TikTok &amp; Instagram</strong> building organic following</>,
      <>Direct recruiting across <strong>university campuses</strong> and nightlife venues</>,
      <>Waitlist pre-launch for next cities, <strong>Austin TX</strong> leading signups</>,
      <><strong>Ambassador-led</strong> on-campus activation program underway</>,
      <><strong>Brand partnerships</strong> with local partners to host activations</>,
    ],
  },
  {
    id: "community",
    label: "Community",
    items: [
      <><strong>Real local clubs</strong> active from day one: fitness, social energy, outdoor communities</>,
      <>Club leaders recruited from existing <strong>Instagram and WhatsApp</strong> organizers</>,
      <><strong>Swim &amp; Social</strong> (LA open water swim + social club) among early organizers</>,
      <>Denver and LA communities engaged with <strong>in-person events</strong> immediately</>,
    ],
  },
  {
    id: "market",
    label: "Market Validation",
    items: [
      <><strong>Bumble acquired Geneva for $17.5M</strong> (Dec 2024), signaling the community shift</>,
      <><strong>Match Group</strong> 2024 letter acknowledged demand for lower-pressure connections</>,
      <><strong>NYT, Forbes, BBC, and Newsweek</strong> covering dating app fatigue and IRL social trends</>,
      <>Competing apps gearing toward IRL connection but <strong>lacking community depth and retention</strong></>,
    ],
  },
];

export function TractionSection() {
  const [activeTab, setActiveTab] = useState("live");

  return (
    <section className="bg-background-cta px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="mb-4 text-base font-extrabold uppercase tracking-[2px] text-[#008199]/75">
            Traction
          </p>
          <h2 className="mb-8 text-4xl font-extrabold text-foreground md:text-5xl">
            Live since January 17, 2026.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div>
            <div className="flex gap-2 overflow-x-auto border-b-2 border-black/7 pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative -bottom-[2px] shrink-0 cursor-pointer rounded-t-lg border-b-2 px-5 py-3 text-sm font-bold transition-colors ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="rounded-b-2xl border border-t-0 border-black/7 bg-white p-9 md:px-10">
              {tabs.map((tab) => (
                <ul
                  key={tab.id}
                  className={`flex-col gap-3.5 ${
                    activeTab === tab.id
                      ? "flex animate-[tabFadeIn_0.25s_ease]"
                      : "hidden"
                  }`}
                >
                  {tab.items.map((item, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-base leading-relaxed text-foreground before:absolute before:top-[10px] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary [&_strong]:font-bold [&_strong]:text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
