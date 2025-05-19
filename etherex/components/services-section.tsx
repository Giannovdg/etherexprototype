"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ServiceIcon, serviceIcons } from "@/components/animated-icons"
import { ScrollReveal, TextReveal } from "@/components/scroll-reveal"
import AnimatedBackground from "@/components/animated-background"

const services = [
  {
    name: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: serviceIcons.webDevelopment,
    color: "#3B82F6",
  },
  {
    name: "UI/UX Design",
    description: "Intuitive and engaging user interfaces that enhance user experience.",
    icon: serviceIcons.uiUxDesign,
    color: "#10B981",
  },
  {
    name: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: serviceIcons.mobileDevelopment,
    color: "#8B5CF6",
  },
  {
    name: "Data Analytics",
    description: "Insights and visualizations that help you make data-driven decisions.",
    icon: serviceIcons.dataAnalytics,
    color: "#EC4899",
  },
  {
    name: "Performance Optimization",
    description: "Speed up your digital products for better user engagement.",
    icon: serviceIcons.performance,
    color: "#F59E0B",
  },
  {
    name: "Global Reach",
    description: "Multilingual and accessible solutions for worldwide audiences.",
    icon: serviceIcons.global,
    color: "#06B6D4",
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden bg-white dark:bg-gray-950">
      <AnimatedBackground variant="dots" className="opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <TextReveal
            text="Our Services"
            className="text-3xl md:text-4xl font-bold mb-4"
            staggerDelay={0.03}
            duration={0.7}
          />
          <ScrollReveal type="fade" delay={0.3} duration={0.8} threshold={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ScrollReveal
              key={service.name}
              type="slide"
              direction="up"
              delay={0.1 * index}
              duration={0.6}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <ServiceIcon
                name={service.name}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
