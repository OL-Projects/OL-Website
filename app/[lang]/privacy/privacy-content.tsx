'use client'

import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionary'
import { FadeIn } from '@/components/animations/fade-in'

interface PrivacyContentProps {
  dict: Dictionary
  lang: string
}

const EFFECTIVE_DATE = 'March 2, 2026'
const CONTACT_EMAIL = 'admin@olpro.ca'

const permissions = [
  { title: 'Camera', desc: 'Used to capture delivery proof photos. Photos are stored locally on your device and optionally synced to your Firebase cloud database.' },
  { title: 'Location', desc: 'Used for map-based navigation, delivery tracking, route optimization, and nearby location search. Location data is processed locally and through Apple Maps.' },
  { title: 'Contacts', desc: 'Used to link device contacts with client records in the CRM. Contact data is read only when you choose to import a contact.' },
  { title: 'Calendar', desc: 'Used by the AI assistant to create calendar events on your behalf. Events are created in your local Apple Calendar.' },
  { title: 'Reminders', desc: 'Used by the AI assistant to create and manage reminders. Reminders are created in your local Apple Reminders app.' },
  { title: 'Microphone', desc: 'Used for voice conversations with the AI assistant. Audio is streamed to your configured AI provider for processing and is not stored by OL.' },
  { title: 'Speech Recognition', desc: "Used for voice-to-text transcription. Processing is handled by Apple's on-device speech recognition framework." },
  { title: 'Face ID', desc: 'Used for secure authentication and ARKit-based eye tracking accessibility features. Biometric data never leaves your device.' },
  { title: 'Photos', desc: 'Used to access your photo library for delivery documentation. Photos are only accessed when you explicitly select them.' },
  { title: 'Local Network', desc: 'Used for SSH connections and Wake-on-LAN functionality. Network discovery data stays on your local network.' },
]

const storage = [
  { title: 'Core Data (On-Device)', desc: "Your primary data (clients, orders, notes, tasks) is stored locally on your device using Apple's Core Data framework." },
  { title: 'Firebase Firestore (Cloud)', desc: 'Optional cloud sync through Google Firebase. Data is encrypted in transit and at rest. Firebase Analytics is disabled.' },
  { title: 'iOS Keychain (Encrypted)', desc: 'API keys you provide are stored in the iOS Keychain, which is hardware-encrypted and device-local. We never transmit or store your API keys on our servers.' },
  { title: 'UserDefaults (Preferences)', desc: 'App preferences and settings are stored locally using iOS UserDefaults. No sensitive data is stored here.' },
]

const thirdParty = [
  { name: 'Firebase (Google)', purpose: 'Cloud database for optional data sync. Analytics and advertising features are disabled.', url: 'https://firebase.google.com/support/privacy' },
  { name: 'OpenAI', purpose: 'AI chat, voice conversations, and text-to-speech. You provide your own API key. Data is sent directly from your device to OpenAI.', url: 'https://openai.com/privacy' },
  { name: 'Anthropic (Claude)', purpose: 'AI chat functionality. You provide your own API key. Data is sent directly from your device to Anthropic.', url: 'https://www.anthropic.com/privacy' },
  { name: 'Google Gemini', purpose: 'AI chat functionality. You provide your own API key. Data is sent directly from your device to Google.', url: 'https://ai.google.dev/terms' },
  { name: 'OpenRouter', purpose: 'AI model routing service. You provide your own API key. Data is sent directly from your device to OpenRouter.', url: 'https://openrouter.ai/privacy' },
  { name: 'Apple Maps', purpose: "Navigation, mapping, and route optimization. Subject to Apple's privacy policy.", url: 'https://www.apple.com/privacy' },
]

const securityPoints = [
  'API keys are stored in the iOS Keychain, which uses hardware-level encryption.',
  'Cloud data in Firebase Firestore is encrypted in transit (TLS) and at rest.',
  "Biometric data (Face ID) is processed entirely on-device by Apple's Secure Enclave and never leaves your device.",
  'No advertising SDKs or ad tracking is included in the app.',
  'No analytics or telemetry data is collected (analytics is disabled).',
  'No user data is sold to third parties.',
]

const rights = [
  'You can revoke any device permission at any time through iOS Settings.',
  'You can delete all app data at any time via Settings → Reset All Data within the app.',
  "You can remove your API keys from the Keychain at any time through the app's AI settings.",
  'You can request deletion of any cloud-synced data by contacting us.',
  'Uninstalling the app removes all locally stored data from your device.',
]

