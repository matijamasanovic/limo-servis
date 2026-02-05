"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm lg:text-base">HTD</span>
            </div>
            <span className="hidden sm:block text-lg lg:text-xl font-bold text-foreground">Transfers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/usluge" className="text-foreground/80 hover:text-foreground transition-colors">
              Usluge
            </Link>
            <Link href="/vozila" className="text-foreground/80 hover:text-foreground transition-colors">
              Naša vozila
            </Link>
            <Link href="/kontakt" className="text-foreground/80 hover:text-foreground transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/kontakt">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Rezervišite svoju vožnju →
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="/usluge" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Usluge
              </Link>
              <Link href="/vozila" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Naša vozila
              </Link>
              <Link href="/kontakt" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Kontakt
              </Link>
              <Link href="/kontakt" className="w-full">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2">
                  Rezervišite svoju vožnju →
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
