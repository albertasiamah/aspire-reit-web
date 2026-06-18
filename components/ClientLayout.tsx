'use client'

import { useState } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Modal from '@/components/Modal/Modal'
import { ModalContext } from '@/components/ModalContext'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)

  return (
    <ModalContext.Provider value={openModal}>
      <Header />
      <main>{children}</main>
      <Footer />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </ModalContext.Provider>
  )
}
