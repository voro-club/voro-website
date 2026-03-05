import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Explore Clubs",
    subtitle: "Start with what you're into.",
    description:
      "Clubs organize the communities that already exist \u2014 hiking, nightlife, fitness, creativity, niche energy. Join solo and show up as yourself.",
    imagePlaceholder: "Explore Clubs Screenshot",
  },
  {
    title: "Connect solo \u2014 or with your friends.",
    subtitle: "Connect solo \u2014 or with your friends.",
    description:
      "A Circle is a shared group profile (2\u20136 friends) who want to meet more people together. You can also swipe solo.",
    imagePlaceholder: "Silverlake Sirens Screenshot",
  },
  {
    title: "Club Feed",
    subtitle: "See what\u2019s happening and show up.",
    description:
      "Clubs have live feeds of real-world plans \u2014 casual hangs, hosted events, group meetups. Everything in one place.",
    imagePlaceholder: "Club Feed Screenshot",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[90rem]">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">How Voro Works</h2>
          <p className="mt-4 text-lg italic text-primary">
            Online discovery &rarr; real-life connection.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="overflow-hidden border-0 shadow-sm"
            >
              <div className="aspect-4/3 w-full bg-muted/30">
                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                  {feature.imagePlaceholder}
                </div>
              </div>
              <CardContent className="pt-4">
                <h3 className="text-lg font-semibold">{feature.subtitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
