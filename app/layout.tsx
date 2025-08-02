import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import Header from "./components/header"
import { ClientWrapper } from "./components/client-wrapper"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Oluwaferanmi Sao - Flutter Developer Portfolio",
  description:
    "Professional portfolio of a Flutter mobile developer with experience in WordPress, HTML, CSS, and React",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bubble-favicon-BWVYmr3lXZn3yuQKYpys28lK1WCzos.png",
    shortcut:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bubble-favicon-BWVYmr3lXZn3yuQKYpys28lK1WCzos.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bubble-favicon-BWVYmr3lXZn3yuQKYpys28lK1WCzos.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-inter bg-[#1a1a1a] text-white min-h-screen antialiased overflow-x-hidden`}
      >
        {/* Background will be added here once image is provided */}
        <Header />
        <main className="relative">{children}</main>
        <footer className="bg-[#1a1a1a] border-t border-white/10 py-8 mt-20">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Oluwaferanmi Sao. All rights reserved.</p>
          </div>
        </footer>
        <ClientWrapper />
      </body>
    </html>
  )
}
