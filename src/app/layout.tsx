import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://www.voro.club";

export const viewport: Viewport = {
  themeColor: "#065D6D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Voro — Expand Your Circle | Meet People Through Clubs & Events",
    template: "%s | Voro",
  },
  description:
    "Voro is the social discovery app for meeting new people through interest-based clubs, group profiles with friends (Circles), and real-life events.",
  keywords: [
    "Voro",
    "social app",
    "meet new people",
    "interest-based clubs",
    "social discovery",
    "group profiles",
    "Circles",
    "in-person events",
    "Los Angeles",
    "Denver",
    "friend groups",
    "community app",
    "social networking",
    "meetup alternative",
  ],
  authors: [{ name: "Voro, Co." }],
  creator: "Voro, Co.",
  publisher: "Voro, Co.",
  applicationName: "Voro",
  category: "Social Networking",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/voro-fav.png",
    apple: "/images/voro-fav.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Voro",
    title: "Voro — Expand Your Circle | Meet People Through Clubs & Events",
    description:
      "Meet new people through interest-based clubs, group profiles with your friends, and in-person events.",
    images: [
      {
        url: "/images/voro-fav.png",
        alt: "Voro — Expand Your Circle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voro — Expand Your Circle",
    description:
      "Meet new people through interest-based clubs, group profiles with your friends, and in-person events.",
    images: ["/images/voro-fav.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    "apple-itunes-app": "app-id=VORO_APP_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
