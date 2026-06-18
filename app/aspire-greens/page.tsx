import type { Metadata } from 'next'
import Image from 'next/image'
import { Building2, Home, Landmark } from 'lucide-react'
import CTABox from '@/components/CTABox/CTABox'
import s from './page.module.css'

export const metadata: Metadata = { title: 'Aspire Greens — Aspire REIT' }

export default function AspireGreensPage() {
  return (
    <>
      <section className={s.pageHero}>
        <div className={s.heroImg}>
          <Image
            src="/assets/aspire-property-301.jpg"
            alt="Aspire Greens — Achimota"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={s.heroOverlay} />
        </div>
        <div className={`wrap ${s.heroContent}`}>
          <span className={`eyebrow ${s.eyebrow}`}>Our first development</span>
          <h1>Aspire Greens</h1>
          <p>Phase 1 — fully subscribed</p>
          <span className={s.badge}>Phase 1 · Fully subscribed</span>
        </div>
      </section>

      <section className="bg-light">
        <div className="wrap sec-pad">
          <div className={s.factGrid}>
            <div className={s.fact}><span className={s.factLabel}>Location</span><span className={s.factVal}>Achimota, Accra</span></div>
            <div className={s.fact}><span className={s.factLabel}>Home types</span><span className={s.factVal}>Apartments, Terraced, Semi-detached</span></div>
            <div className={s.fact}><span className={s.factLabel}>Styles</span><span className={s.factVal}>2, 3 &amp; 4 bedroom</span></div>
            <div className={s.fact}><span className={s.factLabel}>Phase 1 status</span><span className={s.factVal}>Fully subscribed</span></div>
          </div>

          <div className={s.secHead}>
            <span className="eyebrow">Home types</span>
            <h2>Built for how people live</h2>
          </div>
          <div className={s.homeTypes}>
            <article className={s.typeCard}>
              <div className={s.typeIco}><Building2 size={24} /></div>
              <h3>Apartments</h3>
              <p>Modern 2–3 bed apartments with shared amenity spaces — ideal for young professionals and small families.</p>
            </article>
            <article className={s.typeCard}>
              <div className={s.typeIco}><Home size={24} /></div>
              <h3>Terraced</h3>
              <p>3-bedroom terraced homes with private gardens — designed for growing families who need more space.</p>
            </article>
            <article className={s.typeCard}>
              <div className={s.typeIco}><Landmark size={24} /></div>
              <h3>Semi-detached</h3>
              <p>Generous 4-bedroom semi-detached homes offering the most space, privacy and flexibility.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="wrap sec-pad" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-500)' }}>Coming soon</span>
          <h2 style={{ color: 'var(--cream-500)' }}>Phase 2 — now accepting expressions of interest</h2>
          <p style={{ color: 'var(--green-200)', maxWidth: '540px', margin: '0 auto 32px' }}>
            Phase 2 will expand on Aspire Greens with additional units in connected Accra locations.
            Join the waitlist to be first in line.
          </p>
          <CTABox />
        </div>
      </section>
    </>
  )
}
