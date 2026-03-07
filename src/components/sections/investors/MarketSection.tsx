import { ScrollReveal } from "@/components/ui/scroll-reveal";

const marketCards = [
  {
    label: "TAM",
    num: "$1B+",
    description:
      "Global Monetizable Social Discovery Market (Gen Z & Early-Career) \u2014 social discovery platforms, community & creator-led platforms, urban event-driven social products",
  },
  {
    label: "SAM",
    num: "$75\u2013100M",
    description: "Top 25\u201350 U.S. Campuses + Top 10 Urban Hubs",
  },
  {
    label: "SOM",
    num: "$25\u201340M",
    description:
      "15\u201320 high-density campuses with strong relocation pipelines & 2\u20133 city hubs.",
  },
];

export function MarketSection() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="mb-4 text-base font-extrabold uppercase tracking-[2px] text-[#008199]/75">
            Market Size
          </p>
          <h2 className="mb-8 text-4xl font-extrabold text-foreground md:text-5xl">
            A large market at an inflection point.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {marketCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[20px] border border-black/6 bg-white p-9"
              >
                <p className="mb-2.5 text-xs font-bold uppercase tracking-[1.5px] text-[#008199]/75">
                  {card.label}
                </p>
                <div className="mb-2.5 text-4xl font-extrabold leading-none text-primary">
                  {card.num}
                </div>
                <p className="text-base leading-relaxed text-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
