'use client'

import { useModal } from '@/components/ModalContext'
import CTABox from '@/components/CTABox/CTABox'
import s from './page.module.css'

export default function InvestPage() {
  const openModal = useModal()

  return (
    <>
      {/* Page hero */}
      <section className={s.pageHero}>
        <div className={`wrap ${s.heroInner}`}>
          <span className={`eyebrow ${s.eyebrow}`}>Invest</span>
          <h1>Real returns from real homes</h1>
          <p>
            Aspire REIT gives investors exposure to Ghana&apos;s residential property market through
            a professionally managed, SEC-registered fund — with a real yield of over 9% generated
            by rental income, not speculation.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-light">
        <div className="wrap sec-pad">
          <div className={s.secHead}>
            <span className="eyebrow">How it works</span>
            <h2>Three steps to investing</h2>
          </div>

          <div className={s.steps}>
            <div className={s.step}>
              <div className={s.stepNum}>01</div>
              <h3>Join the waitlist</h3>
              <p>Register your interest. We&apos;ll contact you with full details on the next investment tranche and the process for onboarding.</p>
            </div>
            <div className={s.step}>
              <div className={s.stepNum}>02</div>
              <h3>Review the prospectus</h3>
              <p>Our SEC-approved prospectus sets out the fund structure, risk factors, fee schedule, and projected returns in full.</p>
            </div>
            <div className={s.step}>
              <div className={s.stepNum}>03</div>
              <h3>Receive regular income</h3>
              <p>Rental income from Aspire homes is distributed to investors on a regular schedule — inflation-beating and backed by real assets.</p>
            </div>
          </div>

          <div className={s.secHead} style={{ marginTop: '16px' }}>
            <span className="eyebrow">Key facts</span>
            <h2>What investors should know</h2>
          </div>

          <div className={s.facts}>
            <div className={s.cell}><div className={s.k}>Target real yield</div><div className={s.v}>9%+ per annum</div></div>
            <div className={s.cell}><div className={s.k}>Fund structure</div><div className={s.v}>SEC-registered REIT (Ghana)</div></div>
            <div className={s.cell}><div className={s.k}>Asset type</div><div className={s.v}>Residential — rental income</div></div>
            <div className={s.cell}><div className={s.k}>Manager</div><div className={s.v}>10th Capital Investments Ltd</div></div>
            <div className={s.cell}><div className={s.k}>Phase 1 status</div><div className={s.v}>Fully subscribed</div></div>
            <div className={s.cell}><div className={s.k}>Contact</div><div className={s.v}>info@aspirereit.fund</div></div>
          </div>

          <p style={{ fontSize: '12px', color: 'var(--ink-400)', marginTop: '16px' }}>
            Capital at risk. Past performance is not a guide to future returns.
          </p>
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
