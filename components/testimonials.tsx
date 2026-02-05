"use client"

import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const clientLogos = [
  { name: "JetBlue", style: "font-bold text-2xl lg:text-3xl text-primary" },
  { name: "Wizz", style: "font-bold text-2xl lg:text-3xl text-[#E91E8C]" },
  { name: "ORGANON", style: "font-bold text-2xl lg:text-3xl text-[#00A86B]" },
  { name: "ProCosmo", style: "font-bold text-2xl lg:text-3xl text-foreground/70" },
]

const testimonials = [
  {
    text: "Odlična usluga! Vozač me je čekao na aerodromu, auto čist i udoban. Definitivno preporučujem!",
    author: "Aleksandar M.",
    location: "Beograd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
  },
  {
    text: "Profesionalna usluga za našu svadbu. Svi vozači tačni i ljubazni. Hvala!",
    author: "Dominik Z.",
    location: "Hamburg",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
  },
  {
    text: "Savršeno za poslovne transfere. Pouzdani i uvek na vreme.",
    author: "Mape G.",
    location: "Berane",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  
  return (
    <div
      ref={ref}
      className={`bg-card border border-border rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground/80 text-lg leading-relaxed mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.author}</p>
          <p className="text-sm text-foreground/60">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation()

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Trust Header */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-foreground/50 text-lg mb-2">Ne verujte nama,</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">verujte našim klijentima</h2>
        </div>

        {/* Client Logos */}
        <div 
          ref={logosRef}
          className={`flex flex-wrap justify-center items-center gap-8 lg:gap-16 mb-16 transition-all duration-700 delay-200 ${logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {clientLogos.map((logo, index) => (
            <span 
              key={index} 
              className={`${logo.style} hover:scale-110 transition-transform cursor-pointer`}
            >
              {logo.name}
            </span>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* TripAdvisor Link */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${titleVisible ? "opacity-100" : "opacity-0"}`}>
          <Link
            href="#"
            className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium text-lg group"
          >
            Više recenzija na TripAdvisor-u
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
