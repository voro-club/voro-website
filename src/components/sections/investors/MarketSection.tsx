"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface AssumptionRow {
  label: string;
  value: string;
}

interface MarketCardData {
  id: string;
  cardLabel: string;
  num: string;
  description: string;
  dark?: boolean;
  assumptions?: {
    title?: string;
    rows: AssumptionRow[];
    total?: { label: string; value: string };
    note?: string;
  };
}

const tamCards: MarketCardData[] = [
  {
    id: "tam-1",
    cardLabel: "Market 1",
    num: "$20B+",
    description:
      "Social discovery & connection: dating apps pivoting to community, group social platforms, grassroots event apps.",
    assumptions: {
      title: "Market 1 \u2014 Social Discovery & Connection",
      rows: [
        {
          label: "Dating apps pivoting to community (Hinge, Bumble BFF, Thursday)",
          value: "~$3B",
        },
        {
          label: "Group social & community platforms (Discord ~$600M ARR, Reddit ~$800M, Geneva, Mighty Networks, Meetup)",
          value: "~$9.8B",
        },
        {
          label: "Community event apps: Eventbrite ($325M revenue, $3.6B GMV), Fever ($1.8B valuation), Partiful (~$140M valuation, a16z-backed), Luma, RA",
          value: "~$2\u20133B platform revenue",
        },
        {
          label: "Excludes concert/venue ticketing (Ticketmaster, StubHub, SeatGeek) \u2014 Voro\u2019s lane is grassroots, community-organized events",
          value: "Not included",
        },
      ],
      total: { label: "Market 1 Subtotal (conservative)", value: "~$15\u201320B" },
    },
  },
  {
    id: "tam-2",
    cardLabel: "Market 2",
    num: "$50B+",
    description:
      "Hyperlocal marketing & local advertising: contextual community-based reach Meta and Google can\u2019t replicate.",
    assumptions: {
      title: "Market 2 \u2014 Hyperlocal Advertising",
      rows: [
        {
          label: "U.S. local digital ad spend (Google local, Meta local, Yelp)",
          value: "~$70B total",
        },
        {
          label: "Contextual community-based advertising (Voro\u2019s addressable slice)",
          value: "~$50B",
        },
        { label: "Venue & brand partner subscription platforms", value: "Incremental" },
      ],
      total: { label: "Market 2 Subtotal", value: "$50B+" },
    },
  },
  {
    id: "tam-combined",
    cardLabel: "Combined TAM",
    num: "$70B+",
    description:
      "User density is the product Voro sells to brands: community-contextual reach that compounds as each city launches.",
    dark: true,
  },
];

const samCards: MarketCardData[] = [
  {
    id: "sam-consumer",
    cardLabel: "Consumer SAM",
    num: "$3\u20134B",
    description:
      "~75M U.S. Gen Z and Millennials ages 18\u201335 actively seeking real-world connection tools.",
    assumptions: {
      title: "Bottoms-Up Build",
      rows: [
        { label: "U.S. Gen Z & Millennials, ages 18\u201335", value: "~75M users" },
        {
          label: "Blended annual ARPU (credit spend + Voro+ sub)",
          value: "~$35\u201350/yr",
        },
        { label: "Credit pack avg spend per active user/mo", value: "~$10/mo" },
        { label: "Voro+ subscription", value: "$4.99/mo" },
        { label: "Platform cut on event ticket revenue", value: "15\u201320%" },
      ],
      total: { label: "75M users \u00d7 $40\u201353/yr", value: "$3\u20134B" },
      note: "Conservative \u2014 excludes event ticket revenue upside at scale",
    },
  },
  {
    id: "sam-b2b",
    cardLabel: "B2B Partner SAM",
    num: "$2\u20133B",
    description:
      "500K+ U.S. local venues, brands, and corporate buyers across three tiers plus ad placement revenue on top.",
    assumptions: {
      title: "Bottoms-Up Build",
      rows: [
        {
          label: "U.S. local venues (gyms, bars, studios, restaurants, spaces)",
          value: "500K+",
        },
        {
          label: "Tier mix: ~60% local ($15), ~30% regional ($62), ~10% national ($200)",
          value: "~$41/mo blended",
        },
        { label: "Subscription ARR at 500K partners", value: "~$246M" },
        { label: "Avg ad placement spend per active partner/mo", value: "~$100/mo" },
        { label: "Voro cut on ad placement revenue", value: "15\u201320%" },
        { label: "Ad revenue per partner/mo (Voro\u2019s share)", value: "~$15\u201320/mo" },
        {
          label: "Combined per-partner value (sub + ad cut)",
          value: "~$56\u201361/mo",
        },
      ],
      total: { label: "500K partners \u00d7 ~$56\u201361/mo", value: "$336\u2013366M" },
      note: "Scales toward $2\u20133B as tier mix shifts toward regional/national and ad spend grows with density",
    },
  },
  {
    id: "sam-combined",
    cardLabel: "Combined SAM",
    num: "$5\u20137B",
    description:
      "Consumer and B2B surfaces are additive. Same density milestone unlocks revenue on both sides simultaneously.",
    dark: true,
  },
];

