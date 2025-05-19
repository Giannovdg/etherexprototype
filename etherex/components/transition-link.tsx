"use client"

import type React from "react"

import { type ReactNode, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

interface TransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function TransitionLink({ href, children, className = "", onClick }: TransitionLinkProps) {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle internal links that don't start with # (not hash links)
    if (href.startsWith("/") && !href.startsWith("/#") && !href.startsWith("#")) {
      e.preventDefault()
      setIsTransitioning(true)

      // If there's an onClick handler, call it
      if (onClick) onClick()

      // Delay navigation to allow for exit animation
      setTimeout(() => {
        router.push(href)
      }, 300) // Match this with your exit animation duration
    } else if (onClick) {
      // For hash links, just call the onClick handler if provided
      onClick()
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      <motion.span
        animate={{ opacity: isTransitioning ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
        className="inline-block relative"
      >
        {children}
      </motion.span>
    </Link>
  )
}
