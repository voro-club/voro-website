import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltCard } from "@/components/ui/tilt-card";

const steps = [
  {
    num: "01",
    title: "Clubs",
    description:
      "Local interest-based communities hosted by a leader. Users join solo and stay for the routine: fitness groups, social energy clubs, niche communities. Clubs turn one-off connections into familiar faces and recurring habits.",
    tag: "Primary retention engine",
  },
  {
    num: "02",
    title: "Circles",
    description:
      "A shared group profile of 2\u20136 friends who discover and match with other groups. Takes the familiar swipe mechanic and removes the 1:1 pressure. Built for low-stakes, real-life connection.",
    tag: "Discovery & familiarity",
  },
  {
    num: "03",
    title: "Events",
    description:
      "A live feed of real-world events in your city, hosted by Clubs, Circles, or Voro. Users browse, RSVP, and show up solo or with friends. Events are the in real life payoff of the entire platform.",
    tag: "In-person community",
  },
];

export function FlywheelSection() {
  return (
    <section className="bg-background-cta px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="mb-4 text-base font-extrabold uppercase tracking-[2px] text-[#008199]/75">
            How It Works
          </p>
          <h2 className="mb-8 text-4xl font-extrabold text-foreground md:text-5xl">
            Three features. One flywheel.
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {steps.map((step) => (
            <ScrollReveal key={step.num}>
              <TiltCard className="h-full">
                <div className="flex h-full flex-col rounded-[20px] border border-black/6 bg-white p-9 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                  <div className="mb-4 text-[52px] leading-none font-extrabold text-accent-bright">
                    {step.num}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mb-4 flex-1 text-base leading-relaxed text-foreground">
                    {step.description}
                  </p>
                  <span className="mt-auto inline-block self-start rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold tracking-[0.3px] text-white">
                    {step.tag}
                  </span>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
