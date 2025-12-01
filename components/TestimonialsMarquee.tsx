"use client";

import { useState } from "react";
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

function MarqueeRow({ testimonials, direction, isPaused }: { testimonials: Testimonial[]; direction: "left" | "right"; isPaused: boolean }) {
  const triplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-4 md:gap-6 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {triplicatedTestimonials.map((testimonial, index) => {
          const logoPath = companyLogos[testimonial.company];
          const bgColor = companyBackgrounds[testimonial.company] || "#FFFFFF";

          return (
            <Card
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[380px] hover:shadow-lg transition-all duration-300"
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
  const [isPaused, setIsPaused] = useState(false);

  const midpoint = Math.ceil(testimonials.length / 2);
  const topRow = testimonials.slice(0, midpoint);
  const bottomRow = testimonials.slice(midpoint);

  return (
    <div
      className="w-full space-y-4 md:space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
    >
      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 45s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 45s linear infinite;
        }
      `}</style>

      <MarqueeRow testimonials={topRow} direction="left" isPaused={isPaused} />
      <MarqueeRow testimonials={bottomRow} direction="right" isPaused={isPaused} />
    </div>
  );
}
