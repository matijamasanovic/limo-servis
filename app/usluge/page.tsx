"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Aerodromski transferi",
    description: "Brz i pouzdan prevoz od i do aerodroma",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=400&fit=crop",
    slug: "aerodromski-transferi",
  },
  {
    title: "Limo servis",
    description: "Elegancija i diskrecija za posebne prilike",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop",
    slug: "limo-servis",
  },
  {
    title: "Međugradski transferi",
    description: "Za kraća i duža putovanja na teritoriji Republike Srbije",
    image:
      "https://images.unsplash.com/photo-1449965408869-ebd3fee56fd5?w=400&h=400&fit=crop",
    slug: "medjugradski-transferi",
  },
  {
    title: "Međunarodni transferi",
    description: "Udobno vas vozimo do različitih međunarodnih destinacija",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop",
    slug: "medjunarodni-transferi",
  },
  {
    title: "Najam vozila sa vozačem",
    description:
      "Lični vozač za sve potrebe prevoza u lokalu ili na dužim putovanjima",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    slug: "najam-vozila",
  },
  {
    title: "Svečane prilike",
    description: "Za posebne događaje kada želite da ostavite snažan utisak",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
    slug: "svecane-prilike",
  },
  {
    title: "Event i biznis transferi",
    description: "Savršeno za poslovna putovanja, konferencije i događaje",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
    slug: "event-biznis",
  },
  {
    title: "Grupni transferi",
    description:
      "Nekoliko limuzina, luksuzni kombi ili minibus transferi za grupe",
    image:
      "https://images.unsplash.com/photo-1559576722-1d4a4c97b834?w=400&h=400&fit=crop",
    slug: "grupni-transferi",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`flex bg-secondary/50 rounded-2xl overflow-hidden transition-all duration-700 hover:bg-secondary/70 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
          {service.title}
        </h3>
        <p className="text-foreground/60 text-sm sm:text-base mb-4 line-clamp-2">
          {service.description}
        </p>
        <Link href={`/kontakt`}>
          <Button
            variant="outline"
            className="w-fit border-foreground/30 text-foreground/80 hover:bg-foreground/10 hover:text-foreground rounded-full px-4 py-2 text-sm bg-transparent"
          >
            Saznaj više
            <span className="ml-2">→</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function UslugePage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <main className="min-h-screen bg-background relative">
      {/* Topographic background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="topo-pattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 Q50 30 100 50 T200 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M0 100 Q50 80 100 100 T200 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M0 150 Q50 130 100 150 T200 150"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#topo-pattern)"
            className="text-foreground"
          />
        </svg>
      </div>

      <Header />

      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div
            ref={headerRef}
            className={`mb-12 transition-all duration-700 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Usluge
            </h1>
            <p className="text-foreground/60 text-lg sm:text-xl">
              Sve naše usluge na jednom mestu
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
