import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";

export function Communities() {
  return (
    <section aria-label="Communities using Voro" className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[90rem]">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Built with real communities.
          </h2>
          <p className="mx-auto mt-8 max-w-[686px] text-center text-[25px] font-medium leading-[100%] tracking-normal text-[#008199]/75">
            Local clubs and friend groups are already organizing on Voro.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Community photo card */}
          <TiltCard className="h-full">
          <Card className="h-full overflow-hidden rounded-xl border-0 shadow-sm">
            <div className="aspect-16/10 w-full bg-muted/30">
              <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                Swim &amp; Social Photo
              </div>
            </div>
            <CardContent className="pt-4">
              <h3 className="text-xl font-semibold">Swim &amp; Social</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                LA-based open water swim + social club.
              </p>
            </CardContent>
          </Card>
          </TiltCard>

          {/* Feed posts card */}
          <TiltCard className="h-full">
          <Card className="relative h-full overflow-hidden rounded-xl border-0 shadow-sm">
            <h3 className="relative z-10 px-6 pt-4 text-xl font-semibold">
              Already organizing in real life
            </h3>
            <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
              <div className="w-full space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/kai.jpeg"
                    alt="Kai D. posting about Weekly Sunrise Plunges"
                    width={800}
                    height={200}
                    className="w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/usc.jpg"
                    alt="Voro U. posting in USC Founding Members"
                    width={800}
                    height={200}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 z-0 rounded-xl" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 50%, var(--background) 0%, var(--background) 32%, white 100%)" }} />
          </Card>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