const somCards: MarketCardData[] = [
  {
    id: "som-consumer",
    cardLabel: "Consumer Revenue",
    num: "$1.2\u20132.4M",
    description:
      "ARR from active paying users in LA Metro on credit packs, auto-refill, and Voro+ subscriptions.",
    assumptions: {
      rows: [
        { label: "USC student body (addressable)", value: "48,000" },
        { label: "LA Metro 18\u201335 (reachable)", value: "~2M" },
        {
          label: "Active paying users at maturity (conservative)",
          value: "10\u201320K",
        },
        { label: "Blended avg monthly spend per paying user", value: "~$10/mo" },
      ],
      total: { label: "10\u201320K \u00d7 $10 \u00d7 12", value: "$1.2\u20132.4M" },
      note: "Plus event ticket cut upside above this baseline",
    },
  },
  {
    id: "som-local",
    cardLabel: "Local Partner Revenue",
    num: "$54\u2013108K",
    description:
      "ARR from 300\u2013600 local partner sign-ups, 3\u20137% of ~8,000 addressable LA venues.",
    assumptions: {
      rows: [
        {
          label: "Addressable LA venues (gyms, bars, studios, spaces)",
          value: "~8,000",
        },
        { label: "Target sign-up rate", value: "3\u20137%" },
        { label: "Target local partner sign-ups", value: "300\u2013600" },
        { label: "Local tier price", value: "$15/mo" },
        { label: "Assumed tier mix at launch", value: "~100% local" },
      ],
      total: { label: "300\u2013600 \u00d7 $15 \u00d7 12", value: "$54\u2013108K" },
      note: "Conservative \u2014 excludes ad placement revenue stacking on top",
    },
  },
  {
    id: "som-national",
    cardLabel: "National Brand & B2B Revenue",
    num: "$180\u2013500K",
    description:
      "ARR from national brand subscriptions, corporate relocation packages, and ad placement fees.",
    assumptions: {
      rows: [
        {
          label: "National brand partners (Nike, Lululemon, Red Bull, Alo)",
          value: "10\u201320 brands",
        },
        { label: "National tier subscription", value: "$150\u2013250/mo" },
        { label: "National sub ARR", value: "$18\u201360K" },
        {
          label: "Corporate relocation (2\u20133 firms \u00d7 50\u2013100 seats)",
          value: "$18\u201390K ARR",
        },
        { label: "Ad placement fees above subs", value: "$144\u2013350K" },
      ],
      total: { label: "Subs + corporate + ad fees", value: "$180\u2013500K" },
    },
  },
];

const marketTabs = [
  { id: "tam", label: "TAM \u2014 $70B+", cards: tamCards },
  { id: "sam", label: "SAM \u2014 $5\u20137B", cards: samCards },
  {
    id: "som",
    label: "LA Metro SOM",
    cards: somCards,
    note: "Scales with each new city launch. Current focus: USC + LA Metro. UCLA on-ramp April 2026. Denver active.",
  },
] as const;

