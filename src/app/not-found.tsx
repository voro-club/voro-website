import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center gap-8 text-center">
        <Image
          src="/images/voro.svg"
          alt="Voro"
          width={80}
          height={80}
          className="h-16 w-auto md:h-20"
          priority
        />
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl">
            404
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            I think you&apos;re lost.
          </p>
        </div>
        <Link
          href="/"
          className="rounded-full bg-foreground px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-foreground/90 active:scale-[0.98]"
        >
          Take me home
        </Link>
      </div>
    </main>
  );
}
