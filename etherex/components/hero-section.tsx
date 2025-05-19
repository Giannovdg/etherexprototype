"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import HeroVisual from "@/components/hero-visual"
import TransitionLink from "@/components/transition-link"
import { TextReveal, ScrollReveal, Parallax } from "@/components/scroll-reveal"

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <Parallax speed={-0.2} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-300 dark:bg-blue-900 opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-300 dark:bg-purple-900 opacity-20 blur-3xl" />
      </Parallax>

      <motion.div
        style={{ opacity, y, scale }}
        className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        <div>
          <TextReveal
            text="Redefining Digital Experience"
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent"
            staggerDelay={0.04}
            duration={0.8}
          />

          <ScrollReveal type="fade" delay={0.5} duration={0.8}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Etherex combines minimalist design with cutting-edge technology to create immersive digital experiences
              that captivate and inspire.
            </p>
          </ScrollReveal>

          <ScrollReveal
            type="slide"
            direction="up"
            delay={0.7}
            duration={0.6}
            className="flex flex-col sm:flex-row gap-4"
          >
            <TransitionLink href="/projects">
              <Button className="group rounded-full px-6">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </TransitionLink>
            <TransitionLink href="/about">
              <Button variant="outline" className="rounded-full px-6">
                About Us
              </Button>
            </TransitionLink>
          </ScrollReveal>
        </div>

        <ScrollReveal
          type="slide"
          direction="right"
          delay={0.3}
          duration={0.8}
          className="h-[400px] lg:h-[500px] w-full"
        >
          <HeroVisual />
        </ScrollReveal>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"
          />
        </motion.div>
        <span className="text-xs text-gray-400 dark:text-gray-600 mt-2">Scroll to explore</span>
      </div>
    </section>
  )
}

export default HeroSection
