"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MaterialUISwitch } from "@/components/ui/material-switch";
import BirdsCanvas from "@/components/BirdsCanvas";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import AnimatedTitle from "@/components/AnimatedTitle";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { useState, useEffect } from "react";
import { Zap, Building2, Cloud, BarChart3, BookOpen, RefreshCw } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Theme management
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Icons for benefits section
  const benefitIcons = [Zap, Building2, Cloud, BarChart3, BookOpen, RefreshCw];

  const content = {
    es: {
      nav: {
        features: "Características",
        process: "Proceso",
        benefits: "Beneficios",
        pricing: "Precios",
        contact: "Contacto",
      },
      hero: {
        title: "De ideas a software profesional.",
        highlight: "Gratis.",
        subtitle: "La primera fábrica de software para incubadoras. Tu marca institucional se fortalece. Las empresas obtienen productos listos para producción en **2 semanas**.",
        cta: "Agenda una demostración",
      },
      problem: {
        title: "La brecha entre el potencial y la realidad",
        university: {
          title: "La Universidad",
          points: [
            "Los estudiantes hacen excelentes levantamientos de necesidades",
            "Pero los MVPs técnicos no están a la altura",
            "Resultado: oportunidades de contratación perdidas",
          ],
        },
        companies: {
          title: "Las Empresas",
          points: [
            "Necesitan validar soluciones rápidamente",
            "Los prototipos tradicionales toman meses",
            "Los costos de desarrollo son prohibitivos",
          ],
        },
        students: {
          title: "Los Estudiantes",
          points: [
            "Tienen el talento para identificar problemas",
            "Carecen de infraestructura para ejecutar a nivel industrial",
            "Su trabajo no cierra en contratos reales",
          ],
        },
      },
      cases: {
        title: "De la teoría a la producción",
        items: [
          {
            title: "Detección de Anomalías en IoT Industrial",
            problem: "Empresa manufacturera con pérdidas por fallas no detectadas en líneas de producción",
            solution: "Sistema de detección en tiempo real con Isolation Forest y Random Forest sobre datos de sensores",
            stack: "Python, PostgreSQL, Docker, AWS (S3, EC2)",
            result: "Reducción del 65% en paradas no planificadas. Empresa contrató fase 2 para integración con SCADA",
          },
          {
            title: "Motor de Recomendación de Videos",
            problem: "Plataforma de contenido profesional con bajo engagement y retención de usuarios",
            solution: "Sistema híbrido con clustering (K-means) y filtrado colaborativo para personalización de contenido",
            stack: "Python, React, Flask, SQL Server, Azure (DevOps, CI/CD)",
            result: "Mejora del 42% en tiempo de sesión. Pipeline de despliegue continuo implementado",
          },
          {
            title: "Clasificador Automático de PQRs con NLP",
            problem: "Empresa de servicios con 1000+ solicitudes mensuales sin clasificación eficiente",
            solution: "Modelo RoBERTa en español para clasificación automática y enrutamiento inteligente de solicitudes",
            stack: "Python, transformers, PostgreSQL, Docker, GCP (Compute Engine, Cloud Storage)",
            result: "Reducción del 70% en tiempo de respuesta. Sistema escalado a 5000+ solicitudes mensuales",
          },
          {
            title: "Sistema Predictivo de Mantenimiento",
            problem: "Planta industrial con paradas costosas e impredecibles en maquinaria crítica",
            solution: "Análisis de series temporales con TimeSeriesKMeans y DTW para predicción de fallos",
            stack: "Python, pandas, PostgreSQL, Docker, AWS (SQS, EC2)",
            result: "Anticipación de 85% de fallos con 7 días de antelación. ROI positivo en 3 meses",
          },
          {
            title: "Plataforma de Análisis de Sentimiento",
            problem: "Marca sin visibilidad sobre percepción pública en redes sociales",
            solution: "Pipeline de NLP con transformers para análisis de sentimiento y tendencias en tiempo real",
            stack: "Python, React, FastAPI, MongoDB, Azure (Container Instances)",
            result: "Dashboard ejecutivo con métricas diarias. Detección temprana de crisis de reputación",
          },
          {
            title: "Dashboard de Operaciones en Tiempo Real",
            problem: "Empresa logística con datos dispersos y sin visibilidad unificada de operaciones",
            solution: "ETL automatizado con visualización dinámica de KPIs críticos y alertas proactivas",
            stack: "Python, React, TypeScript, PostgreSQL, GCP (Cloud Run, BigQuery)",
            result: "Reducción del 40% en tiempos de respuesta operativa. Integración con sistemas legacy",
          },
          {
            title: "Agentes IA para Monitoreo de Sitio Físico",
            problem: "Validación manual de operaciones en campo con costos elevados y errores humanos",
            solution: "Sistema multi-agente con visión computacional (YOLO) para detección de anomalías y alertas automáticas",
            stack: "Python, OpenCV, YOLO, PostgreSQL, AWS (Lambda, Rekognition, IoT Core)",
            result: "Monitoreo 24/7 automatizado. Reducción del 80% en costos de supervisión manual",
          },
          {
            title: "Asistente Inteligente de Soporte al Cliente",
            problem: "Empresa con alto volumen de consultas repetitivas y tiempos de respuesta lentos",
            solution: "Chatbot con GPT-4 y RAG sobre base de conocimiento empresarial para respuestas contextuales precisas",
            stack: "Python, OpenAI API, LangChain, ChromaDB, FastAPI, Azure",
            result: "Resolución del 78% de consultas sin intervención humana. Satisfacción del cliente aumentó 45%",
          },
        ],
      },
      testimonials: {
        items: [
          { name: "María Rodríguez", role: "Directora de Innovación", company: "Compensar", quote: "Reducción del 65% en paradas no planificadas. El sistema detecta anomalías antes de que ocurran fallos." },
          { name: "Carlos Méndez", role: "Vicepresidente de Tecnología", company: "Davivienda", quote: "Mejora del 42% en tiempo de sesión. Los usuarios ahora encuentran contenido relevante de inmediato." },
          { name: "Ana López", role: "Gerente de Desarrollo", company: "ADA-TAS", quote: "Reducción del 70% en tiempo de respuesta. Pasamos de caos a clasificación automática inteligente." },
          { name: "Ricardo Torres", role: "Director de IoT", company: "GSS Analytix", quote: "Anticipación de 85% de fallos con 7 días de antelación. ROI positivo en 3 meses." },
          { name: "Lucía Fernández", role: "Directora de Experiencia Digital", company: "LATAM Airlines", quote: "Dashboard ejecutivo con métricas diarias. Detectamos crisis de reputación antes de que escalen." },
          { name: "Jorge Ramírez", role: "Gerente de Tecnología", company: "Davinchi", quote: "Reducción del 40% en tiempos de respuesta operativa. Integración perfecta con nuestros sistemas." },
          { name: "Patricia Morales", role: "Coordinadora de Innovación", company: "Ministerio de Educación", quote: "Monitoreo 24/7 automatizado. Reducción del 80% en costos de supervisión manual." },
          { name: "Daniel Vargas", role: "CEO", company: "TalentPitch", quote: "Resolución del 78% de consultas sin intervención humana. Satisfacción del cliente aumentó 45%." },
        ],
      },
      process: {
        title: "Del descubrimiento al impacto en 14 días",
        phases: [
          {
            title: "DÍA 1-3: DESCUBRIMIENTO",
            points: [
              "Los estudiantes realizan el levantamiento de necesidad",
              "Entrevistas, mapeo de procesos, definición de alcance",
              "Entregable: Documento de requerimientos",
            ],
          },
          {
            title: "DÍA 4-10: CONSTRUCCIÓN",
            points: [
              "Nuestra fábrica traduce requerimientos a arquitectura",
              "Desarrollo de interfaz, servidor y base de datos",
              "Tecnologías modernas, código limpio, mejores prácticas",
            ],
          },
          {
            title: "DÍA 11-13: INTEGRACIÓN",
            points: [
              "Despliegue en la nube (AWS/Azure/GCP)",
              "Documentación técnica completa",
              "Pruebas y ajustes finales",
            ],
          },
          {
            title: "DÍA 14: ENTREGA",
            points: [
              "Producto mínimo viable funcional en producción",
              "Demostración con la empresa",
              "Propuesta de continuidad (desarrollo posterior)",
            ],
          },
        ],
        note: "Inversión inicial: $0 COP. La universidad fortalece su marca. Las empresas prueban antes de comprometer presupuesto.",
      },
      benefits: {
        title: "Velocidad sin sacrificar calidad",
        items: [
          {
            title: "Velocidad de Mercado",
            points: ["2 semanas vs 3-6 meses tradicionales", "Tiempo de lanzamiento que impresiona a los interesados"],
          },
          {
            title: "Arquitectura Profesional",
            points: ["No es un prototipo, es código listo para escalar", "Interfaz + Servidor + Base de datos + Despliegue incluidos"],
          },
          {
            title: "Nativo en la Nube",
            points: ["Desplegado en AWS, Azure o GCP según necesidad", "Infraestructura como código desde día 1"],
          },
          {
            title: "Conjunto Tecnológico Completo",
            points: ["Python, TypeScript, SQL, R, Java", "Herramientas modernas (React, Flask, FastAPI, etc.)"],
          },
          {
            title: "Documentación Real",
            points: ["No solo código, también guías de mantenimiento", "Facilita transición a equipos internos"],
          },
          {
            title: "Modelo Sin Riesgo",
            points: ["Producto gratis → empresa valida → contrata desarrollo", "Universidad gana reputación, empresa gana certeza"],
          },
        ],
      },
      pricing: {
        title: "Inversión inteligente",
        subtitle: "Comienza gratis. Escala cuando veas resultados.",
        plans: [
          {
            name: "MVP Gratuito",
            price: "$0",
            duration: "2 semanas",
            description: "Valida tu solución sin riesgo",
            features: [
              "Levantamiento de necesidad por estudiantes",
              "Desarrollo completo del MVP funcional",
              "Despliegue en la nube (AWS/Azure/GCP)",
              "Documentación técnica completa",
              "Demostración con stakeholders",
              "Código limpio y documentado",
            ],
            highlight: false,
          },
          {
            name: "Desarrollo Profesional",
            price: "$100.000",
            duration: "por hora",
            description: "Lleva tu MVP a producción completa",
            features: [
              "Todo lo del plan gratuito incluido",
              "Desarrollo de características adicionales",
              "Escalamiento de infraestructura",
              "Integración con sistemas existentes",
              "Mantenimiento y soporte continuo",
              "Refactorización y optimización",
              "SLA y garantías de disponibilidad",
              "Equipo dedicado de desarrollo",
            ],
            highlight: true,
            note: "Mínimo recomendado: 40 horas/mes",
          },
        ],
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            q: "¿Cómo garantizan la calidad en solo 2 semanas?",
            a: "Metodología probada + conjunto tecnológico estandarizado + arquitectura modular. No reinventamos la rueda, aplicamos patrones industriales.",
          },
          {
            q: "¿Qué pasa si la empresa no contrata después del producto inicial?",
            a: "No hay compromiso. El producto inicial ya cumplió su función: fortalecer la marca universitaria y dar experiencia real a los estudiantes.",
          },
          {
            q: "¿Qué sectores atienden?",
            a: "Somos agnósticos. Hemos trabajado en tecnología financiera, análisis de datos, video, clasificación de datos, detección de anomalías, entre otros.",
          },
          {
            q: "¿Quién es dueño del código del producto inicial?",
            a: "La empresa. Código limpio, documentado y sin dependencias ocultas.",
          },
        ],
      },
      ctaFinal: {
        title: "Convierte proyectos académicos en contratos reales",
        subtitle: "Primera reunión sin compromiso. Te mostramos cómo funciona el modelo y evaluamos si es adecuado para tu ecosistema de innovación.",
        cta: "Agendar reunión estratégica",
      },
      footer: "Donde los descubrimientos estudiantiles se convierten en productos empresariales.",
    },
    en: {
      nav: {
        features: "Features",
        process: "Process",
        benefits: "Benefits",
        pricing: "Pricing",
        contact: "Contact",
      },
      hero: {
        title: "From ideas to professional software.",
        highlight: "Free.",
        subtitle: "The first software factory for incubators. Your institutional brand grows stronger. Companies get production-ready products in **2 weeks**.",
        cta: "Schedule a demo",
      },
      problem: {
        title: "The gap between potential and reality",
        university: {
          title: "The University",
          points: [
            "Students conduct excellent needs assessments",
            "But technical MVPs fall short",
            "Result: missed hiring opportunities",
          ],
        },
        companies: {
          title: "Companies",
          points: [
            "Need to validate solutions quickly",
            "Traditional prototypes take months",
            "Development costs are prohibitive",
          ],
        },
        students: {
          title: "Students",
          points: [
            "Have the talent to identify problems",
            "Lack infrastructure to execute at industrial level",
            "Their work doesn't close real contracts",
          ],
        },
      },
      cases: {
        title: "From theory to production",
        items: [
          {
            title: "IoT Industrial Anomaly Detection",
            problem: "Manufacturing company with losses from undetected production line failures",
            solution: "Real-time detection system with Isolation Forest and Random Forest on sensor data",
            stack: "Python, PostgreSQL, Docker, AWS (S3, EC2)",
            result: "65% reduction in unplanned downtime. Company hired phase 2 for SCADA integration",
          },
          {
            title: "Video Recommendation Engine",
            problem: "Professional content platform with low engagement and user retention",
            solution: "Hybrid system with clustering (K-means) and collaborative filtering for content personalization",
            stack: "Python, React, Flask, SQL Server, Azure (DevOps, CI/CD)",
            result: "42% improvement in session time. Continuous deployment pipeline implemented",
          },
          {
            title: "Automatic Request Classifier with NLP",
            problem: "Service company with 1000+ monthly requests without efficient classification",
            solution: "Spanish RoBERTa model for automatic classification and intelligent request routing",
            stack: "Python, transformers, PostgreSQL, Docker, GCP (Compute Engine, Cloud Storage)",
            result: "70% reduction in response time. System scaled to 5000+ monthly requests",
          },
          {
            title: "Predictive Maintenance System",
            problem: "Industrial plant with costly and unpredictable critical machinery downtime",
            solution: "Time series analysis with TimeSeriesKMeans and DTW for failure prediction",
            stack: "Python, pandas, PostgreSQL, Docker, AWS (SQS, EC2)",
            result: "85% failure anticipation with 7 days notice. Positive ROI in 3 months",
          },
          {
            title: "Sentiment Analysis Platform",
            problem: "Brand without visibility on public perception in social media",
            solution: "NLP pipeline with transformers for real-time sentiment analysis and trends",
            stack: "Python, React, FastAPI, MongoDB, Azure (Container Instances)",
            result: "Executive dashboard with daily metrics. Early detection of reputation crises",
          },
          {
            title: "Real-Time Operations Dashboard",
            problem: "Logistics company with scattered data and no unified operational visibility",
            solution: "Automated ETL with dynamic KPI visualization and proactive alerts",
            stack: "Python, React, TypeScript, PostgreSQL, GCP (Cloud Run, BigQuery)",
            result: "40% reduction in operational response times. Integration with legacy systems",
          },
          {
            title: "AI Agents for Physical Site Monitoring",
            problem: "Manual field operations validation with high costs and human errors",
            solution: "Multi-agent system with computer vision (YOLO) for anomaly detection and automatic alerts",
            stack: "Python, OpenCV, YOLO, PostgreSQL, AWS (Lambda, Rekognition, IoT Core)",
            result: "24/7 automated monitoring. 80% reduction in manual supervision costs",
          },
          {
            title: "Intelligent Customer Support Assistant",
            problem: "Company with high volume of repetitive queries and slow response times",
            solution: "Chatbot with GPT-4 and RAG on enterprise knowledge base for accurate contextual responses",
            stack: "Python, OpenAI API, LangChain, ChromaDB, FastAPI, Azure",
            result: "78% query resolution without human intervention. Customer satisfaction increased 45%",
          },
        ],
      },
      testimonials: {
        items: [
          { name: "María Rodríguez", role: "Innovation Director", company: "Compensar", quote: "65% reduction in unplanned downtime. The system detects anomalies before failures occur." },
          { name: "Carlos Méndez", role: "VP of Technology", company: "Davivienda", quote: "42% improvement in session time. Users now find relevant content immediately." },
          { name: "Ana López", role: "Development Manager", company: "ADA-TAS", quote: "70% reduction in response time. We went from chaos to intelligent automatic classification." },
          { name: "Ricardo Torres", role: "IoT Director", company: "GSS Analytix", quote: "85% failure anticipation with 7 days notice. Positive ROI in 3 months." },
          { name: "Lucía Fernández", role: "Digital Experience Director", company: "LATAM Airlines", quote: "Executive dashboard with daily metrics. We detect reputation crises before they escalate." },
          { name: "Jorge Ramírez", role: "Technology Manager", company: "Davinchi", quote: "40% reduction in operational response times. Perfect integration with our systems." },
          { name: "Patricia Morales", role: "Innovation Coordinator", company: "Ministerio de Educación", quote: "24/7 automated monitoring. 80% reduction in manual supervision costs." },
          { name: "Daniel Vargas", role: "CEO", company: "TalentPitch", quote: "78% query resolution without human intervention. Customer satisfaction increased 45%." },
        ],
      },
      process: {
        title: "From insight to impact in 14 days",
        phases: [
          {
            title: "DAY 1-3: DISCOVERY",
            points: [
              "Students conduct needs assessment",
              "Interviews, process mapping, scope definition",
              "Deliverable: Requirements document",
            ],
          },
          {
            title: "DAY 4-10: BUILD",
            points: [
              "Our factory translates requirements to architecture",
              "Frontend, backend, database development",
              "Modern stack, clean code, best practices",
            ],
          },
          {
            title: "DAY 11-13: INTEGRATION",
            points: [
              "Cloud deployment (AWS/Azure/GCP)",
              "Complete technical documentation",
              "Testing and final adjustments",
            ],
          },
          {
            title: "DAY 14: DELIVERY",
            points: [
              "Functional MVP in production",
              "Demo with the company",
              "Post-MVP development proposal",
            ],
          },
        ],
        note: "Initial investment: $0. University strengthens its brand. Companies test before committing budget.",
      },
      benefits: {
        title: "Speed without sacrificing quality",
        items: [
          {
            title: "Market Speed",
            points: ["2 weeks vs 3-6 months traditional", "Time-to-market that impresses stakeholders"],
          },
          {
            title: "Professional Architecture",
            points: ["Not a prototype, it's code ready to scale", "Frontend + Backend + DB + Deploy included"],
          },
          {
            title: "Cloud Native",
            points: ["Deployed on AWS, Azure or GCP as needed", "Infrastructure as code from day 1"],
          },
          {
            title: "Full Stack",
            points: ["Python, TypeScript, SQL, R, Java", "Modern frameworks (React, Flask, FastAPI, etc.)"],
          },
          {
            title: "Real Documentation",
            points: ["Not just code, also maintenance guides", "Facilitates transition to internal teams"],
          },
          {
            title: "Risk-Free Model",
            points: ["Free MVP → company validates → hires development", "University gains reputation, company gains certainty"],
          },
        ],
      },
      pricing: {
        title: "Smart Investment",
        subtitle: "Start free. Scale when you see results.",
        plans: [
          {
            name: "Free MVP",
            price: "$0",
            duration: "2 weeks",
            description: "Validate your solution risk-free",
            features: [
              "Needs assessment by students",
              "Complete functional MVP development",
              "Cloud deployment (AWS/Azure/GCP)",
              "Complete technical documentation",
              "Stakeholder demonstration",
              "Clean and documented code",
            ],
            highlight: false,
          },
          {
            name: "Professional Development",
            price: "$25",
            duration: "per hour",
            description: "Take your MVP to full production",
            features: [
              "Everything from the free plan included",
              "Additional feature development",
              "Infrastructure scaling",
              "Integration with existing systems",
              "Continuous maintenance and support",
              "Refactoring and optimization",
              "SLA and availability guarantees",
              "Dedicated development team",
            ],
            highlight: true,
            note: "Recommended minimum: 40 hours/month",
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "How do you guarantee quality in just 2 weeks?",
            a: "Proven methodology + standardized stack + modular architecture. We don't reinvent the wheel, we apply industrial patterns.",
          },
          {
            q: "What if the company doesn't hire after the MVP?",
            a: "No commitment. The MVP already fulfilled its purpose: strengthen university brand and give students real experience.",
          },
          {
            q: "What sectors do you serve?",
            a: "We're agnostic. We've worked in fintech, analytics, video, data classification, anomaly detection, among others.",
          },
          {
            q: "Who owns the MVP code?",
            a: "The company. Clean, documented code with no hidden dependencies.",
          },
        ],
      },
      ctaFinal: {
        title: "Turn academic projects into real contracts",
        subtitle: "First meeting with no commitment. We show you how the model works and evaluate if it's a fit for your innovation ecosystem.",
        cta: "Schedule strategic meeting",
      },
      footer: "Where student insights become enterprise MVPs.",
    },
  };

  const t = content[lang];

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 relative z-[10000]">
              <div className="text-2xl font-bold">FastLab</div>
            </div>

            {/* Center Menu - 5 links */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-8 relative z-[10000]">
              <a href="#problema" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.features}
              </a>
              <a href="#proceso" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.process}
              </a>
              <a href="#beneficios" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.benefits}
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.pricing}
              </a>
              <a href="#contact-form" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.contact}
              </a>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 relative z-[10000]">
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center ml-4 relative z-[10000]">
              <MaterialUISwitch
                id="theme-toggle"
                name="theme"
                checked={theme === "dark"}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
                inputProps={{
                  'aria-label': 'Toggle dark mode'
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - 100vh */}
      <section className="relative w-full h-screen flex items-end overflow-hidden">
        {/* Birds Canvas - Solo en Hero Section */}
        <BirdsCanvas theme={theme} />

        {/* Hero Content - Bottom Left Aligned */}
        <div className="relative z-[100] container mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
          <div className="max-w-4xl">
            <AnimatedTitle title={t.hero.title} highlight={t.hero.highlight} />
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl">
              {t.hero.subtitle.split('**').map((part, i) =>
                i % 2 === 1 ? <span key={i} className="text-primary font-bold">{part}</span> : part
              )}
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Resultados que hablan por sí mismos</h2>
        </div>
        <TestimonialsMarquee testimonials={t.testimonials.items} />
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.problem.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{t.problem.university.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {t.problem.university.points.map((point, i) => (
                  <p key={i}>• {point}</p>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t.problem.companies.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {t.problem.companies.points.map((point, i) => (
                  <p key={i}>• {point}</p>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t.problem.students.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {t.problem.students.points.map((point, i) => (
                  <p key={i}>• {point}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.process.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t.process.phases.map((phase, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {phase.points.map((point, j) => (
                    <p key={j}>• {point}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-primary">{t.process.note}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.benefits.items.map((item, i) => {
              const Icon = benefitIcons[i];
              return (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {item.points.map((point, j) => (
                      <p key={j}>• {point}</p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.pricing.title}</h2>
            <p className="text-xl text-muted-foreground">{t.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.pricing.plans.map((plan, i) => (
              <Card key={i} className={plan.highlight ? "border-primary border-2 shadow-xl" : ""}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.duration}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {'note' in plan && plan.note && (
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm font-medium text-primary">{plan.note}</p>
                    </div>
                  )}
                  <Button
                    className="w-full mt-6"
                    variant={plan.highlight ? "default" : "outline"}
                    size="lg"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {plan.highlight ? lang === "es" ? "Comenzar desarrollo" : "Start development" : lang === "es" ? "Solicitar MVP gratis" : "Request free MVP"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.faq.title}</h2>
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaFinal.title}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t.ctaFinal.subtitle}</p>
          <Button
            size="lg"
            className="text-lg"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.ctaFinal.cta}
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <ContactForm lang={lang} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-6 lg:px-12 text-center text-muted-foreground">
          <p>&copy; 2025 FastLab. {t.footer}</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
