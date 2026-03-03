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

const responsibilities = [
  'Maintaining the security of your device and any API keys you enter into the App.',
  'Ensuring your use of the App complies with all applicable local, provincial, and federal laws.',
  'The accuracy and legality of any data you enter, store, or process through the App.',
  'Managing your own accounts with third-party AI providers (OpenAI, Anthropic, Google, OpenRouter).',
  'Backing up your own data as needed.',
]

const apiResponsibilities = [
  'Any charges incurred on your third-party AI provider accounts as a result of using the App.',
  'Compliance with the terms of service of each AI provider you use.',
  'Safeguarding your API keys and managing your API usage limits.',
  'Understanding the data handling practices of each AI provider.',
]

const navDisclaimers = [
  'OL uses Apple Maps for navigation and route optimization.',
  'Navigation directions are provided as suggestions only.',
  'Always follow actual road signs, traffic laws, and conditions.',
  'OL is not responsible for any incidents arising from following navigation directions.',
  'Route optimization is an approximation and may not reflect real-time conditions.',
]

const noWarrantyPoints = [
  'The accuracy, reliability, or completeness of any information provided by the App.',
  'The accuracy of AI-generated content, suggestions, or responses.',
  'The availability or accuracy of navigation directions.',
  'Uninterrupted or error-free operation of the App.',
  'The security of data transmitted to third-party services.',
]

export function TermsContent({ dict, lang }: TermsContentProps) {
  return (
    <div style={{ paddingTop: 120, paddingBottom: 80, background: 'var(--background)' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        {/* Header */}
        <FadeIn>
          <Link
            href={`/${lang}`}
            style={{ fontSize: 13, color: 'var(--foreground-muted)', textDecoration: 'none', display: 'inline-block', marginBottom: 32 }}
          >
            &larr; {dict.terms.backToHome}
          </Link>
          <h1 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--foreground)', marginBottom: 12 }}>
            {dict.terms.title}
          </h1>
          <p style={{ fontSize: 18, color: 'var(--foreground-muted)', marginBottom: 8 }}>
            {dict.terms.subtitle}
          </p>
          <p style={{ fontSize: 13, color: 'var(--foreground-subtle)' }}>
            {dict.terms.lastUpdated}: {EFFECTIVE_DATE}
          </p>
        </FadeIn>

        {/* Introduction */}
        <FadeIn delay={0.05}>
          <p style={{ fontSize: 17, color: 'var(--foreground-muted)', lineHeight: 1.8, marginTop: 48, marginBottom: 48 }}>
            Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using the OL iOS application (&ldquo;the App&rdquo;). By downloading, installing, or using the App, you agree to be bound by these Terms.
          </p>
        </FadeIn>

        {/* 1. Acceptance */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>1. Acceptance of Terms</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7 }}>
              By accessing or using OL, you acknowledge that you have read, understood, and agree to be bound by these Terms and our{' '}
              <Link href={`/${lang}/privacy`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>Privacy Policy</Link>.
              {' '}If you do not agree to these Terms, do not use the App.
            </p>
          </section>
        </FadeIn>

        {/* 2. Description */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>2. Description of Service</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 12 }}>
              OL is a business management application designed for delivery and logistics operations. The App provides tools for client management, route planning, delivery tracking, AI-assisted workflows, note-taking, task management, document handling, team communication, and financial tracking.
            </p>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7 }}>
              The App is provided &ldquo;as is&rdquo; and is intended for use by business professionals in managing their day-to-day operations.
            </p>
          </section>
        </FadeIn>

        {/* 3. User Responsibilities */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>3. User Responsibilities</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 16 }}>
              As a user of OL, you are responsible for:
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
              {responsibilities.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 6 }}>&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* 4. API Keys */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>4. API Keys &amp; Third-Party Services</h2>
            <div style={{ marginBottom: 20, padding: '16px 20px', borderRadius: 12, background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}>
              <p style={{ fontSize: 14, color: 'rgb(217,119,6)', lineHeight: 1.6 }}>
                <strong>Important:</strong> OL&apos;s AI features require you to provide your own API keys from third-party providers (OpenAI, Anthropic, Google Gemini, OpenRouter). These keys are stored securely in your device&apos;s iOS Keychain and are never transmitted to OL servers.
              </p>
            </div>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 16 }}>
              You are solely responsible for:
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
              {apiResponsibilities.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'rgb(245,158,11)', flexShrink: 0, marginTop: 2 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* 5. Navigation */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>5. Navigation &amp; Route Optimization</h2>
            <div style={{ marginBottom: 20, padding: '16px 20px', borderRadius: 12, background: 'var(--accent-subtle)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <p style={{ fontSize: 14, color: 'var(--accent)', lineHeight: 1.6 }}>
                <strong>Disclaimer:</strong> Navigation features are provided for convenience only. Always exercise your own judgment and follow traffic laws.
              </p>
            </div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
              {navDisclaimers.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 6 }}>&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* 6. IP */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>6. Intellectual Property</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7 }}>
              The OL application, including its design, code, features, and branding, is the intellectual property of OL. You may not copy, modify, distribute, sell, or lease any part of the application. Any data you enter into the App remains your property.
            </p>
          </section>
        </FadeIn>

        {/* 7. Limitation of Liability */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>7. Limitation of Liability</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 16 }}>
              To the maximum extent permitted by law, OL and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App. This includes but is not limited to:
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
              {noWarrantyPoints.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 6 }}>&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* 8. No Warranty */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>8. No Warranty</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7 }}>
              The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of harmful components. Use of the App is at your own risk.
            </p>
          </section>
        </FadeIn>

        {/* 9. Tip Jar & IAP */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>9. Tip Jar &amp; In-App Purchases</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 12 }}>
              OL is a free application. It may include an optional &ldquo;Tip Jar&rdquo; feature that allows users to make voluntary contributions to support development. All Tip Jar transactions are processed through Apple&apos;s In-App Purchase system.
            </p>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7 }}>
              Tips are voluntary, non-refundable (subject to Apple&apos;s refund policy), and do not unlock additional features.
            </p>
          </section>
        </FadeIn>

        {/* 10. Termination */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>10. Termination</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7 }}>
              You may stop using the App at any time by uninstalling it. Uninstalling removes all locally stored data. Cloud-synced data can be deleted by contacting us. We reserve the right to modify, suspend, or discontinue the App at any time without notice.
            </p>
          </section>
        </FadeIn>

        {/* 11. Changes */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>11. Changes to Terms</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7 }}>
              We may update these Terms from time to time. Changes will be posted on this page with an updated effective date. Continued use of the App after changes constitutes acceptance of the updated Terms.
            </p>
          </section>
        </FadeIn>

        {/* 12. Governing Law */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>12. Governing Law</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7 }}>
              These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to its conflict of law provisions.
            </p>
          </section>
        </FadeIn>

        {/* 13. Contact */}
        <FadeIn delay={0.1}>
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--foreground)', marginBottom: 12 }}>13. Contact Us</h2>
            <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 16 }}>
              If you have questions about these Terms, please contact us:
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
            <Link href={`/${lang}/privacy`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500, fontSize: 15 }}>
              Privacy Policy &rarr;
            </Link>
            <Link href={`/${lang}`} style={{ fontSize: 13, color: 'var(--foreground-muted)', textDecoration: 'none' }}>
              &larr; {dict.terms.backToHome}
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
