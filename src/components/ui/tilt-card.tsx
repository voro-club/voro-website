"use client";

import { useRef, useState, useCallback } from "react";

const MAX_TILT = 4; // degrees — subtle cursor-follow tilt

export function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({
        x: -y * MAX_TILT,
        y: x * MAX_TILT,
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const shadowX = 4 + tilt.y * 1.5;
  const shadowY = 6 + tilt.x * 1.5;
  const shadowBlur = 12 + Math.abs(tilt.x) * 0.5 + Math.abs(tilt.y) * 0.5;
  const boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px -4px rgba(0,0,0,0.12), ${shadowX * 0.6}px ${shadowY * 0.6}px 8px -6px rgba(0,0,0,0.08)`;

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        className="h-full rounded-3xl transition-all duration-150 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          boxShadow,
        }}
      >
        {children}
      </div>
    </div>
  );
}
