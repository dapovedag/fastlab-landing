"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  titleEs: string;
  titleEn: string;
  titleFr: string;
  quoteEs: string;
  quoteEn: string;
  quoteFr: string;
}

interface TeamCarouselProps {
  lang: "es" | "en" | "fr";
}

const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    name: "Carlos Mendoza",
    titleEs: "CEO / Fundador",
    titleEn: "CEO / Founder",
    titleFr: "PDG / Fondateur",
    quoteEs: "Python, JavaScript y TypeScript son el lenguaje de la innovación",
    quoteEn: "Python, JavaScript and TypeScript are the language of innovation",
    quoteFr: "Python, JavaScript et TypeScript sont le langage de l'innovation",
  },
  {
    id: "cto",
    name: "Tomás Caicedo",
    titleEs: "Director de Tecnología",
    titleEn: "CTO",
    titleFr: "Directeur Technique",
    quoteEs: "AWS, Azure y GCP: la nube correcta para cada solución",
    quoteEn: "AWS, Azure and GCP: the right cloud for every solution",
    quoteFr: "AWS, Azure et GCP : le bon cloud pour chaque solution",
  },
  {
    id: "project-manager",
    name: "Keyla Rentería",
    titleEs: "Gerente de Proyectos",
    titleEn: "Project Manager",
    titleFr: "Chef de Projet",
    quoteEs: "De Java a Go, cada tecnología tiene su momento perfecto",
    quoteEn: "From Java to Go, every technology has its perfect moment",
    quoteFr: "De Java à Go, chaque technologie a son moment parfait",
  },
  {
    id: "tech-lead",
    name: "Mónica Hurtado",
    titleEs: "Líder Técnica",
    titleEn: "Tech Lead",
    titleFr: "Lead Technique",
    quoteEs: "C, C++ y C# para rendimiento; React para experiencias",
    quoteEn: "C, C++ and C# for performance; React for experiences",
    quoteFr: "C, C++ et C# pour la performance ; React pour les expériences",
  },
  {
    id: "fullstack-dev",
    name: "Julián Herrera",
    titleEs: "Desarrollador Full-Stack",
    titleEn: "Full-Stack Developer",
    titleFr: "Développeur Full-Stack",
    quoteEs: "JavaScript en el front, Python en el back, Docker en todo",
    quoteEn: "JavaScript on the front, Python on the back, Docker everywhere",
    quoteFr: "JavaScript en front, Python en back, Docker partout",
  },
  {
    id: "ui-ux-designer",
    name: "Patricia Gómez",
    titleEs: "Diseñadora UI/UX",
    titleEn: "UI/UX Designer",
    titleFr: "Designer UI/UX",
    quoteEs: "React y TypeScript hacen realidad cada diseño pixel-perfect",
    quoteEn: "React and TypeScript bring every pixel-perfect design to life",
    quoteFr: "React et TypeScript donnent vie à chaque design pixel-perfect",
  },
  {
    id: "qa-engineer",
    name: "Roberto Cárdenas",
    titleEs: "Ingeniero de Calidad",
    titleEn: "QA Engineer",
    titleFr: "Ingénieur QA",
    quoteEs: "Shell scripts y Python: mis armas para cazar bugs",
    quoteEn: "Shell scripts and Python: my weapons for hunting bugs",
    quoteFr: "Scripts Shell et Python : mes armes pour chasser les bugs",
  },
  {
    id: "devops-engineer",
    name: "Carolina Jiménez",
    titleEs: "Ingeniera DevOps",
    titleEn: "DevOps Engineer",
    titleFr: "Ingénieure DevOps",
    quoteEs: "Docker, HCL y Shell: infraestructura como código, siempre",
    quoteEn: "Docker, HCL and Shell: infrastructure as code, always",
    quoteFr: "Docker, HCL et Shell : infrastructure as code, toujours",
  },
  {
    id: "data-engineer",
    name: "Mateo Sánchez",
    titleEs: "Ingeniero de Datos",
    titleEn: "Data Engineer",
    titleFr: "Ingénieur Data",
    quoteEs: "PostgreSQL, MySQL y SQL Server: cada dato en su lugar",
    quoteEn: "PostgreSQL, MySQL and SQL Server: every data in its place",
    quoteFr: "PostgreSQL, MySQL et SQL Server : chaque donnée à sa place",
  },
  {
    id: "data-scientist",
    name: "Felipe Castañeda",
    titleEs: "Científico de Datos",
    titleEn: "Data Scientist",
    titleFr: "Data Scientist",
    quoteEs: "Python y SQL transforman datos en decisiones inteligentes",
    quoteEn: "Python and SQL transform data into smart decisions",
    quoteFr: "Python et SQL transforment les données en décisions intelligentes",
  },
  {
    id: "product-owner",
    name: "Sebastián Torres",
    titleEs: "Product Owner",
    titleEn: "Product Owner",
    titleFr: "Product Owner",
    quoteEs: "PHP, Java o Go: la tecnología que tu producto necesita",
    quoteEn: "PHP, Java or Go: the technology your product needs",
    quoteFr: "PHP, Java ou Go : la technologie dont votre produit a besoin",
  }
];

