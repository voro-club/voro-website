"use client";

import { useState } from "react";

const CONTACT_EMAIL = "contact@voroapp.com";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  return (
    <>
      {copied && (
        <div
          className="fixed left-1/2 top-20 z-[9999] -translate-x-1/2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-white shadow-lg animate-in fade-in zoom-in-95 duration-200"
          role="status"
          aria-live="polite"
        >
          Copied email
        </div>
      )}
      <footer className="bg-primary px-6 py-8 text-primary-foreground md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-between gap-6 md:flex-row">
        <nav aria-label="Footer navigation" className="flex items-center gap-6">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            onClick={copyEmail}
            className="text-sm underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Contact
          </a>
          <a
            href="/privacy-policy"
            className="text-sm underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-and-conditions"
            className="text-sm underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Terms and Conditions
          </a>
        </nav>

        <nav aria-label="Social media links" className="flex items-center gap-4">
          <a
            href="https://instagram.com/voro.club"
            aria-label="Follow Voro on Instagram"
            className="transition-opacity hover:opacity-80"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@voro.club"
            aria-label="Follow Voro on TikTok"
            className="transition-opacity hover:opacity-80"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-6 max-w-[90rem] text-center text-xs text-primary-foreground/60">
        <p>&copy; {new Date().getFullYear()} Voro, Co. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}
