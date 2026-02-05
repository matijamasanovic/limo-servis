"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    title: "Najam vozila",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
  },
  {
    title: "Aerodromski transfer",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
  },
  {
    title: "Grupni prevoz",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80",
  },
  {
    title: "Limo servis",
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&q=80",
  },
  {
    title: "Međunarodni transfer",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
  },
  {
    title: "Event transferi",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
]

function ServiceCard({ service, index, className }: { service: typeof services[0]; index: number; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  
  return (
    <div 
      ref={ref}
      className={`relative group overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer ${className} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Image
        src={service.image || "/placeholder.svg"}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      <div className="absolute inset-0 flex items-end p-4 lg:p-6">
        <div className="transform transition-transform duration-500 group-hover:translate-y-0">
          <h3 className="text-foreground font-bold text-lg lg:text-2xl">{service.title}</h3>
          <div className="flex items-center gap-2 mt-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm">Saznaj više</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="usluge" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`mb-12 lg:mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Naše usluge</h2>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Row 1 */}
          <ServiceCard service={services[0]} index={0} className="aspect-square" />
          <ServiceCard service={services[1]} index={1} className="aspect-square" />
          <ServiceCard service={services[2]} index={2} className="aspect-square" />
          <ServiceCard service={services[3]} index={3} className="aspect-square lg:row-span-2 lg:aspect-auto" />
          
          {/* Row 2 */}
          <ServiceCard service={services[4]} index={4} className="col-span-2 aspect-[2/1]" />
          <ServiceCard service={services[5]} index={5} className="col-span-2 lg:col-span-1 aspect-[2/1] lg:aspect-square" />
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${titleVisible ? "opacity-100" : "opacity-0"}`}>
          <Link href="#" className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium text-lg group">
            Pogledaj sve usluge
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
