"use client";

import { Fragment, useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const pillars = [
  { icon: "🎟", label: "Credits & Events" },
  { icon: "🏢", label: "Partner Marketplace" },
  { icon: "📈", label: "Creator Revenue Share" },
];

interface StatRow {
  value: string;
  label: string;
}

interface BmCard {
  cardLabel: string;
  title: string;
  stats: StatRow[];
  note?: string;
}

const nowCards: BmCard[] = [
  {
    cardLabel: "Consumer — Free Tier",
    title: "Browse, join, and attend free events at no cost.",
    stats: [
      { value: "$0", label: "to join any club or attend free events" },
      { value: "infinity", label: "clubs to explore, no credit card required" },
    ],
    note: "Free access is the growth engine. Density first.",
  },
  {
    cardLabel: "What We're Building Toward",
    title: "Monetization is designed and sequenced. It activates when the numbers justify it.",
    stats: [
      {
        value: "Soon",
        label: "Credits, Voro+, partner marketplace, event ticketing",
      },
      { value: "Scale", label: "Creator revenue share, verified leader program" },
    ],
    note: "A brand placement in a sparse network is worthless. In a dense one, it\u2019s exactly what national brands can\u2019t get from Meta or Google.",
  },
];

const soonCards: BmCard[] = [
  {
    cardLabel: "Consumer — Credits",
    title: "Credits unlock paid events. Buy once or subscribe.",
    stats: [
      { value: "$1", label: "per credit. Leaders set their own event price." },
      { value: "$6\u201318", label: "one-off packs (5, 10, or 20 credits)" },
      { value: "$8\u201315", label: "auto-refill subscriptions per month" },
      { value: "15\u201320%", label: "Voro cut on every credit transaction" },
    ],
  },
  {
    cardLabel: "Consumer — Voro+",
    title: "More circles. 5 credits included.",
    stats: [
      { value: "$4.99", label: "per month" },
      { value: "5", label: "credits included monthly" },
      { value: "Multiple", label: "Circles active simultaneously" },
    ],
    note: "Activates once density makes the perks genuinely valuable.",
  },
  {
    cardLabel: "B2B — Partner Marketplace",
    title: "A tiered B2B layer that sits on top of the consumer product.",
    stats: [
      {
        value: "$15/mo",
        label: "Local tier \u2014 studios, bars, single city",
      },
      {
        value: "$49\u201375",
        label: "Regional tier \u2014 metro-wide + priority placement",
      },
      {
        value: "$150\u2013250",
        label: "National tier \u2014 Nike, Lululemon, Red Bull, Alo",
      },
      {
        value: "15\u201320%",
        label: "Voro cut on ad spend. Leaders keep ~80\u201385%.",
      },
    ],
    note: "Ad placement revenue stacks on top of every subscription tier.",
  },
  {
    cardLabel: "B2B — Event Ticketing",
    title: "Leaders set the price. Voro takes a cut. Infrastructure is already built.",
    stats: [
      { value: "15\u201320%", label: "platform cut on all ticket revenue" },
      {
        value: "$0",
        label: "cost to leaders. Paid in dollars, never credits",
      },
    ],
    note: "Activates as paid event density grows.",
  },
  {
    cardLabel: "B2B — Corporate Access",
    title: "Relocation is a real HR budget line. Voro is a natural fit.",
    stats: [
      {
        value: "Seat-based",
        label: "licensing for companies with high relocation frequency (e.g. Consulting, Big Law, etc.)",
      },
    ],
    note: "Private branded clubs included: \u201cPwC New to LA.\u201d",
  },
];

const scaleCards: BmCard[] = [
  {
    cardLabel: "Creator Revenue Share",
    title: "Top leaders earn a cut of what their community generates.",
    stats: [
      { value: "%", label: "share of ticket sales from their club events" },
      { value: "%", label: "cut of sponsored activations in their feed" },
    ],
    note: "Good events make money. Market determines leader quality. No algorithm needed.",
  },
  {
    cardLabel: "Verified Leader Program",
    title: "A badge that signals legitimacy and commands premium placement.",
    stats: [
      { value: "✓", label: "Verified badge \u2014 credibility at scale" },
      {
        value: "↑",
        label: "Premium discovery placement for verified clubs",
      },
    ],
    note: "Creates a supply-side flywheel. Leaders build toward verification.",
  },
  {
    cardLabel: "Auto-Refill Growth",
    title: "One-off buyers naturally convert to subscribers over time.",
    stats: [
      {
        value: "$8\u201315",
        label: "per month auto-refill vs $10\u201318 one-off equivalent",
      },
      { value: "↑ LTV", label: "as regulars lock in subscription rate" },
    ],
    note: "No hard push. Conversion nudge shown after first pack purchase.",
  },
];

const tabs = [
  { id: "now", label: "Now", cards: nowCards, cols: 2 },
  { id: "soon", label: "Soon", cards: soonCards, cols: 3 },
  { id: "scale", label: "At Scale", cards: scaleCards, cols: 3 },
] as const;

function BmCardView({ card }: { card: BmCard }) {
  return (
    <div className="rounded-[18px] border border-black/7 bg-white p-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-[1.5px] text-[#008199]/75">
        {card.cardLabel}
      </p>
      <h4 className="mb-3 text-xl font-extrabold leading-snug text-foreground">
        {card.title}
      </h4>
      <div className="mt-3.5 grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-1.5">
        {card.stats.map((s, i) => (
          <Fragment key={i}>
            <span className="text-lg font-black text-primary">
              {s.value === "infinity" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block h-5 w-5"
                >
                  <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
                </svg>
              ) : (
                s.value
              )}
            </span>
            <span className="self-center text-sm text-muted-foreground">
              {s.label}
            </span>
          </Fragment>
        ))}
      </div>
      {card.note && (
        <p className="mt-3.5 border-t border-black/6 pt-3 text-sm italic leading-relaxed text-muted-foreground">
          {card.note}
        </p>
      )}
    </div>
  );
}

export function BusinessModelSection() {
  const [activeTab, setActiveTab] = useState("now");

  return (
    <section className="bg-background-cta px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="mb-4 text-base font-extrabold uppercase tracking-[2px] text-[#008199]/75">
            Business Model
          </p>
          <h2 className="mb-8 text-4xl font-extrabold text-foreground md:text-5xl">
            We don&apos;t charge the people who build the community. We monetize
            the activity they create.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-8 grid items-center gap-8 rounded-[20px] bg-foreground p-7 md:gap-12 md:p-10 md:grid-cols-2">
            <p className="text-xl font-bold leading-relaxed text-white">
              Free to join.
              <br className="md:hidden" />
              <span className="hidden md:inline">{" "}</span>
              <strong className="text-accent-bright">
                Revenue follows density.
              </strong>
            </p>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="rounded-[14px] bg-white/7 px-2 py-4 text-center md:px-3 md:py-5"
                >
                  <span className="mb-2 block text-[22px] md:mb-2.5 md:text-[26px]">{p.icon}</span>
                  <span className="text-[10px] font-bold uppercase leading-snug tracking-[0.3px] text-accent-bright md:text-[11px] md:tracking-[0.5px]">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-6 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer rounded-full border-[1.5px] px-6 py-2.5 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "border-primary bg-primary text-white"
                    : "border-black/12 text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`gap-5 ${
                activeTab === tab.id
                  ? `grid animate-[tabFadeIn_0.25s_ease] ${
                      tab.cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
                    }`
                  : "hidden"
              }`}
            >
              {tab.cards.map((card) => (
                <BmCardView key={card.cardLabel} card={card} />
              ))}
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
