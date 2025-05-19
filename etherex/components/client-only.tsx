"use client"

import { useState, useEffect, type ReactNode } from "react"

interface ClientOnlyProps {
  children: ReactNode
  fallback?: ReactNode
}

// This component ensures content is only rendered client-side
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return fallback
  }

  return <>{children}</>
}
