import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IPhoneFrame } from "@/components/ui/iphone-frame";

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden px-6 pt-12 pb-16 md:px-12 lg:px-20 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto flex max-w-[90rem] flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex max-w-xl flex-col items-center text-center lg:pt-8">
          <div className="mb-6 flex w-full justify-center">
            <div className="relative -mb-8 h-[140px] w-[240px] md:-mb-10 md:h-[160px] md:w-[272px]">
              <Image
                src="/images/voro.svg"
                alt="Voro — social discovery app logo"
                width={272}
                height={160}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>

          <h1
            className="text-center font-bold text-foreground"
            style={{
              fontSize: "88px",
              lineHeight: "90px",
              letterSpacing: "0%",
            }}
          >
            Expand your
            <br />
            circle.
          </h1>

          <p
            className="mt-6 text-center font-normal text-primary"
            style={{
              fontSize: "22px",
              lineHeight: "50px",
              letterSpacing: "0%",
              maxWidth: "586px",
            }}
          >
            Less pressure. More people. Fewer awkward DMs.
          </p>
          <p className="mt-2 text-center font-normal text-primary/90" style={{ fontSize: "16px", lineHeight: "24px" }}>
            Clubs. Circles. In-person events. All in one place.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3">
            <Button
              asChild
              className="h-12 w-[195px] rounded-[12px] border border-[#F4EFE8] bg-[#008199] px-[40px] py-[11px] text-base font-medium text-white shadow-[0_5px_5px_0_rgba(0,0,0,0.5)] hover:bg-[#006d82]"
            >
              <a href="https://apps.apple.com/us/app/voro-a-social-discovery-app/id6752358417?itscg=30200&itsct=apps_box_link&mttnsubad=6752358417" aria-label="Download the Voro app" target="_blank" rel="noopener noreferrer">Download the app</a>
            </Button>
            <Button
              asChild
              className="h-12 w-[195px] rounded-[12px] border border-[#242A2E] bg-[#F4EFE8] px-[40px] py-[11px] text-base font-medium text-[#242A2E] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:bg-[#EBE6E0]"
            >
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>

          <p
            className="mt-8 w-full text-center font-normal text-[#000000]"
            style={{
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0%",
            }}
          >
            Now live in Los Angeles. More cities coming.
          </p>
        </div>

        {/* Right column - phone mockups */}
        <div className="relative hidden w-full shrink-0 items-center justify-center lg:ml-auto lg:flex lg:max-w-2xl lg:justify-end">
          <div className="relative h-[660px] w-[460px] md:h-[750px] md:w-[520px] lg:h-[840px] lg:w-[580px]">
            {/* Phone 1 - behind, slight tilt */}
            <div
              className="absolute bottom-0 left-0 z-0"
              style={{ transform: "rotate(2deg)" }}
            >
              <IPhoneFrame
                src="/images/phone2members.png"
                alt="Voro app screenshot showing the Club feed with real-time posts and events"
                priority
              />
            </div>
            {/* Phone 2 - in front, overlapping */}
            <div className="absolute right-0 top-0 z-10">
              <IPhoneFrame
                src="/images/phone1.jpg"
                alt="Voro app screenshot showing a Circle group profile with friends"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
