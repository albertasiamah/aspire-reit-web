'use client'
import { createContext, useContext } from 'react'

export const ModalContext = createContext<() => void>(() => {})
export const useModal = () => useContext(ModalContext)
