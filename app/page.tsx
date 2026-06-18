'use client'

import Image from 'next/image'
import { useModal } from '@/components/ModalContext'
import CTABox from '@/components/CTABox/CTABox'
import s from './page.module.css'

export default function HomePage() {
  const openModal = useModal()

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
              <button className="btn btn-accent" onClick={openModal}>Join the waitlist</button>
              <a className="btn btn-ghost-light" href="/aspire-greens">Explore Aspire Greens</a>
            </div>
          </div>

          <div className={s.heroFigure}>
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
          </div>
        </div>
      </section>

      {/* Trust band */}
      <div className={s.trust}>
        <div className={`wrap ${s.trustGrid}`}>
          <div className={s.stat}>
            <div className={s.num}>9%+</div>
            <div className={s.lab}>Real yield to investors</div>
          </div>
          <div className={s.stat}>
            <div className={s.num}>100%</div>
            <div className={s.lab}>Phase 1 homes sold</div>
          </div>
          <div className={s.stat}>
            <div className={s.num}>2–4 bed</div>
            <div className={s.lab}>Home types delivered</div>
          </div>
          <div className={s.stat}>
            <div className={s.num}>Achimota</div>
            <div className={s.lab}>Accra, Ghana</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-light">
        <div className="wrap sec-pad">
          <CTABox onOpenModal={openModal} />
        </div>
      </section>
    </>
  )
}
