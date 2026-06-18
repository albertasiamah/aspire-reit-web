'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useModal } from '@/components/ModalContext'
import styles from './Header.module.css'

export default function Header() {
  const openModal = useModal()
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.navbar}`}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/assets/aspire-logo-lockup.png"
            alt="Aspire REIT"
            width={120}
            height={26}
            priority
          />
        </Link>

        <nav className={styles.navlinks}>
          <Link href="/" className={isActive('/') ? styles.active : ''}>Home</Link>
          <Link href="/why-aspire" className={isActive('/why-aspire') ? styles.active : ''}>Why Aspire</Link>
          <Link href="/aspire-greens" className={isActive('/aspire-greens') ? styles.active : ''}>Aspire Greens</Link>
          <Link href="/about" className={isActive('/about') ? styles.active : ''}>About</Link>
          <Link href="/invest" className={isActive('/invest') ? styles.active : ''}>Invest</Link>
        </nav>

        <button className="btn btn-accent btn-sm" onClick={openModal}>
          Join waitlist
        </button>
      </div>
    </header>
  )
}
