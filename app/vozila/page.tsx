"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, Briefcase } from "lucide-react";
import Image from "next/image";
import { ReservationModal } from "@/components/reservation-modal";

const vehicles = [
  {
    name: "Škoda Superb",
    description: "Premium sedan za udobno i ekonomično putovanje",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=600&fit=crop",
    passengers: 3,
    luggage: 3,
    classType: "Biznis klasa",
    classColor: "bg-blue-600",
  },
  {
    name: "Mercedes-Benz E klasa",
    description: "Premium vozilo koje pruža potpuni komfor i ugodan putovanja",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=600&fit=crop",
    passengers: 3,
    luggage: 3,
    classType: "Premium klasa",
    classColor: "bg-amber-600",
  },
  {
    name: "Mercedes-Benz S klasa",
    description: "Savršen izbor za one koji traže VIP uslugu i pravi luksuz",
    image:
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&h=600&fit=crop",
    passengers: 3,
    luggage: 3,
    classType: "VIP klasa",
    classColor: "bg-primary",
  },
  {
    name: "Opel Vivaro",
    description:
      "Odličan izbor za udobno grupno putovanje ili transfer do aerodroma",
    image:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=1200&h=600&fit=crop",
    passengers: 8,
    luggage: 8,
    classType: "Standard klasa",
    classColor: "bg-green-600",
  },
  {
    name: "Mercedes-Benz V klasa",
    description: "Luksuzno vozilo najvišeg standarda za prevoz VIP grupa",
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&h=600&fit=crop",
    passengers: 7,
    luggage: 7,
    classType: "VIP klasa",
    classColor: "bg-primary",
  },
  {
    name: "Ford Transit minibus",
    description: "Pouzdan minibus za prevoz većih grupa putnika",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=600&fit=crop",
    passengers: 16,
    luggage: 16,
    classType: "Standard klasa",
    classColor: "bg-green-600",
  },
  {
    name: "Mercedes Sprinter",
    description: "Dizajniran da svakom izletu pruži prevoz većih bez poteškoća",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=600&fit=crop",
    passengers: 19,
    luggage: 19,
    classType: "Biznis klasa",
    classColor: "bg-blue-600",
  },
];

function VehicleCard({
  vehicle,
  index,
  onReserve,
}: {
  vehicle: (typeof vehicles)[0];
  index: number;
  onReserve: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background Image */}
      <Image
        src={vehicle.image || "/placeholder.svg"}
        alt={vehicle.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
        {/* Top Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {vehicle.name}
          </h3>
          <p className="text-white/80 text-sm md:text-base max-w-md">
            {vehicle.description}
          </p>

          {/* Capacity Icons */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
              <Users className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">
                {vehicle.passengers}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
              <Briefcase className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">
                {vehicle.luggage}
              </span>
            </div>
          </div>

          {/* Class Badge */}
          <div className="mt-4">
            <span
              className={`${vehicle.classColor} text-white text-xs font-semibold px-3 py-1.5 rounded-full`}
            >
              {vehicle.classType}
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div>
          <Button
            variant="ghost"
            className="text-white hover:text-white hover:bg-white/20 p-0 h-auto font-medium"
            onClick={onReserve}
          >
            Rezerviši vozilo
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function VozilaPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div
            ref={headerRef}
            className={`mb-12 transition-all duration-700 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Naša vozila
            </h1>
            <p className="text-foreground/60 text-lg">
              Luksuzna vozila za svaki transfer i događaj
            </p>
          </div>

          {/* Vehicles Grid */}
          <div className="flex flex-col gap-6">
            {vehicles.map((vehicle, index) => (
              <VehicleCard
                key={vehicle.name}
                vehicle={vehicle}
                index={index}
                onReserve={() => setReservationOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>

      <ReservationModal
        open={reservationOpen}
        onOpenChange={setReservationOpen}
      />

      <Footer />
    </main>
  );
}
