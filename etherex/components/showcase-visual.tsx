"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ShowcaseVisual({ title, color }: { title: string; color: string }) {
  const [isClient, setIsClient] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-32 w-32"></div>
        </div>
      </div>
    )
  }

  // Use a CSS-based visual with interactive hover effects
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="text-5xl md:text-6xl font-bold p-8 rounded-lg interactive"
        style={{
          background: `linear-gradient(135deg, ${color}22, ${color}66)`,
          color: color,
          textShadow: `0 2px 10px ${color}66`,
          boxShadow: `0 10px 30px ${color}33`,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 5 : 0,
          y: isHovered ? -10 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        <span className="relative inline-block">
          {title}
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 rounded"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
          />
        </span>
      </motion.div>
    </div>
  )
}
