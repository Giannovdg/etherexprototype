"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransitionEffect() {
  const pathname = usePathname()
  const [isAnimating, setIsAnimating] = useState(false)
  const [prevPath, setPrevPath] = useState("")

  useEffect(() => {
    if (prevPath !== pathname && prevPath !== "") {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 1000)
      return () => clearTimeout(timer)
    }
    setPrevPath(pathname)
  }, [pathname, prevPath])

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={{
            scaleY: [0, 1, 1, 0],
            originY: ["0%", "0%", "100%", "100%"],
          }}
          transition={{
            duration: 1,
            times: [0, 0.4, 0.6, 1],
            ease: [0.645, 0.045, 0.355, 1.0],
          }}
          className="fixed inset-0 z-[100] bg-primary"
        />
      )}
    </AnimatePresence>
  )
}
