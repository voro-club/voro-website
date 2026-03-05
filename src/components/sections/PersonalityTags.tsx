import { Badge } from "@/components/ui/badge";

type TagColor = "dark" | "bright";

interface Tag {
  label: string;
  color: TagColor;
}

const tags: Tag[] = [
  { label: "Group Glue", color: "dark" },
  { label: "Crush Collector", color: "bright" },
  { label: "Responsible (Buzzkill)", color: "dark" },
  { label: "Gremlin", color: "dark" },
  { label: "Crying in the Club", color: "dark" },
  { label: "King of the Parlay", color: "dark" },
  { label: "Always Manifesting", color: "dark" },
  { label: "Festival Veteran", color: "dark" },
  { label: "Menace", color: "bright" },
  { label: "Always Abroad", color: "dark" },
  { label: "Houdini Energy", color: "dark" },
  { label: "Group Chat Comedian", color: "bright" },
  { label: "Group Historian", color: "dark" },
  { label: "Voice of Reason", color: "dark" },
  { label: "Competitive AF", color: "dark" },
  { label: "Sports Enthusiast", color: "dark" },
  { label: "Lives for the Trauma Dump", color: "dark" },
  { label: "Group Therapist", color: "dark" },
  { label: "Fringe Guy", color: "bright" },
  { label: "Designated DJ", color: "dark" },
  { label: "Head in the Clouds", color: "dark" },
  { label: "Agent of Chaos", color: "bright" },
  { label: "Moves in Silence", color: "dark" },
  { label: "Knows A Guy", color: "dark" },
  { label: "Forever Unbothered", color: "dark" },
];

const colorClasses: Record<TagColor, string> = {
  dark: "border-0 bg-primary text-primary-foreground hover:bg-primary/90",
  bright: "border-0 bg-accent-bright text-white hover:bg-accent-bright/90",
};

export function PersonalityTags() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          Your type of people. Already here.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg italic text-primary">
          Pick your tags - and let your friends tag you too.
          <br />
          Because sometimes your friends describe you better than you do.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <Badge
              key={tag.label}
              variant="default"
              className={`rounded-full px-4 py-2 text-sm font-medium ${colorClasses[tag.color]}`}
            >
              {tag.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
