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
    <span className="block w-full align-bottom italic text-white/75 wrap-break-word sm:whitespace-nowrap">
      {display}
    </span>
  );
}

export function AboutHero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait for first paint then start fade so the transition is smooth
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setReady(true);
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary px-6 pt-40 pb-20 md:px-12 md:pt-44 md:pb-24 lg:px-20">
      {/* Beige overlay fades out for a smooth reveal (opacity is GPU-friendly) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-background transition-opacity duration-900 ease-out"
        style={{ opacity: ready ? 0 : 1 }}
      />

      <div className="pointer-events-none absolute -top-[200px] -right-[100px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-[150px] -left-[50px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

      <div
        className={`transition-opacity duration-700 delay-200 ease-out ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
      <ScrollReveal>
        <div className="relative z-10 min-w-0 max-w-full sm:max-w-[1100px]">
          <span className="mb-5 inline-block text-sm font-extrabold uppercase tracking-[2px] text-white/65">
            Our Story
          </span>
          <h1 className="max-w-full wrap-break-word text-[clamp(22px,7vw,68px)] leading-[1.2] font-extrabold text-white sm:text-[clamp(32px,6vw,68px)]">
            Built from the shared experience of
            <span className="mt-2 block w-full min-w-0">
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
      </div>
    </section>
  );
}
