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
  title: "Oluwaferanmi Sao - UI/UX & Graphic Designer",
  description: "Professional portfolio of a UI/UX & Graphic Designer specializing in modern web and mobile design",
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
        className={`${spaceGrotesk.variable} ${inter.variable} font-inter bg-[#1a1a1a] text-white min-h-screen antialiased`}
      >
        <Header />
        <main>{children}</main>
        <ClientWrapper />
      </body>
    </html>
  )
}
