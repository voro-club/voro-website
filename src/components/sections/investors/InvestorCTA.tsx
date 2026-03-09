import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function InvestorCTA() {
  return (
    <section id="contact" aria-label="Contact" className="bg-background-cta px-6 py-20 text-center md:px-12 lg:px-20 lg:py-32">
      <ScrollReveal>
        <h2 className="text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">
          Interested in learning more?
        </h2>
        <p className="mx-auto mt-8 max-w-[460px] text-center text-[25px] font-medium leading-[100%] tracking-normal text-[#008199]/75">
          We&apos;d love to walk you through the product, our traction, and our
          vision. Reach out directly.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3.5">
          <a
            href="mailto:hello@voro.club"
            className="inline-flex items-center gap-2.5 rounded-[12px] border border-[#F4EFE8] bg-[#008199] px-10 py-3 text-base font-medium text-white shadow-[0_5px_5px_0_rgba(0,0,0,0.5)] transition-colors hover:bg-[#006d82]"
          >
            <span>&#9993;</span>
            hello@voro.club
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
