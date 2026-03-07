"use client";

import { useCallback } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/voro-a-social-discovery-app/id6752358417?itscg=30200&itsct=apps_box_link&mttnsubad=6752358417";

const CONFETTI_COLORS = ["#065D6D", "#008199", "#00C4CC", "#e8f7f8", "#ffffff"];

export function AboutCTA() {
  const launchConfetti = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const { clientX: x, clientY: y } = e;

      for (let i = 0; i < 40; i++) {
        const piece = document.createElement("div");
        const size = 6 + Math.random() * 8;
        piece.style.cssText = `
          position:fixed;pointer-events:none;z-index:9999;
          left:${x + (Math.random() - 0.5) * 120}px;
          top:${y}px;
          width:${size}px;height:${size}px;
          background:${CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]};
          border-radius:${Math.random() > 0.5 ? "50%" : "2px"};
          transform:rotate(${Math.random() * 360}deg);
          animation:confettiFall ${0.8 + Math.random() * 0.6}s ease-in ${Math.random() * 0.3}s forwards;
        `;
        document.body.appendChild(piece);
        piece.addEventListener("animationend", () => piece.remove());
      }
    },
    []
  );

  return (
    <section className="bg-background-cta px-6 py-20 text-center md:px-12 lg:py-32">
      <ScrollReveal>
        <h2 className="text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">
          Expand your Circle.
        </h2>
        <p className="mx-auto mt-8 max-w-[760px] text-center text-[25px] font-medium leading-[100%] tracking-normal text-[#008199]/75">
          Now live in Los Angeles and Denver. More cities coming soon.
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={launchConfetti}
          className="mt-10 inline-block h-12 w-[195px] rounded-[12px] border border-[#F4EFE8] bg-[#008199] px-[40px] py-[11px] text-base font-medium text-white shadow-[0_5px_5px_0_rgba(0,0,0,0.5)] transition-colors hover:bg-[#006d82]"
        >
          Download Voro
        </a>
      </ScrollReveal>
    </section>
  );
}
