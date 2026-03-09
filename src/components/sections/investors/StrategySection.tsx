"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const benchmarks = [
  {
    metric: "Day 7 Retention",
    target: "40–50%",
    path: "Push notification system in active development. Currently users return by choice. Notifications are the single biggest unlock for early habit formation.",
  },
  {
    metric: "Monthly Active Rate",
    target: "25–35%",
    path: "Clubs create recurring reasons to return. As club density grows and leaders post consistently, Voro becomes part of a weekly social routine rather than a one-time download.",
  },
  {
    metric: "Match → Meetup",
    target: "15–20%",
    path: "Circles matching improves with density. Seeding that now through USC and LA Metro. Svenn AI will actively nudge matched groups toward in person plans.",
  },
];

function RetentionVisual() {
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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="rounded-[20px] bg-primary p-10 text-white">
      <h3 className="mb-6 text-xl font-bold">
        Retention Benchmarks &amp; How We Get There
      </h3>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="pb-3.5 text-left text-xs font-bold uppercase tracking-[1px] text-white/50 w-[38%]">
              Benchmark
            </th>
            <th className="pb-3.5 text-left text-xs font-bold uppercase tracking-[1px] text-white/50">
              Our Path To It
            </th>
          </tr>
        </thead>
        <tbody>
          {benchmarks.map((b, i) => (
            <tr
              key={b.metric}
              className="border-t border-white/15"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <td className="py-4 pr-3 align-top">
                <div className="text-base font-bold text-white">{b.metric}</div>
                <div className="mt-1 text-[22px] font-black leading-[1.1] text-white">
                  {b.target}
                </div>
              </td>
              <td className="py-4 align-top text-sm leading-relaxed text-white/75">
                {b.path}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-7 border-t border-white/20 pt-5 text-sm leading-relaxed text-white/60">
        Retention data will be trackable at meaningful scale following
        notification system release and market density milestones.
      </div>
    </div>
  );
}

export function StrategySection() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="mb-4 text-base font-extrabold uppercase tracking-[2px] text-[#008199]/75">
            Strategy
          </p>
          <h2 className="mb-8 text-4xl font-extrabold text-foreground md:text-5xl">
            How we solve the two hardest problems in consumer social.
          </h2>
        </ScrollReveal>

        <div className="grid items-start gap-16 md:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-9">
              <div>
                <p className="mb-3 text-lg font-bold italic text-foreground">
                  &ldquo;How do you avoid the empty room problem?&rdquo;
                </p>
                <div className="space-y-5 text-lg leading-[1.85] text-foreground">
                  <p>
                    The fastest way to build a community platform isn&apos;t to
                    target the most isolated users first. It&apos;s to onboard
                    the most socially connected ones: club leaders, organizers,
                    friend groups. Let their activity create the gravity that
                    pulls everyone else in.
                  </p>
                  <p>
                    We seed each market with{" "}
                    <strong className="font-bold text-primary">
                      existing community organizers
                    </strong>{" "}
                    who already run communities on Instagram, TikTok, and
                    WhatsApp. These are real, active groups migrating into a
                    better home. Not empty shells waiting for users.
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-3 text-lg font-bold italic text-foreground">
                  &ldquo;What brings people back week after week?&rdquo;
                </p>
                <div className="space-y-5 text-lg leading-[1.85] text-foreground">
                  <p>
                    Clubs are the answer. Unlike one-off event apps or
                    profile-browsing, Clubs create{" "}
                    <strong className="font-bold text-primary">
                      recurring social routines
                    </strong>
                    : the same people, the same interests, showing up together
                    again and again. Users who attend real-world events become
                    our most retained, most engaged cohort. Everything in Voro is
                    designed to get people there faster.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <RetentionVisual />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
