"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const navigation = {
  main: [
    { name: "Početna", href: "#" },
    { name: "Usluge", href: "#usluge" },
    { name: "Vozila", href: "#vozila" },
    { name: "Cenovnik", href: "#cenovnik" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  services: [
    { name: "Aerodromski transfer", href: "#" },
    { name: "Limo servis", href: "#" },
    { name: "Međunarodni transfer", href: "#" },
    { name: "Grupni prevoz", href: "#" },
  ],
}

export function Footer() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <footer 
      ref={ref}
      className={`bg-card border-t border-border transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-primary">HTD</span>
              <span className="text-3xl font-bold text-foreground"> Transfers</span>
            </Link>
            <p className="text-foreground/60 leading-relaxed">
              Luksuzni VIP transfer putnika u zemlji i inostranstvu.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all">
                <Facebook className="w-5 h-5 text-foreground/60" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all">
                <Instagram className="w-5 h-5 text-foreground/60" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all">
                <Linkedin className="w-5 h-5 text-foreground/60" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-6">Linkovi</h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-6">Usluge</h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a href="tel:+381691705023" className="text-foreground/60 hover:text-primary transition-colors">
                  +381 69 170 50 23
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:office@htdtransfers.com" className="text-foreground/60 hover:text-primary transition-colors">
                  office@htdtransfers.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/60">
                  Beograd, Srbija
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
            <p>© 2025 HTD Transfers. Sva prava zadržana.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">Uslovi korišćenja</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Privatnost</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
