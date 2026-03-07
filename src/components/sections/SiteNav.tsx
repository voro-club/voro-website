"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/voro-a-social-discovery-app/id6752358417?itscg=30200&itsct=apps_box_link&mttnsubad=6752358417";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "mailto:contact@voroapp.com", label: "Contact", external: true },
];

const FADE_SCROLL_RANGE = 180; // px over which nav fades out

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [navOpacity, setNavOpacity] = useState(1);
  const [bubbleStyle, setBubbleStyle] = useState<{ left: number; width: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);
  const [tapIndex, setTapIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setNavOpacity(Math.max(0, 1 - y / FADE_SCROLL_RANGE));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Update sliding bubble position when pathname or layout changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeIndex = links.findIndex((link) =>
      link.href === "/" ? pathname === "/" : !link.external && pathname.startsWith(link.href)
    );

    if (activeIndex < 0) {
      setBubbleStyle(null);
      return;
    }

    const el = linkRefs.current[activeIndex];
    const measure = () => {
      if (!el || !container) return;
      const cr = container.getBoundingClientRect();
      const er = el.getBoundingClientRect();
      setBubbleStyle({
        left: er.left - cr.left,
        width: er.width,
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, [pathname]);

  const handleLinkClick = (index: number) => {
    setTapIndex(index);
    const t = setTimeout(() => setTapIndex(null), 250);
    return () => clearTimeout(t);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 transition-opacity duration-300 sm:px-4 sm:pt-4"
      style={{
        opacity: navOpacity,
        pointerEvents: navOpacity < 0.02 ? "none" : "auto",
      }}
    >
      <nav
        className={`flex max-w-[calc(100vw-24px)] min-w-0 shrink items-center gap-1 rounded-full border border-border/40 bg-white px-2 py-1.5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 sm:max-w-none sm:gap-2 sm:px-5 sm:py-2 ${
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.1)]" : ""
        }`}
      >
        <div ref={containerRef} className="relative flex min-w-0 shrink items-center gap-1 sm:gap-2">
          {/* Sliding bubble behind active link */}
          {bubbleStyle && (
            <div
              className="absolute top-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 ease-out"
              style={{
                left: bubbleStyle.left,
                width: bubbleStyle.width,
                height: "calc(100% - 4px)",
              }}
              aria-hidden
            />
          )}

          {links.map((link, index) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            const Comp = link.external ? "a" : Link;
            const extraProps = link.external
              ? { target: undefined, rel: undefined }
              : {};

            const isTapping = tapIndex === index;

            return (
              <Comp
                key={link.href}
                ref={(el) => {
                  linkRefs.current[index] = el as HTMLAnchorElement | null;
                }}
                href={link.href}
                {...extraProps}
                onClick={() => handleLinkClick(index)}
                className={`relative z-10 shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-colors duration-200 sm:px-7 sm:py-2.5 sm:text-sm ${
                  isTapping ? "nav-link-tap" : ""
                } ${
                  isActive
                    ? "text-white"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </Comp>
            );
          })}
        </div>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-0.5 shrink-0 rounded-full border border-[#F4EFE8] bg-[#008199] px-3 py-2 text-xs font-semibold text-white shadow-[0_5px_5px_0_rgba(0,0,0,0.5)] transition-transform duration-150 active:scale-95 hover:bg-[#006d82] sm:ml-1 sm:px-7 sm:py-2.5 sm:text-sm"
        >
          Download
        </a>
      </nav>
    </header>
  );
}
