import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Voro — Expand Your Circle",
    short_name: "Voro",
    description:
      "Meet new people through interest-based clubs, group profiles with your friends, and in-person events.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4EFE8",
    theme_color: "#065D6D",
    icons: [
      {
        src: "/images/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
