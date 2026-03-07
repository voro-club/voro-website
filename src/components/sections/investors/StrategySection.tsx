import { ScrollReveal } from "@/components/ui/scroll-reveal";

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

        <ScrollReveal>
          <div className="max-w-[640px] space-y-9">
            <div>
              <p className="mb-3 text-lg font-bold italic text-foreground">
                &ldquo;How do you avoid the empty room problem?&rdquo;
              </p>
              <div className="space-y-5 text-lg leading-[1.85] text-foreground">
                <p>
                  We launched in Denver and LA, learned quickly, and made a
                  deliberate call:{" "}
                  <strong className="font-bold text-primary">
                    go deep before going wide
                  </strong>
                  . Rather than spreading thin across two cities, we&apos;re
                  concentrating on USC first, building the kind of density where
                  every new user immediately sees active clubs, familiar faces,
                  and upcoming events.
                </p>
                <p>
                  We seed each campus with{" "}
                  <strong className="font-bold text-primary">
                    existing community organizers
                  </strong>{" "}
                  who already run communities on Instagram, TikTok, and WhatsApp.
                  These are real, active groups migrating into a better home. Not
                  empty shells waiting for users.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-lg font-bold italic text-foreground">
                &ldquo;What brings people back week after week?&rdquo;
              </p>
              <p className="text-lg leading-[1.85] text-foreground">
                Clubs are the answer. Unlike one-off event apps or
                profile-browsing, Clubs create{" "}
                <strong className="font-bold text-primary">
                  recurring social routines
                </strong>
                : the same people, the same interests, showing up together again
                and again.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
