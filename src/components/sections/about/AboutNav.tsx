"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/voro-a-social-discovery-app/id6752358417?itscg=30200&itsct=apps_box_link&mttnsubad=6752358417";

export function AboutNav() {
  const [scrolled, setScrolled] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      clickCount.current++;
      if (clickTimer.current) clearTimeout(clickTimer.current);
      clickTimer.current = setTimeout(() => {
        clickCount.current = 0;
      }, 1000);

      if (clickCount.current >= 3) {
        clickCount.current = 0;
        const tag = document.createElement("div");
        tag.textContent = "Certified Lurker 👀";
        tag.style.cssText = `
          position:fixed;top:50%;left:50%;
          transform:translate(-50%,-50%) scale(0);
          background:#065d6d;color:white;
          font-family:inherit;font-size:clamp(32px,6vw,64px);font-weight:700;
          padding:24px 48px;border-radius:100px;z-index:9999;
          pointer-events:none;white-space:nowrap;
          box-shadow:0 20px 60px rgba(0,0,0,0.25);
          transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1),opacity 0.4s ease;
          opacity:0;
        `;
        document.body.appendChild(tag);
        requestAnimationFrame(() => {
          tag.style.transform = "translate(-50%,-50%) scale(1)";
          tag.style.opacity = "1";
        });
        setTimeout(() => {
          tag.style.transform = "translate(-50%,-50%) scale(0.8)";
          tag.style.opacity = "0";
          setTimeout(() => tag.remove(), 400);
        }, 2000);
      }
    },
    []
  );

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-6 transition-all duration-400 md:px-12 ${
        scrolled
          ? "bg-white/97 shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-primary"
      }`}
    >
      <span
        onClick={handleLogoClick}
        className={`inline-block cursor-pointer text-[26px] font-bold tracking-[-0.5px] transition-colors duration-400 hover:animate-wobble ${
          scrolled ? "text-primary" : "text-white"
        }`}
      >
        Voro
      </span>

      <ul className="hidden items-center gap-9 md:flex">
        <li>
          <Link
            href="/"
            className={`text-sm font-medium tracking-[0.3px] transition-colors ${
              scrolled
                ? "text-muted-foreground hover:text-primary"
                : "text-white/85 hover:text-white"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`border-b-2 pb-0.5 text-sm font-medium tracking-[0.3px] transition-colors ${
              scrolled
                ? "border-primary/60 text-foreground"
                : "border-white/60 text-white"
            }`}
          >
            About Us
          </Link>
        </li>
        <li>
          <a
            href="mailto:contact@voroapp.com"
            className={`text-sm font-medium tracking-[0.3px] transition-colors ${
              scrolled
                ? "text-muted-foreground hover:text-primary"
                : "text-white/85 hover:text-white"
            }`}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-colors ${
              scrolled
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white text-primary hover:bg-background"
            }`}
          >
            Download App
          </a>
        </li>
      </ul>
    </nav>
  );
}
