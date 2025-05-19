import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import InteractiveCursor from "@/components/interactive-cursor"
import PageTransition from "@/components/page-transition"
import PageLoading from "@/components/page-loading"
import PageTransitionEffect from "@/components/page-transition-effect"
import PageTransitionProvider from "@/components/page-transition-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Etherex - Digital Experience",
  description: "Redefining digital experiences with minimalist design and cutting-edge technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PageTransitionProvider>
            <PageLoading />
            <PageTransitionEffect />
            <PageTransition>{children}</PageTransition>
            <InteractiveCursor />
          </PageTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
