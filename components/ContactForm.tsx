"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { es, enUS, fr, sk, de, it, ptBR } from "date-fns/locale";
import type { Locale } from "date-fns";
import "react-day-picker/dist/style.css";

interface ContactFormProps {
  lang: "es" | "en" | "fr" | "sk" | "de" | "it" | "pt";
}

// Nombres de meses capitalizados para todos los idiomas
const MONTH_NAMES = {
  es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  sk: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  it: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
  pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
} as const;

// Crear un locale español personalizado con meses capitalizados
const esCapitalized: Locale = {
  ...es,
  localize: {
    ...es.localize,
    month: (n: number) => MONTH_NAMES.es[n],
  },
};

// Crear un locale francés personalizado con meses capitalizados
const frCapitalized: Locale = {
  ...fr,
  localize: {
    ...fr.localize,
    month: (n: number) => MONTH_NAMES.fr[n],
  },
};

// Crear un locale eslovaco personalizado con meses capitalizados
const skCapitalized: Locale = {
  ...sk,
  localize: {
    ...sk.localize,
    month: (n: number) => MONTH_NAMES.sk[n],
  },
};

// Crear un locale alemán personalizado con meses capitalizados
const deCapitalized: Locale = {
  ...de,
  localize: {
    ...de.localize,
    month: (n: number) => MONTH_NAMES.de[n],
  },
};

// Crear un locale italiano personalizado con meses capitalizados
const itCapitalized: Locale = {
  ...it,
  localize: {
    ...it.localize,
    month: (n: number) => MONTH_NAMES.it[n],
  },
};

// Crear un locale portugués personalizado con meses capitalizados
const ptCapitalized: Locale = {
  ...ptBR,
  localize: {
    ...ptBR.localize,
    month: (n: number) => MONTH_NAMES.pt[n],
  },
};

