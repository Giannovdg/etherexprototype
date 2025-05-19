"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal, TextReveal } from "@/components/scroll-reveal"

interface ScrollSectionProps {
  title: string
  subtitle: string
  children: React.ReactNode
  className?: string
  id?: string
}

export default function ScrollSection({ title, subtitle, children, className = "", id }: ScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section id={id} ref={sectionRef} className={`py-24 relative overflow-hidden ${className}`}>
      <motion.div style={{ opacity, y }} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <TextReveal text={title} className="text-3xl md:text-4xl font-bold mb-4" staggerDelay={0.03} duration={0.7} />
          <ScrollReveal type="fade" delay={0.3} duration={0.8} threshold={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
          </ScrollReveal>
        </div>

        {children}
      </motion.div>
    </section>
  )
}
