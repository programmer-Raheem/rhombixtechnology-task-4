"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon, XIcon, ShoppingCartIcon } from "./icons"

interface NavigationProps {
  cartCount: number
  onCartClick: () => void
}

export default function Navigation({ cartCount, onCartClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 animate-fade-in-up hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">Bites</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button onClick={onCartClick} className="relative p-2 hover:bg-surface-alt rounded-lg transition-smooth">
              <ShoppingCartIcon />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse-glow">
                  {cartCount}
                </span>
              )}
            </button>

            <Link
              href="/contact"
              className="hidden sm:block px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-smooth"
            >
              Reserve Table
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-surface-alt rounded-lg transition-smooth"
            >
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:bg-surface-alt rounded-lg transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-smooth text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reserve Table
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
