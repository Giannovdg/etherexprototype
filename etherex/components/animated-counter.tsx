"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number
      let animationFrame: number

      const startAnimation = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 1000)

        if (progress < 1) {
          setCount(Math.floor(end * progress))
          animationFrame = requestAnimationFrame(startAnimation)
        } else {
          setCount(end)
          setHasAnimated(true)
        }
      }

      animationFrame = requestAnimationFrame(startAnimation)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <div ref={ref} className="font-bold text-4xl md:text-5xl tabular-nums">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
