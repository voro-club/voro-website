import Image from "next/image";
import Link from "next/link";

export function InvestorFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 bg-background-cta px-6 py-7 sm:flex-row md:px-12 lg:px-20">
      <Link href="/" className="flex shrink-0 items-center">
        <Image
          src="/images/voro.svg"
          alt="Voro"
          width={100}
          height={32}
          className="h-8 w-auto sm:h-9"
        />
      </Link>
      <p className="text-xs text-muted-foreground">
        Unlisted &mdash; intended for investors and partners only. &copy;{" "}
        {new Date().getFullYear()} Voro.
      </p>
    </footer>
  );
}