// Helper function to get title by language
function getTitle(member: TeamMember, lang: "es" | "en" | "fr") {
  if (lang === "es") return member.titleEs;
  if (lang === "fr") return member.titleFr;
  return member.titleEn;
}

// Helper function to get quote by language
function getQuote(member: TeamMember, lang: "es" | "en" | "fr") {
  if (lang === "es") return member.quoteEs;
  if (lang === "fr") return member.quoteFr;
  return member.quoteEn;
}

interface MarqueeRowProps {
  members: TeamMember[];
  direction: "left" | "right";
  lang: "es" | "en" | "fr";
  speed?: number;
}

function MarqueeRow({ members, direction, lang, speed = 1 }: MarqueeRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  // Triplicar para efecto infinito
  const triplicatedMembers = [...members, ...members, ...members];

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
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
        {triplicatedMembers.map((member, index) => (
          <div
            key={`${member.id}-${index}`}
            className="flex-shrink-0 w-[320px] md:w-[380px] bg-card border rounded-xl p-4 md:p-6 hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
            onClick={handleCardClick}
          >
            <div className="flex items-start gap-3 md:gap-4">
              {/* Imagen de silueta a la izquierda */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                <Image
                  src={`/team/${member.id}.png`}
                  alt={member.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido a la derecha */}
              <div className="flex-1 min-w-0">
                {/* Nombre */}
                <p className="font-semibold text-foreground text-sm md:text-base truncate">{member.name}</p>
                {/* Cargo con badge púrpura */}
                <div className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-primary rounded-full mt-1">
                  <span className="text-[10px] md:text-xs font-semibold text-primary-foreground">
                    {getTitle(member, lang)}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote con comillas estilizadas */}
            <div className="relative mt-3 md:mt-4">
              <div className="text-4xl md:text-6xl text-primary/20 font-serif absolute -top-3 md:-top-4 -left-1 md:-left-2 leading-none">&ldquo;</div>
              <p className="text-xs md:text-sm leading-relaxed pl-4 md:pl-6 text-muted-foreground italic">
                {getQuote(member, lang)}
              </p>
              <div className="text-4xl md:text-6xl text-primary/20 font-serif absolute -bottom-6 md:-bottom-8 right-0 leading-none">&rdquo;</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamCarousel({ lang }: TeamCarouselProps) {
  // Dividir miembros en dos grupos
  const midpoint = Math.ceil(teamMembers.length / 2);
  const topRow = teamMembers.slice(0, midpoint);
  const bottomRow = teamMembers.slice(midpoint);

  return (
    <div className="w-full space-y-4 md:space-y-6">
      <MarqueeRow members={topRow} direction="left" lang={lang} speed={0.7} />
      <MarqueeRow members={bottomRow} direction="right" lang={lang} speed={0.7} />
    </div>
  );
}
