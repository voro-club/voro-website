import { ScrollReveal } from "@/components/ui/scroll-reveal";

const team = [
  {
    name: "Courtney Caruso",
    role: "Co-founder & CEO",
    bio: "Background in creative strategy, consumer brand building, and early-stage investing. Former Creative Director at a family venture office, with experience shaping go-to-market, storytelling, and partnerships across travel, lifestyle, and media.",
    tag: "Group Glue",
    emoji: "👩🏻",
  },
  {
    name: "Holly Smith",
    role: "Co-founder & COO",
    bio: "6+ years in finance and operations, including advising on high-impact transactions at PwC. Holds a Master's in Accounting. Leads financial strategy, execution, and company operations.",
    tag: "Voice of Reason",
    emoji: "👩🏼",
  },
  {
    name: "Nate Dereb",
    role: "Founding Technical Partner",
    bio: "7+ years of software engineering experience, including 5+ years at Adobe. Specializes in AI-powered analytics and scalable product engineering. Built LLM-driven insight tools and consumer apps with 170k+ combined users.",
    tag: "Forever Unbothered",
    emoji: "👨🏿",
  },
  {
    name: "Chris Chifor",
    role: "Founding Technical Engineer",
    bio: "Placeholder bio — background in software engineering with experience building consumer-facing mobile and web products. Focused on scalable architecture and fast iteration.",
    tag: "Agent of Chaos & Coding",
    emoji: "👨🏻‍💻",
  },
];

export function AboutTeam() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal>
          <div className="mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-[#008199]/75">
              The Team
            </p>
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              The Circle behind Voro.
            </h2>
            <p className="max-w-[500px] text-lg leading-[1.75] text-foreground">
              Building the product we wish existed during our biggest
              transitions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {team.map((member) => (
            <ScrollReveal key={member.name}>
              <div className="overflow-hidden rounded-3xl border border-black/7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="flex aspect-4/3 w-full items-center justify-center bg-linear-to-br from-accent-mid/10 to-accent-bright/20 text-[64px]">
                  {member.emoji}
                </div>
                <div className="p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[1.5px] text-[#008199]/75">
                    {member.role}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-base leading-relaxed text-foreground">
                    {member.bio}
                  </p>
                  <span className="mt-4 inline-block cursor-default rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold tracking-[0.3px] text-white transition-colors hover:animate-tag-bounce hover:bg-accent">
                    {member.tag}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
