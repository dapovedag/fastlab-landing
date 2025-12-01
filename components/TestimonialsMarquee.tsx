"use client";

import { useState, useRef, useEffect } from "react";
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

function MarqueeRow({ testimonials, direction }: { testimonials: Testimonial[]; direction: "left" | "right" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicar para scroll infinito seamless
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const handleCardMouseEnter = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    // Pausar inmediatamente
    setIsPaused(true);

    // Después de 400ms, centrar la tarjeta
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCard(index);
      const card = e.currentTarget;
      const container = containerRef.current;
      if (!container || !card) return;

      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;
      const offset = cardCenter - containerCenter;

      container.style.transition = "transform 0.4s ease-out";
      const currentTransform = getComputedStyle(container).transform;
      const matrix = new DOMMatrix(currentTransform);
      const currentX = matrix.m41;
      container.style.transform = `translateX(${currentX - offset}px)`;
    }, 400);
  };

  const handleCardMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveCard(null);
    setIsPaused(false);

    // Resetear transform para que la animación CSS tome el control
    if (containerRef.current) {
      containerRef.current.style.transition = "";
      containerRef.current.style.transform = "";
    }
  };

  const handleCardClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsPaused(true);
    setActiveCard(index);

    const card = e.currentTarget;
    const container = containerRef.current;
    if (!container || !card) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const containerCenter = containerRect.left + containerRect.width / 2;
    const offset = cardCenter - containerCenter;

    container.style.transition = "transform 0.4s ease-out";
    const currentTransform = getComputedStyle(container).transform;
    const matrix = new DOMMatrix(currentTransform);
    const currentX = matrix.m41;
    container.style.transform = `translateX(${currentX - offset}px)`;
  };

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className={`flex gap-4 md:gap-6 ${direction === "left" ? "marquee-scroll-left" : "marquee-scroll-right"}`}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => {
          const logoPath = companyLogos[testimonial.company];
          const bgColor = companyBackgrounds[testimonial.company] || "#FFFFFF";
          const isActive = activeCard === index;

          return (
            <Card
              key={index}
              className={`flex-shrink-0 w-[300px] md:w-[380px] transition-all duration-300 cursor-pointer ${
                isActive ? "ring-2 ring-primary shadow-xl scale-[1.02]" : "hover:shadow-lg"
              }`}
              onMouseEnter={(e) => handleCardMouseEnter(index, e)}
              onMouseLeave={handleCardMouseLeave}
              onClick={(e) => handleCardClick(index, e)}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div
                    className="w-11 h-11 md:w-14 md:h-14 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0 p-1.5 md:p-2 overflow-hidden"
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
                      <span className="text-primary font-bold text-sm md:text-lg">
                        {testimonial.company.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-muted-foreground truncate">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium truncate">{testimonial.company}</p>
                  </div>
                </div>

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
  const midpoint = Math.ceil(testimonials.length / 2);
  const topRow = testimonials.slice(0, midpoint);
  const bottomRow = testimonials.slice(midpoint);

  // Calcular el ancho total para animación perfecta
  const cardWidth = 380; // md width
  const gap = 24; // gap-6

  return (
    <div className="w-full space-y-4 md:space-y-6">
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-scroll-left {
          animation: scroll-left 50s linear infinite;
        }

        .marquee-scroll-right {
          animation: scroll-right 50s linear infinite;
        }
      `}</style>

      <MarqueeRow testimonials={topRow} direction="left" />
      <MarqueeRow testimonials={bottomRow} direction="right" />
    </div>
  );
}