export default function ContactForm({ lang }: ContactFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("10:00");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "mvp",
    message: "",
  });

  // Actualizar el mensaje cuando cambie el idioma
  useEffect(() => {
    const messages = {
      es: "Hola, me gustaría obtener más información sobre los servicios de FastLab.",
      en: "Hello, I would like to get more information about FastLab services.",
      fr: "Bonjour, j'aimerais obtenir plus d'informations sur les services de FastLab.",
      sk: "Dobrý deň, chcel by som získať viac informácií o službách FastLab.",
      de: "Hallo, ich würde gerne mehr Informationen über die FastLab-Dienste erhalten.",
      it: "Ciao, vorrei avere maggiori informazioni sui servizi di FastLab.",
      pt: "Olá, gostaria de obter mais informações sobre os serviços da FastLab.",
    };
    setFormData(prev => ({
      ...prev,
      message: messages[lang],
    }));
  }, [lang]);

  const content = {
    es: {
      title: "Agenda una reunión",
      subtitle: "Completa el formulario y nos pondremos en contacto contigo",
      name: "Nombre completo",
      email: "Email",
      company: "Empresa/Universidad",
      service: "Servicio de interés",
      serviceMVP: "MVP Gratuito (2 semanas)",
      serviceDev: "Desarrollo Profesional ($100.000/hora)",
      message: "Mensaje",
      date: "Fecha preferida",
      time: "Hora preferida",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      success: "¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.",
      error: "Hubo un error al enviar. Por favor intenta de nuevo.",
    },
    en: {
      title: "Schedule a meeting",
      subtitle: "Complete the form and we'll get in touch with you",
      name: "Full name",
      email: "Email",
      company: "Company/University",
      service: "Service of interest",
      serviceMVP: "Free MVP (2 weeks)",
      serviceDev: "Professional Development ($25/hour)",
      message: "Message",
      date: "Preferred date",
      time: "Preferred time",
      submit: "Send request",
      sending: "Sending...",
      success: "Request sent successfully! We'll be in touch soon.",
      error: "There was an error sending. Please try again.",
    },
    fr: {
      title: "Planifier une réunion",
      subtitle: "Remplissez le formulaire et nous vous contacterons",
      name: "Nom complet",
      email: "Email",
      company: "Entreprise/Université",
      service: "Service souhaité",
      serviceMVP: "MVP Gratuit (2 semaines)",
      serviceDev: "Développement Professionnel (25€/heure)",
      message: "Message",
      date: "Date souhaitée",
      time: "Heure souhaitée",
      submit: "Envoyer la demande",
      sending: "Envoi en cours...",
      success: "Demande envoyée avec succès ! Nous vous contacterons bientôt.",
      error: "Une erreur s'est produite. Veuillez réessayer.",
    },
    sk: {
      title: "Naplánovať stretnutie",
      subtitle: "Vyplňte formulár a budeme vás kontaktovať",
      name: "Celé meno",
      email: "Email",
      company: "Firma/Univerzita",
      service: "Záujem o službu",
      serviceMVP: "Bezplatný MVP (2 týždne)",
      serviceDev: "Profesionálny vývoj (25€/hodina)",
      message: "Správa",
      date: "Preferovaný dátum",
      time: "Preferovaný čas",
      submit: "Odoslať žiadosť",
      sending: "Odosielam...",
      success: "Žiadosť úspešne odoslaná! Čoskoro vás budeme kontaktovať.",
      error: "Vyskytla sa chyba. Skúste to prosím znova.",
    },
    de: {
      title: "Termin vereinbaren",
      subtitle: "Füllen Sie das Formular aus und wir werden uns mit Ihnen in Verbindung setzen",
      name: "Vollständiger Name",
      email: "E-Mail",
      company: "Unternehmen/Universität",
      service: "Gewünschte Dienstleistung",
      serviceMVP: "Kostenloses MVP (2 Wochen)",
      serviceDev: "Professionelle Entwicklung (25€/Stunde)",
      message: "Nachricht",
      date: "Bevorzugtes Datum",
      time: "Bevorzugte Uhrzeit",
      submit: "Anfrage senden",
      sending: "Wird gesendet...",
      success: "Anfrage erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.",
      error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    },
    it: {
      title: "Prenota un incontro",
      subtitle: "Compila il modulo e ti contatteremo",
      name: "Nome completo",
      email: "Email",
      company: "Azienda/Università",
      service: "Servizio di interesse",
      serviceMVP: "MVP Gratuito (2 settimane)",
      serviceDev: "Sviluppo Professionale (25€/ora)",
      message: "Messaggio",
      date: "Data preferita",
      time: "Orario preferito",
      submit: "Invia richiesta",
      sending: "Invio in corso...",
      success: "Richiesta inviata con successo! Ti contatteremo presto.",
      error: "Si è verificato un errore. Riprova.",
    },
    pt: {
      title: "Agende uma reunião",
      subtitle: "Preencha o formulário e entraremos em contato com você",
      name: "Nome completo",
      email: "Email",
      company: "Empresa/Universidade",
      service: "Serviço de interesse",
      serviceMVP: "MVP Gratuito (2 semanas)",
      serviceDev: "Desenvolvimento Profissional (25€/hora)",
      message: "Mensagem",
      date: "Data preferida",
      time: "Horário preferido",
      submit: "Enviar solicitação",
      sending: "Enviando...",
      success: "Solicitação enviada com sucesso! Entraremos em contato em breve.",
      error: "Ocorreu um erro. Por favor, tente novamente.",
    },
  };

  const t = content[lang];

  // Helper to get locale for date formatting
  const getDateLocale = () => {
    if (lang === "es") return esCapitalized;
    if (lang === "fr") return frCapitalized;
    if (lang === "sk") return skCapitalized;
    if (lang === "de") return deCapitalized;
    if (lang === "it") return itCapitalized;
    if (lang === "pt") return ptCapitalized;
    return enUS;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const notSpecifiedText = {
      es: "No especificada",
      en: "Not specified",
      fr: "Non spécifiée",
      sk: "Nešpecifikované",
      de: "Nicht angegeben",
      it: "Non specificata",
      pt: "Não especificada",
    };

    try {
      const formattedDate = selectedDate
        ? format(selectedDate, "PPP", { locale: getDateLocale() })
        : notSpecifiedText[lang];

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          date: formattedDate,
          time: selectedTime,
          lang,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        const resetMessages = {
          es: "Hola, me gustaría obtener más información sobre los servicios de FastLab.",
          en: "Hello, I would like to get more information about FastLab services.",
          fr: "Bonjour, j'aimerais obtenir plus d'informations sur les services de FastLab.",
          sk: "Dobrý deň, chcel by som získať viac informácií o službách FastLab.",
          de: "Hallo, ich würde gerne mehr Informationen über die FastLab-Dienste erhalten.",
          it: "Ciao, vorrei avere maggiori informazioni sui servizi di FastLab.",
          pt: "Olá, gostaria de obter mais informações sobre os serviços da FastLab.",
        };
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "mvp",
          message: resetMessages[lang],
        });
        setSelectedDate(undefined);
        setSelectedTime("10:00");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generar opciones de horario (cada hora de 8am a 6pm)
  const timeSlots = Array.from({ length: 11 }, (_, i) => {
    const hour = i + 8;
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  return (
    <div id="contact-form" className="w-full max-w-5xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl text-center">{t.title}</CardTitle>
          <p className="text-center text-muted-foreground">{t.subtitle}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium mb-2">{t.name}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  disabled={isSubmitting}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium mb-2">{t.email}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  disabled={isSubmitting}
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-company" className="block text-sm font-medium mb-2">{t.company}</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isSubmitting}
                autoComplete="organization"
              />
            </div>

            <div>
              <label htmlFor="contact-service" className="block text-sm font-medium mb-2">{t.service}</label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isSubmitting}
              >
                <option value="mvp">{t.serviceMVP}</option>
                <option value="dev">{t.serviceDev}</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="block text-sm font-medium mb-2">{t.date}</div>
                <div className="border rounded-lg p-4 bg-card flex justify-center">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    locale={getDateLocale()}
                    disabled={[
                      { before: new Date() },
                      { dayOfWeek: [0, 6] } // Disable weekends
                    ]}
                    className="rdp-custom"
                    modifiersClassNames={{
                      selected: "bg-primary text-primary-foreground",
                      today: "text-primary font-bold",
                    }}
                    captionLayout="dropdown"
                    fromYear={2025}
                    toYear={2030}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-time" className="block text-sm font-medium mb-2">{t.time}</label>
                <select
                  id="contact-time"
                  name="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  disabled={isSubmitting}
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium mb-2">{t.message}</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                disabled={isSubmitting}
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500 text-green-700 dark:text-green-400 text-center">
                {t.success}
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500 text-red-700 dark:text-red-400 text-center">
                {t.error}
              </div>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t.sending : t.submit}
            </Button>
          </form>
        </CardContent>
      </Card>

      <style jsx global>{`
        .rdp-custom {
          --rdp-cell-size: 40px;
          --rdp-accent-color: hsl(var(--primary));
          --rdp-background-color: hsl(var(--primary) / 0.1);
        }

        .rdp {
          --rdp-cell-size: 40px;
          --rdp-accent-color: hsl(var(--primary));
          --rdp-background-color: hsl(var(--primary) / 0.1);
        }

        .rdp-day_selected {
          background-color: hsl(var(--primary)) !important;
          color: hsl(var(--primary-foreground)) !important;
        }

        .rdp-day_today {
          font-weight: bold;
          color: hsl(var(--primary));
        }
      `}</style>
    </div>
  );
}
