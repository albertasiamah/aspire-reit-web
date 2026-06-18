'use client'

import { User, Info } from 'lucide-react'
import { useModal } from '@/components/ModalContext'
import CTABox from '@/components/CTABox/CTABox'
import s from './page.module.css'

const board = [
  { role: 'Independent Non-Executive Chair' },
  { role: 'Non-Executive Director' },
  { role: 'Non-Executive Director' },
  { role: 'Non-Executive Director · Audit & Risk' },
  { role: 'Non-Executive Director' },
]

const management = [
  { role: 'Chief Executive Officer' },
  { role: 'Chief Financial Officer' },
  { role: 'Head of Development' },
  { role: 'Head of Investor Relations' },
]

export default function AboutPage() {
  const openModal = useModal()

  return (
    <>
      {/* Page hero */}
      <section className={s.aboutHero}>
        <div className={`wrap ${s.heroInner}`}>
          <span className={`eyebrow ${s.eyebrow}`}>About Aspire</span>
          <h1>The people behind Aspire</h1>
          <p>
            Aspire is governed by an experienced board and run by a management team that has delivered
            quality, affordable homes across Ghana. Together they align the interests of homeowners
            and investors alike.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-light">
        <div className="wrap sec-pad">
          <div className={s.editNote}>
            <Info size={16} style={{ color: 'var(--gold-700)', flexShrink: 0 }} />
            Placeholder names &amp; avatars — send headshots and final names and we&apos;ll drop them in.
          </div>

          <div className={s.teamBlock}>
            <div className={s.teamHead}>
              <h2>Board of Directors</h2>
              <span className={s.count}>{board.length} members</span>
            </div>
            <div className={s.teamGrid}>
              {board.map((m, i) => (
                <article key={i} className={s.member}>
                  <div className={s.avatar}><User size={38} /></div>
                  <div className={`${s.name} ${s.namePlaceholder}`}>Name to confirm</div>
                  <div className={s.role}>{m.role}</div>
                </article>
              ))}
            </div>
          </div>

          <div className={s.teamBlock}>
            <div className={s.teamHead}>
              <h2>Executive Management</h2>
              <span className={s.count}>{management.length} members</span>
            </div>
            <div className={s.teamGrid}>
              {management.map((m, i) => (
                <article key={i} className={s.member}>
                  <div className={s.avatar}><User size={38} /></div>
                  <div className={`${s.name} ${s.namePlaceholder}`}>Name to confirm</div>
                  <div className={s.role}>{m.role}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light">
        <div className="wrap" style={{ paddingBottom: '96px' }}>
          <CTABox onOpenModal={openModal} />
        </div>
      </section>
    </>
  )
}
