"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { ReactNode } from "react";

interface Phase {
  phase: string;
  title: string;
  body: ReactNode;
  tags: string[];
  active?: boolean;
}

const phases: Phase[] = [
  {
    phase: "Phase 1 — Now → May",
    title: "Seed: Two Tracks, One Goal",
    body: (
      <>
        <p className="mb-3 text-base leading-relaxed text-foreground">
          <strong className="font-bold text-primary">USC (Depth):</strong> Go
          deep on one campus. Recruit club leaders, activate Greek
          life-adjacent networks, build the social graph tight. USC gives us a
          contained, high-velocity environment to prove the Clubs retention loop
          before scaling it.
        </p>
        <p className="mb-3 text-base leading-relaxed text-foreground">
          <strong className="font-bold text-primary">
            LA Community (Breadth):
          </strong>{" "}
          Simultaneously activate real-world communities already forming in
          LA &mdash; fitness clubs, swim socials, nightlife groups. These
          aren&apos;t test users, they&apos;re founding communities. In person
          events are how Voro proves online discovery converts to real
          attendance.
        </p>
        <p className="text-sm text-muted-foreground">
          The two tracks feed each other &mdash; USC students graduate into LA.
          LA energy makes the platform feel alive for USC users checking in.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          <strong className="font-semibold text-foreground">
            UCLA note:
          </strong>{" "}
          UCLA runs on the quarter system, giving us a natural April on-ramp. We
          begin UCLA activation in April while USC density is still
          building &mdash; two campuses, overlapping calendars, compounding
          network.
        </p>
      </>
    ),
    tags: [
      "USC Campus Density",
      "Greek Life",
      "LA Founding Communities",
      "UCLA (April)",
      "In Person Events",
    ],
    active: true,
  },
  {
    phase: "Phase 2 — Summer (May → August)",
    title: "Bridge: Go National, Don't Force It",
    body: (
      <>
        <p className="mb-3 text-base leading-relaxed text-foreground">
          Campus goes quiet &mdash; LA Metro doesn&apos;t. We shift full focus
          to LA community growth: clubs, events, organizer recruitment. But
          critically,{" "}
          <strong className="font-bold text-primary">
            Voro opens nationally
          </strong>
          . Not to push growth, but to catch it.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          USC students go home for summer and bring Voro with them. Like
          Tinder&apos;s early campus rollout, organic word-of-mouth will surface
          markets we haven&apos;t touched yet &mdash; we follow the data rather
          than fighting it. Austin already has an active waitlist. We
          didn&apos;t push for that.
        </p>
      </>
    ),
    tags: [
      "LA Metro Growth",
      "National Soft Open",
      "Organic Market Discovery",
      "Ambassador Pipeline",
    ],
  },
  {
    phase: "Phase 3 — Fall Surge (August → September)",
    title: "Scale: Welcome Week & Beyond",
    body: (
      <>
        <p className="mb-3 text-base leading-relaxed text-foreground">
          Return to campus with proof points, real clubs, and a living LA
          community behind it. Welcome Week activations target incoming freshman
          at USC and UCLA before habits form &mdash; the highest-leverage moment
          in a student&apos;s social life. Both campuses re-activate
          simultaneously, with USC as the proven playbook and UCLA entering its
          fall quarter.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          We activate next in whichever markets showed organic traction over
          summer &mdash; not based on a predetermined map, but on where real
          demand already exists.
        </p>
      </>
    ),
    tags: [
      "USC Welcome Week",
      "USC + UCLA Welcome Week",
      "Data-Led City Expansion",
      "Rinse & Repeat",
    ],
  },
  {
    phase: "Phase 4 — 2027+",
    title: "National Campus & City Network",
    body: (
      <p className="text-base leading-relaxed text-foreground">
        Apply the proven dense-network playbook to the top 25–50 U.S. campuses
        and top 10 urban hubs. Each campus cohort becomes the next city&apos;s
        founding community as students graduate and relocate.
      </p>
    ),
    tags: ["Top 25–50 Campuses", "Top 10 Urban Hubs", "Community Infrastructure"],
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
            Density first. Then catch the growth we create.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-2 flex flex-col">
            {phases.map((item, i) => (
              <div key={item.title} className="flex gap-8">
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
                  <div className="mb-5">{item.body}</div>
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