export function PrivacyContent({ dict, lang }: PrivacyContentProps) {
  return (
    <div style={{ paddingTop: 120, paddingBottom: 80, background: 'var(--background)' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        {/* Header */}
        <FadeIn>
          <Link
            href={`/${lang}`}
            style={{ fontSize: 13, color: 'var(--foreground-muted)', textDecoration: 'none', display: 'inline-block', marginBottom: 32 }}
          >
            &larr; {dict.privacy.backToHome}
          </Link>
          <h1 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--foreground)', marginBottom: 12 }}>
            {dict.privacy.title}
          </h1>
          <p style={{ fontSize: 18, color: 'var(--foreground-muted)', marginBottom: 8 }}>
            {dict.privacy.subtitle}
          </p>
          <p style={{ fontSize: 13, color: 'var(--foreground-subtle)' }}>
            {dict.privacy.lastUpdated}: {EFFECTIVE_DATE}
          </p>
        </FadeIn>

        {/* Introduction */}
        <FadeIn delay={0.05}>
          <p style={{ fontSize: 17, color: 'var(--foreground-muted)', lineHeight: 1.8, marginTop: 48, marginBottom: 48 }}>
            OL (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how the OL iOS application collects, uses, stores, and protects your information.
          </p>
        </FadeIn>

        {/* 1. Information We Collect */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>1. Information We Collect</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 24 }}>
              OL may request access to the following device capabilities. Each permission is requested only when the relevant feature is used, and you may deny or revoke access at any time through your device&apos;s Settings.
            </p>
            <div style={{ display: 'grid', gap: 12 }}>
              {permissions.map((item) => (
                <div key={item.title} className="surface-card" style={{ padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'var(--accent-subtle)', color: 'var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, fontWeight: 700, flexShrink: 0,
                  }}>
                    {item.title.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* 2. Data Storage */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>2. How We Store Your Data</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 24 }}>
              OL uses multiple storage mechanisms to keep your data secure and accessible:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
              {storage.map((item) => (
                <div key={item.title} className="surface-card" style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--foreground)', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* 3. Third-Party Services */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>3. Third-Party Services</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 24 }}>
              OL integrates with the following third-party services. Each service is subject to its own privacy policy:
            </p>
            <div style={{ display: 'grid', gap: 12 }}>
              {thirdParty.map((service) => (
                <div key={service.name} className="surface-card" style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>{service.name}</h3>
                    <p style={{ fontSize: 14, color: 'var(--foreground-muted)', lineHeight: 1.5 }}>{service.purpose}</p>
                  </div>
                  <a href={service.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none', flexShrink: 0, marginTop: 2 }}>
                    Privacy &rarr;
                  </a>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: '16px 20px', borderRadius: 12, background: 'var(--accent-subtle)', border: '1px solid var(--accent)', borderColor: 'rgba(59,130,246,0.2)' }}>
              <p style={{ fontSize: 14, color: 'var(--accent)', lineHeight: 1.6 }}>
                <strong>Important:</strong> AI API keys are entered by you and stored exclusively in your device&apos;s iOS Keychain (hardware-encrypted). OL does not have access to your API keys and does not transmit them to any server we operate.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* 4. Data Security */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>4. Data Security</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 16 }}>
              We take the security of your data seriously:
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
              {securityPoints.map((point, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--success)', flexShrink: 0, marginTop: 2 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* 5. Your Rights */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>5. Your Rights &amp; Data Control</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 16 }}>
              You have full control over your data:
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
              {rights.map((right, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 6 }}>&#8226;</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* 6. Children's Privacy */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>6. Children&apos;s Privacy</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7 }}>
              OL is a business management application and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will take steps to delete such information.
            </p>
          </section>
        </FadeIn>

        {/* 7. Changes */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>7. Changes to This Policy</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7 }}>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this page periodically. Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </section>
        </FadeIn>

        {/* 8. Contact */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>8. Contact Us</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 16 }}>
              If you have questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="surface-card" style={{ padding: 24, display: 'inline-block' }}>
              <p style={{ fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>OL Support</p>
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>{CONTACT_EMAIL}</a>
            </div>
          </section>
        </FadeIn>

        {/* Footer nav */}
        <FadeIn delay={0.1}>
          <div style={{ paddingTop: 32, borderTop: '1px solid var(--surface-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <Link href={`/${lang}/terms`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500, fontSize: 15 }}>
              Terms of Service &rarr;
            </Link>
            <Link href={`/${lang}`} style={{ fontSize: 13, color: 'var(--foreground-muted)', textDecoration: 'none' }}>
              &larr; {dict.privacy.backToHome}
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
