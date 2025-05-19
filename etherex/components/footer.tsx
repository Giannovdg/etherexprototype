"use client"

import { motion, useInView } from "framer-motion"
import { Instagram, Twitter, Linkedin, Github } from "lucide-react"
import TransitionLink from "@/components/transition-link"
import { ScrollReveal, StaggeredChildren } from "@/components/scroll-reveal"
import { useRef } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.1 })

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Twitter", href: "#", icon: <Twitter className="h-4 w-4" /> },
        { name: "Instagram", href: "#", icon: <Instagram className="h-4 w-4" /> },
        { name: "LinkedIn", href: "#", icon: <Linkedin className="h-4 w-4" /> },
        { name: "GitHub", href: "#", icon: <Github className="h-4 w-4" /> },
      ],
    },
  ]

  return (
    <footer ref={footerRef} className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ScrollReveal type="slide" direction="up" delay={0.1} duration={0.6}>
            <TransitionLink href="/" className="text-2xl font-bold tracking-tighter mb-6 block interactive">
              Etherex
            </TransitionLink>
            <p className="text-gray-400 mb-6 max-w-xs">
              Creating minimalist, visually stunning digital experiences with advanced animations and interactive
              elements.
            </p>
            <div className="flex space-x-4">
              {footerLinks[2].links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 dark:bg-gray-900 p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors interactive"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {footerLinks.slice(0, 2).map((section, sectionIndex) => (
            <ScrollReveal
              key={sectionIndex}
              type="slide"
              direction="up"
              delay={0.2 + sectionIndex * 0.1}
              duration={0.6}
            >
              <h3 className="font-semibold text-lg mb-6">{section.title}</h3>
              <StaggeredChildren containerClassName="space-y-4" staggerDelay={0.05}>
                {section.links.map((link) => (
                  <li key={link.name} className="list-none">
                    <TransitionLink
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors interactive"
                    >
                      {link.name}
                    </TransitionLink>
                  </li>
                ))}
              </StaggeredChildren>
            </ScrollReveal>
          ))}

          <ScrollReveal type="slide" direction="up" delay={0.4} duration={0.6}>
            <h3 className="font-semibold text-lg mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and announcements.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 dark:bg-gray-900 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-700 dark:focus:ring-gray-600"
                required
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="bg-white text-gray-900 dark:bg-gray-200 dark:text-gray-900 px-4 py-2 rounded-r-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors interactive"
                suppressHydrationWarning
              >
                Subscribe
              </button>
            </form>
          </ScrollReveal>
        </div>

        <ScrollReveal
          type="fade"
          delay={0.5}
          duration={0.8}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Etherex. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <TransitionLink href="#" className="hover:text-white transition-colors interactive">
              Privacy Policy
            </TransitionLink>
            <TransitionLink href="#" className="hover:text-white transition-colors interactive">
              Terms of Service
            </TransitionLink>
            <TransitionLink href="#" className="hover:text-white transition-colors interactive">
              Cookies
            </TransitionLink>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
