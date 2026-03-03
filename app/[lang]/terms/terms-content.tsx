'use client'

import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionary'
import { FadeIn } from '@/components/animations/fade-in'

interface TermsContentProps {
  dict: Dictionary
  lang: string
}

const EFFECTIVE_DATE = 'March 2, 2026'
const CONTACT_EMAIL = 'admin@olpro.ca'

export function TermsContent({ dict, lang }: TermsContentProps) {
  return (
    <section className="py-32 bg-gray-50 dark:bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-4">
            <Link
              href={`/${lang}`}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              ← {dict.terms.backToHome}
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            {dict.terms.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            {dict.terms.subtitle}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {dict.terms.lastUpdated}: {EFFECTIVE_DATE}
          </p>
        </FadeIn>

        {/* Content */}
        <div className="mt-16 space-y-12">
          {/* Introduction */}
          <FadeIn delay={0.05}>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using the OL iOS application (&ldquo;the App&rdquo;). By downloading, installing, or using the App, you agree to be bound by these Terms.
            </p>
          </FadeIn>

          {/* 1. Acceptance of Terms */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By accessing or using OL, you acknowledge that you have read, understood, and agree to be bound by these Terms and our{' '}
                <Link href={`/${lang}/privacy`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
                . If you do not agree to these Terms, do not use the App.
              </p>
            </div>
          </FadeIn>

          {/* 2. Description of Service */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Description of Service</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                OL is a business management application designed for delivery and logistics operations. The App provides tools for client management, route planning, delivery tracking, AI-assisted workflows, note-taking, task management, document handling, team communication, and financial tracking.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The App is provided &ldquo;as is&rdquo; and is intended for use by business professionals in managing their day-to-day operations.
              </p>
            </div>
          </FadeIn>

          {/* 3. User Responsibilities */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. User Responsibilities</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                As a user of OL, you are responsible for:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {[
                  'Maintaining the security of your device and any API keys you enter into the App.',
                  'Ensuring your use of the App complies with all applicable local, provincial, and federal laws.',
                  'The accuracy and legality of any data you enter, store, or process through the App.',
                  'Managing your own accounts with third-party AI providers (OpenAI, Anthropic, Google, OpenRouter).',
                  'Backing up your own data as needed.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* 4. API Key Disclaimer */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. API Keys &amp; Third-Party Services</h2>
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20">
                <p className="text-sm text-amber-900 dark:text-amber-300">
                  <strong>Important:</strong> OL&apos;s AI features require you to provide your own API keys from third-party providers (OpenAI, Anthropic, Google Gemini, OpenRouter). These keys are stored securely in your device&apos;s iOS Keychain and are never transmitted to OL servers.
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You are solely responsible for:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {[
                  'Any charges incurred on your third-party AI provider accounts as a result of using the App.',
                  'Compliance with the terms of service of each AI provider you use.',
                  'Safeguarding your API keys and managing your API usage limits.',
                  'Understanding the data handling practices of each AI provider.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5">⚠</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                OL is not responsible for any fees, charges, data processing, or other consequences arising from your use of third-party AI services through the App.
              </p>
            </div>
          </FadeIn>

          {/* 5. Navigation Disclaimer */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Navigation &amp; Maps Disclaimer</h2>
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
                <p className="text-sm text-blue-900 dark:text-blue-300">
                  <strong>Disclaimer:</strong> Directions, routes, and maps provided by the App may not be accurate. Navigation information is provided by Apple Maps and is intended for reference only. Always use your own judgment and observe actual road conditions, traffic signs, and local regulations when navigating.
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                OL does not guarantee the accuracy, completeness, or reliability of any navigation, mapping, or route optimization data. You use navigation features at your own risk.
              </p>
            </div>
          </FadeIn>

          {/* 6. Intellectual Property */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Intellectual Property</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The OL name, logo, and all associated branding, content, design, and code are the intellectual property of OL and its developer. You may not copy, modify, distribute, sell, or lease any part of the App or its content without explicit written permission.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Data you create and store within the App remains your property. OL does not claim ownership of your content.
              </p>
            </div>
          </FadeIn>

          {/* 7. Limitation of Liability */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To the maximum extent permitted by applicable law, OL and its developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {[
                  'Loss of profits, data, business, or goodwill.',
                  'Service interruption, computer damage, or system failure.',
                  'Any damages arising from your use of third-party services through the App.',
                  'Any inaccuracies in navigation, mapping, or route data.',
                  'Any charges from third-party AI providers.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The App is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied.
              </p>
            </div>
          </FadeIn>

          {/* 8. Data & Privacy */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. Data &amp; Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your use of the App is also governed by our{' '}
                <Link href={`/${lang}/privacy`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your information. By using the App, you consent to the data practices described in the Privacy Policy.
              </p>
            </div>
          </FadeIn>

          {/* 9. Tip Jar / Purchases */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">9. Tip Jar &amp; In-App Purchases</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                OL is free to use. The App offers optional &ldquo;Tip Jar&rdquo; in-app purchases as consumable items to support ongoing development. These are entirely voluntary and do not unlock additional features.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {[
                  'Tip Jar purchases are consumable items processed through Apple\'s App Store.',
                  'All purchases are final and handled by Apple. Refund requests must be directed to Apple.',
                  'OL does not offer subscriptions. There is no recurring billing.',
                  'No features are locked behind in-app purchases.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* 10. Termination */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">10. Termination</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to suspend or terminate access to the App at any time, with or without cause or notice. You may stop using the App at any time by uninstalling it from your device. Upon termination, all locally stored data will be removed when the App is uninstalled.
              </p>
            </div>
          </FadeIn>

          {/* 11. Governing Law */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">11. Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Ontario, Canada.
              </p>
            </div>
          </FadeIn>

          {/* 12. Changes to Terms */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">12. Changes to These Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of the App after changes are posted constitutes acceptance of the revised Terms. We encourage you to review these Terms periodically.
              </p>
            </div>
          </FadeIn>

          {/* 13. Contact */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">13. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="p-5 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                <p className="text-gray-900 dark:text-white font-medium">OL Support</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Footer nav */}
          <FadeIn delay={0.1}>
            <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <Link
                href={`/${lang}/privacy`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                ← Privacy Policy
              </Link>
              <Link
                href={`/${lang}`}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                ← {dict.terms.backToHome}
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
