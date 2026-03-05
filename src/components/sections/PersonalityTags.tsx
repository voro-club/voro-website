"use client";

import { Badge } from "@/components/ui/badge";
import {
  useMemo,
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";

type TagColor = "dark" | "mid" | "bright";

interface Tag {
  label: string;
  color: TagColor;
}

const tags: Tag[] = [
  { label: "Group Glue", color: "dark" },
  { label: "Crush Collector", color: "bright" },
  { label: "Responsible (Buzzkill)", color: "mid" },
  { label: "Gremlin", color: "dark" },
  { label: "Crying in the Club", color: "mid" },
  { label: "King of the Parlay", color: "dark" },
  { label: "Always Manifesting", color: "mid" },
  { label: "Festival Veteran", color: "dark" },
  { label: "Menace", color: "bright" },
  { label: "Always Abroad", color: "mid" },
  { label: "Houdini Energy", color: "dark" },
  { label: "Group Chat Comedian", color: "bright" },
  { label: "Group Historian", color: "mid" },
  { label: "Voice of Reason", color: "dark" },
  { label: "Competitive AF", color: "mid" },
  { label: "Sports Enthusiast", color: "dark" },
  { label: "Lives for the Trauma Dump", color: "mid" },
  { label: "Group Therapist", color: "dark" },
  { label: "Fringe Guy", color: "bright" },
  { label: "Designated DJ", color: "mid" },
  { label: "Head in the Clouds", color: "dark" },
  { label: "Agent of Chaos", color: "bright" },
  { label: "Moves in Silence", color: "dark" },
  { label: "Knows A Guy", color: "mid" },
  { label: "Forever Unbothered", color: "dark" },
];

const colorClasses: Record<TagColor, string> = {
  dark: "border-0 bg-primary text-primary-foreground",
  mid: "border-0 bg-accent-mid text-white",
  bright: "border-0 bg-accent-bright text-white",
};

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return Math.round((x - Math.floor(x)) * 100) / 100;
}

