"use client";

import { useState, useRef } from "react";
import { SiteNav } from "@/components/sections/SiteNav";
import { Footer } from "@/components/sections/Footer";

export default function VotePage() {
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showEmptyError, setShowEmptyError] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = city.trim();
    if (!trimmed) {
      setShowEmptyError(true);
      inputRef.current?.focus();
      return;
    }

    setShowEmptyError(false);
    setError(null);
    setSending(true);

    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city: trimmed }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data?.error === "Invalid city" ? "Please enter a valid city name" : "Something went wrong. Try again.");
        return;
      }

      setSubmitted(true);
      setCity("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen font-sans">
      <SiteNav />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            We want to expand to your city next
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Tell us where you want to see Voro.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <div className="flex w-full items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={city}
                onChange={(e) => {
                  const next = e.target.value.replace(/[^a-zA-Z ]/g, "");
                  setCity(next);
                  if (showEmptyError) setShowEmptyError(false);
                }}
                placeholder="Enter a city name..."
                aria-invalid={showEmptyError}
                aria-describedby={showEmptyError ? "city-error" : undefined}
                className={`flex-1 rounded-full border bg-white px-6 py-3.5 text-base text-foreground placeholder:text-muted-foreground shadow-sm outline-none transition-shadow focus:ring-2 focus:ring-primary/30 focus:border-primary ${
                  showEmptyError
                    ? "border-destructive focus:border-destructive focus:ring-destructive/30"
                    : "border-border"
                }`}
              />
              <button
                type="submit"
                disabled={sending}
                className="cursor-pointer shrink-0 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-150 hover:bg-[#054d5b] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
              >
                {sending ? "Sending…" : "Go"}
              </button>
            </div>

            <div className="flex min-h-11 w-full items-center justify-center">
              {showEmptyError && (
                <p
                  id="city-error"
                  role="alert"
                  className="w-1/2 min-w-0 rounded-full bg-foreground px-4 py-2 text-center text-sm font-medium text-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] animate-in fade-in zoom-in-95 duration-200"
                >
                  Please enter a city name
                </p>
              )}
            </div>
          </form>

          <div className="mt-6 flex min-h-11 items-center justify-center">
            {submitted && (
              <p className="text-sm font-medium text-primary animate-in fade-in duration-300">
                Thanks for voting
              </p>
            )}
            {error && (
              <p className="text-sm font-medium text-destructive animate-in fade-in duration-300">
                {error}
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
