"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ScrollReveal, TextReveal } from "@/components/scroll-reveal"
import AnimatedNumber from "@/components/animated-numbers"
import { Users, Code, Award, Clock } from "lucide-react"

const stats = [
  {
    value: 150,
    label: "Happy Clients",
    icon: Users,
    suffix: "+",
    color: "#3B82F6",
  },
  {
    value: 300,
    label: "Projects Completed",
    icon: Code,
    suffix: "+",
    color: "#10B981",
  },
  {
    value: 25,
    label: "Awards Won",
    icon: Award,
    suffix: "",
    color: "#8B5CF6",
  },
  {
    value: 10,
    label: "Years Experience",
    icon: Clock,
    suffix: "+",
    color: "#EC4899",
  },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="stats" ref={sectionRef} className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <TextReveal
            text="Our Impact in Numbers"
            className="text-3xl md:text-4xl font-bold mb-4"
            staggerDelay={0.03}
            duration={0.7}
          />
          <ScrollReveal type="fade" delay={0.3} duration={0.8} threshold={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're proud of what we've accomplished with our clients over the years.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              type="slide"
              direction="up"
              delay={0.1 * index}
              duration={0.6}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
              >
                <stat.icon size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedNumber
                  from={0}
                  to={stat.value}
                  formatter={(value) => `${value}${stat.suffix}`}
                  duration={2}
                  delay={0.5 + index * 0.1}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
