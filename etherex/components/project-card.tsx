"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import TransitionLink from "@/components/transition-link"

interface ProjectProps {
  project: {
    title: string
    description: string
    category: string
    image: string
    color: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 interactive"
    >
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-full w-full">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </motion.div>
        <div className="absolute top-4 left-4 z-20">
          <span
            className="px-3 py-1 text-xs font-medium rounded-full"
            style={{
              backgroundColor: `${project.color}22`,
              color: project.color,
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

        <TransitionLink
          href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-sm font-medium"
          style={{ color: project.color }}
        >
          <span className="relative">
            View Project
            <span
              className="absolute bottom-0 left-0 w-full h-0.5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              style={{ backgroundColor: project.color }}
            ></span>
          </span>
        </TransitionLink>
      </div>
    </motion.div>
  )
}
