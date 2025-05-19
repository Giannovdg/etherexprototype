"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import AnimatedCounter from "@/components/animated-counter"

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const stats = [
    { value: 95, label: "Client Satisfaction", suffix: "%" },
    { value: 120, label: "Projects Completed", suffix: "+" },
    { value: 15, label: "Years Experience", suffix: "" },
    { value: 24, label: "Awards Received", suffix: "" },
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-600 dark:to-purple-600 opacity-20 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-green-300 to-teal-300 dark:from-green-600 dark:to-teal-600 opacity-20 blur-3xl"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-yellow-600 dark:to-orange-600 opacity-20 blur-3xl"
        />
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We take pride in our accomplishments and the trust our clients place in us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center interactive"
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
