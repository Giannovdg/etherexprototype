import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import BentoShowcase from "@/components/bento-showcase"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import ParallaxSection from "@/components/parallax-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <BentoShowcase />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <ParallaxSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
