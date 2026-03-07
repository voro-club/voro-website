import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function BusinessModelSection() {
  return (
    <section className="bg-background-cta px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="mb-4 text-base font-extrabold uppercase tracking-[2px] text-[#008199]/75">
            Business Model
          </p>
          <h2 className="mb-8 text-4xl font-extrabold text-foreground md:text-5xl">
            Multiple revenue channels that grow with the community.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-[20px] bg-foreground p-10 md:p-12">
            <p className="text-lg leading-[1.85] text-white/85">
              As clubs and organizers grow, Voro becomes the infrastructure layer
              for real-life communities &mdash; taking a cut of event ticketing,
              memberships, and brand activations. Think OpenTable for local
              community organizers. Communities exist everywhere. Voro
              standardizes, organizes, and activates them.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
