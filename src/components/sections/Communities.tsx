import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";

export function Communities() {
  return (
    <section aria-label="Communities using Voro" className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[90rem]">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Already happening in LA.
          </h2>
          <p className="mx-auto mt-8 max-w-[686px] text-center text-[25px] font-medium leading-[100%] tracking-normal text-[#008199]/75 md:leading-[1.5]">
            These aren&apos;t test groups. These are real communities, and they&apos;re meeting in person.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Community photo card */}
          <TiltCard className="h-full">
          <Card className="h-full overflow-hidden rounded-xl border-0 pt-0 shadow-sm">
            <div className="relative aspect-16/10 w-full overflow-hidden bg-muted/30">
              <Image
                src="/images/swimandsocial.jpeg"
                alt="Swim & Social — LA-based open water swim + social club"
                fill
                className="object-cover object-bottom"
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="text-xl font-semibold">Swim &amp; Social</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Ocean swims. New friends. Every week in LA.
              </p>
            </CardContent>
          </Card>
          </TiltCard>

          {/* Feed posts card */}
          <TiltCard className="h-full">
          <Card className="relative h-full min-h-[420px] overflow-hidden rounded-xl border-0 shadow-sm md:min-h-0">
            <h3 className="relative z-20 px-6 pt-2 text-xl font-semibold">
              What's happening this week
            </h3>
            <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pt-12">
              <div className="w-full max-w-[94%] space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/morgan.jpeg"
                    alt="Morgan posting in community"
                    width={800}
                    height={200}
                    className="w-full object-cover"
                  />
                </div>
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
          </Card>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
