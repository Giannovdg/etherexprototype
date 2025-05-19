"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedNumberProps {
  from: number
  to: number
  duration?: number
  delay?: number
  formatter?: (value: number) => string
  className?: string
}

export default function AnimatedNumber({
  from,
  to,
  duration = 2,
  delay = 0,
  formatter = (value) => value.toFixed(0),
  className = "",
}: AnimatedNumberProps) {
  const [value, setValue] = useState(from)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timeout = setTimeout(() => {
        let startTime: number
        let animationFrame: number

        const startAnimation = (timestamp: number) => {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

          setValue(from + Math.floor((to - from) * progress))

          if (progress < 1) {
            animationFrame = requestAnimationFrame(startAnimation)
          } else {
            setValue(to)
            setHasAnimated(true)
          }
        }

        animationFrame = requestAnimationFrame(startAnimation)

        return () => {
          if (animationFrame) {
            cancelAnimationFrame(animationFrame)
          }
        }
      }, delay * 1000)

      return () => clearTimeout(timeout)
    }
  }, [isInView, from, to, duration, delay, hasAnimated])

  return (
    <span ref={ref} className={`${className} tabular-nums`}>
      {formatter(value)}
    </span>
  )
}
