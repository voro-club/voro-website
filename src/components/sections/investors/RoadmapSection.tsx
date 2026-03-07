"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const phases = [
  {
    phase: "Phase 1 \u2014 Now",
    title: "USC Focus",
    description:
      "Live in Denver and LA, but strategically focused on USC first. Target Greek life, incoming freshmen, and existing community organizers. Drive full-group onboarding with Greek life and full friend groups. Build density before expanding.",
    tags: ["Campus Density First", "Greek Life", "Campus Ambassadors"],
    active: true,
  },
  {
    phase: "Phase 2",
    title: "LA Campuses & City Expansion",
    description:
      "Expand to UCLA and other LA campuses, nightlife clusters, and adjacent social graphs. USC becomes the outbound growth engine into broader LA social circles.",
    tags: ["UCLA", "LA Metro", "LA College Campuses"],
    active: false,
  },
  {
    phase: "Phase 3",
    title: "US Campus and City Expansion",
    description:
      "Rinse and repeat the dense-network launch playbook. Expand to the top 25\u201350 U.S. campuses and top 10 urban hubs.",
    tags: ["Top 25\u201350 Campuses", "Top 10 Urban Hubs", "B2B Partnerships"],
    active: false,
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="mb-4 text-base font-extrabold uppercase tracking-[2px] text-[#008199]/75">
            Roadmap
          </p>
          <h2 className="mb-8 text-4xl font-extrabold text-foreground md:text-5xl">
            Density first. Then expansion.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-2 flex flex-col">
            {phases.map((item, i) => (
              <div key={item.title} className="flex gap-8">
                {/* Marker column */}
                <div className="flex shrink-0 flex-col items-center pt-1.5">
                  <div
                    className={`relative z-10 h-5 w-5 shrink-0 rounded-full border-[3px] border-primary transition-colors ${
                      item.active
                        ? "bg-primary shadow-[0_0_0_5px_rgba(6,93,109,0.15)]"
                        : "bg-accent-bright/15"
                    }`}
                  />
                  {i < phases.length - 1 && (
                    <div className="my-1.5 w-0.5 flex-1 bg-linear-to-b from-primary to-accent-bright/30" />
                  )}
                </div>

                {/* Content card */}
                <div
                  className={`mb-7 flex-1 rounded-[20px] border bg-white p-9 transition-all duration-300 hover:translate-x-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
                    item.active
                      ? "border-primary border-l-4 hover:shadow-[0_12px_40px_rgba(6,93,109,0.18)]"
                      : "border-black/7"
                  }`}
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-[1.5px] text-[#008199]/75">
                    {item.phase}
                  </p>
                  <h3 className="mb-3 text-2xl font-extrabold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-5 text-base leading-relaxed text-foreground">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold tracking-[0.3px] text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
