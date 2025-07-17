import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk, Outfit } from "next/font/google"
import Header from "./components/header"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Polo - UI/UX & Graphic Designer Portfolio",
  description: "Professional portfolio of a versatile designer specializing in graphic, web, and product design",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${outfit.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
