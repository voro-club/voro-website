import Image from "next/image";
import { cn } from "@/lib/utils";

interface IPhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function IPhoneFrame({
  src,
  alt,
  className,
  priority = false,
}: IPhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-9/19 w-[310px] md:w-[350px] lg:w-[390px]",
        className
      )}
    >
      {/* Outer shell - titanium edge */}
      <div
        className="absolute inset-0 rounded-[3.4rem]"
        style={{
          background:
            "linear-gradient(145deg, #3a3a3a 0%, #1a1a1a 50%, #2d2d2d 100%)",
          boxShadow:
            "0 25px 50px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 1px 0 rgba(255,255,255,0.1) inset",
        }}
      />

      {/* Inner bezel */}
      <div className="absolute inset-[3px] rounded-[3.1rem] bg-[#0d0d0d]" />

      {/* Screen area - thick bezel */}
      <div className="absolute inset-[14px] overflow-hidden rounded-[2.2rem] bg-black">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          priority={priority}
          sizes="380px"
        />
      </div>

      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-[28px] z-10 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black" />

      {/* Side button - power (right) */}
      <div
        className="absolute -right-[3px] top-[28%] h-[12%] w-[4px] rounded-r-sm"
        style={{
          background:
            "linear-gradient(90deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%)",
        }}
      />

      {/* Silent switch (left) */}
      <div
        className="absolute -left-[3px] top-[16%] h-[4%] w-[4px] rounded-l-sm"
        style={{
          background:
            "linear-gradient(270deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%)",
        }}
      />

      {/* Volume up (left) */}
      <div
        className="absolute -left-[3px] top-[22%] h-[7%] w-[4px] rounded-l-sm"
        style={{
          background:
            "linear-gradient(270deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%)",
        }}
      />

      {/* Volume down (left) */}
      <div
        className="absolute -left-[3px] top-[30%] h-[7%] w-[4px] rounded-l-sm"
        style={{
          background:
            "linear-gradient(270deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%)",
        }}
      />

      {/* Bottom home indicator */}
      <div className="absolute bottom-[12px] left-1/2 z-10 h-[5px] w-[35%] -translate-x-1/2 rounded-full bg-white/20" />

      {/* Subtle screen edge highlight */}
      <div className="pointer-events-none absolute inset-[14px] rounded-[2.2rem] ring-1 ring-white/3" />
    </div>
  );
}
