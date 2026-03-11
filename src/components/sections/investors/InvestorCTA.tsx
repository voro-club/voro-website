import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function InvestorCTA() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="bg-foreground px-6 py-20 text-center md:px-12 lg:px-20 lg:py-32"
    >
      <ScrollReveal>
        <h2 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
          Interested in learning more?
        </h2>
        <p className="mx-auto mt-4 max-w-[460px] text-base leading-[1.75] font-light text-white/55">
          We&apos;d love to walk you through the product, our traction, and our
          vision. Reach out directly.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3.5">
          <a
            href="mailto:courtney@voro.club"
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary/85"
          >
            <span>&#9993;</span>
            courtney@voro.club
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
