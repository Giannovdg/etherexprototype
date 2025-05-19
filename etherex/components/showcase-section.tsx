"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ShowcaseVisual from "@/components/showcase-visual"
import { ScrollReveal, TextReveal, Parallax } from "@/components/scroll-reveal"
import AnimatedBackground from "@/components/animated-background"

const showcaseItems = [
  {
    title: "Immersive Experiences",
    description: "Create captivating digital journeys that engage users on a deeper level.",
    color: "#3B82F6",
  },
  {
    title: "Interactive Design",
    description: "Responsive elements that adapt to user behavior and provide meaningful feedback.",
    color: "#10B981",
  },
  {
    title: "Seamless Integration",
    description: "Connect with existing systems and platforms for a unified digital ecosystem.",
    color: "#8B5CF6",
  },
]

export default function ShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === showcaseItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? showcaseItems.length - 1 : prev - 1))
  }

  const activeItem = showcaseItems[activeIndex]

  return (
    <section id="showcase" ref={sectionRef} className="py-24 relative overflow-hidden bg-white dark:bg-gray-950">
      <AnimatedBackground variant="waves" className="opacity-10" />

      <Parallax speed={0.1} className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-green-300 dark:bg-green-900 opacity-20 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-yellow-300 dark:bg-yellow-900 opacity-20 blur-3xl" />
      </Parallax>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <TextReveal
            text="Interactive Showcase"
            className="text-3xl md:text-4xl font-bold mb-4"
            staggerDelay={0.03}
            duration={0.7}
          />
          <ScrollReveal type="fade" delay={0.3} duration={0.8} threshold={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our innovative solutions through this interactive demonstration.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal type="slide" direction="left" delay={0.4} duration={0.7}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
                >
                  <h3 className="text-2xl font-bold mb-4">{activeItem.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{activeItem.description}</p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    <div className="flex-1 flex items-center justify-center">
                      {showcaseItems.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-2 h-2 rounded-full mx-1 transition-all ${
                            index === activeIndex ? "bg-gray-900 dark:bg-gray-100 w-4" : "bg-gray-300 dark:bg-gray-600"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                    <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </ScrollReveal>
          </div>

          <div className="order-1 lg:order-2 h-[400px]">
            <ScrollReveal type="slide" direction="right" delay={0.2} duration={0.7}>
              <ShowcaseVisual title={activeItem.title.split(" ")[0]} color={activeItem.color} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
