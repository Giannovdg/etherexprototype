"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface AnimatedBackgroundProps {
  variant?: "dots" | "grid" | "waves" | "gradient"
  color?: string
  secondaryColor?: string
  className?: string
}

export default function AnimatedBackground({
  variant = "dots",
  color = "rgba(59, 130, 246, 0.1)",
  secondaryColor = "rgba(59, 130, 246, 0.05)",
  className = "",
}: AnimatedBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])

  useEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      })
    }

    const handleResize = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const renderBackground = () => {
    switch (variant) {
      case "dots":
        return (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill={color} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        )
      case "grid":
        return (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        )
      case "waves":
        return (
          <svg
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path d="M 0 500 C 150 400, 350 600, 500 500 C 650 400, 850 600, 1000 500 V 1000 H 0 Z" fill={color} />
            <path
              d="M 0 600 C 150 500, 350 700, 500 600 C 650 500, 850 700, 1000 600 V 1000 H 0 Z"
              fill={secondaryColor}
            />
          </svg>
        )
      case "gradient":
        return (
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-30"
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${color}, ${secondaryColor})`,
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, rotate }}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      {renderBackground()}
    </motion.div>
  )
}
