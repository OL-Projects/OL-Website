'use client'

import { motion } from 'framer-motion'

interface ContactContentProps {
  dictionary: {
    contact: {
      title: string
      subtitle: string
      form: { name: string; email: string; type: string; types: { general: string; business: string; support: string; careers: string }; message: string; submit: string }
      direct: { title: string; email: string; location: string }
    }
  }
}

export default function ContactContent({ dictionary }: ContactContentProps) {
  const c = dictionary.contact

  return (
    <main style={{ paddingTop: 120 }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 80 }}>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}>{c.title}</h1>
          <p style={{ fontSize: 20, color: 'var(--foreground-muted)' }}>{c.subtitle}</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 48, paddingBottom: 120, alignItems: 'start' }}>
          {/* Form */}
          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="surface-card" style={{ padding: 48, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 500, marginBottom: 8, color: 'var(--foreground)' }}>{c.form.name}</label>
              <input type="text" style={{ width: '100%', padding: '12px 16px', background: 'var(--background)', border: '1px solid var(--surface-border)', borderRadius: 8, fontSize: 15, color: 'var(--foreground)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 500, marginBottom: 8, color: 'var(--foreground)' }}>{c.form.email}</label>
              <input type="email" style={{ width: '100%', padding: '12px 16px', background: 'var(--background)', border: '1px solid var(--surface-border)', borderRadius: 8, fontSize: 15, color: 'var(--foreground)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 500, marginBottom: 8, color: 'var(--foreground)' }}>{c.form.type}</label>
              <select style={{ width: '100%', padding: '12px 16px', background: 'var(--background)', border: '1px solid var(--surface-border)', borderRadius: 8, fontSize: 15, color: 'var(--foreground)', outline: 'none' }}>
                <option>{c.form.types.general}</option>
                <option>{c.form.types.business}</option>
                <option>{c.form.types.support}</option>
                <option>{c.form.types.careers}</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 500, marginBottom: 8, color: 'var(--foreground)' }}>{c.form.message}</label>
              <textarea rows={5} style={{ width: '100%', padding: '12px 16px', background: 'var(--background)', border: '1px solid var(--surface-border)', borderRadius: 8, fontSize: 15, color: 'var(--foreground)', outline: 'none', resize: 'vertical' }} />
            </div>
            <button type="submit" className="btn-primary">{c.form.submit}</button>
          </motion.form>

          {/* Direct Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="surface-card" style={{ padding: 32 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>{c.direct.title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ fontSize: 13, color: 'var(--foreground-subtle)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                <a href={`mailto:${c.direct.email}`} style={{ fontSize: 15, color: 'var(--accent)', textDecoration: 'none' }}>{c.direct.email}</a>
              </div>
              <div>
                <div style={{ fontSize: 13, color: 'var(--foreground-subtle)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</div>
                <span style={{ fontSize: 15, color: 'var(--foreground-muted)' }}>{c.direct.location} 🇨🇦</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
