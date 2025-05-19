"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full">
        <div className="h-5 w-5 bg-gray-300 rounded-full animate-pulse" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full relative overflow-hidden group"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="sr-only">{theme === "dark" ? "Light" : "Dark"} mode</span>

      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <span className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Button>
  )
}
