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
        src: "/images/voro-fav.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
