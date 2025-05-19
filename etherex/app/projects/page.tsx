import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import TransitionLink from "@/components/transition-link"
import { ArrowLeft } from "lucide-react"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Nebula Platform",
      description: "A cloud-based SaaS platform with advanced analytics and real-time data visualization.",
      category: "Web Application",
      image: "/placeholder.svg?height=600&width=800",
      color: "#3B82F6",
    },
    {
      title: "Quantum Interface",
      description: "An innovative UI/UX redesign for a financial technology company's dashboard.",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=600&width=800",
      color: "#10B981",
    },
    {
      title: "Pulse E-commerce",
      description: "A high-converting e-commerce platform with seamless checkout experience.",
      category: "E-commerce",
      image: "/placeholder.svg?height=600&width=800",
      color: "#8B5CF6",
    },
    {
      title: "Echo Social Network",
      description: "A next-generation social platform focused on privacy and meaningful connections.",
      category: "Social Media",
      image: "/placeholder.svg?height=600&width=800",
      color: "#EC4899",
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              Explore our portfolio of innovative digital experiences that showcase our expertise in design and
              development.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            <div className="mt-12">
              <TransitionLink href="/">
                <Button variant="outline" className="group">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to Home
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
