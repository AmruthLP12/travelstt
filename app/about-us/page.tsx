import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Star } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-850">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-900 py-16 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About TT Travels</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Providing premium travel services in Tirupati since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 bg-gray-850">
        {/* Our Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 mb-4">
                TT Travels was founded in 2010 with a simple mission: to provide comfortable, reliable, and affordable
                travel solutions in Tirupati and surrounding areas.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                What started as a small fleet of just 3 vehicles has now grown into one of the region's most trusted
                travel services with over 50 premium vehicles catering to diverse travel needs.
              </p>
              <p className="text-lg text-gray-300">
                Our focus on customer satisfaction, safety, and quality service has helped us build a loyal customer
                base and establish ourselves as the preferred travel partner for pilgrims, tourists, and corporate
                clients.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/office.jpg"
                alt="TT Travels Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="mb-20 py-16 px-8 bg-gradient-to-r from-indigo-800 to-purple-900 rounded-3xl text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-indigo-100">
                We prioritize our customers' needs and strive to exceed their expectations with personalized service.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Service</h3>
              <p className="text-indigo-100">
                We maintain high standards in our vehicles, drivers, and overall service quality.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-indigo-100">
                We are committed to punctuality, safety, and dependability in all our services.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TT Travels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-indigo-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Drivers</h3>
                  <p className="text-gray-700">
                    Our drivers are well-trained, experienced, and knowledgeable about local routes and attractions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-indigo-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Well-maintained Fleet</h3>
                  <p className="text-gray-700">
                    Our vehicles undergo regular maintenance and cleaning to ensure a comfortable and safe journey.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-indigo-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Customer Support</h3>
                  <p className="text-gray-700">
                    Our customer support team is available round the clock to assist you with any queries or concerns.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-indigo-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-700">
                    We offer the best value for your money with transparent pricing and no hidden charges.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-indigo-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Packages</h3>
                  <p className="text-gray-700">
                    We offer tailored travel packages to meet your specific requirements and preferences.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-indigo-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-700">
                    Our team has extensive knowledge of Tirupati and surrounding areas to enhance your travel
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Siva Sankar", role: "Founder & CEO", image: "/images/siva.enc" },
              { name: "Priya Sharma", role: "Operations Manager", image: "/placeholder.svg?height=300&width=300" },
              { name: "Venkat Reddy", role: "Fleet Manager", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-800 to-purple-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Book your journey with TT Travels today and experience the difference of premium travel service.
          </p>
          <Button className="bg-white text-indigo-800 hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Book Now
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  )
}

