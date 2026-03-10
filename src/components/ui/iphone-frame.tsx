import Image from "next/image";
import { cn } from "@/lib/utils";

interface IPhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  compact?: boolean;
}

export function IPhoneFrame({
  src,
  alt,
  className,
  priority = false,
  compact = false,
}: IPhoneFrameProps) {
  const shell = compact ? "rounded-[1.6rem]" : "rounded-[3.4rem]";
  const bezel = compact
    ? "inset-[2px] rounded-[1.4rem]"
    : "inset-[3px] rounded-[3.1rem]";
  const screen = compact
    ? "inset-[6px] rounded-[1.1rem]"
    : "inset-[14px] rounded-[2.2rem]";
  const island = compact
    ? "top-[10px] h-[12px] w-[44px]"
    : "top-[28px] h-[28px] w-[100px]";
  const btnW = compact ? "w-[2px]" : "w-[4px]";
  const homeBottom = compact ? "bottom-[5px] h-[3px]" : "bottom-[12px] h-[5px]";

  return (
    <div
      className={cn(
        "relative aspect-9/19",
        !compact && "w-[310px] md:w-[350px] lg:w-[390px]",
        className
      )}
    >
      <div
        className={cn("absolute inset-0", shell)}
        style={{
          background:
            "linear-gradient(145deg, #3a3a3a 0%, #1a1a1a 50%, #2d2d2d 100%)",
          boxShadow: compact
            ? "0 8px 20px -6px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05) inset"
            : "0 25px 50px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 1px 0 rgba(255,255,255,0.1) inset",
        }}
      />

      <div className={cn("absolute bg-[#0d0d0d]", bezel)} />

      <div className={cn("absolute overflow-hidden bg-black", screen)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          priority={priority}
          sizes={compact ? "200px" : "380px"}
        />
      </div>

      <div
        className={cn(
          "absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-black",
          island
        )}
      />

      <div
        className={cn("absolute -right-[2px] top-[28%] h-[12%] rounded-r-sm", btnW)}
        style={{
          background:
            "linear-gradient(90deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%)",
        }}
      />

      <div
        className={cn("absolute -left-[2px] top-[16%] h-[4%] rounded-l-sm", btnW)}
        style={{
          background:
            "linear-gradient(270deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%)",
        }}
      />

      <div
        className={cn("absolute -left-[2px] top-[22%] h-[7%] rounded-l-sm", btnW)}
        style={{
          background:
            "linear-gradient(270deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%)",
        }}
      />

      <div
        className={cn("absolute -left-[2px] top-[30%] h-[7%] rounded-l-sm", btnW)}
        style={{
          background:
            "linear-gradient(270deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%)",
        }}
      />

      <div
        className={cn(
          "absolute left-1/2 z-10 w-[35%] -translate-x-1/2 rounded-full bg-white/20",
          homeBottom
        )}
      />

      <div
        className={cn("pointer-events-none absolute ring-1 ring-white/3", screen)}
      />
    </div>
  );
}
