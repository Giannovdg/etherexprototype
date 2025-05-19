"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useSearchParams } from "next/navigation"

export default function PageLoading() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Create a URL object from the current pathname and search params
    const url = pathname + searchParams.toString()

    // This effect runs when the route changes
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 300) // Small delay to ensure smooth transition
    }

    // Add event listeners for route change start and complete
    window.addEventListener("beforeunload", handleStart)

    // Cleanup function
    return () => {
      window.removeEventListener("beforeunload", handleStart)
    }
  }, [pathname, searchParams])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Animated Gradient Background */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 0 }}
          >
            <motion.div
              className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-blue-400/60 to-purple-500/80 blur-2xl opacity-70 animate-gradient-move"
              style={{ backgroundSize: '200% 200%' }}
              animate={{ backgroundPosition: [
                '0% 50%',
                '100% 50%',
                '0% 50%'
              ] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
            />
          </motion.div>

          {/* Spinner with Glow */}
          <div className="relative w-20 h-20 flex flex-col items-center justify-center z-10">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 180, 360],
                boxShadow: [
                  '0 0 0px 0px #6366f1',
                  '0 0 24px 8px #6366f1',
                  '0 0 0px 0px #6366f1',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full"
              style={{ filter: 'blur(0.5px)' }}
            />
            <motion.div
              animate={{
                scale: [1.1, 0.95, 1.1],
                rotate: [180, 360, 540],
                boxShadow: [
                  '0 0 0px 0px #a78bfa',
                  '0 0 16px 4px #a78bfa',
                  '0 0 0px 0px #a78bfa',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                delay: 0.2,
              }}
              className="absolute inset-3 border-4 border-t-transparent border-r-primary border-b-transparent border-l-transparent rounded-full"
              style={{ filter: 'blur(1px)' }}
            />
            {/* Center Dot */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full shadow-lg"
              style={{ translateX: '-50%', translateY: '-50%' }}
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 0px 0px #6366f1',
                  '0 0 12px 4px #6366f1',
                  '0 0 0px 0px #6366f1',
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
            {/* Loading Text */}
            <span className="block mt-24 text-primary font-semibold text-lg tracking-wide animate-pulse select-none">Loading…</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
