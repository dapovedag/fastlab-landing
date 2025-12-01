"use client";

import Image from "next/image";

interface TeamMember {
  id: string;
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
    titleEs: "CEO / Fundador",
    titleEn: "CEO / Founder",
    titleFr: "PDG / Fondateur",
    quoteEs: "Python, JavaScript y TypeScript son el lenguaje de la innovación",
    quoteEn: "Python, JavaScript and TypeScript are the language of innovation",
    quoteFr: "Python, JavaScript et TypeScript sont le langage de l'innovation",
  },
  {
    id: "cto",
    titleEs: "Director de Tecnología",
    titleEn: "CTO",
    titleFr: "Directeur Technique",
    quoteEs: "AWS, Azure y GCP: la nube correcta para cada solución",
    quoteEn: "AWS, Azure and GCP: the right cloud for every solution",
    quoteFr: "AWS, Azure et GCP : le bon cloud pour chaque solution",
  },
  {
    id: "project-manager",
    titleEs: "Gerente de Proyectos",
    titleEn: "Project Manager",
    titleFr: "Chef de Projet",
    quoteEs: "De Java a Go, cada tecnología tiene su momento perfecto",
    quoteEn: "From Java to Go, every technology has its perfect moment",
    quoteFr: "De Java à Go, chaque technologie a son moment parfait",
  },
  {
    id: "tech-lead",
    titleEs: "Líder Técnico",
    titleEn: "Tech Lead",
    titleFr: "Lead Technique",
    quoteEs: "C, C++ y C# para rendimiento; React para experiencias",
    quoteEn: "C, C++ and C# for performance; React for experiences",
    quoteFr: "C, C++ et C# pour la performance ; React pour les expériences",
  },
  {
    id: "fullstack-dev",
    titleEs: "Desarrolladores",
    titleEn: "Full-Stack Developers",
    titleFr: "Développeurs Full-Stack",
    quoteEs: "JavaScript en el front, Python en el back, Docker en todo",
    quoteEn: "JavaScript on the front, Python on the back, Docker everywhere",
    quoteFr: "JavaScript en front, Python en back, Docker partout",
  },
  {
    id: "ui-ux-designer",
    titleEs: "Diseñador de Interfaces",
    titleEn: "UI/UX Designer",
    titleFr: "Designer UI/UX",
    quoteEs: "React y TypeScript hacen realidad cada diseño pixel-perfect",
    quoteEn: "React and TypeScript bring every pixel-perfect design to life",
    quoteFr: "React et TypeScript donnent vie à chaque design pixel-perfect",
  },
  {
    id: "qa-engineer",
    titleEs: "Ingeniero de Calidad",
    titleEn: "QA Engineer",
    titleFr: "Ingénieur QA",
    quoteEs: "Shell scripts y Python: mis armas para cazar bugs",
    quoteEn: "Shell scripts and Python: my weapons for hunting bugs",
    quoteFr: "Scripts Shell et Python : mes armes pour chasser les bugs",
  },
  {
    id: "devops-engineer",
    titleEs: "Ingeniero DevOps",
    titleEn: "DevOps Engineer",
    titleFr: "Ingénieur DevOps",
    quoteEs: "Docker, HCL y Shell: infraestructura como código, siempre",
    quoteEn: "Docker, HCL and Shell: infrastructure as code, always",
    quoteFr: "Docker, HCL et Shell : infrastructure as code, toujours",
  },
  {
    id: "data-engineer",
    titleEs: "Ingeniero de Datos",
    titleEn: "Data Engineer",
    titleFr: "Ingénieur Data",
    quoteEs: "PostgreSQL, MySQL y SQL Server: cada dato en su lugar",
    quoteEn: "PostgreSQL, MySQL and SQL Server: every data in its place",
    quoteFr: "PostgreSQL, MySQL et SQL Server : chaque donnée à sa place",
  },
  {
    id: "data-scientist",
    titleEs: "Científico de Datos",
    titleEn: "Data Scientist",
    titleFr: "Data Scientist",
    quoteEs: "Python y SQL transforman datos en decisiones inteligentes",
    quoteEn: "Python and SQL transform data into smart decisions",
    quoteFr: "Python et SQL transforment les données en décisions intelligentes",
  },
  {
    id: "product-owner",
    titleEs: "Dueño de Producto",
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

// Componente de Card individual
function TeamCard({ member, lang }: { member: TeamMember; lang: "es" | "en" | "fr" }) {
  return (
    <div className="flex-shrink-0 w-[380px] bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        {/* Imagen de silueta a la izquierda */}
        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
          <Image
            src={`/team/${member.id}.png`}
            alt={getTitle(member, lang)}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido a la derecha */}
        <div className="flex-1 min-w-0">
          {/* Cargo con badge púrpura */}
          <div className="inline-block px-3 py-1 bg-primary rounded-full mb-2">
            <span className="text-xs font-semibold text-primary-foreground">
              {getTitle(member, lang)}
            </span>
          </div>
        </div>
      </div>

      {/* Quote con comillas estilizadas */}
      <div className="relative mt-4">
        <div className="text-6xl text-primary/20 font-serif absolute -top-4 -left-2 leading-none">&ldquo;</div>
        <p className="text-sm leading-relaxed pl-6 text-muted-foreground italic">
          {getQuote(member, lang)}
        </p>
        <div className="text-6xl text-primary/20 font-serif absolute -bottom-8 right-0 leading-none">&rdquo;</div>
      </div>
    </div>
  );
}

// Fila del marquee con animación
function MarqueeRow({ members, direction, lang }: { members: TeamMember[]; direction: "left" | "right"; lang: "es" | "en" | "fr" }) {
  const triplicatedMembers = [...members, ...members, ...members];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-6 ${direction === "left" ? "animate-team-marquee-left" : "animate-team-marquee-right"}`}
      >
        {triplicatedMembers.map((member, index) => (
          <TeamCard
            key={`${member.id}-${index}`}
            member={member}
            lang={lang}
          />
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
    <div className="w-full space-y-6">
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
          animation: team-marquee-left 35s linear infinite;
        }

        .animate-team-marquee-right {
          animation: team-marquee-right 35s linear infinite;
        }
      `}</style>

      <MarqueeRow members={topRow} direction="left" lang={lang} />
      <MarqueeRow members={bottomRow} direction="right" lang={lang} />
    </div>
  );
}
