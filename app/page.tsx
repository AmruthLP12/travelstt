import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import AboutSection from "@/components/about-section"
import VehicleFleetSection from "@/components/vehicle-fleet-section"
import ServicesSection from "@/components/services-section"
import ReviewsSection from "@/components/reviews-section"
import ContactSection from "@/components/contact-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />

      <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 bg-gray-950">
        <AboutSection />
        <VehicleFleetSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <CTASection />
      <Footer />
    </div>
  )
}

