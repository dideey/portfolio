"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#002D62] text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-[#003a80]" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-gray-300 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-gray-300 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#002D62] w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#about" className="hover:text-gray-300 transition-colors py-2" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#skills" className="hover:text-gray-300 transition-colors py-2" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="#projects" className="hover:text-gray-300 transition-colors py-2" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#contact" className="hover:text-gray-300 transition-colors py-2" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

