import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-12 pb-16 md:px-12 lg:px-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto flex max-w-[90rem] flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Left column - text content */}
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left lg:pt-8">
          <div className="relative mb-6 h-[94px] w-[160px]">
            <Image
              src="/images/Voro.png"
              alt="Voro"
              width={160}
              height={94}
              className="h-[94px] w-[160px] object-contain"
              priority
            />
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Expand your
            <br />
            circle.
          </h1>

          <p className="mt-6 max-w-md text-center text-[22px] font-normal leading-[50px] tracking-normal text-primary">
            Meet new people through interest-based clubs, group profiles with
            your friends, and in-person events.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full px-8 text-base font-medium"
            >
              <a href="#">Download the app</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-foreground/20 px-8 text-base font-medium"
            >
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Now live in Los Angeles and Denver.
          </p>
        </div>

        {/* Right column - phone mockups */}
        <div className="relative flex w-full max-w-lg shrink-0 items-center justify-center lg:max-w-xl">
          <div className="relative h-[520px] w-[320px] md:h-[600px] md:w-[360px]">
            {/* Phone 1 - behind, 2° tilt */}
            <div
              className="absolute bottom-0 left-0 z-0 h-[500px] w-[240px] md:h-[580px] md:w-[280px]"
              style={{ transform: "rotate(-2deg)" }}
            >
              <Image
                src="/images/phone1.png"
                alt="Voro app - Club feed"
                width={280}
                height={580}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            {/* Phone 2 - on top, overlapping */}
            <div className="absolute right-0 top-0 z-10 h-[500px] w-[240px] md:h-[580px] md:w-[280px]">
              <Image
                src="/images/phone2.png"
                alt="Voro app - Circle profile"
                width={280}
                height={580}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
