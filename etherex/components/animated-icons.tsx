"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Smartphone, PenTool, BarChart, Zap, Globe, Shield, Layers, type LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  icon: LucideIcon
  color?: string
  size?: number
  strokeWidth?: number
  className?: string
}

export function AnimatedIcon({
  icon: Icon,
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const iconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0)",
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} className={className}>
      <Icon size={size} color={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </motion.div>
  )
}

interface ServiceIconProps {
  name: string
  description: string
  icon: LucideIcon
  color?: string
  className?: string
}

export function ServiceIcon({ name, description, icon: Icon, color = "#3B82F6", className = "" }: ServiceIconProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-col items-center text-center p-6 ${className}`}
    >
      <motion.div
        variants={itemVariants}
        className="mb-4 p-4 rounded-full bg-gray-100 dark:bg-gray-800"
        style={{ color }}
      >
        <Icon size={32} />
      </motion.div>
      <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-2">
        {name}
      </motion.h3>
      <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400">
        {description}
      </motion.p>
    </motion.div>
  )
}

export const serviceIcons = {
  webDevelopment: Code,
  mobileDevelopment: Smartphone,
  uiUxDesign: PenTool,
  dataAnalytics: BarChart,
  performance: Zap,
  global: Globe,
  security: Shield,
  architecture: Layers,
}
