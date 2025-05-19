"use client"

import { useState, useEffect } from "react"

export default function HeroVisual() {
  const [isClient, setIsClient] = useState(false)

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

  // Use a simple animated cube with CSS instead of Three.js
  return (
    <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
      <div className="w-64 h-64 relative transform-style-3d animate-spin-slow interactive">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-500 opacity-80 transform translate-z-[32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-500 opacity-80 transform -translate-z-[32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-500 opacity-80 transform translate-y-[32px] rotate-x-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-500 opacity-80 transform -translate-y-[32px] rotate-x-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-500 opacity-80 transform translate-x-[32px] rotate-y-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-500 opacity-80 transform -translate-x-[32px] rotate-y-90"></div>
      </div>
    </div>
  )
}
