"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ReservationModal } from "@/components/reservation-modal";
import logoHTD from "@/public/logo-htd.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-24 h-24 lg:w-28 lg:h-28 relative">
              <Image
                src={logoHTD}
                alt="HTD Transfers logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/usluge"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Usluge
            </Link>
            <Link
              href="/vozila"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Naša vozila
            </Link>
            <Link
              href="/kontakt"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          {/* CTA Button - opens reservation modal */}
          <div className="hidden lg:block">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setReservationOpen(true)}
            >
              Rezervišite svoju vožnju →
            </Button>
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
              <Link
                href="/usluge"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Usluge
              </Link>
              <Link
                href="/vozila"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Naša vozila
              </Link>
              <Link
                href="/kontakt"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Kontakt
              </Link>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2"
                onClick={() => setReservationOpen(true)}
              >
                Rezervišite svoju vožnju →
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* Reservation Modal */}
      <ReservationModal
        open={reservationOpen}
        onOpenChange={setReservationOpen}
      />
    </header>
  );
}
