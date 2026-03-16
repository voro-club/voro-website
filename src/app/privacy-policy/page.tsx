import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Voro collects, uses, shares, and protects your personal information. Learn about your data rights under CCPA/CPRA.",
  alternates: {
    canonical: "https://www.voro.club/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
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
              VORO PRIVACY POLICY
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              <strong>Effective Date:</strong> December 19, 2025
            </p>
            <p className="mt-1 text-lg text-muted-foreground">
              <strong>Last Updated:</strong> December 19, 2025
            </p>

            <div className="mt-10 space-y-8 text-foreground">
              <p className="leading-relaxed">
                Welcome to Voro! This Privacy Policy explains how Voro, Co.
                (&quot;Voro,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) collects, uses, shares, and protects your
                personal information when you use the Voro mobile application
                and related services (the &quot;App&quot;).
              </p>
              <p className="leading-relaxed">
                By using the App, you agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold">
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-medium">
                a. Information You Provide
              </h3>
              <p className="leading-relaxed">
                We collect information you voluntarily provide, including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Account information (name, email, phone number, birthdate,
                  gender, profile photos)
                </li>
                <li>
                  Profile details, preferences, interests, tags, and bios
                </li>
                <li>
                  Circle creation, Club participation, and matching preferences
                </li>
                <li>Messages and interactions with other users</li>
                <li>Optional demographic or descriptive information</li>
              </ul>

              <h3 className="text-xl font-medium">
                b. Information We Collect Automatically
              </h3>
              <p className="leading-relaxed">We may automatically collect:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Device and usage information (IP address, device type,
                  operating system, app version)
                </li>
                <li>
                  Log data (login timestamps, interaction data, crash reports)
                </li>
                <li>
                  Approximate location information to support discovery and
                  matching features
                </li>
              </ul>

              <h3 className="text-xl font-medium">
                c. Information from Third Parties
              </h3>
              <p className="leading-relaxed">
                If you register or log in using a third-party service (such as
                Apple or Google), we may receive limited account information from
                that provider, such as your name and email address.
              </p>

              <h2 className="text-2xl font-semibold">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed">We use personal information to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Operate, maintain, and improve the App</li>
                <li>
                  Enable Circles, Clubs, Events, matching, and messaging
                </li>
                <li>Personalize content and recommendations</li>
                <li>
                  Maintain safety, security, and integrity of the platform
                </li>
                <li>
                  Communicate with you about product updates, support, or
                  promotions
                </li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold">
                3. How We Share Your Information
              </h2>
              <p className="leading-relaxed">
                We do <strong>not</strong> sell personal information.
              </p>
              <p className="leading-relaxed">We may share information:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  With service providers that help us operate the App (hosting,
                  analytics, customer support, payment processing)
                </li>
                <li>
                  With advertising or analytics partners for measurement and
                  performance purposes
                </li>
                <li>
                  With other users, consistent with your profile visibility,
                  matches, messages, and interactions
                </li>
                <li>
                  With legal authorities when required by law or to protect our
                  rights and users
                </li>
              </ul>

              <h2 className="text-2xl font-semibold">
                4. Your Choices &amp; Controls
              </h2>
              <p className="leading-relaxed">You may:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Edit or delete your profile</strong> through the App
                </li>
                <li>
                  <strong>Delete your account</strong> at any time via in-app
                  settings
                </li>
                <li>
                  <strong>Manage device permissions</strong> (camera, location,
                  notifications) through your phone settings
                </li>
                <li>
                  <strong>Opt out of marketing emails</strong> using unsubscribe
                  links
                </li>
                <li>
                  <strong>Request access, correction, or deletion</strong> of
                  your data by contacting us
                </li>
              </ul>

              <h2 className="text-2xl font-semibold">
                5. California Privacy Rights (CCPA / CPRA)
              </h2>
              <p className="leading-relaxed">
                Voro is a &quot;business&quot; as defined under the California
                Consumer Privacy Act (CCPA), as amended by the California
                Privacy Rights Act (CPRA).
              </p>
              <p className="leading-relaxed">
                If you are a California resident, you have the right to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Know what personal information we collect, use, and share
                </li>
                <li>Request deletion or correction of your personal information</li>
                <li>
                  Opt out of the <strong>sharing</strong> of personal
                  information for cross-context behavioral advertising
                </li>
                <li>Limit the use of sensitive personal information</li>
                <li>Not be discriminated against for exercising privacy rights</li>
              </ul>
              <p className="leading-relaxed">
                To exercise these rights, contact{" "}
                <strong>privacy@voro.club</strong>.
              </p>
              <p className="leading-relaxed">
                We will respond within <strong>45 days</strong> as required by
                law.
              </p>

              <h3 className="text-xl font-medium">Do Not Sell or Share</h3>
              <p className="leading-relaxed">
                Voro does not sell personal information.
              </p>
              <p className="leading-relaxed">
                You may opt out of the sharing of personal information for
                targeted advertising by contacting{" "}
                <strong>privacy@voro.club</strong>.
              </p>

              <h2 className="text-2xl font-semibold">
                6. Sensitive Personal Information
              </h2>
              <p className="leading-relaxed">
                Voro does not use or disclose sensitive personal information for
                purposes other than providing the App and its features.
              </p>

              <h2 className="text-2xl font-semibold">7. Data Retention</h2>
              <p className="leading-relaxed">
                We retain personal information only for as long as reasonably
                necessary to provide the App, comply with legal obligations,
                resolve disputes, and enforce our agreements.
              </p>

              <h2 className="text-2xl font-semibold">8. Data Security</h2>
              <p className="leading-relaxed">
                We use reasonable administrative, technical, and organizational
                safeguards to protect personal information. However, no system
                is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold">9. International Users</h2>
              <p className="leading-relaxed">
                Voro is operated in the United States. If you access the App from
                outside the U.S., your information may be transferred to and
                processed in the U.S. or other countries where we or our service
                providers operate.
              </p>

              <h2 className="text-2xl font-semibold">10. Children&apos;s Privacy</h2>
              <p className="leading-relaxed">
                Voro is intended for users <strong>18 years and older</strong>. We
                do not knowingly collect personal information from individuals
                under 18. If we become aware of such data, we will delete it.
              </p>

              <h2 className="text-2xl font-semibold">
                11. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically. If material
                changes are made, we will notify you through the App or by email.
                Continued use of the App constitutes acceptance of the updated
                policy.
              </p>

              <h2 className="text-2xl font-semibold">12. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions or requests regarding this Privacy Policy,
                contact us at:
              </p>
              <p className="leading-relaxed">
                <strong>legal@voro.club</strong>
              </p>
              <p className="leading-relaxed">Voro, Co.</p>
              <p className="leading-relaxed">1500 N Grant St, Suite R</p>
              <p className="leading-relaxed">Denver, CO 80203</p>
              <p className="leading-relaxed">United States</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
