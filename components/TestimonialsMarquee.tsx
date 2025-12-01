"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

interface TestimonialsMarqueeProps {
  testimonials: Testimonial[];
}

// Mapeo de empresas a sus logos
const companyLogos: Record<string, string> = {
  "Compensar": "/logos/compensar.png",
  "Davivienda": "/logos/davivienda.png",
  "ADA-TAS": "/logos/ada-tas.png",
  "GSS Analytix": "/logos/gss.png",
  "LATAM Airlines": "/logos/latam.png",
  "Davinchi": "/logos/Davinchi.png",
  "Ministerio de Educación": "/logos/Ministerio.png",
  "TalentPitch": "/logos/talentptich.png",
};

// Mapeo de empresas a sus colores de fondo
const companyBackgrounds: Record<string, string> = {
  "Compensar": "#FFFFFF",
  "Davivienda": "#FFFFFF",
  "ADA-TAS": "#FFFFFF",
  "GSS Analytix": "#FFFFFF",
  "LATAM Airlines": "#18008b",
  "Davinchi": "#626c78",
  "Ministerio de Educación": "#FFFFFF",
  "TalentPitch": "#000000",
};

interface MarqueeRowProps {
  testimonials: Testimonial[];
  direction: "left" | "right";
  speed?: number;
}

function MarqueeRow({ testimonials, direction, speed = 1 }: MarqueeRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  // Triplicar para efecto infinito
  const triplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Auto-scroll animation
  const animate = useCallback((currentTime: number) => {
    if (!scrollRef.current || isPaused || isUserInteracting) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    if (!lastTimeRef.current) lastTimeRef.current = currentTime;
    const delta = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;

    const scrollAmount = (direction === "left" ? 1 : -1) * speed * (delta / 16);
    scrollRef.current.scrollLeft += scrollAmount;

    // Loop infinito
    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;
    const maxScroll = scrollWidth - clientWidth;
    const oneThird = scrollWidth / 3;

    if (direction === "left" && scrollRef.current.scrollLeft >= oneThird * 2) {
      scrollRef.current.scrollLeft -= oneThird;
    } else if (direction === "right" && scrollRef.current.scrollLeft <= oneThird) {
      scrollRef.current.scrollLeft += oneThird;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, isUserInteracting, direction, speed]);

  useEffect(() => {
    // Posición inicial
    if (scrollRef.current) {
      const oneThird = scrollRef.current.scrollWidth / 3;
      scrollRef.current.scrollLeft = direction === "left" ? oneThird : oneThird * 1.5;
    }

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, direction]);

  // Centrar tarjeta al hacer click
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    e.stopPropagation();
    setIsUserInteracting(true);
    setIsPaused(true);

    const card = e.currentTarget;
    const container = scrollRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    // Calcular el scroll necesario para centrar la tarjeta
    const cardCenter = cardRect.left + cardRect.width / 2;
    const containerCenter = containerRect.left + containerRect.width / 2;
    const scrollOffset = cardCenter - containerCenter;

    container.scrollBy({
      left: scrollOffset,
      behavior: "smooth"
    });
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    // Dar tiempo para que el usuario termine de interactuar
    setTimeout(() => setIsUserInteracting(false), 500);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {triplicatedTestimonials.map((testimonial, index) => {
          const logoPath = companyLogos[testimonial.company];
          const bgColor = companyBackgrounds[testimonial.company] || "#FFFFFF";

          return (
            <Card
              key={index}
              className="flex-shrink-0 w-[320px] md:w-[380px] hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
              onClick={(e) => handleCardClick(e, index)}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  {/* Company Logo */}
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0 p-1.5 md:p-2 overflow-hidden"
                    style={{ backgroundColor: bgColor }}
                  >
                    {logoPath ? (
                      <Image
                        src={logoPath}
                        alt={`${testimonial.company} logo`}
                        width={56}
                        height={56}
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <span className="text-primary font-bold text-base md:text-lg">
                        {testimonial.company.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Name and Company */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-muted-foreground truncate">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium truncate">{testimonial.company}</p>
                  </div>
                </div>

                {/* Quote con comillas estilizadas */}
                <div className="relative mt-3 md:mt-4">
                  <div className="text-4xl md:text-6xl text-primary/20 font-serif absolute -top-3 md:-top-4 -left-1 md:-left-2 leading-none">"</div>
                  <p className="text-xs md:text-sm leading-relaxed pl-4 md:pl-6 text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="text-4xl md:text-6xl text-primary/20 font-serif absolute -bottom-6 md:-bottom-8 right-0 leading-none">"</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default function TestimonialsMarquee({ testimonials }: TestimonialsMarqueeProps) {
  // Dividir testimonios en dos grupos
  const midpoint = Math.ceil(testimonials.length / 2);
  const topRow = testimonials.slice(0, midpoint);
  const bottomRow = testimonials.slice(midpoint);

  return (
    <div className="w-full space-y-4 md:space-y-6">
      <MarqueeRow testimonials={topRow} direction="left" speed={0.8} />
      <MarqueeRow testimonials={bottomRow} direction="right" speed={0.8} />
    </div>
  );
}
