"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on link
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/10"
            : "bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50" onClick={closeMobileMenu}>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xs">OSS</span>
              </div>
              <span className="font-space-grotesk font-semibold text-xl">OSS</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                Services
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                Projects
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
            >
              <Link href="/contact">Hire Me</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 p-2 -mr-2 text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMobileMenu} aria-hidden="true" />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#1a1a1a]/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-6">
              <Link
                href="/services"
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile CTA Button */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <Button
                asChild
                className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300"
                onClick={closeMobileMenu}
              >
                <Link href="/contact">Hire Me</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-auto pb-8 pt-8 border-t border-white/10">
              <div className="space-y-2 text-sm text-gray-400">
                <p>caleb4sao@gmail.com</p>
                <p>(+234) 915-430-3063</p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
