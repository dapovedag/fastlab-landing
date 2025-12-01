"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  titleEs: string;
  titleEn: string;
  titleFr: string;
  titleSk: string;
  titleDe: string;
  titleIt: string;
  titlePt: string;
  quoteEs: string;
  quoteEn: string;
  quoteFr: string;
  quoteSk: string;
  quoteDe: string;
  quoteIt: string;
  quotePt: string;
}

interface TeamCarouselProps {
  lang: "es" | "en" | "fr" | "sk" | "de" | "it" | "pt";
}

const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    name: "Carlos Mendoza",
    titleEs: "CEO / Fundador",
    titleEn: "CEO / Founder",
    titleFr: "PDG / Fondateur",
    titleSk: "CEO / Zakladateľ",
    titleDe: "CEO / Gründer",
    titleIt: "CEO / Fondatore",
    titlePt: "CEO / Fundador",
    quoteEs: "Python, JavaScript y TypeScript son el lenguaje de la innovación",
    quoteEn: "Python, JavaScript and TypeScript are the language of innovation",
    quoteFr: "Python, JavaScript et TypeScript sont le langage de l'innovation",
    quoteSk: "Python, JavaScript a TypeScript sú jazykom inovácie",
    quoteDe: "Python, JavaScript und TypeScript sind die Sprache der Innovation",
    quoteIt: "Python, JavaScript e TypeScript sono il linguaggio dell'innovazione",
    quotePt: "Python, JavaScript e TypeScript são a linguagem da inovação",
  },
  {
    id: "cto",
    name: "Tomás Caicedo",
    titleEs: "Director de Tecnología",
    titleEn: "CTO",
    titleFr: "Directeur Technique",
    titleSk: "Technický riaditeľ",
    titleDe: "CTO",
    titleIt: "CTO",
    titlePt: "CTO",
    quoteEs: "AWS, Azure y GCP: la nube correcta para cada solución",
    quoteEn: "AWS, Azure and GCP: the right cloud for every solution",
    quoteFr: "AWS, Azure et GCP : le bon cloud pour chaque solution",
    quoteSk: "AWS, Azure a GCP: správny cloud pre každé riešenie",
    quoteDe: "AWS, Azure und GCP: die richtige Cloud für jede Lösung",
    quoteIt: "AWS, Azure e GCP: il cloud giusto per ogni soluzione",
    quotePt: "AWS, Azure e GCP: a nuvem certa para cada solução",
  },
  {
    id: "project-manager",
    name: "Keyla Rentería",
    titleEs: "Gerente de Proyectos",
    titleEn: "Project Manager",
    titleFr: "Chef de Projet",
    titleSk: "Projektový manažér",
    titleDe: "Projektmanagerin",
    titleIt: "Project Manager",
    titlePt: "Gerente de Projetos",
    quoteEs: "De Java a Go, cada tecnología tiene su momento perfecto",
    quoteEn: "From Java to Go, every technology has its perfect moment",
    quoteFr: "De Java à Go, chaque technologie a son moment parfait",
    quoteSk: "Od Javy po Go, každá technológia má svoj ideálny moment",
    quoteDe: "Von Java bis Go, jede Technologie hat ihren perfekten Moment",
    quoteIt: "Da Java a Go, ogni tecnologia ha il suo momento perfetto",
    quotePt: "De Java a Go, cada tecnologia tem seu momento perfeito",
  },
  {
    id: "tech-lead",
    name: "Mónica Hurtado",
    titleEs: "Líder Técnica",
    titleEn: "Tech Lead",
    titleFr: "Lead Technique",
    titleSk: "Technická vedúca",
    titleDe: "Tech Lead",
    titleIt: "Tech Lead",
    titlePt: "Tech Lead",
    quoteEs: "C, C++ y C# para rendimiento; React para experiencias",
    quoteEn: "C, C++ and C# for performance; React for experiences",
    quoteFr: "C, C++ et C# pour la performance ; React pour les expériences",
    quoteSk: "C, C++ a C# pre výkon; React pre zážitky",
    quoteDe: "C, C++ und C# für Leistung; React für Erlebnisse",
    quoteIt: "C, C++ e C# per le prestazioni; React per le esperienze",
    quotePt: "C, C++ e C# para performance; React para experiências",
  },
  {
    id: "fullstack-dev",
    name: "Julián Herrera",
    titleEs: "Desarrollador Full-Stack",
    titleEn: "Full-Stack Developer",
    titleFr: "Développeur Full-Stack",
    titleSk: "Full-Stack vývojár",
    titleDe: "Full-Stack Entwickler",
    titleIt: "Sviluppatore Full-Stack",
    titlePt: "Desenvolvedor Full-Stack",
    quoteEs: "JavaScript en el front, Python en el back, Docker en todo",
    quoteEn: "JavaScript on the front, Python on the back, Docker everywhere",
    quoteFr: "JavaScript en front, Python en back, Docker partout",
    quoteSk: "JavaScript na fronte, Python na backende, Docker všade",
    quoteDe: "JavaScript im Frontend, Python im Backend, Docker überall",
    quoteIt: "JavaScript nel front, Python nel back, Docker ovunque",
    quotePt: "JavaScript no front, Python no back, Docker em tudo",
  },
  {
    id: "ui-ux-designer",
    name: "Patricia Gómez",
    titleEs: "Diseñadora UI/UX",
    titleEn: "UI/UX Designer",
    titleFr: "Designer UI/UX",
    titleSk: "UI/UX dizajnérka",
    titleDe: "UI/UX Designerin",
    titleIt: "Designer UI/UX",
    titlePt: "Designer UI/UX",
    quoteEs: "React y TypeScript hacen realidad cada diseño pixel-perfect",
    quoteEn: "React and TypeScript bring every pixel-perfect design to life",
    quoteFr: "React et TypeScript donnent vie à chaque design pixel-perfect",
    quoteSk: "React a TypeScript oživujú každý pixel-perfect dizajn",
    quoteDe: "React und TypeScript erwecken jedes pixelgenaue Design zum Leben",
    quoteIt: "React e TypeScript danno vita a ogni design pixel-perfect",
    quotePt: "React e TypeScript dão vida a cada design pixel-perfect",
  },
  {
    id: "qa-engineer",
    name: "Roberto Cárdenas",
    titleEs: "Ingeniero de Calidad",
    titleEn: "QA Engineer",
    titleFr: "Ingénieur QA",
    titleSk: "QA inžinier",
    titleDe: "QA Ingenieur",
    titleIt: "Ingegnere QA",
    titlePt: "Engenheiro QA",
    quoteEs: "Shell scripts y Python: mis armas para cazar bugs",
    quoteEn: "Shell scripts and Python: my weapons for hunting bugs",
    quoteFr: "Scripts Shell et Python : mes armes pour chasser les bugs",
    quoteSk: "Shell skripty a Python: moje zbrane na lov bugov",
    quoteDe: "Shell-Skripte und Python: meine Waffen zur Bug-Jagd",
    quoteIt: "Script Shell e Python: le mie armi per cacciare i bug",
    quotePt: "Shell scripts e Python: minhas armas para caçar bugs",
  },
  {
    id: "devops-engineer",
    name: "Carolina Jiménez",
    titleEs: "Ingeniera DevOps",
    titleEn: "DevOps Engineer",
    titleFr: "Ingénieure DevOps",
    titleSk: "DevOps inžinierka",
    titleDe: "DevOps Ingenieurin",
    titleIt: "Ingegnere DevOps",
    titlePt: "Engenheira DevOps",
    quoteEs: "Docker, HCL y Shell: infraestructura como código, siempre",
    quoteEn: "Docker, HCL and Shell: infrastructure as code, always",
    quoteFr: "Docker, HCL et Shell : infrastructure as code, toujours",
    quoteSk: "Docker, HCL a Shell: infraštruktúra ako kód, vždy",
    quoteDe: "Docker, HCL und Shell: Infrastruktur als Code, immer",
    quoteIt: "Docker, HCL e Shell: infrastruttura come codice, sempre",
    quotePt: "Docker, HCL e Shell: infraestrutura como código, sempre",
  },
  {
    id: "data-engineer",
    name: "Mateo Sánchez",
    titleEs: "Ingeniero de Datos",
    titleEn: "Data Engineer",
    titleFr: "Ingénieur Data",
    titleSk: "Dátový inžinier",
    titleDe: "Data Engineer",
    titleIt: "Data Engineer",
    titlePt: "Engenheiro de Dados",
    quoteEs: "PostgreSQL, MySQL y SQL Server: cada dato en su lugar",
    quoteEn: "PostgreSQL, MySQL and SQL Server: every data in its place",
    quoteFr: "PostgreSQL, MySQL et SQL Server : chaque donnée à sa place",
    quoteSk: "PostgreSQL, MySQL a SQL Server: každý údaj na svojom mieste",
    quoteDe: "PostgreSQL, MySQL und SQL Server: jedes Datum an seinem Platz",
    quoteIt: "PostgreSQL, MySQL e SQL Server: ogni dato al suo posto",
    quotePt: "PostgreSQL, MySQL e SQL Server: cada dado em seu lugar",
  },
  {
    id: "data-scientist",
    name: "Felipe Castañeda",
    titleEs: "Científico de Datos",
    titleEn: "Data Scientist",
    titleFr: "Data Scientist",
    titleSk: "Dátový vedec",
    titleDe: "Data Scientist",
    titleIt: "Data Scientist",
    titlePt: "Cientista de Dados",
    quoteEs: "Python y SQL transforman datos en decisiones inteligentes",
    quoteEn: "Python and SQL transform data into smart decisions",
    quoteFr: "Python et SQL transforment les données en décisions intelligentes",
    quoteSk: "Python a SQL transformujú dáta na inteligentné rozhodnutia",
    quoteDe: "Python und SQL verwandeln Daten in intelligente Entscheidungen",
    quoteIt: "Python e SQL trasformano i dati in decisioni intelligenti",
    quotePt: "Python e SQL transformam dados em decisões inteligentes",
  },
  {
    id: "product-owner",
    name: "Sebastián Torres",
    titleEs: "Product Owner",
    titleEn: "Product Owner",
    titleFr: "Product Owner",
    titleSk: "Product Owner",
    titleDe: "Product Owner",
    titleIt: "Product Owner",
    titlePt: "Product Owner",
    quoteEs: "PHP, Java o Go: la tecnología que tu producto necesita",
    quoteEn: "PHP, Java or Go: the technology your product needs",
    quoteFr: "PHP, Java ou Go : la technologie dont votre produit a besoin",
    quoteSk: "PHP, Java alebo Go: technológia, ktorú váš produkt potrebuje",
    quoteDe: "PHP, Java oder Go: die Technologie, die Ihr Produkt braucht",
    quoteIt: "PHP, Java o Go: la tecnologia di cui il tuo prodotto ha bisogno",
    quotePt: "PHP, Java ou Go: a tecnologia que seu produto precisa",
  }
];

