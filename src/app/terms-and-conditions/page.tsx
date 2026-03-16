import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions of Use for the Voro mobile application and related services. Read before using Voro.",
  alternates: {
    canonical: "https://www.voro.club/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[90rem]">
          <Link
            href="/"
            className="mb-10 inline-block text-sm font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            ← Back to home
          </Link>

          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">
              Voro App - Terms and Conditions of Use
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              <strong>Effective Date:</strong> December 19, 2025
            </p>

            <div className="mt-10 space-y-8 text-foreground">
              <p className="leading-relaxed">
                Welcome to Voro! These Terms and Conditions (&quot;Terms&quot;)
                govern your access to and use of the Voro mobile application and
                related services (collectively, the &quot;App&quot;), operated by
                Voro, Co. (&quot;Voro,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;).
              </p>
              <p className="leading-relaxed">
                By accessing or using the App, you agree to be bound by these
                Terms. If you do not agree, please do not use Voro.
              </p>

              <h2 className="text-2xl font-semibold">1. Eligibility</h2>
              <p className="leading-relaxed">
                You must be at least <strong>18 years old</strong> (or the
                minimum legal age in your jurisdiction, if higher) to use the
                App. By creating an account, you represent and warrant that you
                meet this requirement and that all information you provide is
                accurate and truthful.
              </p>

              <h2 className="text-2xl font-semibold">2. Nature of the Platform</h2>
              <p className="leading-relaxed">
                Voro is a <strong>social discovery platform</strong> that allows
                users to connect, communicate, and organize interactions with
                other users.
              </p>
              <p className="leading-relaxed">Voro:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Does <strong>not</strong> act as a dating service, matchmaking
                  service, or event organizer
                </li>
                <li>
                  Does <strong>not</strong> conduct background checks or verify
                  user identities
                </li>
                <li>
                  Does <strong>not</strong> endorse, guarantee, or supervise
                  users, Circles, Clubs, Events, or interactions
                </li>
              </ul>
              <p className="leading-relaxed">
                All interactions, online or in person, occur{" "}
                <strong>at your own risk</strong>.
              </p>

              <h2 className="text-2xl font-semibold">3. User Accounts</h2>
              <p className="leading-relaxed">
                To use Voro, you must create an account. You agree to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Keep your login credentials secure</li>
                <li>Not impersonate others or misrepresent yourself</li>
                <li>Notify us immediately of any unauthorized account access</li>
              </ul>
              <p className="leading-relaxed">
                You are responsible for all activity that occurs under your
                account.
              </p>

              <h2 className="text-2xl font-semibold">4. User Content</h2>
              <p className="leading-relaxed">
                You are responsible for any content you upload, post, or share on
                Voro (&quot;User Content&quot;).
              </p>
              <p className="leading-relaxed">
                By posting User Content, you grant Voro a{" "}
                <strong>
                  non-exclusive, worldwide, transferable, royalty-free,
                  sublicensable license
                </strong>{" "}
                to use, host, store, reproduce, modify, distribute, and display
                such content solely in connection with operating, improving, and
                promoting the App.
              </p>
              <p className="leading-relaxed">
                You agree not to post content that:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Is illegal, hateful, threatening, or abusive</li>
                <li>Violates intellectual property rights</li>
                <li>Contains explicit sexual content or nudity</li>
                <li>Is misleading, deceptive, or fraudulent</li>
              </ul>
              <p className="leading-relaxed">
                Voro has no obligation to monitor User Content but reserves the
                right to remove or restrict content at its discretion.
              </p>

              <h2 className="text-2xl font-semibold">5. Community Guidelines</h2>
              <p className="leading-relaxed">
                You agree to follow all Club, Circle, and community rules,
                including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Respectful communication</li>
                <li>No harassment, bullying, or abuse</li>
                <li>No spam, scams, or unauthorized promotions</li>
              </ul>
              <p className="leading-relaxed">
                Violation of these guidelines may result in suspension or
                termination of your account.
              </p>

              <h2 className="text-2xl font-semibold">6. Safety and Interactions</h2>
              <p className="leading-relaxed">
                You are solely responsible for your interactions with other
                users. While Voro may provide tools to report or block users, we
                do not guarantee user conduct and are not responsible for
                disputes, harm, or damages arising from interactions on or off
                the App.
              </p>

              <h2 className="text-2xl font-semibold">
                7. Circles, Clubs &amp; Events Disclaimer
              </h2>
              <p className="leading-relaxed">
                Circles, Clubs, and Events are{" "}
                <strong>
                  created or organized by users or third parties
                </strong>
                , not by Voro.
              </p>
              <p className="leading-relaxed">
                Voro does <strong>not</strong>:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Host, organize, supervise, or control events</li>
                <li>Verify participants or attendees</li>
                <li>Guarantee safety, attendance, or outcomes</li>
              </ul>
              <p className="leading-relaxed">
                By participating in any meeting or event arranged through Voro,
                you <strong>voluntarily assume all risks</strong>, including
                personal injury, harassment, property damage, emotional distress,
                or other harm.
              </p>

              <h2 className="text-2xl font-semibold">
                8. Assumption of Risk &amp; Release
              </h2>
              <p className="leading-relaxed">
                You acknowledge that meeting people in person or engaging in
                social activities involves inherent risks.
              </p>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, you agree to{" "}
                <strong>release and hold harmless Voro</strong>, its officers,
                directors, employees, and agents from any claims arising out of
                interactions with other users or participation in events
                facilitated through the App.
              </p>

              <h2 className="text-2xl font-semibold">
                9. Paid Features and Subscriptions
              </h2>
              <p className="leading-relaxed">
                Some features may require payment or subscription. By purchasing,
                you agree that:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Subscriptions automatically renew unless canceled prior to
                  renewal
                </li>
                <li>
                  Cancellation must be completed through your account settings or
                  app store
                </li>
                <li>
                  Refunds are subject to the policies of the applicable payment
                  provider
                </li>
                <li>Fees may change with prior notice as required by law</li>
              </ul>
              <p className="leading-relaxed">
                No refunds are provided for partial billing periods unless
                required by law.
              </p>

              <h2 className="text-2xl font-semibold">
                10. Artificial Intelligence Features
              </h2>
              <p className="leading-relaxed">
                Voro may use artificial intelligence technologies to enhance the
                App, including content recommendations, moderation tools, and
                discovery features.
              </p>
              <p className="leading-relaxed">
                AI-generated suggestions or recommendations are provided{" "}
                <strong>for informational purposes only</strong> and should not
                be relied upon as professional, safety, or relationship advice.
              </p>

              <h2 className="text-2xl font-semibold">11. Intellectual Property</h2>
              <p className="leading-relaxed">
                All Voro content, branding, software, and features are owned by
                or licensed to Voro and protected by intellectual property laws.
                You may not copy, modify, distribute, or exploit any portion of
                the App without written permission.
              </p>

              <h2 className="text-2xl font-semibold">12. Termination</h2>
              <p className="leading-relaxed">
                Voro may suspend or terminate your account{" "}
                <strong>at any time, with or without notice</strong>, if you
                violate these Terms or for any reason deemed necessary to protect
                the App or its users.
              </p>

              <h2 className="text-2xl font-semibold">13. Disclaimers</h2>
              <p className="leading-relaxed">
                The App is provided <strong>&quot;as is&quot; and &quot;as
                available.&quot;</strong> Voro makes no warranties regarding
                availability, security, accuracy, or error-free operation.
              </p>

              <h2 className="text-2xl font-semibold">14. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Voro is not liable for
                indirect, incidental, consequential, or punitive damages.
              </p>
              <p className="leading-relaxed">
                Voro&apos;s total liability shall not exceed the{" "}
                <strong>
                  greater of $100 or the amount you paid to Voro in the prior 12
                  months
                </strong>
                .
              </p>

              <h2 className="text-2xl font-semibold">
                15. Arbitration &amp; Class Action Waiver
              </h2>
              <p className="leading-relaxed">
                Any dispute arising from these Terms shall be resolved through{" "}
                <strong>binding arbitration on an individual basis</strong>. You
                waive the right to participate in class actions or jury trials.
              </p>
              <p className="leading-relaxed">
                You may opt out of arbitration within{" "}
                <strong>30 days</strong> of first using the App by emailing{" "}
                <strong>legal@voro.club</strong>.
              </p>

              <h2 className="text-2xl font-semibold">16. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of the State of Delaware,
                without regard to conflict of law principles.
              </p>

              <h2 className="text-2xl font-semibold">17. Changes to These Terms</h2>
              <p className="leading-relaxed">
                We may update these Terms periodically. Continued use of the App
                constitutes acceptance of the revised Terms.
              </p>

              <h2 className="text-2xl font-semibold">18. Contact Us</h2>
              <p className="leading-relaxed">
                For questions regarding these Terms, contact:
              </p>
              <p className="leading-relaxed">
                <strong>hello@voro.club</strong>
              </p>
              <p className="leading-relaxed">Voro</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
