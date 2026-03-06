"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const phrases = [
  "moving somewhere new.",
  "wanting to meet new people.",
  "starting college in a new city.",
  "wanting something in-person.",
];

function Typewriter() {
  const [display, setDisplay] = useState("");
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = phrases[phraseIdx.current];

      if (!deleting.current) {
        charIdx.current++;
        setDisplay(current.slice(0, charIdx.current));
        if (charIdx.current === current.length) {
          timeout = setTimeout(() => {
            deleting.current = true;
            tick();
          }, 2000);
          return;
        }
      } else {
        charIdx.current--;
        setDisplay(current.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
        }
      }
      timeout = setTimeout(tick, deleting.current ? 40 : 70);
    }

    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="inline-block border-r-[3px] border-white/60 pr-1 align-bottom whitespace-nowrap italic text-white/75">
      {display}
    </span>
  );
}

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-primary px-6 pt-40 pb-20 md:px-12 md:pt-44 md:pb-24 lg:px-20">
      <div className="pointer-events-none absolute -top-[200px] -right-[100px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-[150px] -left-[50px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

      <ScrollReveal>
        <div className="relative z-10 max-w-[720px]">
          <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[2px] text-white/65">
            Our Story
          </span>
          <h1 className="text-[clamp(42px,6vw,68px)] leading-[1.1] font-bold text-white">
            Built from the shared experience of
            <span className="mt-2 block">
              <Typewriter />
            </span>
          </h1>
          <p className="mt-7 max-w-[560px] text-lg leading-[1.75] font-light text-white/85">
            Voro was born from a simple truth: meeting new people is meant to be
            exciting and low pressure — and finding your people is easier when
            you don&apos;t have to do it alone.
          </p>
          <p className="mt-5 text-base font-normal italic text-white/65">
            We built the platform we wish had existed.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
