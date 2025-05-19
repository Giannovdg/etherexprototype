import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import TransitionLink from "@/components/transition-link"
import { ArrowLeft } from "lucide-react"
import InteractiveForm from "@/components/interactive-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>

            <div className="mb-12">
              <InteractiveForm />
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
