"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function InteractiveCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseOver = () => setCursorVariant("hover")
    const handleMouseOut = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .interactive")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseOver)
      el.addEventListener("mouseleave", handleMouseOut)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseOver)
        el.removeEventListener("mouseleave", handleMouseOut)
      })
    }
  }, [isClient])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(200, 200, 200, 0.2)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(200, 200, 200, 0.4)",
      mixBlendMode: "difference" as const,
    },
  }

  if (!isClient) return null

  // Only show custom cursor on non-touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}
