"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface SuccessCase {
  title: string;
  problem: string;
  solution: string;
  stack: string;
  result: string;
}

interface SuccessCasesCarouselProps {
  cases: SuccessCase[];
}

export default function SuccessCasesCarousel({ cases }: SuccessCasesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Velocidad del scroll

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Cuando llegue al final del primer conjunto, resetear
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicar los casos para el efecto infinito
  const duplicatedCases = [...cases, ...cases];

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedCases.map((caseItem, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[400px] hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-8">
              <div className="text-4xl text-primary mb-4 opacity-50">"</div>

              <p className="text-lg font-medium mb-6 leading-relaxed min-h-[80px]">
                {caseItem.result}
              </p>

              <div className="border-t pt-4 space-y-2">
                <p className="font-semibold text-foreground">{caseItem.title}</p>
                <p className="text-xs font-mono text-muted-foreground opacity-70">
                  {caseItem.stack}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
