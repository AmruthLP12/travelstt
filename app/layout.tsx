import type React from "react"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import AOSInit from "@/components/aos-init"
import { Metadata } from "next"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", // Optimize font display
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: {
    default: "Tirumala Tirupathi Travels - Comfortable & Affordable Travel",
    template: "%s | Tirumala Tirupathi Travels"
  },
  description: "Premium car and bus rentals in Tirupati for all your travel needs. Book airport transfers, temple tours, and corporate travel services.",
  keywords: ["Tirupati car rental", "Tirumala temple tour", "Tirupati taxi service", "TT Travels", "car rental Tirupati", "bus rental Tirupati"],
  authors: [{ name: "Tirumala Tirupathi Travels" }],
  creator: "Tirumala Tirupathi Travels",
  publisher: "Tirumala Tirupathi Travels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://travelstt.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tirumala Tirupathi Travels - Comfortable & Affordable Travel",
    description: "Premium car and bus rentals in Tirupati for all your travel needs",
    url: "https://travelstt.vercel.app/",
    siteName: "Tirumala Tirupathi Travels",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirumala Tirupathi Travels - Comfortable & Affordable Travel",
    description: "Premium car and bus rentals in Tirupati for all your travel needs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  )
}
