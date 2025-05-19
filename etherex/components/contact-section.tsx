"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import InteractiveForm from "@/components/interactive-form"
import { ScrollReveal, TextReveal, StaggeredChildren } from "@/components/scroll-reveal"
import AnimatedBackground from "@/components/animated-background"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "hello@etherex.com",
      link: "mailto:hello@etherex.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office",
      details: "123 Innovation Street, Tech City",
      link: "#",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <AnimatedBackground variant="dots" className="opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <TextReveal
            text="Get in Touch"
            className="text-3xl md:text-4xl font-bold mb-4"
            staggerDelay={0.03}
            duration={0.7}
          />
          <ScrollReveal type="fade" delay={0.3} duration={0.8} threshold={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Reach out to us.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal type="slide" direction="left" delay={0.4} duration={0.7}>
            <InteractiveForm />
          </ScrollReveal>

          <div className="lg:pl-8">
            <ScrollReveal type="slide" direction="right" delay={0.4} duration={0.7}>
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Contact Information</h3>
            </ScrollReveal>

            <StaggeredChildren
              containerClassName="space-y-6"
              staggerDelay={0.1}
              childClassName="flex items-start interactive"
            >
              {contactInfo.map((item, index) => (
                <div key={index}>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm mr-4">{item.icon}</div>
                  <div>
                    <h4 className="font-medium dark:text-white">{item.title}</h4>
                    <a
                      href={item.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                    >
                      {item.details}
                    </a>
                  </div>
                </div>
              ))}
            </StaggeredChildren>

            <ScrollReveal
              type="fade"
              delay={0.7}
              duration={0.8}
              className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <h4 className="font-semibold mb-4 dark:text-white">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Monday - Friday:</span>
                  <span className="dark:text-white">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Saturday:</span>
                  <span className="dark:text-white">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Sunday:</span>
                  <span className="dark:text-white">Closed</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
