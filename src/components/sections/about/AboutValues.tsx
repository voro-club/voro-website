import { ScrollReveal } from "@/components/ui/scroll-reveal";

const values = [
  {
    icon: "🌍",
    title: "Real Life First",
    description:
      "The app is a tool, not the destination. Everything we build is designed to get you off your phone and into a room with people you want to be around.",
  },
  {
    icon: "🤝",
    title: "Groups Over Profiles",
    description:
      "Shared experiences beat cold intros every time. Whether it's a run club, a watch party, or a creative meetup — showing up together is always better than showing up alone.",
  },
  {
    icon: "🏘️",
    title: "Community Over Content",
    description:
      "We're not a social media feed. We're not optimizing for followers. We measure success by how many people connect in real life and meet new people.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-background-cta px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-16 grid items-end gap-20 md:grid-cols-2">
          <ScrollReveal>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-[#008199]/75">
                What We Believe
              </p>
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                Connection happens through doing things together.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-lg leading-[1.8] text-foreground">
              Every design decision at Voro comes back to one question: does
              this make showing up in real life feel easier? These are the
              principles that guide us.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <ScrollReveal key={value.title}>
              <div className="rounded-[20px] border border-black/6 border-l-[3px] border-l-transparent bg-white p-9 transition-all duration-300 hover:-translate-y-1 hover:border-l-primary hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-primary text-[22px]">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-base leading-relaxed text-foreground">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
