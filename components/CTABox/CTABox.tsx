'use client'

import { useModal } from '@/components/ModalContext'

export default function CTABox() {
  const openModal = useModal()

  return (
    <div className="ctaBox">
      <div className="rule" />
      <p className="quote">&ldquo;A home you can count on. An investment that endures.&rdquo;</p>
      <button className="btn btn-accent btn-lg" onClick={openModal}>
        Join the waitlist
      </button>
    </div>
  )
}
