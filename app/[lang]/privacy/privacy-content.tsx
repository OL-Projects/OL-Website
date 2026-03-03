'use client'

import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionary'
import { FadeIn } from '@/components/animations/fade-in'
import { IconCheck } from '@/components/icons'

interface PrivacyContentProps {
  dict: Dictionary
  lang: string
}

const EFFECTIVE_DATE = 'March 2, 2026'
const CONTACT_EMAIL = 'admin@olpro.ca'

export function PrivacyContent({ dict, lang }: PrivacyContentProps) {
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
              ← {dict.privacy.backToHome}
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            {dict.privacy.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            {dict.privacy.subtitle}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {dict.privacy.lastUpdated}: {EFFECTIVE_DATE}
          </p>
        </FadeIn>

        {/* Content */}
        <div className="mt-16 space-y-12">
          {/* Introduction */}
          <FadeIn delay={0.05}>
            <div className="prose-section">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                OL (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how the OL iOS application collects, uses, stores, and protects your information.
              </p>
            </div>
          </FadeIn>

          {/* 1. Information We Collect */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                OL may request access to the following device capabilities. Each permission is requested only when the relevant feature is used, and you may deny or revoke access at any time through your device&apos;s Settings.
              </p>

              <div className="grid gap-4">
                {[
                  { title: 'Camera', description: 'Used to capture delivery proof photos. Photos are stored locally on your device and optionally synced to your Firebase cloud database.' },
                  { title: 'Location', description: 'Used for map-based navigation, delivery tracking, route optimization, and nearby location search. Location data is processed locally and through Apple Maps.' },
                  { title: 'Contacts', description: 'Used to link device contacts with client records in the CRM. Contact data is read only when you choose to import a contact.' },
                  { title: 'Calendar', description: 'Used by the AI assistant to create calendar events on your behalf. Events are created in your local Apple Calendar.' },
                  { title: 'Reminders', description: 'Used by the AI assistant to create and manage reminders. Reminders are created in your local Apple Reminders app.' },
                  { title: 'Microphone', description: 'Used for voice conversations with the AI assistant. Audio is streamed to your configured AI provider for processing and is not stored by OL.' },
                  { title: 'Speech Recognition', description: 'Used for voice-to-text transcription. Processing is handled by Apple\'s on-device speech recognition framework.' },
                  { title: 'Face ID', description: 'Used for secure authentication and ARKit-based eye tracking accessibility features. Biometric data never leaves your device.' },
                  { title: 'Photos', description: 'Used to access your photo library for delivery documentation. Photos are only accessed when you explicitly select them.' },
                  { title: 'Local Network', description: 'Used for SSH connections and Wake-on-LAN functionality. Network discovery data stays on your local network.' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{item.title.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 2. Data Storage */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. How We Store Your Data</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                OL uses multiple storage mechanisms to keep your data secure and accessible:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: 'Core Data (On-Device)',
                    description: 'Your primary data (clients, orders, notes, tasks) is stored locally on your device using Apple\'s Core Data framework.',
                  },
                  {
                    title: 'Firebase Firestore (Cloud)',
                    description: 'Optional cloud sync through Google Firebase. Data is encrypted in transit and at rest. Firebase Analytics is disabled.',
                  },
                  {
                    title: 'iOS Keychain (Encrypted)',
                    description: 'API keys you provide are stored in the iOS Keychain, which is hardware-encrypted and device-local. We never transmit or store your API keys on our servers.',
                  },
                  {
                    title: 'UserDefaults (Preferences)',
                    description: 'App preferences and settings are stored locally using iOS UserDefaults. No sensitive data is stored here.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 3. Third-Party Services */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                OL integrates with the following third-party services. Each service is subject to its own privacy policy:
              </p>

              <div className="space-y-3">
                {[
                  {
                    name: 'Firebase (Google)',
                    purpose: 'Cloud database for optional data sync. Analytics and advertising features are disabled.',
                    url: 'https://firebase.google.com/support/privacy',
                  },
                  {
                    name: 'OpenAI',
                    purpose: 'AI chat, voice conversations, and text-to-speech. You provide your own API key. Data is sent directly from your device to OpenAI.',
                    url: 'https://openai.com/privacy',
                  },
                  {
                    name: 'Anthropic (Claude)',
                    purpose: 'AI chat functionality. You provide your own API key. Data is sent directly from your device to Anthropic.',
                    url: 'https://www.anthropic.com/privacy',
                  },
                  {
                    name: 'Google Gemini',
                    purpose: 'AI chat functionality. You provide your own API key. Data is sent directly from your device to Google.',
                    url: 'https://ai.google.dev/terms',
                  },
                  {
                    name: 'OpenRouter',
                    purpose: 'AI model routing service. You provide your own API key. Data is sent directly from your device to OpenRouter.',
                    url: 'https://openrouter.ai/privacy',
                  },
                  {
                    name: 'Apple Maps',
                    purpose: 'Navigation, mapping, and route optimization. Subject to Apple\'s privacy policy.',
                    url: 'https://www.apple.com/privacy',
                  },
                ].map((service) => (
                  <div
                    key={service.name}
                    className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{service.purpose}</p>
                      </div>
                      <a
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex-shrink-0 mt-1"
                      >
                        Privacy →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
                <p className="text-sm text-blue-900 dark:text-blue-300">
                  <strong>Important:</strong> AI API keys are entered by you and stored exclusively in your device&apos;s iOS Keychain (hardware-encrypted). OL does not have access to your API keys and does not transmit them to any server we operate.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 4. Data Security */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We take the security of your data seriously:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {[
                  'API keys are stored in the iOS Keychain, which uses hardware-level encryption.',
                  'Cloud data in Firebase Firestore is encrypted in transit (TLS) and at rest.',
                  'Biometric data (Face ID) is processed entirely on-device by Apple\'s Secure Enclave and never leaves your device.',
                  'No advertising SDKs or ad tracking is included in the app.',
                  'No analytics or telemetry data is collected (analytics is disabled).',
                  'No user data is sold to third parties.',
                ].map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"><IconCheck size={16} /></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* 5. Your Rights */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Your Rights &amp; Data Control</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You have full control over your data:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {[
                  'You can revoke any device permission at any time through iOS Settings.',
                  'You can delete all app data at any time via Settings → Reset All Data within the app.',
                  'You can remove your API keys from the Keychain at any time through the app\'s AI settings.',
                  'You can request deletion of any cloud-synced data by contacting us.',
                  'Uninstalling the app removes all locally stored data from your device.',
                ].map((right, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">•</span>
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* 6. Children's Privacy */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Children&apos;s Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                OL is a business management application and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will take steps to delete such information.
              </p>
            </div>
          </FadeIn>

          {/* 7. Changes to This Policy */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Changes to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this page periodically. Continued use of the app after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </FadeIn>

          {/* 8. Contact */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us:
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
                href={`/${lang}/terms`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Terms of Service →
              </Link>
              <Link
                href={`/${lang}`}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                ← {dict.privacy.backToHome}
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
