"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ReservationModal } from "@/components/reservation-modal"

const features = [
  "Profesionalni vozači",
  "Luksuzna vozila",
  "Brza rezervacija",
]

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [reservationOpen, setReservationOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80"
          alt="Luxury car background"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex items-center pt-20 lg:pt-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-12 lg:py-0">
            {/* Left Content */}
            <div className={`max-w-xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Iskusite VIP osećaj
              </h1>
              <p className={`mt-6 text-xl text-foreground/70 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                Luksuzni transfer putnika
              </p>

              <div className={`mt-8 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full"
                  onClick={() => setReservationOpen(true)}
                >
                  Rezervišite vožnju
                </Button>
              </div>

              <ul className={`mt-10 flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 bg-foreground/5 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-foreground/90 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className={`hidden lg:block relative transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
              <div className="relative w-full h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80"
                  alt="Luxury limousine"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-lg rounded-2xl p-4 border border-border">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-foreground/70">Zadovoljnih klijenata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      <ReservationModal open={reservationOpen} onOpenChange={setReservationOpen} />
    </section>
  )
}
