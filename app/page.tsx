import Image from 'next/image'
import type { Metadata } from 'next'
import CTABox from '@/components/CTABox/CTABox'
import s from './page.module.css'

export const metadata: Metadata = {
  title: 'Aspire REIT — Quality homes. Real returns.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={s.hero}>
        <div className={`wrap ${s.heroInner}`}>
          <div>
            <span className={`eyebrow ${s.eyebrow}`}>Residential REIT · Accra, Ghana</span>
            <h1>Quality homes for Ghanaians. Real returns for investors.</h1>
            <p className={s.lead}>
              Aspire is a residential real estate investment trust building well-made, affordable homes
              in Accra — and turning rental income into durable returns for investors.
            </p>
            <div className={s.heroCtas}>
              <a href="/invest" className="btn btn-accent btn-lg">How to invest</a>
              <a href="/why-aspire" className="btn btn-ghost-light btn-lg">Why Aspire</a>
            </div>
          </div>

          <figure className={s.heroFig}>
            <Image
              src="/assets/aspire-property-301.jpg"
              alt="Aspire Greens — Achimota"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className={s.figCap}>
              <div className={s.capInner}>
                <span className={s.capLabel}>Aspire Greens · Phase 1</span>
                <span className={s.capSub}>Achimota, Accra</span>
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* Trust band */}
      <section className={`${s.trustBand} bg-dark`}>
        <div className="wrap">
          <div className={s.stats}>
            <div className={s.stat}>
              <span className={s.num}>9%+</span>
              <span className={s.lab}>Real yield to investors</span>
            </div>
            <div className={s.stat}>
              <span className={s.num}>100%</span>
              <span className={s.lab}>Phase 1 fully subscribed</span>
            </div>
            <div className={s.stat}>
              <span className={s.num}>2–4 bed</span>
              <span className={s.lab}>Family-sized homes</span>
            </div>
            <div className={s.stat}>
              <span className={s.num}>Achimota</span>
              <span className={s.lab}>Phase 1 location</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light">
        <div className="wrap" style={{ paddingBottom: '96px' }}>
          <CTABox />
        </div>
      </section>
    </>
  )
}