function getTitle(member: TeamMember, lang: "es" | "en" | "fr" | "sk" | "de" | "it" | "pt") {
  if (lang === "es") return member.titleEs;
  if (lang === "fr") return member.titleFr;
  if (lang === "sk") return member.titleSk;
  if (lang === "de") return member.titleDe;
  if (lang === "it") return member.titleIt;
  if (lang === "pt") return member.titlePt;
  return member.titleEn;
}

function getQuote(member: TeamMember, lang: "es" | "en" | "fr" | "sk" | "de" | "it" | "pt") {
  if (lang === "es") return member.quoteEs;
  if (lang === "fr") return member.quoteFr;
  if (lang === "sk") return member.quoteSk;
  if (lang === "de") return member.quoteDe;
  if (lang === "it") return member.quoteIt;
  if (lang === "pt") return member.quotePt;
  return member.quoteEn;
}

function MarqueeRow({ members, direction, lang }: { members: TeamMember[]; direction: "left" | "right"; lang: "es" | "en" | "fr" | "sk" | "de" | "it" | "pt" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [centeredIndex, setCenteredIndex] = useState<number | null>(null);

  // Triplicar para asegurar un loop infinito sin cortes
  const duplicatedMembers = [...members, ...members, ...members, ...members];

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
        className={`flex gap-4 md:gap-6 ${direction === "left" ? "team-marquee-scroll-left" : "team-marquee-scroll-right"}`}
      >
        {duplicatedMembers.map((member, index) => {
          const isActive = centeredIndex === index;

          return (
            <div
              key={`${member.id}-${index}`}
              className={`flex-shrink-0 w-[300px] md:w-[380px] bg-card border rounded-xl p-4 md:p-6 transition-all duration-300 cursor-pointer select-none ${
                isActive ? "ring-2 ring-primary shadow-xl scale-[1.02] z-10" : "hover:shadow-lg"
              }`}
              onClick={(e) => handleCardClick(index, e)}
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
          );
        })}
      </div>
    </div>
  );
}

export default function TeamCarousel({ lang }: TeamCarouselProps) {
  const midpoint = Math.ceil(teamMembers.length / 2);
  const topRow = teamMembers.slice(0, midpoint);
  const bottomRow = teamMembers.slice(midpoint);

  return (
    <div className="w-full space-y-4 md:space-y-6">
      <style jsx global>{`
        @keyframes team-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes team-scroll-right {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .team-marquee-scroll-left {
          animation: team-scroll-left 45s linear infinite;
        }

        .team-marquee-scroll-right {
          animation: team-scroll-right 45s linear infinite;
        }
      `}</style>

      <MarqueeRow members={topRow} direction="left" lang={lang} />
      <MarqueeRow members={bottomRow} direction="right" lang={lang} />
    </div>
  );
}
