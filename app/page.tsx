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
import { useState, useEffect } from "react";
import { Zap, Building2, Cloud, BarChart3, BookOpen, RefreshCw } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en" | "fr">("en");
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
            price: "$100.000",
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
            price: "$25",
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
            price: "25€",
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

            {/* Language Toggle */}
            <div className="flex items-center space-x-1 relative z-[10000]">
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                  lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                title="English"
              >
                <span className="text-base">🇺🇸</span>
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                  lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                title="Español"
              >
                <span className="text-base">🇪🇸</span>
              </button>
              <button
                onClick={() => setLang("fr")}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                  lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                title="Français"
              >
                <span className="text-base">🇫🇷</span>
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
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-4xl">
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
                    {plan.highlight
                      ? (lang === "es" ? "Comenzar desarrollo" : lang === "fr" ? "Commencer le développement" : "Start development")
                      : (lang === "es" ? "Solicitar producto gratis" : lang === "fr" ? "Demander un produit gratuit" : "Request free product")}
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
