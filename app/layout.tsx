import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import AOSInit from "@/components/aos-init"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tirumala Tirupathi Travels - Comfortable & Affordable Travel",
  description: "Premium car and bus rentals in Tirupati for all your travel needs",
    generator: 'v0.dev',
  // Add the Google Site Verification tag here within the metadata object
  verification: {
    google: 'm3gcO3z77CpmDFtlEBa5Qk-g2yMOUvIFj34TKqbJMoU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  )
}



import './globals.css'
