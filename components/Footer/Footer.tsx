import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

interface FooterProps {
  onOpenModal: () => void
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footTop}>
          <div className={styles.blurb}>
            <Image
              src="/assets/aspire-logo-lockup.png"
              alt="Aspire REIT"
              width={120}
              height={26}
            />
            <p>Aspire is a residential real estate investment trust delivering affordable homes across Ghana.</p>
          </div>

          <div className={styles.footCols}>
            <div className={styles.col}>
              <h4>Company</h4>
              <Link href="/why-aspire">Why Aspire</Link>
              <Link href="/aspire-greens">Aspire Greens</Link>
              <Link href="/about">About &amp; Team</Link>
            </div>
            <div className={styles.col}>
              <h4>Invest</h4>
              <Link href="/invest">How it works</Link>
              <button
                onClick={onOpenModal}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', color: 'inherit', display: 'block', marginBottom: '10px', fontSize: '14px', color: 'var(--green-100)', textAlign: 'left' }}
              >
                Join the waitlist
              </button>
              <Link href="mailto:info@aspirereit.fund">Contact</Link>
            </div>
          </div>
        </div>

        <div className={styles.footBottom}>
          <span>info@aspirereit.fund · 0209 104369 · Accra, Ghana</span>
          <span>Capital at risk. Past performance is not a guide to future returns.</span>
        </div>
      </div>
    </footer>
  )
}
