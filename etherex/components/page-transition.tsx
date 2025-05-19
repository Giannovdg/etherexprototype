"use client"

import { type ReactNode, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isFirstMount, setIsFirstMount] = useState(true)

  // Skip the animation on first mount
  useEffect(() => {
    setIsFirstMount(false)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstMount ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.3,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
