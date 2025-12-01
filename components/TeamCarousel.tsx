"use client";

import { useState } from "react";
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

function getTitle(member: TeamMember, lang: "es" | "en" | "fr") {
  if (lang === "es") return member.titleEs;
  if (lang === "fr") return member.titleFr;
  return member.titleEn;
}

function getQuote(member: TeamMember, lang: "es" | "en" | "fr") {
  if (lang === "es") return member.quoteEs;
  if (lang === "fr") return member.quoteFr;
  return member.quoteEn;
}

function MarqueeRow({ members, direction, lang, isPaused }: { members: TeamMember[]; direction: "left" | "right"; lang: "es" | "en" | "fr"; isPaused: boolean }) {
  const triplicatedMembers = [...members, ...members, ...members];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-4 md:gap-6 ${direction === "left" ? "animate-team-marquee-left" : "animate-team-marquee-right"}`}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {triplicatedMembers.map((member, index) => (
          <div
            key={`${member.id}-${index}`}
            className="flex-shrink-0 w-[300px] md:w-[380px] bg-card border rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                <Image
                  src={`/team/${member.id}.png`}
                  alt={member.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm md:text-base truncate">{member.name}</p>
                <div className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-primary rounded-full mt-1">
                  <span className="text-[10px] md:text-xs font-semibold text-primary-foreground">
                    {getTitle(member, lang)}
                  </span>
                </div>
              </div>
            </div>

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
  const [isPaused, setIsPaused] = useState(false);

  const midpoint = Math.ceil(teamMembers.length / 2);
  const topRow = teamMembers.slice(0, midpoint);
  const bottomRow = teamMembers.slice(midpoint);

  return (
    <div
      className="w-full space-y-4 md:space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
    >
      <style jsx global>{`
        @keyframes team-marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes team-marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-team-marquee-left {
          animation: team-marquee-left 40s linear infinite;
        }

        .animate-team-marquee-right {
          animation: team-marquee-right 40s linear infinite;
        }
      `}</style>

      <MarqueeRow members={topRow} direction="left" lang={lang} isPaused={isPaused} />
      <MarqueeRow members={bottomRow} direction="right" lang={lang} isPaused={isPaused} />
    </div>
  );
}
