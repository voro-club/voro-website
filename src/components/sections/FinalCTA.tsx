import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section aria-label="Download Voro" className="bg-background-cta px-6 py-20 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          With your people. Not alone.
        </h2>
        <p className="mx-auto mt-8 max-w-[760px] text-center text-[25px] font-medium leading-[100%] tracking-normal text-[#008199]/75">
          Meet new people through Clubs and Circles — and actually show up.
        </p>

        <div className="mt-10">
          <Button
            asChild
            className="h-12 w-[195px] rounded-[12px] border border-[#F4EFE8] bg-[#008199] px-[40px] py-[11px] text-base font-medium text-white shadow-[0_5px_5px_0_rgba(0,0,0,0.5)] hover:bg-[#006d82]"
          >
            <a href="https://apps.apple.com/us/app/voro-a-social-discovery-app/id6752358417?itscg=30200&itsct=apps_box_link&mttnsubad=6752358417" target="_blank" rel="noopener noreferrer">Download Voro</a>
          </Button>
        </div>

        <p className="mx-auto mt-6 max-w-[462px] text-center text-[20px] font-normal leading-[24px] tracking-normal text-[#000000]">
          Now live in Los Angeles. Expanding nationwide soon.
        </p>
      </div>
    </section>
  );
}
