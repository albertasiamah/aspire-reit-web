'use client'

import Image from 'next/image'
import { Building2, Home, Landmark } from 'lucide-react'
import { useModal } from '@/components/ModalContext'
import CTABox from '@/components/CTABox/CTABox'
import s from './page.module.css'

export default function AspireGreensPage() {
  const openModal = useModal()

  return (
    <>
      {/* Page hero */}
      <section className={s.pageHero}>
        <div className={`wrap ${s.heroInner}`}>
          <span className={`eyebrow ${s.eyebrow}`}>Featured Development · Achimota, Accra</span>
          <h1>Aspire Greens</h1>
          <p className={s.sub}>
            A gated community of modern, well-finished homes in one of Accra&apos;s most connected
            neighbourhoods. Phase 1 is fully subscribed — register your interest for Phase 2.
          </p>
          <div className={s.heroImgWrap}>
            <Image
              src="/assets/aspire-property-301.jpg"
              alt="Aspire Greens residential terraces, Achimota, Accra"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <span className={s.badgeSold}>
              <span className={s.dot} />
              Phase 1 — fully subscribed
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-light">
        <div className="wrap sec-pad">
          <div className={s.secHead}>
            <span className="eyebrow">Development overview</span>
            <h2>Everything you need to know</h2>
          </div>

          <div className={s.factgrid}>
            <div className={s.cell}><div className={s.k}>Location</div><div className={s.v}>Achimota, Accra</div></div>
            <div className={s.cell}><div className={s.k}>Home types</div><div className={s.v}>2, 3 &amp; 4 bedroom</div></div>
            <div className={s.cell}><div className={s.k}>Styles</div><div className={s.v}>Semi-detached · Terraced · Apartments</div></div>
            <div className={s.cell}><div className={s.k}>Phase 1 status</div><div className={s.v}>Sold out</div></div>
          </div>

          <div className={s.secHead}>
            <span className="eyebrow">Home types</span>
            <h2>A home for every stage of life</h2>
          </div>

          <div className={s.homeTypes}>
            <article className={s.homeType}>
              <div className={s.ico}><Building2 size={20} /></div>
              <h3>Apartments</h3>
              <p>2-bedroom apartments — ideal for young professionals and small families looking to own in Accra without compromise on quality.</p>
            </article>
            <article className={s.homeType}>
              <div className={s.ico}><Home size={20} /></div>
              <h3>Terraced homes</h3>
              <p>3-bedroom terraced homes with private outdoor space — a practical, well-designed option for growing families.</p>
            </article>
            <article className={s.homeType}>
              <div className={s.ico}><Landmark size={20} /></div>
              <h3>Semi-detached</h3>
              <p>4-bedroom semi-detached homes offering more space, more privacy, and the premium finish Aspire Greens is built on.</p>
            </article>
          </div>

          <div className={s.phase2}>
            <div>
              <h3>Phase 2 is coming</h3>
              <p>Phase 1 sold out ahead of schedule. Join the waitlist to be first in line when Phase 2 homes are released.</p>
            </div>
            <button className="btn btn-accent" onClick={openModal}>Register interest</button>
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
