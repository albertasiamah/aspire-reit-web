import type { Metadata } from 'next'
import { User, Info } from 'lucide-react'
import CTABox from '@/components/CTABox/CTABox'
import s from './page.module.css'

export const metadata: Metadata = { title: 'About — Aspire REIT' }

export default function AboutPage() {
  const board = [
    { name: 'Board Member', role: 'Chairman' },
    { name: 'Board Member', role: 'Non-Executive Director' },
    { name: 'Board Member', role: 'Non-Executive Director' },
    { name: 'Board Member', role: 'Non-Executive Director' },
    { name: 'Board Member', role: 'Independent Director' },
  ]
  const exec = [
    { name: 'Executive', role: 'Chief Executive Officer' },
    { name: 'Executive', role: 'Chief Investment Officer' },
    { name: 'Executive', role: 'Chief Financial Officer' },
    { name: 'Executive', role: 'Head of Operations' },
  ]

  return (
    <>
      <section className={s.pageHero}>
        <div className={`wrap ${s.heroInner}`}>
          <span className={`eyebrow ${s.eyebrow}`}>About</span>
          <h1>The team behind Aspire</h1>
          <p>
            10th Capital Investments manages Aspire REIT on behalf of investors. Our team brings
            together expertise in real estate development, fund management, and Ghanaian housing markets.
          </p>
        </div>
      </section>

      <section className="bg-light">
        <div className="wrap sec-pad">
          <div className={s.secHead}>
            <span className="eyebrow">Governance</span>
            <h2>Board of Directors</h2>
          </div>
          <div className={s.teamGrid}>
            {board.map((m, i) => (
              <article key={i} className={s.memberCard}>
                <div className={s.avatar}><User size={32} /></div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </article>
            ))}
          </div>

          <div className={s.secHead} style={{ marginTop: '64px' }}>
            <span className="eyebrow">Management</span>
            <h2>Executive Team</h2>
          </div>
          <div className={s.teamGrid}>
            {exec.map((m, i) => (
              <article key={i} className={s.memberCard}>
                <div className={s.avatar}><User size={32} /></div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </article>
            ))}
          </div>

          <div className={s.editNote}>
            <Info size={16} />
            <span>Team profiles coming soon — contact us at info@aspirereit.fund</span>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="wrap" style={{ paddingBottom: '96px' }}>
          <CTABox />
        </div>
      </section>
    </>
  )
}
