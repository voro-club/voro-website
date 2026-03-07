"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function InvestorNav() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between bg-primary px-6 md:px-12">
      <div
        className="absolute top-0 left-0 h-[3px] rounded-r-full bg-accent-bright opacity-50 transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
      <Link href="/" className="flex shrink-0 items-center">
        <Image
          src="/images/voro.svg"
          alt="Voro"
          width={180}
          height={58}
          className="h-14 w-auto brightness-0 invert sm:h-16"
        />
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-medium text-white transition-colors hover:text-white/90"
        >
          &larr; Back to Site
        </Link>
        <a
          href="#contact"
          className="rounded-full border border-white/40 bg-white/25 px-5 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/35 hover:border-white/50"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}
