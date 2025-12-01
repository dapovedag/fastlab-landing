"use client";

import { useState, useRef } from "react";
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
  const [centeredIndex, setCenteredIndex] = useState<number | null>(null);

  // Cuadruplicar para asegurar un loop infinito sin cortes
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  const centerCard = (cardElement: HTMLElement) => {
    const container = containerRef.current;
    if (!container) return;

    const viewport = container.parentElement;
    if (!viewport) return;

    // Obtener el transform actual de la animación CSS
    const style = window.getComputedStyle(container);
    const matrix = new DOMMatrix(style.transform);
    const currentX = matrix.m41 || 0;

    // IMPORTANTE: Desactivar la animación para tomar control del transform
    container.style.animation = "none";
    // Aplicar el transform actual inmediatamente
    container.style.transform = `translateX(${currentX}px)`;

    // Forzar reflow para que el navegador aplique los cambios
    void container.offsetHeight;

    // Calcular el offset usando el VIEWPORT (padre con overflow:hidden), no el container
    const viewportRect = viewport.getBoundingClientRect();
    const cardRect = cardElement.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    const offset = cardCenter - viewportCenter;

    // Animar hacia el centro
    container.style.transition = "transform 0.5s ease-out";
    container.style.transform = `translateX(${currentX - offset}px)`;
  };

  const resumeAnimation = () => {
    setIsPaused(false);
    setCenteredIndex(null);
    if (containerRef.current) {
      // Restaurar la animación CSS
      containerRef.current.style.transition = "";
      containerRef.current.style.transform = "";
      containerRef.current.style.animation = "";
    }
  };

  const handleCardClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    // Si ya está pausado y es la misma tarjeta - reanudar
    if (isPaused && centeredIndex === index) {
      resumeAnimation();
      return;
    }

    // Si está pausado pero es otra tarjeta - centrar la nueva
    // Si no está pausado - pausar y centrar
    setIsPaused(true);
    setCenteredIndex(index);
    centerCard(e.currentTarget);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className={`flex gap-4 md:gap-6 ${direction === "left" ? "marquee-scroll-left" : "marquee-scroll-right"}`}
      >
        {duplicatedTestimonials.map((testimonial, index) => {
          const logoPath = companyLogos[testimonial.company];
          const bgColor = companyBackgrounds[testimonial.company] || "#FFFFFF";
          const isActive = centeredIndex === index;

          return (
            <Card
              key={index}
              className={`flex-shrink-0 w-[300px] md:w-[380px] transition-all duration-300 cursor-pointer select-none ${
                isActive ? "ring-2 ring-primary shadow-xl scale-[1.02] z-10" : "hover:shadow-lg"
              }`}
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

  return (
    <div className="w-full space-y-4 md:space-y-6">
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-25%);
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
