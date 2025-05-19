import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import TransitionLink from "@/components/transition-link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // In a real app, you would fetch project data based on the slug
  // For this example, we'll use hardcoded data
  const projectData = {
    title: params.slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: "An innovative digital experience that pushes the boundaries of web design and interaction.",
    client: "Acme Corporation",
    duration: "3 months",
    services: ["UI/UX Design", "Front-end Development", "Animation", "CMS Integration"],
    challenge:
      "The client needed a complete redesign of their digital platform to better engage users and reflect their brand values of innovation and simplicity.",
    solution:
      "We created a minimalist design with subtle animations and interactive elements that guide users through the content while maintaining optimal performance.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <TransitionLink href="/projects">
                <Button variant="outline" size="sm" className="group mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to Projects
                </Button>
              </TransitionLink>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{projectData.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">{projectData.description}</p>
            </div>

            <div className="relative h-[60vh] mb-12 rounded-xl overflow-hidden">
              <Image
                src={projectData.image || "/placeholder.svg"}
                alt={projectData.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold mb-2">Client</h3>
                <p className="text-gray-600 dark:text-gray-400">{projectData.client}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Duration</h3>
                <p className="text-gray-600 dark:text-gray-400">{projectData.duration}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Services</h3>
                <ul className="text-gray-600 dark:text-gray-400">
                  {projectData.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <h2>The Challenge</h2>
              <p>{projectData.challenge}</p>

              <h2>Our Solution</h2>
              <p>{projectData.solution}</p>
            </div>

            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projectData.gallery.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Project image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Interested in working with us?</h3>
              <TransitionLink href="/#contact">
                <Button size="lg" className="rounded-full px-8">
                  Get in Touch
                </Button>
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
