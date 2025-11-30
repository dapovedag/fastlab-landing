"use client";

interface TeamMember {
  id: string;
  titleEs: string;
  titleEn: string;
  quoteEs: string;
  quoteEn: string;
}

interface TeamCarouselProps {
  lang: "es" | "en";
}

const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    titleEs: "CEO / Fundador",
    titleEn: "CEO / Founder",
    quoteEs: "La visión sin ejecución es solo una ilusión",
    quoteEn: "Vision without execution is just an illusion",
  },
  {
    id: "cto",
    titleEs: "Director de Tecnología",
    titleEn: "CTO",
    quoteEs: "La arquitectura correcta hoy evita el caos mañana",
    quoteEn: "The right architecture today prevents chaos tomorrow",
  },
  {
    id: "project-manager",
    titleEs: "Gerente de Proyectos",
    titleEn: "Project Manager",
    quoteEs: "Cada entrega a tiempo es una promesa cumplida",
    quoteEn: "Every on-time delivery is a promise kept",
  },
  {
    id: "tech-lead",
    titleEs: "Líder Técnico",
    titleEn: "Tech Lead",
    quoteEs: "El código limpio es mi firma personal",
    quoteEn: "Clean code is my personal signature",
  },
  {
    id: "fullstack-dev",
    titleEs: "Desarrolladores",
    titleEn: "Full-Stack Developers",
    quoteEs: "Transformamos café en código funcional",
    quoteEn: "We transform coffee into working code",
  },
  {
    id: "ui-ux-designer",
    titleEs: "Diseñador de Interfaces",
    titleEn: "UI/UX Designer",
    quoteEs: "La mejor interfaz es la que no necesita manual",
    quoteEn: "The best interface needs no manual",
  },
  {
    id: "qa-engineer",
    titleEs: "Ingeniero de Calidad",
    titleEn: "QA Engineer",
    quoteEs: "Encuentro errores antes que tus usuarios",
    quoteEn: "I find bugs before your users do",
  },
  {
    id: "devops-engineer",
    titleEs: "Ingeniero DevOps",
    titleEn: "DevOps Engineer",
    quoteEs: "Automatizo para que el equipo innove",
    quoteEn: "I automate so the team can innovate",
  },
  {
    id: "data-engineer",
    titleEs: "Ingeniero de Datos",
    titleEn: "Data Engineer",
    quoteEs: "Los datos fluyen, las decisiones mejoran",
    quoteEn: "Data flows, decisions improve",
  },
  {
    id: "data-scientist",
    titleEs: "Científico de Datos",
    titleEn: "Data Scientist",
    quoteEs: "En los datos está la verdad oculta",
    quoteEn: "Truth hides within the data",
  },
  {
    id: "product-owner",
    titleEs: "Dueño de Producto",
    titleEn: "Product Owner",
    quoteEs: "La voz del cliente guía cada decisión",
    quoteEn: "The customer's voice guides every decision",
  }
];

// Silueta SVG - forma sólida negra de persona profesional
function PersonSilhouette({ variant }: { variant: number }) {
  const silhouettes = [
    // Variante 1
    <path key="1" d="M60 8c-12 0-20 10-20 22s8 20 20 20 20-8 20-20-8-22-20-22zm-30 52c-8 4-14 12-14 22v38h88v-38c0-10-6-18-14-22-4-2-10-4-14-4l-6 16-10-16-10 16-6-16c-4 0-10 2-14 4z" />,
    // Variante 2
    <path key="2" d="M60 6c-11 0-18 9-18 20 0 8 4 14 10 18-2 2-4 6-4 10h24c0-4-2-8-4-10 6-4 10-10 10-18 0-11-7-20-18-20zm-28 54c-10 4-16 14-16 26v34h88v-34c0-12-6-22-16-26l-12 20-8-20h-16l-8 20-12-20z" />,
    // Variante 3
    <path key="3" d="M60 10c-10 0-17 8-17 18s7 18 17 18 17-8 17-18-7-18-17-18zm-32 48c-6 4-10 12-10 22v40h84v-40c0-10-4-18-10-22l-14 18-8-18h-20l-8 18-14-18z" />,
    // Variante 4
    <path key="4" d="M60 5c-13 0-22 10-22 23s9 21 22 21 22-8 22-21-9-23-22-23zm-26 55c-8 5-12 14-12 24v36h76v-36c0-10-4-19-12-24l-10 14-8-14h-16l-8 14-10-14z" />,
    // Variante 5
    <path key="5" d="M60 8c-11 0-19 9-19 20s8 19 19 19 19-8 19-19-8-20-19-20zm-30 50c-7 4-11 13-11 23v39h82v-39c0-10-4-19-11-23l-12 16-9-16h-18l-9 16-12-16z" />,
  ];

  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <g fill="currentColor">
        {silhouettes[variant % silhouettes.length]}
      </g>
    </svg>
  );
}

// Componente de Card individual
function TeamCard({ member, index, lang }: { member: TeamMember; index: number; lang: "es" | "en" }) {
  return (
    <div className="flex-shrink-0 w-[380px] bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        {/* Silueta a la izquierda */}
        <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 text-gray-600 dark:text-gray-300">
          <PersonSilhouette variant={index} />
        </div>

        {/* Contenido a la derecha */}
        <div className="flex-1 min-w-0">
          {/* Cargo con badge púrpura */}
          <div className="inline-block px-3 py-1 bg-primary rounded-full mb-2">
            <span className="text-xs font-semibold text-primary-foreground">
              {lang === "es" ? member.titleEs : member.titleEn}
            </span>
          </div>
        </div>
      </div>

      {/* Quote con comillas estilizadas */}
      <div className="relative mt-4">
        <div className="text-6xl text-primary/20 font-serif absolute -top-4 -left-2 leading-none">&ldquo;</div>
        <p className="text-sm leading-relaxed pl-6 text-muted-foreground italic">
          {lang === "es" ? member.quoteEs : member.quoteEn}
        </p>
        <div className="text-6xl text-primary/20 font-serif absolute -bottom-8 right-0 leading-none">&rdquo;</div>
      </div>
    </div>
  );
}

// Fila del marquee con animación
function MarqueeRow({ members, direction, lang }: { members: TeamMember[]; direction: "left" | "right"; lang: "es" | "en" }) {
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
            index={index % members.length}
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
