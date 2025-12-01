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
import TeamCarousel from "@/components/TeamCarousel";
import BillingCalculator from "@/components/BillingCalculator";
import { useState, useEffect } from "react";
import { Zap, Building2, Cloud, BarChart3, BookOpen, RefreshCw, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en" | "fr" | "sk" | "de" | "it" | "pt">("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        team: "Nosotros",
        pricing: "Precios",
        contact: "Contacto",
      },
      hero: {
        title: "Tu fábrica de software",
        highlight: "Potenciamos tus ideas",
        subtitle: "Transformamos los desafíos de tu empresa en soluciones de software profesional.||Productos listos para producción en **2 semanas**.",
        cta: "Agenda una consulta gratuita",
      },
      problem: {
        title: "Los desafíos del desarrollo de software empresarial",
        university: {
          title: "El Tiempo",
          points: [
            "Los proyectos tradicionales toman de 3 a 6 meses",
            "El mercado no espera, la competencia avanza",
            "Las oportunidades tienen fecha de vencimiento",
          ],
        },
        companies: {
          title: "El Costo",
          points: [
            "Equipos internos requieren contratación y capacitación",
            "Las consultoras tradicionales cobran tarifas elevadas",
            "El riesgo de inversión es alto sin validación previa",
          ],
        },
        students: {
          title: "La Calidad",
          points: [
            "Los prototipos rápidos sacrifican arquitectura",
            "El código improvisado genera deuda técnica",
            "Escalar soluciones mal diseñadas es costoso",
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
        title: "Resultados que hablan por sí mismos",
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
        title: "De la idea al producto en 14 días",
        phases: [
          {
            title: "DÍA 1-3: ANÁLISIS",
            points: [
              "Entendemos tu negocio y definimos el alcance",
              "Entrevistas, mapeo de procesos, requerimientos",
              "Entregable: Documento de especificaciones técnicas",
            ],
          },
          {
            title: "DÍA 4-10: CONSTRUCCIÓN",
            points: [
              "Nuestro equipo traduce requerimientos a arquitectura",
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
              "Producto funcional en producción",
              "Demostración con tu equipo",
              "Propuesta de desarrollo continuo",
            ],
          },
        ],
        note: "Primer producto sin costo. Validas la solución antes de comprometer presupuesto.",
      },
      benefits: {
        title: "Por qué las empresas eligen FastLab",
        items: [
          {
            title: "Velocidad de Mercado",
            points: ["2 semanas vs 3-6 meses tradicionales", "Tiempo de lanzamiento que supera expectativas"],
          },
          {
            title: "Arquitectura Profesional",
            points: ["No es un prototipo, es código listo para escalar", "Interfaz + Servidor + Base de datos + Despliegue incluidos"],
          },
          {
            title: "Nativo en la Nube",
            points: ["Desplegado en AWS, Azure o GCP según tu necesidad", "Infraestructura como código desde el día 1"],
          },
          {
            title: "Tecnología Completa",
            points: ["Python, TypeScript, SQL, R, Java", "Herramientas modernas (React, Flask, FastAPI, etc.)"],
          },
          {
            title: "Documentación Completa",
            points: ["No solo código, también guías de mantenimiento", "Facilita transición a tus equipos internos"],
          },
          {
            title: "Modelo Sin Riesgo",
            points: ["Primer producto gratis → validas → contratas desarrollo", "Tu empresa gana certeza antes de invertir"],
          },
        ],
      },
      pricing: {
        title: "Inversión inteligente",
        subtitle: "Comienza sin costo. Escala cuando veas resultados.",
        plans: [
          {
            name: "Producto Inicial Gratuito",
            price: "$0",
            duration: "2 semanas",
            description: "Valida tu solución sin riesgo",
            features: [
              "Análisis de necesidades por nuestro equipo",
              "Desarrollo completo del producto funcional",
              "Despliegue en la nube (AWS/Azure/GCP)",
              "Documentación técnica completa",
              "Demostración con tu equipo directivo",
              "Código limpio y documentado",
            ],
            highlight: false,
          },
          {
            name: "Desarrollo Profesional",
            rates: [
              { level: "Junior", price: "$40.000" },
              { level: "Middle", price: "$80.000" },
              { level: "Senior", price: "$120.000" },
              { level: "Equipo", price: "$400.000" },
            ],
            duration: "por hora",
            description: "Lleva tu producto a producción completa",
            features: [
              "Todo lo del plan gratuito incluido",
              "Desarrollo de funcionalidades adicionales",
              "Escalamiento de infraestructura",
              "Integración con sistemas existentes",
              "Mantenimiento y soporte continuo",
              "Refactorización y optimización",
              "Acuerdo de nivel de servicio y garantías",
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
            a: "Metodología probada + tecnología estandarizada + arquitectura modular. No reinventamos procesos, aplicamos patrones industriales comprobados.",
          },
          {
            q: "¿Qué pasa si decidimos no continuar después del producto inicial?",
            a: "No hay compromiso. El producto inicial es tuyo, con código limpio y documentado. Sin cláusulas ni dependencias ocultas.",
          },
          {
            q: "¿Qué sectores atienden?",
            a: "Somos agnósticos de industria. Hemos trabajado en servicios financieros, logística, manufactura, salud, educación, comercio electrónico, entre otros.",
          },
          {
            q: "¿Quién es dueño del código?",
            a: "Tu empresa. Código limpio, documentado y sin dependencias ocultas. Es completamente tuyo.",
          },
          {
            q: "¿Trabajan con universidades?",
            a: "Sí. Las universidades son uno de nuestros clientes, donde colaboramos con talento estudiantil para la fase de análisis. Pero nuestro compromiso de entrega es directo con tu empresa.",
          },
        ],
      },
      ctaFinal: {
        title: "Convierte tus ideas en software que funciona",
        subtitle: "Primera reunión sin compromiso. Te mostramos cómo podemos acelerar tu próximo proyecto de software.",
        cta: "Agendar reunión estratégica",
      },
      team: {
        title: "Nuestro Equipo",
        subtitle: "Profesionales dedicados a transformar tus ideas en realidad",
      },
      footer: "Tu fábrica de software. Potenciamos las ideas de tu empresa.",
    },
    en: {
      nav: {
        features: "Features",
        process: "Process",
        benefits: "Benefits",
        team: "About",
        pricing: "Pricing",
        contact: "Contact",
      },
      hero: {
        title: "Your Software Factory",
        highlight: "We power your ideas",
        subtitle: "We transform your business challenges into professional software solutions.||Production-ready products in **2 weeks**.",
        cta: "Schedule a free consultation",
      },
      problem: {
        title: "The challenges of enterprise software development",
        university: {
          title: "Time",
          points: [
            "Traditional projects take 3 to 6 months",
            "The market does not wait, competition moves forward",
            "Opportunities have expiration dates",
          ],
        },
        companies: {
          title: "Cost",
          points: [
            "Internal teams require hiring and training",
            "Traditional consultancies charge premium rates",
            "Investment risk is high without prior validation",
          ],
        },
        students: {
          title: "Quality",
          points: [
            "Fast prototypes sacrifice architecture",
            "Improvised code creates technical debt",
            "Scaling poorly designed solutions is expensive",
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
        title: "Results that speak for themselves",
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
        title: "From idea to product in 14 days",
        phases: [
          {
            title: "DAY 1-3: ANALYSIS",
            points: [
              "We understand your business and define scope",
              "Interviews, process mapping, requirements gathering",
              "Deliverable: Technical specifications document",
            ],
          },
          {
            title: "DAY 4-10: BUILD",
            points: [
              "Our team translates requirements to architecture",
              "Frontend, backend, database development",
              "Modern technologies, clean code, best practices",
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
              "Functional product in production",
              "Demo with your team",
              "Continuous development proposal",
            ],
          },
        ],
        note: "First product at no cost. Validate the solution before committing budget.",
      },
      benefits: {
        title: "Why companies choose FastLab",
        items: [
          {
            title: "Market Speed",
            points: ["2 weeks vs 3-6 months traditional", "Time-to-market that exceeds expectations"],
          },
          {
            title: "Professional Architecture",
            points: ["Not a prototype, it's code ready to scale", "Frontend + Backend + Database + Deployment included"],
          },
          {
            title: "Cloud Native",
            points: ["Deployed on AWS, Azure or GCP as needed", "Infrastructure as code from day 1"],
          },
          {
            title: "Complete Technology",
            points: ["Python, TypeScript, SQL, R, Java", "Modern frameworks (React, Flask, FastAPI, etc.)"],
          },
          {
            title: "Complete Documentation",
            points: ["Not just code, also maintenance guides", "Facilitates transition to your internal teams"],
          },
          {
            title: "Risk-Free Model",
            points: ["First product free → you validate → you hire development", "Your company gains certainty before investing"],
          },
        ],
      },
      pricing: {
        title: "Smart Investment",
        subtitle: "Start at no cost. Scale when you see results.",
        plans: [
          {
            name: "Free Initial Product",
            price: "$0",
            duration: "2 weeks",
            description: "Validate your solution risk-free",
            features: [
              "Needs analysis by our team",
              "Complete functional product development",
              "Cloud deployment (AWS/Azure/GCP)",
              "Complete technical documentation",
              "Demo with your executive team",
              "Clean and documented code",
            ],
            highlight: false,
          },
          {
            name: "Professional Development",
            rates: [
              { level: "Junior", price: "$10" },
              { level: "Middle", price: "$20" },
              { level: "Senior", price: "$30" },
              { level: "Team", price: "$100" },
            ],
            duration: "per hour",
            description: "Take your product to full production",
            features: [
              "Everything from the free plan included",
              "Additional feature development",
              "Infrastructure scaling",
              "Integration with existing systems",
              "Continuous maintenance and support",
              "Refactoring and optimization",
              "Service level agreement and guarantees",
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
            a: "Proven methodology + standardized technology + modular architecture. We don't reinvent processes, we apply proven industrial patterns.",
          },
          {
            q: "What if we decide not to continue after the initial product?",
            a: "No commitment. The initial product is yours, with clean and documented code. No clauses or hidden dependencies.",
          },
          {
            q: "What sectors do you serve?",
            a: "We're industry agnostic. We've worked in financial services, logistics, manufacturing, healthcare, education, e-commerce, among others.",
          },
          {
            q: "Who owns the code?",
            a: "Your company. Clean, documented code with no hidden dependencies. It's completely yours.",
          },
          {
            q: "Do you work with universities?",
            a: "Yes. Universities are one of our clients, where we collaborate with student talent for the analysis phase. But our delivery commitment is directly with your company.",
          },
        ],
      },
      ctaFinal: {
        title: "Turn your ideas into software that works",
        subtitle: "First meeting with no commitment. We show you how we can accelerate your next software project.",
        cta: "Schedule strategic meeting",
      },
      team: {
        title: "Our Team",
        subtitle: "Professionals dedicated to turning your ideas into reality",
      },
      footer: "Your software factory. We power your company's ideas.",
    },
    fr: {
      nav: {
        features: "Caractéristiques",
        process: "Processus",
        benefits: "Avantages",
        team: "Équipe",
        pricing: "Tarifs",
        contact: "Contact",
      },
      hero: {
        title: "Votre usine logicielle",
        highlight: "Nous propulsons vos idées",
        subtitle: "Nous transformons les défis de votre entreprise en solutions logicielles professionnelles.||Produits prêts pour la production en **2 semaines**.",
        cta: "Planifier une consultation gratuite",
      },
      problem: {
        title: "Les défis du développement logiciel en entreprise",
        university: {
          title: "Le Temps",
          points: [
            "Les projets traditionnels prennent 3 à 6 mois",
            "Le marché n'attend pas, la concurrence avance",
            "Les opportunités ont une date d'expiration",
          ],
        },
        companies: {
          title: "Le Coût",
          points: [
            "Les équipes internes nécessitent recrutement et formation",
            "Les cabinets de conseil traditionnels facturent des tarifs élevés",
            "Le risque d'investissement est élevé sans validation préalable",
          ],
        },
        students: {
          title: "La Qualité",
          points: [
            "Les prototypes rapides sacrifient l'architecture",
            "Le code improvisé crée de la dette technique",
            "Faire évoluer des solutions mal conçues coûte cher",
          ],
        },
      },
      cases: {
        title: "De la théorie à la production",
        items: [
          {
            title: "Détection d'anomalies IoT industriel",
            problem: "Entreprise manufacturière avec des pertes dues à des pannes non détectées sur les lignes de production",
            solution: "Système de détection en temps réel avec Isolation Forest et Random Forest sur les données des capteurs",
            stack: "Python, PostgreSQL, Docker, AWS (S3, EC2)",
            result: "Réduction de 65% des arrêts non planifiés. L'entreprise a engagé la phase 2 pour l'intégration SCADA",
          },
          {
            title: "Moteur de recommandation vidéo",
            problem: "Plateforme de contenu professionnel avec faible engagement et rétention des utilisateurs",
            solution: "Système hybride avec clustering (K-means) et filtrage collaboratif pour la personnalisation du contenu",
            stack: "Python, React, Flask, SQL Server, Azure (DevOps, CI/CD)",
            result: "Amélioration de 42% du temps de session. Pipeline de déploiement continu implémenté",
          },
          {
            title: "Classificateur automatique de demandes avec NLP",
            problem: "Entreprise de services avec 1000+ demandes mensuelles sans classification efficace",
            solution: "Modèle RoBERTa en espagnol pour la classification automatique et le routage intelligent des demandes",
            stack: "Python, transformers, PostgreSQL, Docker, GCP (Compute Engine, Cloud Storage)",
            result: "Réduction de 70% du temps de réponse. Système mis à l'échelle pour 5000+ demandes mensuelles",
          },
          {
            title: "Système de maintenance prédictive",
            problem: "Usine industrielle avec des arrêts coûteux et imprévisibles sur les machines critiques",
            solution: "Analyse de séries temporelles avec TimeSeriesKMeans et DTW pour la prédiction des pannes",
            stack: "Python, pandas, PostgreSQL, Docker, AWS (SQS, EC2)",
            result: "Anticipation de 85% des pannes avec 7 jours d'avance. ROI positif en 3 mois",
          },
          {
            title: "Plateforme d'analyse de sentiment",
            problem: "Marque sans visibilité sur la perception publique dans les réseaux sociaux",
            solution: "Pipeline NLP avec transformers pour l'analyse de sentiment et les tendances en temps réel",
            stack: "Python, React, FastAPI, MongoDB, Azure (Container Instances)",
            result: "Tableau de bord exécutif avec métriques quotidiennes. Détection précoce des crises de réputation",
          },
          {
            title: "Tableau de bord des opérations en temps réel",
            problem: "Entreprise logistique avec des données dispersées et aucune visibilité unifiée des opérations",
            solution: "ETL automatisé avec visualisation dynamique des KPI critiques et alertes proactives",
            stack: "Python, React, TypeScript, PostgreSQL, GCP (Cloud Run, BigQuery)",
            result: "Réduction de 40% des temps de réponse opérationnelle. Intégration avec les systèmes legacy",
          },
          {
            title: "Agents IA pour la surveillance de site physique",
            problem: "Validation manuelle des opérations sur le terrain avec des coûts élevés et des erreurs humaines",
            solution: "Système multi-agents avec vision par ordinateur (YOLO) pour la détection d'anomalies et les alertes automatiques",
            stack: "Python, OpenCV, YOLO, PostgreSQL, AWS (Lambda, Rekognition, IoT Core)",
            result: "Surveillance automatisée 24/7. Réduction de 80% des coûts de supervision manuelle",
          },
          {
            title: "Assistant intelligent de support client",
            problem: "Entreprise avec un volume élevé de requêtes répétitives et des temps de réponse lents",
            solution: "Chatbot avec GPT-4 et RAG sur la base de connaissances de l'entreprise pour des réponses contextuelles précises",
            stack: "Python, OpenAI API, LangChain, ChromaDB, FastAPI, Azure",
            result: "Résolution de 78% des requêtes sans intervention humaine. Satisfaction client augmentée de 45%",
          },
        ],
      },
      testimonials: {
        title: "Des résultats qui parlent d'eux-mêmes",
        items: [
          { name: "María Rodríguez", role: "Directrice de l'Innovation", company: "Compensar", quote: "Réduction de 65% des arrêts non planifiés. Le système détecte les anomalies avant que les pannes ne surviennent." },
          { name: "Carlos Méndez", role: "VP Technologie", company: "Davivienda", quote: "Amélioration de 42% du temps de session. Les utilisateurs trouvent maintenant du contenu pertinent immédiatement." },
          { name: "Ana López", role: "Responsable Développement", company: "ADA-TAS", quote: "Réduction de 70% du temps de réponse. Nous sommes passés du chaos à la classification automatique intelligente." },
          { name: "Ricardo Torres", role: "Directeur IoT", company: "GSS Analytix", quote: "Anticipation de 85% des pannes avec 7 jours d'avance. ROI positif en 3 mois." },
          { name: "Lucía Fernández", role: "Directrice Expérience Digitale", company: "LATAM Airlines", quote: "Tableau de bord exécutif avec métriques quotidiennes. Nous détectons les crises de réputation avant qu'elles n'escaladent." },
          { name: "Jorge Ramírez", role: "Responsable Technologie", company: "Davinchi", quote: "Réduction de 40% des temps de réponse opérationnelle. Intégration parfaite avec nos systèmes." },
          { name: "Patricia Morales", role: "Coordinatrice Innovation", company: "Ministerio de Educación", quote: "Surveillance automatisée 24/7. Réduction de 80% des coûts de supervision manuelle." },
          { name: "Daniel Vargas", role: "PDG", company: "TalentPitch", quote: "Résolution de 78% des requêtes sans intervention humaine. Satisfaction client augmentée de 45%." },
        ],
      },
      process: {
        title: "De l'idée au produit en 14 jours",
        phases: [
          {
            title: "JOUR 1-3 : ANALYSE",
            points: [
              "Nous comprenons votre activité et définissons le périmètre",
              "Entretiens, cartographie des processus, recueil des besoins",
              "Livrable : Document de spécifications techniques",
            ],
          },
          {
            title: "JOUR 4-10 : CONSTRUCTION",
            points: [
              "Notre équipe traduit les besoins en architecture",
              "Développement frontend, backend, base de données",
              "Technologies modernes, code propre, meilleures pratiques",
            ],
          },
          {
            title: "JOUR 11-13 : INTÉGRATION",
            points: [
              "Déploiement cloud (AWS/Azure/GCP)",
              "Documentation technique complète",
              "Tests et ajustements finaux",
            ],
          },
          {
            title: "JOUR 14 : LIVRAISON",
            points: [
              "Produit fonctionnel en production",
              "Démonstration avec votre équipe",
              "Proposition de développement continu",
            ],
          },
        ],
        note: "Premier produit sans frais. Validez la solution avant d'engager votre budget.",
      },
      benefits: {
        title: "Pourquoi les entreprises choisissent FastLab",
        items: [
          {
            title: "Rapidité de mise sur le marché",
            points: ["2 semaines vs 3-6 mois traditionnels", "Délai de commercialisation qui dépasse les attentes"],
          },
          {
            title: "Architecture professionnelle",
            points: ["Pas un prototype, c'est du code prêt à évoluer", "Frontend + Backend + Base de données + Déploiement inclus"],
          },
          {
            title: "Natif Cloud",
            points: ["Déployé sur AWS, Azure ou GCP selon vos besoins", "Infrastructure as code dès le jour 1"],
          },
          {
            title: "Technologie complète",
            points: ["Python, TypeScript, SQL, R, Java", "Frameworks modernes (React, Flask, FastAPI, etc.)"],
          },
          {
            title: "Documentation complète",
            points: ["Pas seulement du code, aussi des guides de maintenance", "Facilite la transition vers vos équipes internes"],
          },
          {
            title: "Modèle sans risque",
            points: ["Premier produit gratuit → vous validez → vous engagez le développement", "Votre entreprise gagne en certitude avant d'investir"],
          },
        ],
      },
      pricing: {
        title: "Investissement intelligent",
        subtitle: "Commencez sans frais. Évoluez quand vous voyez les résultats.",
        plans: [
          {
            name: "Produit initial gratuit",
            price: "0€",
            duration: "2 semaines",
            description: "Validez votre solution sans risque",
            features: [
              "Analyse des besoins par notre équipe",
              "Développement complet du produit fonctionnel",
              "Déploiement cloud (AWS/Azure/GCP)",
              "Documentation technique complète",
              "Démonstration avec votre équipe de direction",
              "Code propre et documenté",
            ],
            highlight: false,
          },
          {
            name: "Développement professionnel",
            rates: [
              { level: "Junior", price: "8€" },
              { level: "Middle", price: "17€" },
              { level: "Senior", price: "25€" },
              { level: "Équipe", price: "86€" },
            ],
            duration: "par heure",
            description: "Amenez votre produit en production complète",
            features: [
              "Tout du plan gratuit inclus",
              "Développement de fonctionnalités supplémentaires",
              "Mise à l'échelle de l'infrastructure",
              "Intégration avec les systèmes existants",
              "Maintenance et support continus",
              "Refactorisation et optimisation",
              "Accord de niveau de service et garanties",
              "Équipe de développement dédiée",
            ],
            highlight: true,
            note: "Minimum recommandé : 40 heures/mois",
          },
        ],
      },
      faq: {
        title: "Questions fréquentes",
        items: [
          {
            q: "Comment garantissez-vous la qualité en seulement 2 semaines ?",
            a: "Méthodologie éprouvée + technologie standardisée + architecture modulaire. Nous ne réinventons pas les processus, nous appliquons des modèles industriels éprouvés.",
          },
          {
            q: "Que se passe-t-il si nous décidons de ne pas continuer après le produit initial ?",
            a: "Aucun engagement. Le produit initial est à vous, avec un code propre et documenté. Pas de clauses ni de dépendances cachées.",
          },
          {
            q: "Quels secteurs servez-vous ?",
            a: "Nous sommes agnostiques en termes d'industrie. Nous avons travaillé dans les services financiers, la logistique, la fabrication, la santé, l'éducation, le e-commerce, entre autres.",
          },
          {
            q: "À qui appartient le code ?",
            a: "À votre entreprise. Code propre, documenté et sans dépendances cachées. Il est entièrement à vous.",
          },
          {
            q: "Travaillez-vous avec des universités ?",
            a: "Oui. Les universités sont l'un de nos clients, où nous collaborons avec des talents étudiants pour la phase d'analyse. Mais notre engagement de livraison est directement avec votre entreprise.",
          },
        ],
      },
      ctaFinal: {
        title: "Transformez vos idées en logiciel qui fonctionne",
        subtitle: "Première réunion sans engagement. Nous vous montrons comment nous pouvons accélérer votre prochain projet logiciel.",
        cta: "Planifier une réunion stratégique",
      },
      team: {
        title: "Notre équipe",
        subtitle: "Des professionnels dédiés à transformer vos idées en réalité",
      },
      footer: "Votre usine logicielle. Nous propulsons les idées de votre entreprise.",
    },
    sk: {
      nav: {
        features: "Funkcie",
        process: "Proces",
        benefits: "Výhody",
        team: "O nás",
        pricing: "Ceny",
        contact: "Kontakt",
      },
      hero: {
        title: "Vaša softvérová továreň",
        highlight: "Posilňujeme vaše nápady",
        subtitle: "Transformujeme výzvy vašej firmy na profesionálne softvérové riešenia.||Produkty pripravené na produkciu za **2 týždne**.",
        cta: "Naplánovať bezplatnú konzultáciu",
      },
      problem: {
        title: "Výzvy vývoja podnikového softvéru",
        university: {
          title: "Čas",
          points: [
            "Tradičné projekty trvajú 3 až 6 mesiacov",
            "Trh nečaká, konkurencia napreduje",
            "Príležitosti majú dátum expirácie",
          ],
        },
        companies: {
          title: "Náklady",
          points: [
            "Interné tímy vyžadujú nábor a školenie",
            "Tradičné konzultačné firmy účtujú vysoké sadzby",
            "Riziko investície je vysoké bez predchádzajúcej validácie",
          ],
        },
        students: {
          title: "Kvalita",
          points: [
            "Rýchle prototypy obetujú architektúru",
            "Improvizovaný kód vytvára technický dlh",
            "Škálovanie zle navrhnutých riešení je drahé",
          ],
        },
      },
      cases: {
        title: "Od teórie k produkcii",
        items: [
          {
            title: "Detekcia anomálií v priemyselnom IoT",
            problem: "Výrobná spoločnosť so stratami z nedetekovaných porúch výrobných liniek",
            solution: "Systém detekcie v reálnom čase s Isolation Forest a Random Forest na dátach zo senzorov",
            stack: "Python, PostgreSQL, Docker, AWS (S3, EC2)",
            result: "65% zníženie neplánovaných odstávok. Spoločnosť si objednala fázu 2 pre integráciu SCADA",
          },
          {
            title: "Motor odporúčaní videí",
            problem: "Platforma profesionálneho obsahu s nízkym zapojením a retenciou používateľov",
            solution: "Hybridný systém s klasterovaním (K-means) a kolaboratívnym filtrovaním pre personalizáciu obsahu",
            stack: "Python, React, Flask, SQL Server, Azure (DevOps, CI/CD)",
            result: "42% zlepšenie času relácie. Implementovaný pipeline kontinuálneho nasadenia",
          },
          {
            title: "Automatický klasifikátor žiadostí s NLP",
            problem: "Servisná spoločnosť s 1000+ mesačnými žiadosťami bez efektívnej klasifikácie",
            solution: "Model RoBERTa pre automatickú klasifikáciu a inteligentné smerovanie žiadostí",
            stack: "Python, transformers, PostgreSQL, Docker, GCP (Compute Engine, Cloud Storage)",
            result: "70% zníženie času odozvy. Systém škálovaný na 5000+ mesačných žiadostí",
          },
          {
            title: "Systém prediktívnej údržby",
            problem: "Priemyselný závod s nákladnými a nepredvídateľnými odstávkami kritických strojov",
            solution: "Analýza časových radov s TimeSeriesKMeans a DTW pre predikciu porúch",
            stack: "Python, pandas, PostgreSQL, Docker, AWS (SQS, EC2)",
            result: "85% anticipácia porúch so 7-dňovým predstihom. Pozitívna ROI za 3 mesiace",
          },
          {
            title: "Platforma analýzy sentimentu",
            problem: "Značka bez prehľadu o verejnom vnímaní na sociálnych sieťach",
            solution: "NLP pipeline s transformermi pre analýzu sentimentu a trendov v reálnom čase",
            stack: "Python, React, FastAPI, MongoDB, Azure (Container Instances)",
            result: "Exekutívny dashboard s dennými metrikami. Včasná detekcia reputačných kríz",
          },
          {
            title: "Dashboard operácií v reálnom čase",
            problem: "Logistická spoločnosť s roztrúsenými dátami a bez jednotného prehľadu operácií",
            solution: "Automatizovaný ETL s dynamickou vizualizáciou kritických KPI a proaktívnymi upozorneniami",
            stack: "Python, React, TypeScript, PostgreSQL, GCP (Cloud Run, BigQuery)",
            result: "40% zníženie operačných reakčných časov. Integrácia s legacy systémami",
          },
          {
            title: "AI agenti pre monitorovanie fyzického miesta",
            problem: "Manuálna validácia terénnych operácií s vysokými nákladmi a ľudskými chybami",
            solution: "Multi-agentový systém s počítačovým videním (YOLO) pre detekciu anomálií a automatické upozornenia",
            stack: "Python, OpenCV, YOLO, PostgreSQL, AWS (Lambda, Rekognition, IoT Core)",
            result: "Automatizovaný monitoring 24/7. 80% zníženie nákladov na manuálny dohľad",
          },
          {
            title: "Inteligentný asistent zákazníckej podpory",
            problem: "Spoločnosť s vysokým objemom opakujúcich sa dopytov a pomalými reakčnými časmi",
            solution: "Chatbot s GPT-4 a RAG na firemnej znalostnej báze pre presné kontextové odpovede",
            stack: "Python, OpenAI API, LangChain, ChromaDB, FastAPI, Azure",
            result: "78% vyriešených dopytov bez ľudského zásahu. Spokojnosť zákazníkov vzrástla o 45%",
          },
        ],
      },
      testimonials: {
        title: "Výsledky, ktoré hovoria samy za seba",
        items: [
          { name: "María Rodríguez", role: "Riaditeľka inovácie", company: "Compensar", quote: "65% zníženie neplánovaných odstávok. Systém detekuje anomálie skôr, ako nastanú poruchy." },
          { name: "Carlos Méndez", role: "VP technológie", company: "Davivienda", quote: "42% zlepšenie času relácie. Používatelia teraz okamžite nájdu relevantný obsah." },
          { name: "Ana López", role: "Manažérka vývoja", company: "ADA-TAS", quote: "70% zníženie času odozvy. Prešli sme od chaosu k inteligentnej automatickej klasifikácii." },
          { name: "Ricardo Torres", role: "Riaditeľ IoT", company: "GSS Analytix", quote: "85% anticipácia porúch so 7-dňovým predstihom. Pozitívna ROI za 3 mesiace." },
          { name: "Lucía Fernández", role: "Riaditeľka digitálnej skúsenosti", company: "LATAM Airlines", quote: "Exekutívny dashboard s dennými metrikami. Detekujeme reputačné krízy skôr, ako eskalujú." },
          { name: "Jorge Ramírez", role: "Manažér technológie", company: "Davinchi", quote: "40% zníženie operačných reakčných časov. Dokonalá integrácia s našimi systémami." },
          { name: "Patricia Morales", role: "Koordinátorka inovácie", company: "Ministerio de Educación", quote: "Automatizovaný monitoring 24/7. 80% zníženie nákladov na manuálny dohľad." },
          { name: "Daniel Vargas", role: "CEO", company: "TalentPitch", quote: "78% vyriešených dopytov bez ľudského zásahu. Spokojnosť zákazníkov vzrástla o 45%." },
        ],
      },
      process: {
        title: "Od nápadu k produktu za 14 dní",
        phases: [
          {
            title: "DEŇ 1-3: ANALÝZA",
            points: [
              "Pochopíme váš biznis a definujeme rozsah",
              "Rozhovory, mapovanie procesov, zber požiadaviek",
              "Výstup: Dokument technických špecifikácií",
            ],
          },
          {
            title: "DEŇ 4-10: VÝSTAVBA",
            points: [
              "Náš tím prekladá požiadavky do architektúry",
              "Vývoj frontendu, backendu, databázy",
              "Moderné technológie, čistý kód, najlepšie praktiky",
            ],
          },
          {
            title: "DEŇ 11-13: INTEGRÁCIA",
            points: [
              "Nasadenie v cloude (AWS/Azure/GCP)",
              "Kompletná technická dokumentácia",
              "Testovanie a finálne úpravy",
            ],
          },
          {
            title: "DEŇ 14: DODANIE",
            points: [
              "Funkčný produkt v produkcii",
              "Demo s vaším tímom",
              "Návrh kontinuálneho vývoja",
            ],
          },
        ],
        note: "Prvý produkt bez nákladov. Validujte riešenie pred záväzkom rozpočtu.",
      },
      benefits: {
        title: "Prečo si firmy vyberajú FastLab",
        items: [
          {
            title: "Rýchlosť na trh",
            points: ["2 týždne vs 3-6 mesiacov tradične", "Čas uvedenia na trh, ktorý prekonáva očakávania"],
          },
          {
            title: "Profesionálna architektúra",
            points: ["Nie je to prototyp, je to kód pripravený na škálovanie", "Frontend + Backend + Databáza + Nasadenie zahrnuté"],
          },
          {
            title: "Cloud Native",
            points: ["Nasadené na AWS, Azure alebo GCP podľa potreby", "Infrastructure as code od prvého dňa"],
          },
          {
            title: "Kompletná technológia",
            points: ["Python, TypeScript, SQL, R, Java", "Moderné frameworky (React, Flask, FastAPI, atď.)"],
          },
          {
            title: "Kompletná dokumentácia",
            points: ["Nielen kód, ale aj príručky údržby", "Uľahčuje prechod na vaše interné tímy"],
          },
          {
            title: "Model bez rizika",
            points: ["Prvý produkt zadarmo → validujete → objednáte vývoj", "Vaša firma získa istotu pred investíciou"],
          },
        ],
      },
      pricing: {
        title: "Inteligentná investícia",
        subtitle: "Začnite bez nákladov. Škálujte, keď uvidíte výsledky.",
        plans: [
          {
            name: "Bezplatný počiatočný produkt",
            price: "0€",
            duration: "2 týždne",
            description: "Validujte svoje riešenie bez rizika",
            features: [
              "Analýza potrieb naším tímom",
              "Kompletný vývoj funkčného produktu",
              "Nasadenie v cloude (AWS/Azure/GCP)",
              "Kompletná technická dokumentácia",
              "Demo s vaším vedením",
              "Čistý a zdokumentovaný kód",
            ],
            highlight: false,
          },
          {
            name: "Profesionálny vývoj",
            rates: [
              { level: "Junior", price: "8€" },
              { level: "Middle", price: "17€" },
              { level: "Senior", price: "25€" },
              { level: "Tím", price: "86€" },
            ],
            duration: "za hodinu",
            description: "Dotiahnite svoj produkt do plnej produkcie",
            features: [
              "Všetko z bezplatného plánu zahrnuté",
              "Vývoj ďalších funkcionalít",
              "Škálovanie infraštruktúry",
              "Integrácia s existujúcimi systémami",
              "Kontinuálna údržba a podpora",
              "Refaktoring a optimalizácia",
              "Dohoda o úrovni služieb a záruky",
              "Dedikovaný vývojový tím",
            ],
            highlight: true,
            note: "Odporúčané minimum: 40 hodín/mesiac",
          },
        ],
      },
      faq: {
        title: "Často kladené otázky",
        items: [
          {
            q: "Ako garantujete kvalitu za len 2 týždne?",
            a: "Overená metodológia + štandardizovaná technológia + modulárna architektúra. Nevymýšľame procesy znova, aplikujeme overené priemyselné vzory.",
          },
          {
            q: "Čo ak sa rozhodneme nepokračovať po počiatočnom produkte?",
            a: "Žiadny záväzok. Počiatočný produkt je váš, s čistým a zdokumentovaným kódom. Žiadne klauzuly ani skryté závislosti.",
          },
          {
            q: "Aké odvetvia obsluhujete?",
            a: "Sme odvetvovo agnostickí. Pracovali sme vo finančných službách, logistike, výrobe, zdravotníctve, vzdelávaní, e-commerce a ďalších.",
          },
          {
            q: "Komu patrí kód?",
            a: "Vašej firme. Čistý, zdokumentovaný kód bez skrytých závislostí. Je úplne váš.",
          },
          {
            q: "Spolupracujete s univerzitami?",
            a: "Áno. Univerzity sú jedným z našich klientov, kde spolupracujeme so študentskými talentmi na fáze analýzy. Ale náš záväzok dodania je priamo s vašou firmou.",
          },
        ],
      },
      ctaFinal: {
        title: "Premeňte svoje nápady na softvér, ktorý funguje",
        subtitle: "Prvé stretnutie bez záväzku. Ukážeme vám, ako môžeme zrýchliť váš ďalší softvérový projekt.",
        cta: "Naplánovať strategické stretnutie",
      },
      team: {
        title: "Náš tím",
        subtitle: "Profesionáli oddaní premene vašich nápadov na realitu",
      },
      footer: "Vaša softvérová továreň. Posilňujeme nápady vašej firmy.",
    },
    de: {
      nav: {
        features: "Funktionen",
        process: "Prozess",
        benefits: "Vorteile",
        team: "Über uns",
        pricing: "Preise",
        contact: "Kontakt",
      },
      hero: {
        title: "Ihre Software-Fabrik",
        highlight: "Wir stärken Ihre Ideen",
        subtitle: "Wir verwandeln die Herausforderungen Ihres Unternehmens in professionelle Softwarelösungen.||Produktionsreife Produkte in **2 Wochen**.",
        cta: "Kostenlose Beratung vereinbaren",
      },
      problem: {
        title: "Die Herausforderungen der Unternehmenssoftwareentwicklung",
        university: {
          title: "Zeit",
          points: [
            "Traditionelle Projekte dauern 3 bis 6 Monate",
            "Der Markt wartet nicht, die Konkurrenz schreitet voran",
            "Chancen haben ein Verfallsdatum",
          ],
        },
        companies: {
          title: "Kosten",
          points: [
            "Interne Teams erfordern Einstellung und Schulung",
            "Traditionelle Beratungsfirmen verlangen hohe Gebühren",
            "Das Investitionsrisiko ist ohne vorherige Validierung hoch",
          ],
        },
        students: {
          title: "Qualität",
          points: [
            "Schnelle Prototypen opfern Architektur",
            "Improvisierter Code schafft technische Schulden",
            "Schlecht gestaltete Lösungen zu skalieren ist teuer",
          ],
        },
      },
      cases: {
        title: "Von der Theorie zur Produktion",
        items: [
          {
            title: "IoT-Industrielle Anomalieerkennung",
            problem: "Fertigungsunternehmen mit Verlusten durch unerkannte Produktionsausfälle",
            solution: "Echtzeit-Erkennungssystem mit Isolation Forest und Random Forest auf Sensordaten",
            stack: "Python, PostgreSQL, Docker, AWS (S3, EC2)",
            result: "65% Reduzierung ungeplanter Ausfallzeiten. Unternehmen beauftragte Phase 2 für SCADA-Integration",
          },
          {
            title: "Video-Empfehlungsengine",
            problem: "Professionelle Content-Plattform mit geringem Engagement und Nutzerbindung",
            solution: "Hybridsystem mit Clustering (K-means) und kollaborativem Filtering zur Content-Personalisierung",
            stack: "Python, React, Flask, SQL Server, Azure (DevOps, CI/CD)",
            result: "42% Verbesserung der Sitzungsdauer. Kontinuierliche Deployment-Pipeline implementiert",
          },
          {
            title: "Automatischer Anfrageklassifikator mit NLP",
            problem: "Serviceunternehmen mit 1000+ monatlichen Anfragen ohne effiziente Klassifizierung",
            solution: "RoBERTa-Modell für automatische Klassifizierung und intelligente Anfragenweiterleitung",
            stack: "Python, transformers, PostgreSQL, Docker, GCP (Compute Engine, Cloud Storage)",
            result: "70% Reduzierung der Antwortzeit. System auf 5000+ monatliche Anfragen skaliert",
          },
          {
            title: "Prädiktives Wartungssystem",
            problem: "Industrieanlage mit kostspieligen und unvorhersehbaren Ausfällen kritischer Maschinen",
            solution: "Zeitreihenanalyse mit TimeSeriesKMeans und DTW zur Ausfallvorhersage",
            stack: "Python, pandas, PostgreSQL, Docker, AWS (SQS, EC2)",
            result: "85% Ausfallvorhersage mit 7 Tagen Vorlauf. Positiver ROI in 3 Monaten",
          },
          {
            title: "Sentiment-Analyse-Plattform",
            problem: "Marke ohne Einblick in die öffentliche Wahrnehmung in sozialen Medien",
            solution: "NLP-Pipeline mit Transformers für Echtzeit-Sentiment-Analyse und Trends",
            stack: "Python, React, FastAPI, MongoDB, Azure (Container Instances)",
            result: "Executive Dashboard mit täglichen Metriken. Früherkennung von Reputationskrisen",
          },
          {
            title: "Echtzeit-Operations-Dashboard",
            problem: "Logistikunternehmen mit verteilten Daten und ohne einheitliche Betriebsübersicht",
            solution: "Automatisiertes ETL mit dynamischer KPI-Visualisierung und proaktiven Warnungen",
            stack: "Python, React, TypeScript, PostgreSQL, GCP (Cloud Run, BigQuery)",
            result: "40% Reduzierung der operativen Reaktionszeiten. Integration mit Legacy-Systemen",
          },
          {
            title: "KI-Agenten für physische Standortüberwachung",
            problem: "Manuelle Validierung von Feldoperationen mit hohen Kosten und menschlichen Fehlern",
            solution: "Multi-Agenten-System mit Computer Vision (YOLO) zur Anomalieerkennung und automatischen Warnungen",
            stack: "Python, OpenCV, YOLO, PostgreSQL, AWS (Lambda, Rekognition, IoT Core)",
            result: "24/7 automatisierte Überwachung. 80% Reduzierung der manuellen Überwachungskosten",
          },
          {
            title: "Intelligenter Kundensupport-Assistent",
            problem: "Unternehmen mit hohem Volumen an wiederholenden Anfragen und langsamen Antwortzeiten",
            solution: "Chatbot mit GPT-4 und RAG auf Unternehmens-Wissensbasis für präzise kontextuelle Antworten",
            stack: "Python, OpenAI API, LangChain, ChromaDB, FastAPI, Azure",
            result: "78% Anfragelösung ohne menschliches Eingreifen. Kundenzufriedenheit um 45% gestiegen",
          },
        ],
      },
      testimonials: {
        title: "Ergebnisse, die für sich sprechen",
        items: [
          { name: "María Rodríguez", role: "Innovationsdirektorin", company: "Compensar", quote: "65% Reduzierung ungeplanter Ausfallzeiten. Das System erkennt Anomalien, bevor Ausfälle auftreten." },
          { name: "Carlos Méndez", role: "VP Technologie", company: "Davivienda", quote: "42% Verbesserung der Sitzungsdauer. Benutzer finden jetzt sofort relevante Inhalte." },
          { name: "Ana López", role: "Entwicklungsleiterin", company: "ADA-TAS", quote: "70% Reduzierung der Antwortzeit. Vom Chaos zur intelligenten automatischen Klassifizierung." },
          { name: "Ricardo Torres", role: "IoT-Direktor", company: "GSS Analytix", quote: "85% Ausfallvorhersage mit 7 Tagen Vorlauf. Positiver ROI in 3 Monaten." },
          { name: "Lucía Fernández", role: "Digital Experience Direktorin", company: "LATAM Airlines", quote: "Executive Dashboard mit täglichen Metriken. Wir erkennen Reputationskrisen, bevor sie eskalieren." },
          { name: "Jorge Ramírez", role: "Technologie-Manager", company: "Davinchi", quote: "40% Reduzierung der operativen Reaktionszeiten. Perfekte Integration mit unseren Systemen." },
          { name: "Patricia Morales", role: "Innovationskoordinatorin", company: "Ministerio de Educación", quote: "24/7 automatisierte Überwachung. 80% Reduzierung der manuellen Überwachungskosten." },
          { name: "Daniel Vargas", role: "CEO", company: "TalentPitch", quote: "78% Anfragelösung ohne menschliches Eingreifen. Kundenzufriedenheit um 45% gestiegen." },
        ],
      },
      process: {
        title: "Von der Idee zum Produkt in 14 Tagen",
        phases: [
          {
            title: "TAG 1-3: ANALYSE",
            points: [
              "Wir verstehen Ihr Geschäft und definieren den Umfang",
              "Interviews, Prozessmapping, Anforderungsaufnahme",
              "Lieferung: Technisches Spezifikationsdokument",
            ],
          },
          {
            title: "TAG 4-10: ENTWICKLUNG",
            points: [
              "Unser Team übersetzt Anforderungen in Architektur",
              "Frontend-, Backend-, Datenbankentwicklung",
              "Moderne Technologien, sauberer Code, Best Practices",
            ],
          },
          {
            title: "TAG 11-13: INTEGRATION",
            points: [
              "Cloud-Deployment (AWS/Azure/GCP)",
              "Vollständige technische Dokumentation",
              "Tests und finale Anpassungen",
            ],
          },
          {
            title: "TAG 14: LIEFERUNG",
            points: [
              "Funktionales Produkt in Produktion",
              "Demo mit Ihrem Team",
              "Vorschlag zur kontinuierlichen Entwicklung",
            ],
          },
        ],
        note: "Erstes Produkt kostenlos. Validieren Sie die Lösung, bevor Sie Budget binden.",
      },
      benefits: {
        title: "Warum Unternehmen FastLab wählen",
        items: [
          {
            title: "Marktgeschwindigkeit",
            points: ["2 Wochen vs 3-6 Monate traditionell", "Time-to-Market, das Erwartungen übertrifft"],
          },
          {
            title: "Professionelle Architektur",
            points: ["Kein Prototyp, sondern Code bereit zur Skalierung", "Frontend + Backend + Datenbank + Deployment inklusive"],
          },
          {
            title: "Cloud Native",
            points: ["Bereitgestellt auf AWS, Azure oder GCP nach Bedarf", "Infrastructure as Code ab Tag 1"],
          },
          {
            title: "Vollständige Technologie",
            points: ["Python, TypeScript, SQL, R, Java", "Moderne Frameworks (React, Flask, FastAPI, etc.)"],
          },
          {
            title: "Vollständige Dokumentation",
            points: ["Nicht nur Code, auch Wartungsanleitungen", "Erleichtert den Übergang zu Ihren internen Teams"],
          },
          {
            title: "Risikofreies Modell",
            points: ["Erstes Produkt kostenlos → Sie validieren → Sie beauftragen Entwicklung", "Ihr Unternehmen gewinnt Sicherheit vor der Investition"],
          },
        ],
      },
      pricing: {
        title: "Intelligente Investition",
        subtitle: "Starten Sie kostenlos. Skalieren Sie, wenn Sie Ergebnisse sehen.",
        plans: [
          {
            name: "Kostenloses Erstprodukt",
            price: "0€",
            duration: "2 Wochen",
            description: "Validieren Sie Ihre Lösung risikofrei",
            features: [
              "Bedarfsanalyse durch unser Team",
              "Vollständige funktionale Produktentwicklung",
              "Cloud-Deployment (AWS/Azure/GCP)",
              "Vollständige technische Dokumentation",
              "Demo mit Ihrer Geschäftsleitung",
              "Sauberer und dokumentierter Code",
            ],
            highlight: false,
          },
          {
            name: "Professionelle Entwicklung",
            rates: [
              { level: "Junior", price: "8€" },
              { level: "Middle", price: "17€" },
              { level: "Senior", price: "25€" },
              { level: "Team", price: "86€" },
            ],
            duration: "pro Stunde",
            description: "Bringen Sie Ihr Produkt in volle Produktion",
            features: [
              "Alles aus dem kostenlosen Plan inklusive",
              "Entwicklung zusätzlicher Funktionen",
              "Infrastruktur-Skalierung",
              "Integration mit bestehenden Systemen",
              "Kontinuierliche Wartung und Support",
              "Refactoring und Optimierung",
              "Service Level Agreement und Garantien",
              "Dediziertes Entwicklungsteam",
            ],
            highlight: true,
            note: "Empfohlenes Minimum: 40 Stunden/Monat",
          },
        ],
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: [
          {
            q: "Wie garantieren Sie Qualität in nur 2 Wochen?",
            a: "Bewährte Methodik + standardisierte Technologie + modulare Architektur. Wir erfinden Prozesse nicht neu, wir wenden bewährte Industriemuster an.",
          },
          {
            q: "Was passiert, wenn wir nach dem Erstprodukt nicht weitermachen möchten?",
            a: "Keine Verpflichtung. Das Erstprodukt gehört Ihnen, mit sauberem und dokumentiertem Code. Keine Klauseln oder versteckten Abhängigkeiten.",
          },
          {
            q: "Welche Branchen bedienen Sie?",
            a: "Wir sind branchenunabhängig. Wir haben in Finanzdienstleistungen, Logistik, Fertigung, Gesundheitswesen, Bildung, E-Commerce und anderen gearbeitet.",
          },
          {
            q: "Wem gehört der Code?",
            a: "Ihrem Unternehmen. Sauberer, dokumentierter Code ohne versteckte Abhängigkeiten. Er gehört vollständig Ihnen.",
          },
          {
            q: "Arbeiten Sie mit Universitäten zusammen?",
            a: "Ja. Universitäten sind einer unserer Kunden, wo wir mit studentischen Talenten in der Analysephase zusammenarbeiten. Aber unsere Lieferverpflichtung ist direkt mit Ihrem Unternehmen.",
          },
        ],
      },
      ctaFinal: {
        title: "Verwandeln Sie Ihre Ideen in funktionierende Software",
        subtitle: "Erstes Treffen unverbindlich. Wir zeigen Ihnen, wie wir Ihr nächstes Softwareprojekt beschleunigen können.",
        cta: "Strategisches Meeting vereinbaren",
      },
      team: {
        title: "Unser Team",
        subtitle: "Fachleute, die sich der Verwirklichung Ihrer Ideen widmen",
      },
      footer: "Ihre Software-Fabrik. Wir stärken die Ideen Ihres Unternehmens.",
    },
    it: {
      nav: {
        features: "Funzionalità",
        process: "Processo",
        benefits: "Vantaggi",
        team: "Chi siamo",
        pricing: "Prezzi",
        contact: "Contatti",
      },
      hero: {
        title: "La tua fabbrica di software",
        highlight: "Potenziamo le tue idee",
        subtitle: "Trasformiamo le sfide della tua azienda in soluzioni software professionali.||Prodotti pronti per la produzione in **2 settimane**.",
        cta: "Prenota una consulenza gratuita",
      },
      problem: {
        title: "Le sfide dello sviluppo software aziendale",
        university: {
          title: "Tempo",
          points: [
            "I progetti tradizionali richiedono da 3 a 6 mesi",
            "Il mercato non aspetta, la concorrenza avanza",
            "Le opportunità hanno una data di scadenza",
          ],
        },
        companies: {
          title: "Costo",
          points: [
            "I team interni richiedono assunzione e formazione",
            "Le società di consulenza tradizionali applicano tariffe elevate",
            "Il rischio di investimento è alto senza validazione preventiva",
          ],
        },
        students: {
          title: "Qualità",
          points: [
            "I prototipi veloci sacrificano l'architettura",
            "Il codice improvvisato crea debito tecnico",
            "Scalare soluzioni mal progettate è costoso",
          ],
        },
      },
      cases: {
        title: "Dalla teoria alla produzione",
        items: [
          {
            title: "Rilevamento anomalie IoT industriale",
            problem: "Azienda manifatturiera con perdite da guasti non rilevati nelle linee di produzione",
            solution: "Sistema di rilevamento in tempo reale con Isolation Forest e Random Forest sui dati dei sensori",
            stack: "Python, PostgreSQL, Docker, AWS (S3, EC2)",
            result: "65% di riduzione dei fermi non pianificati. Azienda ha commissionato la fase 2 per l'integrazione SCADA",
          },
          {
            title: "Motore di raccomandazione video",
            problem: "Piattaforma di contenuti professionali con basso engagement e retention degli utenti",
            solution: "Sistema ibrido con clustering (K-means) e filtraggio collaborativo per la personalizzazione dei contenuti",
            stack: "Python, React, Flask, SQL Server, Azure (DevOps, CI/CD)",
            result: "42% di miglioramento nel tempo di sessione. Pipeline di deployment continuo implementata",
          },
          {
            title: "Classificatore automatico richieste con NLP",
            problem: "Azienda di servizi con 1000+ richieste mensili senza classificazione efficiente",
            solution: "Modello RoBERTa per classificazione automatica e instradamento intelligente delle richieste",
            stack: "Python, transformers, PostgreSQL, Docker, GCP (Compute Engine, Cloud Storage)",
            result: "70% di riduzione del tempo di risposta. Sistema scalato a 5000+ richieste mensili",
          },
          {
            title: "Sistema di manutenzione predittiva",
            problem: "Impianto industriale con fermi costosi e imprevedibili su macchinari critici",
            solution: "Analisi serie temporali con TimeSeriesKMeans e DTW per la previsione dei guasti",
            stack: "Python, pandas, PostgreSQL, Docker, AWS (SQS, EC2)",
            result: "85% di anticipazione guasti con 7 giorni di preavviso. ROI positivo in 3 mesi",
          },
          {
            title: "Piattaforma di analisi del sentiment",
            problem: "Brand senza visibilità sulla percezione pubblica nei social media",
            solution: "Pipeline NLP con transformers per analisi del sentiment e trend in tempo reale",
            stack: "Python, React, FastAPI, MongoDB, Azure (Container Instances)",
            result: "Dashboard esecutiva con metriche giornaliere. Rilevamento precoce delle crisi reputazionali",
          },
          {
            title: "Dashboard operazioni in tempo reale",
            problem: "Azienda logistica con dati dispersi e senza visibilità unificata delle operazioni",
            solution: "ETL automatizzato con visualizzazione dinamica dei KPI critici e alert proattivi",
            stack: "Python, React, TypeScript, PostgreSQL, GCP (Cloud Run, BigQuery)",
            result: "40% di riduzione dei tempi di risposta operativa. Integrazione con sistemi legacy",
          },
          {
            title: "Agenti IA per monitoraggio sito fisico",
            problem: "Validazione manuale delle operazioni sul campo con costi elevati ed errori umani",
            solution: "Sistema multi-agente con computer vision (YOLO) per rilevamento anomalie e alert automatici",
            stack: "Python, OpenCV, YOLO, PostgreSQL, AWS (Lambda, Rekognition, IoT Core)",
            result: "Monitoraggio automatizzato 24/7. 80% di riduzione dei costi di supervisione manuale",
          },
          {
            title: "Assistente intelligente supporto clienti",
            problem: "Azienda con alto volume di richieste ripetitive e tempi di risposta lenti",
            solution: "Chatbot con GPT-4 e RAG su knowledge base aziendale per risposte contestuali precise",
            stack: "Python, OpenAI API, LangChain, ChromaDB, FastAPI, Azure",
            result: "78% delle richieste risolte senza intervento umano. Soddisfazione clienti aumentata del 45%",
          },
        ],
      },
      testimonials: {
        title: "Risultati che parlano da soli",
        items: [
          { name: "María Rodríguez", role: "Direttrice Innovazione", company: "Compensar", quote: "65% di riduzione dei fermi non pianificati. Il sistema rileva anomalie prima che si verifichino guasti." },
          { name: "Carlos Méndez", role: "VP Tecnologia", company: "Davivienda", quote: "42% di miglioramento nel tempo di sessione. Gli utenti trovano subito contenuti rilevanti." },
          { name: "Ana López", role: "Responsabile Sviluppo", company: "ADA-TAS", quote: "70% di riduzione del tempo di risposta. Dal caos alla classificazione automatica intelligente." },
          { name: "Ricardo Torres", role: "Direttore IoT", company: "GSS Analytix", quote: "85% di anticipazione guasti con 7 giorni di preavviso. ROI positivo in 3 mesi." },
          { name: "Lucía Fernández", role: "Direttrice Digital Experience", company: "LATAM Airlines", quote: "Dashboard esecutiva con metriche giornaliere. Rileviamo crisi reputazionali prima che escalino." },
          { name: "Jorge Ramírez", role: "Manager Tecnologia", company: "Davinchi", quote: "40% di riduzione dei tempi di risposta operativa. Integrazione perfetta con i nostri sistemi." },
          { name: "Patricia Morales", role: "Coordinatrice Innovazione", company: "Ministerio de Educación", quote: "Monitoraggio automatizzato 24/7. 80% di riduzione dei costi di supervisione manuale." },
          { name: "Daniel Vargas", role: "CEO", company: "TalentPitch", quote: "78% delle richieste risolte senza intervento umano. Soddisfazione clienti aumentata del 45%." },
        ],
      },
      process: {
        title: "Dall'idea al prodotto in 14 giorni",
        phases: [
          {
            title: "GIORNO 1-3: ANALISI",
            points: [
              "Comprendiamo il tuo business e definiamo l'ambito",
              "Interviste, mappatura processi, raccolta requisiti",
              "Deliverable: Documento di specifiche tecniche",
            ],
          },
          {
            title: "GIORNO 4-10: SVILUPPO",
            points: [
              "Il nostro team traduce i requisiti in architettura",
              "Sviluppo frontend, backend, database",
              "Tecnologie moderne, codice pulito, best practice",
            ],
          },
          {
            title: "GIORNO 11-13: INTEGRAZIONE",
            points: [
              "Deploy su cloud (AWS/Azure/GCP)",
              "Documentazione tecnica completa",
              "Test e aggiustamenti finali",
            ],
          },
          {
            title: "GIORNO 14: CONSEGNA",
            points: [
              "Prodotto funzionale in produzione",
              "Demo con il tuo team",
              "Proposta di sviluppo continuo",
            ],
          },
        ],
        note: "Primo prodotto gratuito. Valida la soluzione prima di impegnare budget.",
      },
      benefits: {
        title: "Perché le aziende scelgono FastLab",
        items: [
          {
            title: "Velocità di mercato",
            points: ["2 settimane vs 3-6 mesi tradizionali", "Time-to-market che supera le aspettative"],
          },
          {
            title: "Architettura professionale",
            points: ["Non è un prototipo, è codice pronto a scalare", "Frontend + Backend + Database + Deploy inclusi"],
          },
          {
            title: "Cloud Native",
            points: ["Deploy su AWS, Azure o GCP secondo necessità", "Infrastructure as code dal giorno 1"],
          },
          {
            title: "Tecnologia completa",
            points: ["Python, TypeScript, SQL, R, Java", "Framework moderni (React, Flask, FastAPI, ecc.)"],
          },
          {
            title: "Documentazione completa",
            points: ["Non solo codice, anche guide di manutenzione", "Facilita il passaggio ai tuoi team interni"],
          },
          {
            title: "Modello senza rischio",
            points: ["Primo prodotto gratis → validi → commissioni sviluppo", "La tua azienda guadagna certezza prima di investire"],
          },
        ],
      },
      pricing: {
        title: "Investimento intelligente",
        subtitle: "Inizia gratis. Scala quando vedi risultati.",
        plans: [
          {
            name: "Prodotto iniziale gratuito",
            price: "0€",
            duration: "2 settimane",
            description: "Valida la tua soluzione senza rischi",
            features: [
              "Analisi delle necessità dal nostro team",
              "Sviluppo completo del prodotto funzionale",
              "Deploy su cloud (AWS/Azure/GCP)",
              "Documentazione tecnica completa",
              "Demo con il tuo team direttivo",
              "Codice pulito e documentato",
            ],
            highlight: false,
          },
          {
            name: "Sviluppo professionale",
            rates: [
              { level: "Junior", price: "8€" },
              { level: "Middle", price: "17€" },
              { level: "Senior", price: "25€" },
              { level: "Team", price: "86€" },
            ],
            duration: "all'ora",
            description: "Porta il tuo prodotto in produzione completa",
            features: [
              "Tutto del piano gratuito incluso",
              "Sviluppo funzionalità aggiuntive",
              "Scaling dell'infrastruttura",
              "Integrazione con sistemi esistenti",
              "Manutenzione e supporto continuo",
              "Refactoring e ottimizzazione",
              "Service Level Agreement e garanzie",
              "Team di sviluppo dedicato",
            ],
            highlight: true,
            note: "Minimo raccomandato: 40 ore/mese",
          },
        ],
      },
      faq: {
        title: "Domande frequenti",
        items: [
          {
            q: "Come garantite la qualità in solo 2 settimane?",
            a: "Metodologia collaudata + tecnologia standardizzata + architettura modulare. Non reinventiamo i processi, applichiamo pattern industriali comprovati.",
          },
          {
            q: "Cosa succede se decidiamo di non continuare dopo il prodotto iniziale?",
            a: "Nessun impegno. Il prodotto iniziale è tuo, con codice pulito e documentato. Nessuna clausola o dipendenza nascosta.",
          },
          {
            q: "Quali settori servite?",
            a: "Siamo agnostici rispetto all'industria. Abbiamo lavorato in servizi finanziari, logistica, manifattura, sanità, istruzione, e-commerce e altri.",
          },
          {
            q: "Di chi è il codice?",
            a: "Della tua azienda. Codice pulito, documentato e senza dipendenze nascoste. È completamente tuo.",
          },
          {
            q: "Lavorate con le università?",
            a: "Sì. Le università sono uno dei nostri clienti, dove collaboriamo con talenti studenteschi per la fase di analisi. Ma il nostro impegno di consegna è diretto con la tua azienda.",
          },
        ],
      },
      ctaFinal: {
        title: "Trasforma le tue idee in software che funziona",
        subtitle: "Primo incontro senza impegno. Ti mostriamo come possiamo accelerare il tuo prossimo progetto software.",
        cta: "Prenota un incontro strategico",
      },
      team: {
        title: "Il nostro team",
        subtitle: "Professionisti dedicati a trasformare le tue idee in realtà",
      },
      footer: "La tua fabbrica di software. Potenziamo le idee della tua azienda.",
    },
    pt: {
      nav: {
        features: "Funcionalidades",
        process: "Processo",
        benefits: "Benefícios",
        team: "Sobre nós",
        pricing: "Preços",
        contact: "Contato",
      },
      hero: {
        title: "Sua fábrica de software",
        highlight: "Potencializamos suas ideias",
        subtitle: "Transformamos os desafios da sua empresa em soluções de software profissional.||Produtos prontos para produção em **2 semanas**.",
        cta: "Agende uma consulta gratuita",
      },
      problem: {
        title: "Os desafios do desenvolvimento de software empresarial",
        university: {
          title: "Tempo",
          points: [
            "Projetos tradicionais levam de 3 a 6 meses",
            "O mercado não espera, a concorrência avança",
            "Oportunidades têm data de validade",
          ],
        },
        companies: {
          title: "Custo",
          points: [
            "Equipes internas requerem contratação e treinamento",
            "Consultorias tradicionais cobram taxas elevadas",
            "O risco de investimento é alto sem validação prévia",
          ],
        },
        students: {
          title: "Qualidade",
          points: [
            "Protótipos rápidos sacrificam arquitetura",
            "Código improvisado cria dívida técnica",
            "Escalar soluções mal projetadas é caro",
          ],
        },
      },
      cases: {
        title: "Da teoria à produção",
        items: [
          {
            title: "Detecção de anomalias IoT industrial",
            problem: "Empresa manufatureira com perdas por falhas não detectadas nas linhas de produção",
            solution: "Sistema de detecção em tempo real com Isolation Forest e Random Forest em dados de sensores",
            stack: "Python, PostgreSQL, Docker, AWS (S3, EC2)",
            result: "65% de redução em paradas não planejadas. Empresa contratou fase 2 para integração SCADA",
          },
          {
            title: "Motor de recomendação de vídeos",
            problem: "Plataforma de conteúdo profissional com baixo engajamento e retenção de usuários",
            solution: "Sistema híbrido com clustering (K-means) e filtragem colaborativa para personalização de conteúdo",
            stack: "Python, React, Flask, SQL Server, Azure (DevOps, CI/CD)",
            result: "42% de melhoria no tempo de sessão. Pipeline de deploy contínuo implementado",
          },
          {
            title: "Classificador automático de solicitações com NLP",
            problem: "Empresa de serviços com 1000+ solicitações mensais sem classificação eficiente",
            solution: "Modelo RoBERTa para classificação automática e roteamento inteligente de solicitações",
            stack: "Python, transformers, PostgreSQL, Docker, GCP (Compute Engine, Cloud Storage)",
            result: "70% de redução no tempo de resposta. Sistema escalado para 5000+ solicitações mensais",
          },
          {
            title: "Sistema de manutenção preditiva",
            problem: "Planta industrial com paradas custosas e imprevisíveis em máquinas críticas",
            solution: "Análise de séries temporais com TimeSeriesKMeans e DTW para previsão de falhas",
            stack: "Python, pandas, PostgreSQL, Docker, AWS (SQS, EC2)",
            result: "85% de antecipação de falhas com 7 dias de antecedência. ROI positivo em 3 meses",
          },
          {
            title: "Plataforma de análise de sentimento",
            problem: "Marca sem visibilidade sobre percepção pública nas redes sociais",
            solution: "Pipeline NLP com transformers para análise de sentimento e tendências em tempo real",
            stack: "Python, React, FastAPI, MongoDB, Azure (Container Instances)",
            result: "Dashboard executivo com métricas diárias. Detecção antecipada de crises de reputação",
          },
          {
            title: "Dashboard de operações em tempo real",
            problem: "Empresa logística com dados dispersos e sem visibilidade unificada das operações",
            solution: "ETL automatizado com visualização dinâmica de KPIs críticos e alertas proativos",
            stack: "Python, React, TypeScript, PostgreSQL, GCP (Cloud Run, BigQuery)",
            result: "40% de redução nos tempos de resposta operacional. Integração com sistemas legados",
          },
          {
            title: "Agentes IA para monitoramento de site físico",
            problem: "Validação manual de operações em campo com custos elevados e erros humanos",
            solution: "Sistema multi-agente com visão computacional (YOLO) para detecção de anomalias e alertas automáticos",
            stack: "Python, OpenCV, YOLO, PostgreSQL, AWS (Lambda, Rekognition, IoT Core)",
            result: "Monitoramento automatizado 24/7. 80% de redução nos custos de supervisão manual",
          },
          {
            title: "Assistente inteligente de suporte ao cliente",
            problem: "Empresa com alto volume de consultas repetitivas e tempos de resposta lentos",
            solution: "Chatbot com GPT-4 e RAG em base de conhecimento empresarial para respostas contextuais precisas",
            stack: "Python, OpenAI API, LangChain, ChromaDB, FastAPI, Azure",
            result: "78% das consultas resolvidas sem intervenção humana. Satisfação do cliente aumentou 45%",
          },
        ],
      },
      testimonials: {
        title: "Resultados que falam por si",
        items: [
          { name: "María Rodríguez", role: "Diretora de Inovação", company: "Compensar", quote: "65% de redução em paradas não planejadas. O sistema detecta anomalias antes que ocorram falhas." },
          { name: "Carlos Méndez", role: "VP de Tecnologia", company: "Davivienda", quote: "42% de melhoria no tempo de sessão. Usuários encontram conteúdo relevante imediatamente." },
          { name: "Ana López", role: "Gerente de Desenvolvimento", company: "ADA-TAS", quote: "70% de redução no tempo de resposta. Do caos à classificação automática inteligente." },
          { name: "Ricardo Torres", role: "Diretor de IoT", company: "GSS Analytix", quote: "85% de antecipação de falhas com 7 dias de antecedência. ROI positivo em 3 meses." },
          { name: "Lucía Fernández", role: "Diretora de Experiência Digital", company: "LATAM Airlines", quote: "Dashboard executivo com métricas diárias. Detectamos crises de reputação antes que escalem." },
          { name: "Jorge Ramírez", role: "Gerente de Tecnologia", company: "Davinchi", quote: "40% de redução nos tempos de resposta operacional. Integração perfeita com nossos sistemas." },
          { name: "Patricia Morales", role: "Coordenadora de Inovação", company: "Ministerio de Educación", quote: "Monitoramento automatizado 24/7. 80% de redução nos custos de supervisão manual." },
          { name: "Daniel Vargas", role: "CEO", company: "TalentPitch", quote: "78% das consultas resolvidas sem intervenção humana. Satisfação do cliente aumentou 45%." },
        ],
      },
      process: {
        title: "Da ideia ao produto em 14 dias",
        phases: [
          {
            title: "DIA 1-3: ANÁLISE",
            points: [
              "Entendemos seu negócio e definimos o escopo",
              "Entrevistas, mapeamento de processos, levantamento de requisitos",
              "Entregável: Documento de especificações técnicas",
            ],
          },
          {
            title: "DIA 4-10: CONSTRUÇÃO",
            points: [
              "Nossa equipe traduz requisitos em arquitetura",
              "Desenvolvimento de frontend, backend, banco de dados",
              "Tecnologias modernas, código limpo, melhores práticas",
            ],
          },
          {
            title: "DIA 11-13: INTEGRAÇÃO",
            points: [
              "Deploy na nuvem (AWS/Azure/GCP)",
              "Documentação técnica completa",
              "Testes e ajustes finais",
            ],
          },
          {
            title: "DIA 14: ENTREGA",
            points: [
              "Produto funcional em produção",
              "Demo com sua equipe",
              "Proposta de desenvolvimento contínuo",
            ],
          },
        ],
        note: "Primeiro produto sem custo. Valide a solução antes de comprometer orçamento.",
      },
      benefits: {
        title: "Por que empresas escolhem FastLab",
        items: [
          {
            title: "Velocidade de mercado",
            points: ["2 semanas vs 3-6 meses tradicionais", "Time-to-market que supera expectativas"],
          },
          {
            title: "Arquitetura profissional",
            points: ["Não é um protótipo, é código pronto para escalar", "Frontend + Backend + Banco de dados + Deploy incluídos"],
          },
          {
            title: "Cloud Native",
            points: ["Deploy em AWS, Azure ou GCP conforme necessidade", "Infrastructure as code desde o dia 1"],
          },
          {
            title: "Tecnologia completa",
            points: ["Python, TypeScript, SQL, R, Java", "Frameworks modernos (React, Flask, FastAPI, etc.)"],
          },
          {
            title: "Documentação completa",
            points: ["Não apenas código, também guias de manutenção", "Facilita transição para suas equipes internas"],
          },
          {
            title: "Modelo sem risco",
            points: ["Primeiro produto grátis → você valida → contrata desenvolvimento", "Sua empresa ganha certeza antes de investir"],
          },
        ],
      },
      pricing: {
        title: "Investimento inteligente",
        subtitle: "Comece sem custo. Escale quando ver resultados.",
        plans: [
          {
            name: "Produto inicial gratuito",
            price: "0€",
            duration: "2 semanas",
            description: "Valide sua solução sem risco",
            features: [
              "Análise de necessidades pela nossa equipe",
              "Desenvolvimento completo do produto funcional",
              "Deploy na nuvem (AWS/Azure/GCP)",
              "Documentação técnica completa",
              "Demo com sua equipe diretiva",
              "Código limpo e documentado",
            ],
            highlight: false,
          },
          {
            name: "Desenvolvimento profissional",
            rates: [
              { level: "Junior", price: "8€" },
              { level: "Middle", price: "17€" },
              { level: "Senior", price: "25€" },
              { level: "Equipa", price: "86€" },
            ],
            duration: "por hora",
            description: "Leve seu produto à produção completa",
            features: [
              "Tudo do plano gratuito incluído",
              "Desenvolvimento de funcionalidades adicionais",
              "Escalabilidade de infraestrutura",
              "Integração com sistemas existentes",
              "Manutenção e suporte contínuo",
              "Refatoração e otimização",
              "Acordo de nível de serviço e garantias",
              "Equipe de desenvolvimento dedicada",
            ],
            highlight: true,
            note: "Mínimo recomendado: 40 horas/mês",
          },
        ],
      },
      faq: {
        title: "Perguntas frequentes",
        items: [
          {
            q: "Como garantem qualidade em apenas 2 semanas?",
            a: "Metodologia comprovada + tecnologia padronizada + arquitetura modular. Não reinventamos processos, aplicamos padrões industriais comprovados.",
          },
          {
            q: "E se decidirmos não continuar após o produto inicial?",
            a: "Sem compromisso. O produto inicial é seu, com código limpo e documentado. Sem cláusulas ou dependências ocultas.",
          },
          {
            q: "Quais setores vocês atendem?",
            a: "Somos agnósticos de indústria. Trabalhamos em serviços financeiros, logística, manufatura, saúde, educação, e-commerce, entre outros.",
          },
          {
            q: "De quem é o código?",
            a: "Da sua empresa. Código limpo, documentado e sem dependências ocultas. É completamente seu.",
          },
          {
            q: "Vocês trabalham com universidades?",
            a: "Sim. Universidades são um de nossos clientes, onde colaboramos com talentos estudantis para a fase de análise. Mas nosso compromisso de entrega é direto com sua empresa.",
          },
        ],
      },
      ctaFinal: {
        title: "Transforme suas ideias em software que funciona",
        subtitle: "Primeira reunião sem compromisso. Mostramos como podemos acelerar seu próximo projeto de software.",
        cta: "Agendar reunião estratégica",
      },
      team: {
        title: "Nossa equipe",
        subtitle: "Profissionais dedicados a transformar suas ideias em realidade",
      },
      footer: "Sua fábrica de software. Potencializamos as ideias da sua empresa.",
    },
  };

  const t = content[lang];

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-background/80 backdrop-blur-md border-b overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 relative z-[10000]">
              <div className="text-xl md:text-2xl font-bold">FastLab</div>
            </div>

            {/* Center Menu - 6 links */}
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
              <a href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.team}
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.pricing}
              </a>
              <a href="#contact-form" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.contact}
              </a>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-1 md:gap-2 relative z-[10000]">
              {/* Language Toggle - Dropdown en móvil, banderas en desktop */}

              {/* Mobile: Dropdown selector */}
              <div className="flex md:hidden items-center">
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value as "es" | "en" | "fr" | "sk" | "de" | "it" | "pt")}
                  className="px-2 py-1.5 text-sm font-medium rounded border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer"
                  aria-label="Select language"
                >
                  <option value="en">🇬🇧 English</option>
                  <option value="es">🇪🇸 Español</option>
                  <option value="fr">🇫🇷 Français</option>
                  <option value="de">🇩🇪 Deutsch</option>
                  <option value="it">🇮🇹 Italiano</option>
                  <option value="pt">🇵🇹 Português</option>
                  <option value="sk">🇸🇰 Slovenčina</option>
                </select>
              </div>

              {/* Desktop: Flag buttons */}
              <div className="hidden md:flex items-center">
                <button
                  onClick={() => setLang("en")}
                  className={`px-2 py-1.5 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                    lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="English"
                >
                  <svg className="w-4 h-3" viewBox="0 0 640 480">
                    <path fill="#012169" d="M0 0h640v480H0z"/>
                    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                  </svg>
                  <span>En</span>
                </button>
                <button
                  onClick={() => setLang("es")}
                  className={`px-2 py-1.5 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                    lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Español"
                >
                  <svg className="w-4 h-3" viewBox="0 0 640 480">
                    <path fill="#AA151B" d="M0 0h640v480H0z"/>
                    <path fill="#F1BF00" d="M0 120h640v240H0z"/>
                  </svg>
                  <span>Es</span>
                </button>
                <button
                  onClick={() => setLang("fr")}
                  className={`px-2 py-1.5 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                    lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Français"
                >
                  <svg className="w-4 h-3" viewBox="0 0 640 480">
                    <path fill="#002654" d="M0 0h213.3v480H0z"/>
                    <path fill="#FFF" d="M213.3 0h213.4v480H213.3z"/>
                    <path fill="#CE1126" d="M426.7 0H640v480H426.7z"/>
                  </svg>
                  <span>Fr</span>
                </button>
                <button
                  onClick={() => setLang("de")}
                  className={`px-2 py-1.5 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                    lang === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Deutsch"
                >
                  <svg className="w-4 h-3" viewBox="0 0 640 480">
                    <path fill="#000" d="M0 0h640v160H0z"/>
                    <path fill="#D00" d="M0 160h640v160H0z"/>
                    <path fill="#FFCE00" d="M0 320h640v160H0z"/>
                  </svg>
                  <span>De</span>
                </button>
                <button
                  onClick={() => setLang("it")}
                  className={`px-2 py-1.5 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                    lang === "it" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Italiano"
                >
                  <svg className="w-4 h-3" viewBox="0 0 640 480">
                    <path fill="#009246" d="M0 0h213.3v480H0z"/>
                    <path fill="#FFF" d="M213.3 0h213.4v480H213.3z"/>
                    <path fill="#CE2B37" d="M426.7 0H640v480H426.7z"/>
                  </svg>
                  <span>It</span>
                </button>
                <button
                  onClick={() => setLang("pt")}
                  className={`px-2 py-1.5 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                    lang === "pt" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Português"
                >
                  <svg className="w-4 h-3" viewBox="0 0 640 480">
                    <path fill="#006600" d="M0 0h640v480H0z"/>
                    <path fill="#FF0000" d="M256 0h384v480H256z"/>
                    <circle fill="#FFCC00" cx="256" cy="240" r="80"/>
                    <circle fill="#006600" cx="256" cy="240" r="64"/>
                    <path fill="#FFCC00" d="M256 176c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 112c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"/>
                  </svg>
                  <span>Pt</span>
                </button>
                <button
                  onClick={() => setLang("sk")}
                  className={`px-2 py-1.5 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                    lang === "sk" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Slovenčina"
                >
                  <svg className="w-4 h-3" viewBox="0 0 640 480">
                    <path fill="#ee1c25" d="M0 0h640v480H0z"/>
                    <path fill="#0b4ea2" d="M0 0h640v320H0z"/>
                    <path fill="#fff" d="M0 0h640v160H0z"/>
                    <path fill="#fff" d="M233 370.8c-43-20.7-104.6-61.9-104.6-143.2 0-81.4 4.4-107.5 4.4-107.5h200.4s4.4 26.1 4.4 107.5c0 81.3-61.5 122.5-104.6 143.2z"/>
                    <path fill="#ee1c25" d="M233 360c-39.1-19.9-96-57.1-96-132.4 0-75.3 4-99.6 4-99.6h184s4 24.3 4 99.6c0 75.3-56.9 112.5-96 132.4z"/>
                    <path fill="#fff" d="M241 209.3h-16.6v-16.6h-16.6v16.6H191v16.6h16.8v33.2h-50c.5 20.9 4.7 39.1 11.9 54.7H218v-29.8h16.6v29.8h48.2c7.2-15.6 11.5-33.8 11.9-54.7h-50v-33.2h16.6v-16.6h-19.3z"/>
                    <path fill="#0b4ea2" d="M233 263.3c-11.3 0-32.6-29.9-32.6-29.9s-14.6 19.3-27.9 19.3c4.6 23.1 20.4 45.5 27 54 10.8 4 22 6.5 33.5 6.5s22.7-2.5 33.5-6.5c6.6-8.5 22.4-30.9 27-54-13.3 0-27.9-19.3-27.9-19.3s-21.3 29.9-32.6 29.9z"/>
                  </svg>
                  <span>Sk</span>
                </button>
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center">
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

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-1.5 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <a href="#problema" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors py-2">
                {t.nav.features}
              </a>
              <a href="#proceso" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors py-2">
                {t.nav.process}
              </a>
              <a href="#beneficios" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors py-2">
                {t.nav.benefits}
              </a>
              <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors py-2">
                {t.nav.team}
              </a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors py-2">
                {t.nav.pricing}
              </a>
              <a href="#contact-form" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors py-2">
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - 100vh */}
      <section className="relative w-full h-screen flex items-end overflow-hidden">
        {/* Background Gradient Banner */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent z-[50]" />

        {/* Birds Canvas - Solo en Hero Section */}
        <BirdsCanvas theme={theme} />

        {/* Hero Content - Bottom Left Aligned */}
        <div className="relative z-[100] container mx-auto px-6 lg:px-12 pb-12 md:pb-20 lg:pb-32">
          <div className="max-w-4xl">
            <AnimatedTitle title={t.hero.title} highlight={t.hero.highlight} />
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 max-w-4xl">
              {t.hero.subtitle.split('||').map((line, lineIndex) => (
                <span key={lineIndex}>
                  {lineIndex > 0 && <br />}
                  {line.split('**').map((part, i) =>
                    i % 2 === 1 ? <span key={i} className="text-primary font-bold">{part}</span> : part
                  )}
                </span>
              ))}
            </p>
            <Button
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center">{t.testimonials.title}</h2>
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

      {/* Team Section - About Us */}
      <section id="nosotros" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t.team.title}
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>
        <TeamCarousel lang={lang} />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.pricing.title}</h2>
            <p className="text-xl text-muted-foreground">{t.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.pricing.plans.map((plan, i) => (
              <Card key={i} className={`flex flex-col ${plan.highlight ? "border-primary border-2 shadow-xl" : ""}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  {'rates' in plan && plan.rates ? (
                    <div className="mt-4 space-y-2">
                      {plan.rates.map((rate: { level: string; price: string }, idx: number) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{rate.level}</span>
                          <span className="text-xl font-bold">{rate.price}<span className="text-sm font-normal text-muted-foreground">/{plan.duration}</span></span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.duration}</span>
                    </div>
                  )}
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
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
                    className="w-full mt-auto"
                    variant="default"
                    size="lg"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {plan.highlight
                      ? (lang === "es" ? "Comenzar desarrollo" : lang === "fr" ? "Commencer le développement" : lang === "sk" ? "Začať vývoj" : lang === "de" ? "Entwicklung starten" : lang === "it" ? "Inizia lo sviluppo" : lang === "pt" ? "Iniciar desenvolvimento" : "Start development")
                      : (lang === "es" ? "Solicitar producto gratis" : lang === "fr" ? "Demander un produit gratuit" : lang === "sk" ? "Požiadať o bezplatný produkt" : lang === "de" ? "Kostenloses Produkt anfordern" : lang === "it" ? "Richiedi prodotto gratuito" : lang === "pt" ? "Solicitar produto grátis" : "Request free product")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Section */}
      <section id="billing" className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <BillingCalculator lang={lang} />
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
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              &copy; 2025 FastLab. {t.footer}
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href={`/privacy?lang=${lang}`} className="text-muted-foreground hover:text-foreground transition-colors">
                {lang === "es" ? "Política de Privacidad" : lang === "fr" ? "Politique de Confidentialité" : lang === "sk" ? "Zásady ochrany osobných údajov" : lang === "de" ? "Datenschutzrichtlinie" : lang === "it" ? "Informativa sulla Privacy" : lang === "pt" ? "Política de Privacidade" : "Privacy Policy"}
              </Link>
              <Link href={`/terms?lang=${lang}`} className="text-muted-foreground hover:text-foreground transition-colors">
                {lang === "es" ? "Términos de Uso" : lang === "fr" ? "Conditions d'Utilisation" : lang === "sk" ? "Podmienky používania" : lang === "de" ? "Nutzungsbedingungen" : lang === "it" ? "Termini di Servizio" : lang === "pt" ? "Termos de Serviço" : "Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
