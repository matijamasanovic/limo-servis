"use client"

import { Smile, Shield, Clock, Car, DollarSign, Wifi } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const features = [
  {
    icon: Smile,
    title: "Uživanje",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
  },
  {
    icon: Shield,
    title: "Sigurnost",
    image: "https://images.unsplash.com/photo-1617814076668-8dfc6fe3b0d1?w=400&q=80",
  },
  {
    icon: Clock,
    title: "Tačnost",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80",
  },
  {
    icon: Car,
    title: "Lux vozila",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&q=80",
  },
  {
    icon: DollarSign,
    title: "Fiksna cena",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80",
  },
  {
    icon: Wifi,
    title: "WiFi",
    image: "https://images.unsplash.com/photo-1563720223809-b9c9db8bc3c3?w=400&q=80",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const Icon = feature.icon
  
  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <Image
          src={feature.image || "/placeholder.svg"}
          alt={feature.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
      </div>
      <div className="relative p-5 lg:p-6 -mt-12">
        <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors border border-primary/30">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-foreground">
          {feature.title}
        </h3>
      </div>
    </div>
  )
}

export function Features() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`mb-12 lg:mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Zašto HTD Transfers?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
