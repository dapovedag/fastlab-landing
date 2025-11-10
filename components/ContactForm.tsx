"use client";

import { useState, useEffect, useId } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import type { Locale } from "date-fns";
import "react-day-picker/dist/style.css";

interface ContactFormProps {
  lang: "es" | "en";
}

// Nombres de meses capitalizados para ambos idiomas
const MONTH_NAMES = {
  es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
} as const;

// Crear un locale español personalizado con meses capitalizados
const esCapitalized: Locale = {
  ...es,
  localize: {
    ...es.localize,
    month: (n: number) => MONTH_NAMES.es[n],
  },
};

export default function ContactForm({ lang }: ContactFormProps) {
  const calendarId = useId();
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
    setFormData(prev => ({
      ...prev,
      message: lang === "es"
        ? "Hola, me gustaría obtener más información sobre los servicios de FastLab."
        : "Hello, I would like to get more information about FastLab services.",
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
      serviceDev: "Professional Development ($100,000/hour)",
      message: "Message",
      date: "Preferred date",
      time: "Preferred time",
      submit: "Send request",
      sending: "Sending...",
      success: "Request sent successfully! We'll be in touch soon.",
      error: "There was an error sending. Please try again.",
    },
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formattedDate = selectedDate
        ? format(selectedDate, "PPP", { locale: lang === "es" ? esCapitalized : enUS })
        : lang === "es" ? "No especificada" : "Not specified";

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
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "mvp",
          message: lang === "es"
            ? "Hola, me gustaría obtener más información sobre los servicios de FastLab."
            : "Hello, I would like to get more information about FastLab services.",
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
                <label htmlFor="contact-date" className="block text-sm font-medium mb-2">{t.date}</label>
                <input
                  type="text"
                  id="contact-date"
                  name="date"
                  value={selectedDate ? selectedDate.toISOString() : ""}
                  readOnly
                  className="sr-only"
                  aria-hidden="true"
                  tabIndex={-1}
                />
                <div className="border rounded-lg p-4 bg-card flex justify-center">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    locale={lang === "es" ? esCapitalized : enUS}
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
                    components={{
                      Dropdown: (props) => {
                        const selectId = props.name === 'months'
                          ? `calendar-month-${calendarId}`
                          : `calendar-year-${calendarId}`;

                        return (
                          <select
                            id={selectId}
                            name={props.name}
                            value={props.value}
                            onChange={props.onChange}
                            className="rdp-dropdown"
                            aria-label={props.name === 'months' ? (lang === "es" ? "Mes" : "Month") : (lang === "es" ? "Año" : "Year")}
                          >
                            {props.options?.map((option, i) => {
                              let label = option.label;
                              // If it's the months dropdown, use our capitalized month names
                              if (props.name === 'months') {
                                const monthIndex = Number(option.value);
                                label = MONTH_NAMES[lang][monthIndex];
                              }
                              return (
                                <option key={i} value={option.value}>
                                  {label}
                                </option>
                              );
                            })}
                          </select>
                        );
                      },
                    }}
                    formatters={{
                      formatCaption: (date, options) => {
                        return MONTH_NAMES[lang][date.getMonth()];
                      },
                    }}
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
