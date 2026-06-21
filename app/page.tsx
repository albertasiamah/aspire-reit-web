import Image from 'next/image'
import type { Metadata } from 'next'
import OpenModalButton from '@/components/OpenModalButton'
import CTABox from '@/components/CTABox/CTABox'
import s from './page.module.css'

export const metadata: Metadata = {
  title: 'Aspire REIT — Quality homes for Ghanaians, real returns for investors',
  description: 'Aspire is a residential real estate investment trust building affordable homes across Ghana — and durable, inflation-beating income for investors.',
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
              across Ghana — and turning the rental income they produce into durable, inflation-beating returns.
            </p>
            <div className={s.ctaRow}>
              <OpenModalButton className="btn btn-accent" label="Join the waitlist" />
              <a href="/aspire-greens" className="btn btn-ghost-light">Explore Aspire Greens</a>
            </div>
          </div>

          <figure className={s.heroFigure}>
            <Image
              src="/assets/aspire-property-301.jpg"
              alt="Aspire Greens residential terraces in Achimota, Accra"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className={s.cap}>
              <div className={s.capK}>Featured development</div>
              <div className={s.capV}>Aspire Greens, Achimota</div>
            </div>
          </figure>
        </div>
      </section>

      {/* Trust band */}
      <div className={s.trust}>
        <div className={`wrap ${s.trustGrid}`}>
          <div className={s.stat}><div className={s.num}>9%+</div><div className={s.lab}>Real yield to investors</div></div>
          <div className={s.stat}><div className={s.num}>100%</div><div className={s.lab}>Phase 1 homes sold</div></div>
          <div className={s.stat}><div className={s.num}>2–4 bed</div><div className={s.lab}>Home types delivered</div></div>
          <div className={s.stat}><div className={s.num}>Achimota</div><div className={s.lab}>Accra, Ghana</div></div>
        </div>
      </div>

      {/* CTA box */}
      <section className="bg-light">
        <div className="wrap" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
          <CTABox />
        </div>
      </section>
    </>
  )
}
