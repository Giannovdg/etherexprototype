"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal, TextReveal } from "@/components/scroll-reveal"
import AnimatedBackground from "@/components/animated-background"

const testimonials = [
  {
    quote:
      "Etherex transformed our digital presence with a stunning website that perfectly captures our brand essence. The attention to detail and smooth animations create an exceptional user experience.",
    author: "Sarah Johnson",
    title: "CEO, Innovate Solutions",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Etherex was a game-changer for our company. Their team delivered a website that not only looks beautiful but also performs exceptionally well. The results have exceeded our expectations.",
    author: "Michael Chen",
    title: "Marketing Director, TechForward",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team at Etherex has an incredible eye for design and technical expertise. They created a digital experience that has significantly improved our conversion rates and customer engagement.",
    author: "Emma Rodriguez",
    title: "Product Manager, Nexus Group",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <AnimatedBackground
        variant="gradient"
        color="rgba(59, 130, 246, 0.1)"
        secondaryColor="rgba(139, 92, 246, 0.05)"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <TextReveal
            text="What Our Clients Say"
            className="text-3xl md:text-4xl font-bold mb-4"
            staggerDelay={0.03}
            duration={0.7}
          />
          <ScrollReveal type="fade" delay={0.3} duration={0.8} threshold={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal
            type="fade"
            delay={0.5}
            duration={0.8}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 relative"
          >
            <div className="absolute top-8 left-8 text-blue-500 dark:text-blue-400 opacity-20">
              <Quote size={64} />
            </div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-8">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonials[activeIndex].author}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonials[activeIndex].title}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between mt-8">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>

              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? "bg-blue-500 w-4" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    suppressHydrationWarning
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
