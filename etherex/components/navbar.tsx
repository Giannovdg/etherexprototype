"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import TransitionLink from "@/components/transition-link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check if code is running in the browser
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      // Add event listener with try-catch for extra safety
      try {
        window.addEventListener("scroll", handleScroll)
        // Call it once to set initial state
        handleScroll()
      } catch (error) {
        console.error("Error setting up scroll listener:", error)
      }

      // Cleanup function
      return () => {
        try {
          window.removeEventListener("scroll", handleScroll)
        } catch (error) {
          console.error("Error removing scroll listener:", error)
        }
      }
    }
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <TransitionLink
          href="/"
          className="text-2xl font-bold tracking-tighter interactive"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent"
          >
            Etherex
          </motion.span>
        </TransitionLink>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <TransitionLink
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors group interactive"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full" />
              </TransitionLink>
            ))}
          </nav>

          <ThemeToggle />

          <button
            className="md:hidden focus:outline-none interactive"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <TransitionLink
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium py-2 text-gray-900 dark:text-gray-100 interactive"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </TransitionLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
