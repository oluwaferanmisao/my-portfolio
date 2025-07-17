import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Space_Grotesk } from "next/font/google"
import Header from "./components/header"
import { DotGrid } from "./components/dot-grid"
import { ClientWrapper } from "./components/client-wrapper"

// Modern font combination
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Oluwaferanmi Sao - Portfolio",
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
    <html lang="en">
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} font-sans dark bg-background text-foreground min-h-screen flex flex-col`}
      >
        <DotGrid />
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-8 relative flex-grow">{children}</main>
        <footer className="bg-secondary text-secondary-foreground text-center py-4 relative mt-auto">
          © {new Date().getFullYear()} Oluwaferanmi Sao. All rights reserved.
        </footer>
        <ClientWrapper />
      </body>
    </html>
  )
}
