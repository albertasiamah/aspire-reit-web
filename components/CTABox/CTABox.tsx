'use client'
interface CTABoxProps { onOpenModal: () => void }

export default function CTABox({ onOpenModal }: CTABoxProps) {
  return (
    <div className="ctaBox">
      <div className="rule" />
      <p className="quote">&ldquo;A home you can count on. An investment that endures.&rdquo;</p>
      <button className="btn btn-accent btn-lg" onClick={onOpenModal}>
        Join the waitlist
      </button>
    </div>
  )
}
