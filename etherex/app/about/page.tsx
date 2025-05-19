import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import TransitionLink from "@/components/transition-link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Etherex</h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Etherex is a forward-thinking digital agency specializing in creating immersive, minimalist web
              experiences that captivate and engage users.
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Our Mission</h2>
              <p>
                At Etherex, we believe in the power of simplicity. Our mission is to strip away the unnecessary and
                focus on what truly matters: creating digital experiences that are both beautiful and functional.
              </p>

              <h2>Our Approach</h2>
              <p>
                We combine cutting-edge technology with minimalist design principles to create websites that not only
                look stunning but also perform exceptionally well. Our team of designers and developers work closely
                together to ensure that every project we undertake exceeds expectations.
              </p>

              <h2>Our Team</h2>
              <p>
                Our diverse team brings together expertise from various disciplines, including UX design, front-end
                development, animation, and digital strategy. This multidisciplinary approach allows us to tackle
                complex challenges and deliver comprehensive solutions.
              </p>
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