function MarketCard({
  card,
  expanded,
  onToggle,
}: {
  card: MarketCardData;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-[20px] p-8 ${
        card.dark
          ? "bg-primary text-white"
          : "border border-black/6 bg-white"
      }`}
    >
      <p
        className={`mb-2.5 text-xs font-bold uppercase tracking-[1.5px] ${
          card.dark ? "text-accent-bright" : "text-[#008199]/75"
        }`}
      >
        {card.cardLabel}
      </p>
      <div
        className={`mb-2.5 text-4xl font-extrabold leading-none ${
          card.dark ? "text-white" : "text-primary"
        }`}
      >
        {card.num}
      </div>
      <p
        className={`text-base leading-relaxed ${
          card.dark ? "text-white/75" : "text-muted-foreground"
        }`}
      >
        {card.description}
      </p>

      {card.assumptions && (
        <>
          <button
            onClick={onToggle}
            className="mt-4 cursor-pointer rounded-full border border-primary px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.5px] text-primary transition-all hover:bg-primary hover:text-white"
          >
            {expanded ? "Hide assumptions ↑" : "See assumptions ↓"}
          </button>

          <div
            className="grid transition-[grid-template-rows] duration-350 ease-out"
            style={{
              gridTemplateRows: expanded ? "1fr" : "0fr",
            }}
          >
            <div className="overflow-hidden">
              <div className="mt-4 border-t border-primary/20 pt-4">
                {card.assumptions.title && (
                  <p
                    className="mb-2 text-xs font-bold uppercase tracking-[1px] text-[#008199]/75 transition-all duration-300"
                    style={{
                      opacity: expanded ? 1 : 0,
                      transform: expanded ? "translateY(0)" : "translateY(-6px)",
                    }}
                  >
                    {card.assumptions.title}
                  </p>
                )}
                {card.assumptions.rows.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between gap-3 border-b border-primary/10 py-1.5 transition-all duration-300 last:border-b-0"
                    style={{
                      opacity: expanded ? 1 : 0,
                      transform: expanded ? "translateY(0)" : "translateY(8px)",
                      transitionDelay: expanded ? `${(i + 1) * 50}ms` : "0ms",
                    }}
                  >
                    <span className="text-sm text-muted-foreground">
                      {row.label}
                    </span>
                    <span className="shrink-0 text-sm font-bold text-primary">
                      {row.value}
                    </span>
                  </div>
                ))}
                {card.assumptions.total && (
                  <div
                    className="mt-3 flex items-center justify-between rounded-[10px] bg-background px-3.5 py-2.5 transition-all duration-300"
                    style={{
                      opacity: expanded ? 1 : 0,
                      transform: expanded ? "translateY(0)" : "translateY(8px)",
                      transitionDelay: expanded
                        ? `${(card.assumptions.rows.length + 1) * 50}ms`
                        : "0ms",
                    }}
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.5px] text-muted-foreground">
                      {card.assumptions.total.label}
                    </span>
                    <span className="text-lg font-black text-primary">
                      {card.assumptions.total.value}
                    </span>
                  </div>
                )}
                {card.assumptions.note && (
                  <p
                    className="mt-2.5 text-xs italic text-muted-foreground transition-all duration-300"
                    style={{
                      opacity: expanded ? 1 : 0,
                      transitionDelay: expanded
                        ? `${(card.assumptions.rows.length + 2) * 50}ms`
                        : "0ms",
                    }}
                  >
                    {card.assumptions.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function MarketSection() {
  const [activeTab, setActiveTab] = useState("tam");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="mb-4 text-base font-extrabold uppercase tracking-[2px] text-[#008199]/75">
            Market Size
          </p>
          <h2 className="mb-8 text-4xl font-extrabold text-foreground md:text-5xl">
            Three markets. One platform at the intersection of all.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-6 flex flex-wrap gap-2">
            {marketTabs.map((tab) => (
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

          {marketTabs.map((tab) => (
            <Fragment key={tab.id}>
              {activeTab === tab.id && (
                <div className="animate-[tabFadeIn_0.25s_ease]">
                  {tab.id === "tam" && (
                    <div className="mx-auto mb-6 max-w-[1100px] overflow-hidden">
                      <Image
                        src="/images/Voro_TAM.svg"
                        alt="Voro TAM — three overlapping markets totaling $70B+"
                        width={1440}
                        height={810}
                        className="mx-auto w-full scale-[1.55]"
                      />
                    </div>
                  )}
                  <div className="grid gap-6 md:grid-cols-3">
                    {tab.cards.map((card) => (
                      <MarketCard
                        key={card.id}
                        card={card}
                        expanded={expanded.has(card.id)}
                        onToggle={() => toggleExpanded(card.id)}
                      />
                    ))}
                  </div>
                  {"note" in tab && tab.note && (
                    <p className="mt-4 text-center text-xs italic text-muted-foreground">
                      {tab.note}
                    </p>
                  )}
                </div>
              )}
            </Fragment>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
