"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface PageTransitionContextType {
  isTransitioning: boolean
  startTransition: () => void
  completeTransition: () => void
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isTransitioning: false,
  startTransition: () => {},
  completeTransition: () => {},
})

export const usePageTransition = () => useContext(PageTransitionContext)

export default function PageTransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const startTransition = () => setIsTransitioning(true)
  const completeTransition = () => setIsTransitioning(false)

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, startTransition, completeTransition }}>
      {children}
    </PageTransitionContext.Provider>
  )
}
