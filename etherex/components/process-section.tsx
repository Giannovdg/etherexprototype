"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { ScrollReveal, TextReveal, StaggeredChildren } from "@/components/scroll-reveal"
import { Lightbulb, PenTool, Code, Rocket, type LucideIcon } from "lucide-react"

interface ProcessStep {
  number: number
  title: string
  description: string
  icon: LucideIcon
  color: string
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience to create a strategic plan.",
    icon: Lightbulb,
    color: "#3B82F6",
  },
  {
    number: 2,
    title: "Design",
    description:
      "Our designers create intuitive, engaging interfaces that align with your brand and user expectations.",
    icon: PenTool,
    color: "#10B981",
  },
  {
    number: 3,
    title: "Development",
    description: "We build your solution using modern technologies, ensuring it's fast, secure, and scalable.",
    icon: Code,
    color: "#8B5CF6",
  },
  {
    number: 4,
    title: "Deployment",
    description: "We launch your project and provide ongoing support to ensure continued success.",
    icon: Rocket,
    color: "#EC4899",
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="process" ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <TextReveal
            text="Our Process"
            className="text-3xl md:text-4xl font-bold mb-4"
            staggerDelay={0.03}
            duration={0.7}
          />
          <ScrollReveal type="fade" delay={0.3} duration={0.8} threshold={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto">
          <StaggeredChildren
            containerClassName="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12"
            staggerDelay={0.15}
          >
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div
                  className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <div className="ml-16">
                  <div
                    className="w-12 h-12 mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}15`, color: step.color }}
                  >
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </div>
    </section>
  )
}
