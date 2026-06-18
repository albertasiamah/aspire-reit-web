'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, Check } from 'lucide-react'
import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const firstFieldRef = useRef<HTMLInputElement>(null)

  // Focus trap & keyboard close
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false)
      firstFieldRef.current?.focus()
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className={`${styles.scrim} ${isOpen ? styles.open : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Join the waitlist"
    >
      <div className={styles.modal}>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <span className={`eyebrow ${styles.eyebrow}`}>Aspire Greens</span>
            <h3>Join the waitlist</h3>
            <p className={styles.sub}>
              Phase 1 is sold out. Register your interest and we&apos;ll be in touch when the next homes are released.
            </p>

            <div className={styles.field}>
              <label htmlFor="wl-name">Full name</label>
              <div className={styles.inp}>
                <input ref={firstFieldRef} id="wl-name" type="text" placeholder="Ama Mensah" required />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="wl-email">Email address</label>
              <div className={styles.inp}>
                <Mail size={16} />
                <input id="wl-email" type="email" placeholder="you@email.com" required />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="wl-phone">Phone</label>
              <div className={styles.inp}>
                <Phone size={16} />
                <input id="wl-phone" type="tel" placeholder="Your phone number" />
              </div>
            </div>

            <button className="btn btn-primary" type="submit" style={{ width: '100%', marginTop: '4px' }}>
              Join the waitlist
            </button>
          </form>
        ) : (
          <div className={`${styles.success} ${styles.show}`}>
            <div className={styles.checkCircle}>
              <Check size={28} />
            </div>
            <h3>You&apos;re on the list</h3>
            <p>Thank you. We&apos;ll contact you as soon as the next Aspire Greens homes are released.</p>
            <button className="btn btn-ghost-dark" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  )
}
