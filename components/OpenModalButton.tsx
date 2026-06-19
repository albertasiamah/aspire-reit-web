'use client'
import { useModal } from '@/components/ModalContext'
import { ArrowRight } from 'lucide-react'

interface Props {
  className?: string
  label?: string
  showIcon?: boolean
}

export default function OpenModalButton({ className = 'btn btn-accent', label = 'Join the waitlist', showIcon = false }: Props) {
  const openModal = useModal()
  return (
    <button className={className} onClick={openModal}>
      {label}{showIcon && <ArrowRight size={17} style={{ marginLeft: 8 }} />}
    </button>
  )
}