export function PersonalityTags() {
  const [tagOrder, setTagOrder] = useState(() => tags.map((_, i) => i));
  const [dragPos, setDragPos] = useState<number | null>(null);
  const [overPos, setOverPos] = useState<number | null>(null);

  const elRefs = useRef(new Map<string, HTMLDivElement>());
  const prevRectsRef = useRef(new Map<string, DOMRect>());

  const dragRef = useRef({
    startX: 0,
    startY: 0,
    active: false,
    el: null as HTMLDivElement | null,
    pos: -1,
    overPos: null as number | null,
  });

  const bubbleParams = useMemo(
    () =>
      tags.map((_, i) => ({
        duration: 7 + seededRandom(i * 7) * 6,
        delay: -(seededRandom(i * 13) * 12),
        x: 2 + seededRandom(i * 3) * 4,
        y: 1.5 + seededRandom(i * 5) * 3,
        rotate: 0.5 + seededRandom(i * 11) * 1,
        variant: Math.floor(seededRandom(i * 17) * 3),
      })),
    [],
  );

  useLayoutEffect(() => {
    const prevRects = prevRectsRef.current;
    if (prevRects.size === 0) return;

    const toAnimate: HTMLDivElement[] = [];

    elRefs.current.forEach((el, label) => {
      const prev = prevRects.get(label);
      if (!prev) return;

      const curr = el.getBoundingClientRect();
      const dx = prev.left - curr.left;
      const dy = prev.top - curr.top;

      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;

      el.style.animationPlayState = "paused";
      el.style.transition = "none";
      el.style.translate = `${dx}px ${dy}px`;
      toAnimate.push(el);
    });

    if (toAnimate.length > 0) {
      requestAnimationFrame(() => {
        toAnimate.forEach((el) => {
          el.style.transition =
            "translate 0.35s cubic-bezier(0.25, 1, 0.5, 1)";
          el.style.translate = "0 0";
        });

        setTimeout(() => {
          toAnimate.forEach((el) => {
            el.style.transition = "";
            el.style.translate = "";
            el.style.animationPlayState = "";
          });
        }, 400);
      });
    }

    prevRectsRef.current = new Map();
  }, [tagOrder]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>, pos: number) => {
      e.preventDefault();
      const el = e.currentTarget;
      el.setPointerCapture(e.pointerId);

      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        active: false,
        el,
        pos,
        overPos: null,
      };
      setDragPos(pos);
    },
    [],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const d = dragRef.current;
      if (!d.el) return;

      const dx = e.clientX - d.startX;
      const dy = e.clientY - d.startY;

      if (!d.active && Math.abs(dx) + Math.abs(dy) > 4) {
        d.active = true;
      }
      if (!d.active) return;

      d.el.style.translate = `${dx}px ${dy}px`;

      d.el.style.pointerEvents = "none";
      const below = document.elementFromPoint(e.clientX, e.clientY);
      d.el.style.pointerEvents = "";

      const target = below?.closest<HTMLElement>("[data-bubble-pos]");
      const targetPos =
        target !== null ? Number(target?.dataset.bubblePos) : null;
      const newOver =
        targetPos !== null && !isNaN(targetPos) && targetPos !== d.pos
          ? targetPos
          : null;

      d.overPos = newOver;
      setOverPos(newOver);
    },
    [],
  );

  const onPointerUp = useCallback(() => {
    const d = dragRef.current;

    if (d.active && d.overPos !== null && d.overPos !== d.pos) {
      const rects = new Map<string, DOMRect>();
      elRefs.current.forEach((el, label) => {
        rects.set(label, el.getBoundingClientRect());
      });
      prevRectsRef.current = rects;

      if (d.el) d.el.style.translate = "";

      const from = d.pos;
      const to = d.overPos;
      setTagOrder((prev) => {
        const next = [...prev];
        [next[from], next[to]] = [next[to], next[from]];
        return next;
      });
    } else if (d.active && d.el) {
      const el = d.el;
      el.style.transition = "translate 0.3s cubic-bezier(0.25, 1, 0.5, 1)";
      el.style.translate = "0 0";
      setTimeout(() => {
        el.style.transition = "";
        el.style.translate = "";
      }, 350);
    } else if (d.el) {
      d.el.style.translate = "";
    }

    dragRef.current = {
      startX: 0,
      startY: 0,
      active: false,
      el: null,
      pos: -1,
      overPos: null,
    };
    setDragPos(null);
    setOverPos(null);
  }, []);

  const setElRef = useCallback((label: string, el: HTMLDivElement | null) => {
    if (el) elRefs.current.set(label, el);
    else elRefs.current.delete(label);
  }, []);

  return (
    <section aria-label="Personality tags and interests" className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          Your type of people. Already here.
        </h2>
        <p className="mx-auto mt-8 max-w-[745px] text-center text-[25px] font-semibold leading-[100%] tracking-normal text-[#008199]/75">
          Pick your tags - and let your friends tag you too.
          <span className="mt-2 block">Because sometimes your friends describe you better than you do.</span>
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tagOrder.map((tagIdx, pos) => {
            const tag = tags[tagIdx];
            const p = bubbleParams[tagIdx];
            const isDragging = dragPos === pos;
            const isDropTarget = overPos === pos;

            return (
              <div
                key={tag.label}
                ref={(el) => setElRef(tag.label, el)}
                data-bubble-pos={pos}
                className={`bubble-float bubble-float-v${p.variant}${isDragging ? " bubble-dragging" : ""}${isDropTarget ? " bubble-drop-target" : ""}`}
                style={
                  {
                    "--float-duration": `${p.duration}s`,
                    "--float-delay": `${p.delay}s`,
                    "--float-x": `${p.x}px`,
                    "--float-y": `${p.y}px`,
                    "--float-rotate": `${p.rotate}deg`,
                    touchAction: "none",
                  } as React.CSSProperties
                }
                onPointerDown={(e) => onPointerDown(e, pos)}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
              >
                <Badge
                  variant="default"
                  className={`bubble-tag cursor-grab select-none rounded-full px-4 py-2 text-sm font-medium ${colorClasses[tag.color]}`}
                >
                  {tag.label}
                </Badge>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
