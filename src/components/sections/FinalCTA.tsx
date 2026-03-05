import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="bg-background-cta px-6 py-20 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          With your people. Not alone.
        </h2>
        <p className="mt-4 text-lg italic text-primary md:text-xl">
          Meet new people through Clubs and Circles &mdash; and actually show
          up.
        </p>

        <div className="mt-10">
          <Button
            asChild
            className="h-12 rounded-full px-8 text-base font-medium"
          >
            <a href="#">Download Voro</a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Now live in Los Angeles. Expanding nationwide soon.
        </p>
      </div>
    </section>
  );
}
