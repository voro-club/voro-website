import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stats = [
  { num: "1 in 3", label: "downloads come from a friend referral" },
  { num: "73%", label: "of Gen Z report isolation" },
  { num: "2", label: "Live markets: Denver & LA" },
  { num: "Jan '26", label: "Public launch date" },
];

export function InvestorHero() {
  return (
    <>
      <section className="relative mt-16 overflow-hidden bg-primary px-6 pt-24 pb-20 md:px-12 md:pt-28 md:pb-24 lg:px-20">
        {/* Ambient background effects */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04) 1px, transparent 1px)",
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 1px, transparent 1px)",
              "radial-gradient(circle at 55% 55%, rgba(255,255,255,0.03) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "48px 48px, 64px 64px, 32px 32px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[200px] -right-[100px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_65%)]"
        />

        <ScrollReveal>
          <div className="relative z-10 max-w-[700px]">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-5 py-1.5 text-sm font-extrabold uppercase tracking-[2px] text-white/65">
              <span className="text-[8px] text-green-300">&#9679;</span>
              Investor &amp; Partner Overview
            </span>
            <h1 className="mb-6 text-[clamp(32px,6vw,68px)] leading-[1.2] font-extrabold text-white">
              Building the social layer for in-person.
            </h1>
            <p className="mb-10 max-w-[560px] text-lg leading-[1.75] font-light text-white/85">
              Voro is a group-first social platform turning online discovery into
              in-person connection through interest-based Clubs, friend Circles,
              and local Events. Now live in Denver and Los Angeles.
            </p>
            <a
              href="#contact"
              className="inline-block rounded-full border border-white/30 bg-white/12 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/20"
            >
              Get in Touch
            </a>
          </div>
        </ScrollReveal>
      </section>

      <div className="bg-foreground px-6 py-9 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-4xl font-extrabold leading-none text-accent-bright">
                {stat.num}
              </span>
              <span className="mt-1.5 block text-sm text-white/45">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
