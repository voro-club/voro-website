import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltCard } from "@/components/ui/tilt-card";

const team = [
  {
    name: "Courtney Caruso",
    role: "Co-founder & CEO",
    bio: "Background in creative strategy, consumer brand building, and early-stage investing. Former Creative Director at a family venture office, with experience shaping go-to-market, storytelling, and partnerships across travel, lifestyle, and media.",
    tag: "Group Glue",
    emoji: "👩🏻",
    image: "/images/courtney.jpeg",
    imagePosition: "object-[center_30%]",
    linkedin: "https://www.linkedin.com/in/courtneygcaruso/",
  },
  {
    name: "Holly Smith",
    role: "Co-founder & COO",
    bio: "6+ years in finance and operations, including advising on high-impact transactions at PwC. Holds a Master's in Accounting. Leads financial strategy, execution, and company operations.",
    tag: "Voice of Reason",
    emoji: "👩🏼",
    image: "/images/holly.png",
    linkedin: "https://www.linkedin.com/in/hollyhsmith/",
  },
  {
    name: "Nate Dereb",
    role: "Founding Technical Partner",
    bio: "7+ years of software engineering experience, including 5+ years at Adobe. Specializes in AI-powered analytics and scalable product engineering. Built LLM-driven insight tools and consumer apps with 170k+ combined users.",
    tag: "Forever Curious",
    emoji: "👨🏿",
    image: "/images/nate.jpg",
    imagePosition: "object-[center_30%]",
    linkedin: "https://www.linkedin.com/in/nathenaeldereb/",
  },
  {
    name: "Chris Chifor",
    role: "Founding Technical Engineer",
    bio: "Built multiple startups from zero to launch to scale. Expert in growth, retention, and product. Led product at a generative AI startup and built scalable systems in past roles. Architect of experiences built for user enjoyment and scale.",
    tag: "Agent of Chaos & Coding",
    emoji: "👨🏻‍💻",
    image: "/images/chris.jpeg",
    imagePosition: "object-[60%_30%]",
    imageScale: "scale-[1.6] translate-y-[8%]",
    linkedin: "https://www.linkedin.com/in/christopher-chifor/",
  },
];

export function AboutTeam() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal>
          <div className="mb-16">
            <p className="mb-4 text-base font-extrabold uppercase tracking-[2px] text-[#008199]/75">
              The Team
            </p>
            <h2 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
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
              <TiltCard className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/7">
                  <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-linear-to-br from-accent-mid/10 to-accent-bright/20">
                    {"linkedin" in member && member.linkedin ? (
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full w-full cursor-pointer transition-opacity hover:opacity-90"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        {"image" in member && member.image ? (
                          <div className={`absolute inset-0 ${"imageScale" in member && member.imageScale ? member.imageScale : ""}`}>
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className={`object-cover ${"imagePosition" in member && member.imagePosition ? member.imagePosition : "object-top"}`}
                            />
                          </div>
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-[64px]">
                            {member.emoji}
                          </div>
                        )}
                      </Link>
                    ) : (
                      <>
                        {"image" in member && member.image ? (
                          <div className={`absolute inset-0 ${"imageScale" in member && member.imageScale ? member.imageScale : ""}`}>
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className={`object-cover ${"imagePosition" in member && member.imagePosition ? member.imagePosition : "object-top"}`}
                            />
                          </div>
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-[64px]">
                            {member.emoji}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <div className="flex min-h-[260px] min-w-0 flex-1 flex-col p-7">
                    <p className="mb-1.5 text-xs font-bold uppercase tracking-[1.5px] text-[#008199]/75">
                      {member.role}
                    </p>
                    <h3 className="mb-2 text-2xl font-extrabold text-foreground">
                      {member.name}
                    </h3>
                    <p className="min-h-0 flex-1 text-base leading-relaxed text-foreground">
                      {member.bio}
                    </p>
                    <span className="mt-auto w-fit cursor-default self-start rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold tracking-[0.3px] text-white transition-colors hover:animate-tag-bounce hover:bg-accent">
                      {member.tag}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
