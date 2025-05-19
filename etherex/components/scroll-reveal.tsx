"use client"

import React from "react"

import { useRef, type ReactNode } from "react"
import { motion, useInView, useScroll, useTransform, type Variant } from "framer-motion"

type Direction = "up" | "down" | "left" | "right" | "none"
type AnimationType = "fade" | "slide" | "zoom" | "flip" | "none"

interface ScrollRevealProps {
  children: ReactNode
  direction?: Direction
  type?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  className?: string
  distance?: number
}

export function ScrollReveal({
  children,
  direction = "up",
  type = "fade",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  className = "",
  distance = 50,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  // Calculate initial and animate values based on animation type and direction
  const getInitialValues = (): Record<string, any> => {
    const initial: Record<string, any> = {}

    if (type === "fade" || type === "slide" || type === "zoom") {
      initial.opacity = 0
    }

    if (type === "slide") {
      switch (direction) {
        case "up":
          initial.y = distance
          break
        case "down":
          initial.y = -distance
          break
        case "left":
          initial.x = distance
          break
        case "right":
          initial.x = -distance
          break
      }
    }

    if (type === "zoom") {
      initial.scale = direction === "up" ? 0.8 : 1.2
    }

    if (type === "flip") {
      switch (direction) {
        case "up":
          initial.rotateX = 80
          break
        case "down":
          initial.rotateX = -80
          break
        case "left":
          initial.rotateY = -80
          break
        case "right":
          initial.rotateY = 80
          break
      }
    }

    return initial
  }

  const getAnimateValues = (): Record<string, any> => {
    const animate: Record<string, any> = {}

    if (type === "fade" || type === "slide" || type === "zoom") {
      animate.opacity = 1
    }

    if (type === "slide") {
      animate.x = 0
      animate.y = 0
    }

    if (type === "zoom") {
      animate.scale = 1
    }

    if (type === "flip") {
      animate.rotateX = 0
      animate.rotateY = 0
    }

    return animate
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialValues()}
      animate={isInView ? getAnimateValues() : getInitialValues()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for a nice easing
      }}
      className={className}
      style={{
        willChange: "opacity, transform",
        transformStyle: type === "flip" ? "preserve-3d" : undefined,
      }}
    >
      {children}
    </motion.div>
  )
}

// Staggered children animation component
interface StaggeredChildrenProps {
  children: ReactNode
  staggerDelay?: number
  containerClassName?: string
  childClassName?: string
  direction?: Direction
  type?: AnimationType
  duration?: number
  threshold?: number
  once?: boolean
  distance?: number
}

export function StaggeredChildren({
  children,
  staggerDelay = 0.1,
  containerClassName = "",
  childClassName = "",
  direction = "up",
  type = "fade",
  duration = 0.5,
  threshold = 0.1,
  once = true,
  distance = 50,
}: StaggeredChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  // Convert children to array
  const childrenArray = React.Children.toArray(children)

  // Calculate initial and animate values based on animation type and direction
  const getInitialValues = (): Record<string, any> => {
    const initial: Record<string, any> = {}

    if (type === "fade" || type === "slide") {
      initial.opacity = 0
    }

    if (type === "slide") {
      switch (direction) {
        case "up":
          initial.y = distance
          break
        case "down":
          initial.y = -distance
          break
        case "left":
          initial.x = distance
          break
        case "right":
          initial.x = -distance
          break
      }
    }

    return initial
  }

  const getAnimateValues = (): Record<string, any> => {
    const animate: Record<string, any> = {}

    if (type === "fade" || type === "slide") {
      animate.opacity = 1
    }

    if (type === "slide") {
      animate.x = 0
      animate.y = 0
    }

    return animate
  }

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const item = {
    hidden: getInitialValues(),
    show: getAnimateValues(),
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={containerClassName}
    >
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={item}
          transition={{
            duration,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className={childClassName}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Parallax component for scroll-based movement
interface ParallaxProps {
  children: ReactNode
  speed?: number
  direction?: "vertical" | "horizontal"
  className?: string
}

export function Parallax({ children, speed = 0.5, direction = "vertical", className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, direction === "vertical" ? 100 * speed : 0])
  const x = useTransform(scrollYProgress, [0, 1], [0, direction === "horizontal" ? 100 * speed : 0])

  return (
    <motion.div
      ref={ref}
      style={{
        x: direction === "horizontal" ? x : 0,
        y: direction === "vertical" ? y : 0,
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Text reveal animation component
interface TextRevealProps {
  text: string
  className?: string
  once?: boolean
  threshold?: number
  staggerDelay?: number
  duration?: number
  delay?: number
}

export function TextReveal({
  text,
  className = "",
  once = true,
  threshold = 0.1,
  staggerDelay = 0.02,
  duration = 0.5,
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  // Split text into words
  const words = text.split(" ")

  const container: Variant = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: delay },
    }),
  }

  const child: Variant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden" }}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", marginRight: "0.25em", whiteSpace: "nowrap" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Scroll progress indicator
interface ScrollProgressProps {
  color?: string
  height?: number
  zIndex?: number
  position?: "top" | "bottom"
}

export function ScrollProgress({ color = "#3B82F6", height = 4, zIndex = 50, position = "top" }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 right-0"
      style={{
        top: position === "top" ? 0 : "auto",
        bottom: position === "bottom" ? 0 : "auto",
        height,
        backgroundColor: color,
        transformOrigin: "0%",
        scaleX: scrollYProgress,
        zIndex,
      }}
    />
  )
}
