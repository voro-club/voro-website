export function Footer() {
  return (
    <footer className="bg-primary px-6 py-8 text-primary-foreground md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-6">
          <a
            href="mailto:contact@voroapp.com"
            className="text-sm underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-sm underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Terms
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="transition-opacity hover:opacity-80"
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
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          {/* TikTok */}
          <a
            href="#"
            aria-label="TikTok"
            className="transition-opacity hover:opacity-80"
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
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
