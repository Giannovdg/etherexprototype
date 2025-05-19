"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function InteractiveForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Randomly succeed or fail for demo purposes
      const success = Math.random() > 0.3
      setFormStatus(success ? "success" : "error")

      if (success) {
        setFormState({ name: "", email: "", message: "" })
      }

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    }, 1500)
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-6 dark:text-white">Send us a message</h3>

      {formStatus === "success" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg p-6 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-green-100 dark:bg-green-800 p-3">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-300" />
            </div>
          </div>
          <h4 className="text-lg font-medium mb-2">Message Sent!</h4>
          <p>Thank you for reaching out. We'll get back to you shortly.</p>
        </motion.div>
      ) : formStatus === "error" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg p-6 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-red-100 dark:bg-red-800 p-3">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-300" />
            </div>
          </div>
          <h4 className="text-lg font-medium mb-2">Something went wrong</h4>
          <p>Please try again or contact us directly.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <motion.span
              initial={false}
              animate={{
                y: focusedField === "name" || formState.name ? -25 : 0,
                scale: focusedField === "name" || formState.name ? 0.8 : 1,
                color: focusedField === "name" ? "var(--color-primary)" : "#6B7280",
              }}
              className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 pointer-events-none origin-left transition-all duration-200"
            >
              Your Name
            </motion.span>
            <Input
              name="name"
              value={formState.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              required
              className={`pt-6 transition-all duration-200 border-gray-200 dark:border-gray-700 ${
                focusedField === "name" ? "border-primary ring-1 ring-primary" : ""
              }`}
            />
          </div>

          <div className="relative">
            <motion.span
              initial={false}
              animate={{
                y: focusedField === "email" || formState.email ? -25 : 0,
                scale: focusedField === "email" || formState.email ? 0.8 : 1,
                color: focusedField === "email" ? "var(--color-primary)" : "#6B7280",
              }}
              className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 pointer-events-none origin-left transition-all duration-200"
            >
              Your Email
            </motion.span>
            <Input
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              required
              className={`pt-6 transition-all duration-200 border-gray-200 dark:border-gray-700 ${
                focusedField === "email" ? "border-primary ring-1 ring-primary" : ""
              }`}
            />
          </div>

          <div className="relative">
            <motion.span
              initial={false}
              animate={{
                y: focusedField === "message" || formState.message ? -25 : 0,
                scale: focusedField === "message" || formState.message ? 0.8 : 1,
                color: focusedField === "message" ? "var(--color-primary)" : "#6B7280",
              }}
              className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 pointer-events-none origin-left transition-all duration-200"
            >
              Your Message
            </motion.span>
            <Textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              required
              className={`min-h-[150px] pt-6 transition-all duration-200 border-gray-200 dark:border-gray-700 ${
                focusedField === "message" ? "border-primary ring-1 ring-primary" : ""
              }`}
            />
          </div>

          <Button type="submit" className="w-full rounded-lg group overflow-hidden relative" disabled={isSubmitting}>
            <span className="relative z-10 flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </span>
            <motion.span
              initial={{ left: "-100%" }}
              whileHover={{ left: "0%" }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400"
            />
          </Button>
        </form>
      )}
    </div>
  )
}
