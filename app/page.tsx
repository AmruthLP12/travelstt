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
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tirumala Tirupathi Travels - Comfortable & Affordable Travel</title>
        <meta name="description" content="Premium car and bus rentals in Tirupati for all your travel needs" />
        <meta name="keywords" content="Next.js, SEO, optimization,tirupati car rental, tirupati bus rental, car hire tirupati, bus hire tirupati, tirupati travel services, tirupati transportation, car rental in tirupati near railway station, bus rental in tirupati for tirumala trip, best travel agency in tirupati, tirupati to tirumala cab, car hire near tirupati temple, tirupati sightseeing cab, tirupati tour packages with car, local taxi in tirupati, tirupati to chennai car rental, tirupati to bangalore bus hire, premium car rental tirupati, luxury car hire tirupati, ac car rental tirupati, self-drive car rental tirupati, chauffeur-driven cars in tirupati, tirupati airport car rental, innova rental in tirupati, tempo traveller hire in tirupati, sedan car hire tirupati, luxury bus rental tirupati, mini bus hire in tirupati, volvo bus rental tirupati, ac bus hire tirupati, bus booking tirupati, group travel bus tirupati, corporate bus rental tirupati, tirupati to tirumala bus package, tirupati tour operator, tirumala tirupati darshan package, best travel services tirupati, travel agency tirupati, pilgrimage travel tirupati, tirupati family tour with vehicle, one day tirupati package, outstation cab tirupati, tirupati temple tour with cab, affordable travel in tirupati, best rental service tirupati, budget cab in tirupati, reliable taxi tirupati, 24/7 car rental tirupati, tirupati cab booking online, custom tour plans tirupati, weekend getaway from tirupati" />
      </Head>
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
    </>
      
  )
}

