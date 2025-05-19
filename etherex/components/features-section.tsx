"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Layers, Zap, Shield, Globe } from "lucide-react"
import { ScrollReveal, TextReveal, StaggeredChildren } from "@/components/scroll-reveal"
import AnimatedBackground from "@/components/animated-background"

const features = [
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Elegant Design",
    description:
      "Minimalist aesthetics with attention to every detail, creating a clean and sophisticated user experience.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "High Performance",
    description: "Optimized for speed and efficiency, ensuring smooth interactions and lightning-fast load times.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Secure Framework",
    description: "Built with security in mind, protecting your data and providing peace of mind.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Global Reach",
    description: "Designed to connect with audiences worldwide, breaking down barriers and expanding your horizons.",
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <AnimatedBackground variant="grid" className="opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <TextReveal
            text="Exceptional Features"
            className="text-3xl md:text-4xl font-bold mb-4"
            staggerDelay={0.03}
            duration={0.7}
          />
          <ScrollReveal type="fade" delay={0.3} duration={0.8} threshold={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the powerful capabilities that set Etherex apart and deliver an unparalleled digital experience.
            </p>
          </ScrollReveal>
        </div>

        <StaggeredChildren containerClassName="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 interactive"
            >
              <div className="mb-4 text-gray-900 dark:text-gray-100">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  )
}
