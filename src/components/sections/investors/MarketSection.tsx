import { ScrollReveal } from "@/components/ui/scroll-reveal";

const marketCards = [
  {
    label: "TAM",
    num: "$20B+",
    description:
      "Global market at the intersection of social discovery ($11B), community platforms ($9.8B), and event apps ($12.8B). Voro competes across all three.",
  },
  {
    label: "SAM",
    num: "$3–4B",
    description:
      "U.S. Gen Z and Millennial social discovery users ages 18–35 — the segment actively seeking real-world connection tools beyond traditional dating apps.",
  },
  {
    label: "SOM",
    num: "$15–35M",
    description:
      "USC + LA Metro 18–35 population (~2M+), at conservative 1–2% penetration and $5–10/mo blended ARPU. Austin organic waitlist signals next market.",
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
