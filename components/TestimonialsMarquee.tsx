"use client";

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

function MarqueeRow({ testimonials, direction }: { testimonials: Testimonial[]; direction: "left" | "right" }) {
  // Triplicar los testimonios para efecto infinito suave
  const triplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-6 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {triplicatedTestimonials.map((testimonial, index) => {
          const logoPath = companyLogos[testimonial.company];
          const bgColor = companyBackgrounds[testimonial.company] || "#FFFFFF";

          return (
            <Card
              key={index}
              className="flex-shrink-0 w-[380px] hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  {/* Company Logo */}
                  <div
                    className="w-14 h-14 rounded-full border-2 border-primary/20 flex items-center justify-center flex-shrink-0 p-2 overflow-hidden"
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
                      <span className="text-primary font-bold text-lg">
                        {testimonial.company.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Name and Company */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium truncate">{testimonial.company}</p>
                  </div>
                </div>

                {/* Quote con comillas estilizadas */}
                <div className="relative mt-4">
                  <div className="text-6xl text-primary/20 font-serif absolute -top-4 -left-2 leading-none">"</div>
                  <p className="text-sm leading-relaxed pl-6 text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="text-6xl text-primary/20 font-serif absolute -bottom-8 right-0 leading-none">"</div>
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
    <div className="w-full space-y-6">
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
          animation: marquee-left 40s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>

      <MarqueeRow testimonials={topRow} direction="left" />
      <MarqueeRow testimonials={bottomRow} direction="right" />
    </div>
  );
}
