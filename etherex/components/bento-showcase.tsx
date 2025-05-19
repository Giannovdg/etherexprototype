"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Code, Layers, Zap, Globe, PenTool, Lock, BarChart } from "lucide-react"
import { ScrollReveal, TextReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"

interface BentoItemProps {
  title: string
  description?: string
  icon?: React.ReactNode
  className?: string
  imageUrl?: string
  link?: string
  index: number
}

const BentoItem = ({ title, description, icon, className = "", imageUrl, link, index }: BentoItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`group relative overflow-hidden rounded-3xl p-6 md:p-8 ${className}`}
    >
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
        </div>
      )}

      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-auto">
          {icon && <div className="mb-4 text-white">{icon}</div>}
          <h3 className={`text-xl md:text-2xl font-bold mb-2 ${imageUrl ? "text-white" : ""}`}>{title}</h3>
          {description && (
            <p className={`text-sm md:text-base ${imageUrl ? "text-white/80" : "text-gray-600 dark:text-gray-400"}`}>
              {description}
            </p>
          )}
        </div>

        {link && (
          <div className="mt-4">
            <Link
              href={link}
              className={`inline-flex items-center gap-1 text-sm font-medium ${
                imageUrl ? "text-white" : "text-gray-900 dark:text-white"
              } group-hover:underline`}
            >
              Learn more <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function BentoShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="showcase" ref={sectionRef} className="py-24 relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <TextReveal
            text="Our Showcase"
            className="text-3xl md:text-4xl font-bold mb-4"
            staggerDelay={0.03}
            duration={0.7}
          />
          <ScrollReveal type="fade" delay={0.3} duration={0.8} threshold={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our innovative solutions and see how we can transform your digital presence.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Featured item - spans 2 columns and rows */}
          <BentoItem
            index={0}
            title="Immersive Digital Experiences"
            description="We create captivating digital journeys that engage users on a deeper level and drive meaningful interactions."
            imageUrl="/placeholder.jpg"
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-500 to-purple-600"
            link="/projects"
          />

          {/* Web Development */}
          <BentoItem
            index={1}
            title="Web Development"
            description="Custom websites built with modern technologies."
            icon={<Code className="h-8 w-8" />}
            className="bg-gray-100 dark:bg-gray-800"
            link="/services/web-development"
          />

          {/* UI/UX Design */}
          <BentoItem
            index={2}
            title="UI/UX Design"
            description="Intuitive interfaces that enhance user experience."
            icon={<PenTool className="h-8 w-8" />}
            className="bg-gray-100 dark:bg-gray-800"
            link="/services/design"
          />

          {/* Case Study */}
          <BentoItem
            index={3}
            title="Case Study: Nexus Platform"
            description="How we transformed a fintech startup's digital presence."
            imageUrl="/placeholder-user.jpg"
            className="md:col-span-2 bg-gradient-to-br from-green-500 to-teal-600"
            link="/case-studies/nexus"
          />

          {/* Performance */}
          <BentoItem
            index={4}
            title="Performance Optimization"
            description="Speed up your digital products for better engagement."
            icon={<Zap className="h-8 w-8" />}
            className="bg-gray-100 dark:bg-gray-800"
            link="/services/optimization"
          />

          {/* Security */}
          <BentoItem
            index={5}
            title="Security First"
            description="Built with security in mind, protecting your data."
            icon={<Lock className="h-8 w-8" />}
            className="bg-gray-100 dark:bg-gray-800"
            link="/services/security"
          />

          {/* Analytics */}
          <BentoItem
            index={6}
            title="Data Analytics"
            description="Insights that help you make data-driven decisions."
            icon={<BarChart className="h-8 w-8" />}
            className="bg-gray-100 dark:bg-gray-800"
            link="/services/analytics"
          />

          {/* Global Reach */}
          <BentoItem
            index={7}
            title="Global Reach"
            description="Solutions for worldwide audiences."
            icon={<Globe className="h-8 w-8" />}
            className="bg-gray-100 dark:bg-gray-800"
            link="/services/global"
          />

          {/* Architecture */}
          <BentoItem
            index={8}
            title="Scalable Architecture"
            description="Systems that grow with your business."
            icon={<Layers className="h-8 w-8" />}
            className="bg-gray-100 dark:bg-gray-800"
            link="/services/architecture"
          />
        </div>
      </div>
    </section>
  )
}
