'use client'

import { useState } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Modal from '@/components/Modal/Modal'
import { ModalContext } from '@/components/ModalContext'
import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ModalContext.Provider value={openModal}>
          <Header onOpenModal={openModal} />
          <main>{children}</main>
          <Footer onOpenModal={openModal} />
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </ModalContext.Provider>
      </body>
    </html>
  )
}
