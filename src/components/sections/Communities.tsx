import { Card, CardContent } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";

export function Communities() {
  return (
    <section aria-label="Communities using Voro" className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[90rem]">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Built with real communities.
          </h2>
          <p className="mx-auto mt-8 max-w-[686px] text-center text-[25px] font-medium leading-[100%] tracking-normal text-[#008199]/75">
            Local clubs and friend groups are already organizing on Voro.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Community photo card */}
          <TiltCard className="h-full">
          <Card className="h-full overflow-hidden rounded-xl border-0 shadow-sm">
            <div className="aspect-16/10 w-full bg-muted/30">
              <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                Swim &amp; Social Photo
              </div>
            </div>
            <CardContent className="pt-4">
              <h3 className="text-xl font-semibold">Swim &amp; Social</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                LA-based open water swim + social club.
              </p>
            </CardContent>
          </Card>
          </TiltCard>

          {/* Feed posts card */}
          <TiltCard className="h-full">
          <Card className="h-full overflow-hidden rounded-xl border-0 shadow-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold">
                Already organizing in real life
              </h3>

              <div className="mt-4 space-y-4">
                {/* Post 1 */}
                <div className="rounded-lg bg-background p-4">
                  <div className="border-l-4 border-primary pl-3">
                    <p className="text-sm text-foreground">
                      Very excited for the Super Bowl
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>3 Likes</span>
                    <span>1 Comment</span>
                  </div>
                </div>

                {/* Post 2 */}
                <div className="rounded-lg bg-background p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-muted" />
                    <p className="text-sm">
                      <span className="font-medium">Violet V.</span>
                      {" posted in "}
                      <span className="font-medium text-primary">
                        Cookbook Club
                      </span>
                    </p>
                  </div>
                  <div className="mt-2 border-l-4 border-primary pl-3">
                    <p className="text-sm text-foreground">
                      Ladies! Who would like to nominate a cookbook recipe to cook
                      and share this week? Potluck recipes we want to cook from a
                      shelved cookbook&bull;&bull;
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>2 Likes</span>
                    <span>1 Comment</span>
                  </div>
                </div>

                {/* Post 3 */}
                <div className="rounded-lg bg-background p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-muted" />
                    <p className="text-sm">
                      <span className="font-medium">Eric P.</span>
                      {" posted in "}
                      <span className="font-medium text-primary">
                        Bear Down Parlay
                      </span>
                    </p>
                  </div>
                  <div className="mt-2 border-l-4 border-primary pl-3">
                    <p className="text-sm text-foreground">
                      Alright everyone - hit me with a lay
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>2 Likes</span>
                    <span>5 Comments</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
