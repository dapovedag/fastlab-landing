"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import { jsPDF } from "jspdf";

interface BillingCalculatorProps {
  lang: "es" | "en" | "fr" | "sk" | "de" | "it" | "pt";
}

interface ClientData {
  name: string;
  company: string;
  taxId: string;
  email: string;
  address: string;
}

interface HoursData {
  junior: number;
  middle: number;
  senior: number;
}

// Pricing per language/currency
const PRICING = {
  es: { currency: "COP", symbol: "$", junior: 40000, middle: 80000, senior: 120000, locale: "es-CO" },
  en: { currency: "USD", symbol: "$", junior: 8, middle: 17, senior: 25, locale: "en-US" },
  fr: { currency: "EUR", symbol: "€", junior: 8, middle: 17, senior: 25, locale: "fr-FR" },
  de: { currency: "EUR", symbol: "€", junior: 8, middle: 17, senior: 25, locale: "de-DE" },
  it: { currency: "EUR", symbol: "€", junior: 8, middle: 17, senior: 25, locale: "it-IT" },
  pt: { currency: "EUR", symbol: "€", junior: 8, middle: 17, senior: 25, locale: "pt-PT" },
  sk: { currency: "EUR", symbol: "€", junior: 8, middle: 17, senior: 25, locale: "sk-SK" },
};

// Role names per language
const ROLE_NAMES = {
  es: { junior: "Junior", middle: "Semi-Senior", senior: "Senior" },
  en: { junior: "Junior", middle: "Mid-Level", senior: "Senior" },
  fr: { junior: "Junior", middle: "Intermédiaire", senior: "Senior" },
  de: { junior: "Junior", middle: "Mittelstufe", senior: "Senior" },
  it: { junior: "Junior", middle: "Intermedio", senior: "Senior" },
  pt: { junior: "Júnior", middle: "Pleno", senior: "Sénior" },
  sk: { junior: "Juniorský", middle: "Stredný", senior: "Seniorský" },
};

// PayPal config
const PAYPAL_CLIENT_ID = "BAAVncpg82eK_NGypgGR7T-mndoxrFfHpgqS57VdLgkUnoF3Qw1PnaYAS_SDrVaILf_xlmQHxBCmMZZOaE";

export default function BillingCalculator({ lang }: BillingCalculatorProps) {
  const [clientData, setClientData] = useState<ClientData>({
    name: "",
    company: "",
    taxId: "",
    email: "",
    address: "",
  });

  const [hours, setHours] = useState<HoursData>({
    junior: 0,
    middle: 0,
    senior: 0,
  });

  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [paypalRendered, setPaypalRendered] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [invoiceGenerated, setInvoiceGenerated] = useState(false);
  const paypalContainerRef = useRef<HTMLDivElement>(null);

  const pricing = PRICING[lang];
  const roles = ROLE_NAMES[lang];

  const content = {
    es: {
      title: "Facturación de Servicios",
      subtitle: "Calcula y paga tus horas de desarrollo",
      clientInfo: "Datos del Cliente",
      name: "Nombre completo",
      company: "Empresa",
      taxId: "NIF / Identificación fiscal",
      email: "Email",
      address: "Dirección de facturación",
      hoursSection: "Selección de Horas",
      hours: "horas",
      hour: "hora",
      perHour: "por hora",
      subtotal: "Subtotal",
      total: "Total a Pagar",
      payButton: "Pagar con PayPal",
      processing: "Procesando pago...",
      success: "¡Pago completado con éxito!",
      error: "Error en el pago. Por favor intenta de nuevo.",
      downloadInvoice: "Descargar Factura",
      fillFields: "Por favor completa todos los campos obligatorios",
      selectHours: "Selecciona al menos 1 hora de servicio",
      invoice: "Factura",
      invoiceNumber: "Factura N°",
      date: "Fecha",
      quantity: "Cantidad",
      description: "Descripción",
      unitPrice: "Precio Unit.",
      developerHours: "Horas de Desarrollo",
    },
    en: {
      title: "Service Billing",
      subtitle: "Calculate and pay for your development hours",
      clientInfo: "Client Information",
      name: "Full name",
      company: "Company",
      taxId: "Tax ID / VAT Number",
      email: "Email",
      address: "Billing address",
      hoursSection: "Hours Selection",
      hours: "hours",
      hour: "hour",
      perHour: "per hour",
      subtotal: "Subtotal",
      total: "Total to Pay",
      payButton: "Pay with PayPal",
      processing: "Processing payment...",
      success: "Payment completed successfully!",
      error: "Payment error. Please try again.",
      downloadInvoice: "Download Invoice",
      fillFields: "Please fill in all required fields",
      selectHours: "Select at least 1 hour of service",
      invoice: "Invoice",
      invoiceNumber: "Invoice #",
      date: "Date",
      quantity: "Quantity",
      description: "Description",
      unitPrice: "Unit Price",
      developerHours: "Development Hours",
    },
    fr: {
      title: "Facturation des Services",
      subtitle: "Calculez et payez vos heures de développement",
      clientInfo: "Informations Client",
      name: "Nom complet",
      company: "Entreprise",
      taxId: "N° TVA / Identification fiscale",
      email: "Email",
      address: "Adresse de facturation",
      hoursSection: "Sélection des Heures",
      hours: "heures",
      hour: "heure",
      perHour: "par heure",
      subtotal: "Sous-total",
      total: "Total à Payer",
      payButton: "Payer avec PayPal",
      processing: "Traitement du paiement...",
      success: "Paiement effectué avec succès !",
      error: "Erreur de paiement. Veuillez réessayer.",
      downloadInvoice: "Télécharger la Facture",
      fillFields: "Veuillez remplir tous les champs obligatoires",
      selectHours: "Sélectionnez au moins 1 heure de service",
      invoice: "Facture",
      invoiceNumber: "Facture N°",
      date: "Date",
      quantity: "Quantité",
      description: "Description",
      unitPrice: "Prix Unit.",
      developerHours: "Heures de Développement",
    },
    de: {
      title: "Rechnungsstellung",
      subtitle: "Berechnen und bezahlen Sie Ihre Entwicklungsstunden",
      clientInfo: "Kundeninformationen",
      name: "Vollständiger Name",
      company: "Unternehmen",
      taxId: "USt-IdNr. / Steuernummer",
      email: "E-Mail",
      address: "Rechnungsadresse",
      hoursSection: "Stundenauswahl",
      hours: "Stunden",
      hour: "Stunde",
      perHour: "pro Stunde",
      subtotal: "Zwischensumme",
      total: "Gesamtbetrag",
      payButton: "Mit PayPal bezahlen",
      processing: "Zahlung wird verarbeitet...",
      success: "Zahlung erfolgreich abgeschlossen!",
      error: "Zahlungsfehler. Bitte erneut versuchen.",
      downloadInvoice: "Rechnung herunterladen",
      fillFields: "Bitte füllen Sie alle Pflichtfelder aus",
      selectHours: "Wählen Sie mindestens 1 Stunde Service",
      invoice: "Rechnung",
      invoiceNumber: "Rechnung Nr.",
      date: "Datum",
      quantity: "Menge",
      description: "Beschreibung",
      unitPrice: "Einzelpreis",
      developerHours: "Entwicklungsstunden",
    },
    it: {
      title: "Fatturazione Servizi",
      subtitle: "Calcola e paga le tue ore di sviluppo",
      clientInfo: "Dati Cliente",
      name: "Nome completo",
      company: "Azienda",
      taxId: "Codice Fiscale / P.IVA",
      email: "Email",
      address: "Indirizzo di fatturazione",
      hoursSection: "Selezione Ore",
      hours: "ore",
      hour: "ora",
      perHour: "all'ora",
      subtotal: "Subtotale",
      total: "Totale da Pagare",
      payButton: "Paga con PayPal",
      processing: "Elaborazione pagamento...",
      success: "Pagamento completato con successo!",
      error: "Errore nel pagamento. Riprova.",
      downloadInvoice: "Scarica Fattura",
      fillFields: "Compila tutti i campi obbligatori",
      selectHours: "Seleziona almeno 1 ora di servizio",
      invoice: "Fattura",
      invoiceNumber: "Fattura N°",
      date: "Data",
      quantity: "Quantità",
      description: "Descrizione",
      unitPrice: "Prezzo Unit.",
      developerHours: "Ore di Sviluppo",
    },
    pt: {
      title: "Faturamento de Serviços",
      subtitle: "Calcule e pague suas horas de desenvolvimento",
      clientInfo: "Dados do Cliente",
      name: "Nome completo",
      company: "Empresa",
      taxId: "NIF / Identificação fiscal",
      email: "Email",
      address: "Endereço de faturamento",
      hoursSection: "Seleção de Horas",
      hours: "horas",
      hour: "hora",
      perHour: "por hora",
      subtotal: "Subtotal",
      total: "Total a Pagar",
      payButton: "Pagar com PayPal",
      processing: "Processando pagamento...",
      success: "Pagamento concluído com sucesso!",
      error: "Erro no pagamento. Por favor tente novamente.",
      downloadInvoice: "Baixar Fatura",
      fillFields: "Por favor preencha todos os campos obrigatórios",
      selectHours: "Selecione pelo menos 1 hora de serviço",
      invoice: "Fatura",
      invoiceNumber: "Fatura N°",
      date: "Data",
      quantity: "Quantidade",
      description: "Descrição",
      unitPrice: "Preço Unit.",
      developerHours: "Horas de Desenvolvimento",
    },
    sk: {
      title: "Fakturácia Služieb",
      subtitle: "Vypočítajte a zaplaťte za svoje hodiny vývoja",
      clientInfo: "Údaje Klienta",
      name: "Celé meno",
      company: "Firma",
      taxId: "IČ DPH / Daňové číslo",
      email: "Email",
      address: "Fakturačná adresa",
      hoursSection: "Výber Hodín",
      hours: "hodín",
      hour: "hodina",
      perHour: "za hodinu",
      subtotal: "Medzisúčet",
      total: "Celkom na Úhradu",
      payButton: "Zaplatiť cez PayPal",
      processing: "Spracovanie platby...",
      success: "Platba úspešne dokončená!",
      error: "Chyba platby. Skúste to prosím znova.",
      downloadInvoice: "Stiahnuť Faktúru",
      fillFields: "Prosím vyplňte všetky povinné polia",
      selectHours: "Vyberte aspoň 1 hodinu služby",
      invoice: "Faktúra",
      invoiceNumber: "Faktúra č.",
      date: "Dátum",
      quantity: "Množstvo",
      description: "Popis",
      unitPrice: "Jedn. Cena",
      developerHours: "Hodiny Vývoja",
    },
  };

  const t = content[lang];

  // Calculate totals
  const juniorTotal = hours.junior * pricing.junior;
  const middleTotal = hours.middle * pricing.middle;
  const seniorTotal = hours.senior * pricing.senior;
  const grandTotal = juniorTotal + middleTotal + seniorTotal;
  const totalHours = hours.junior + hours.middle + hours.senior;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(pricing.locale, {
      style: "currency",
      currency: pricing.currency,
      minimumFractionDigits: pricing.currency === "COP" ? 0 : 2,
      maximumFractionDigits: pricing.currency === "COP" ? 0 : 2,
    }).format(amount);
  };

  // Generate invoice PDF
  const generateInvoice = useCallback((orderData?: { id: string; status: string }) => {
    const doc = new jsPDF();
    const invoiceNumber = `FL-${Date.now().toString(36).toUpperCase()}`;
    const currentDate = new Date().toLocaleDateString(pricing.locale);

    // Header
    doc.setFontSize(24);
    doc.setTextColor(88, 28, 135); // Purple color
    doc.text("FastLab", 20, 25);

    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(t.invoice, 150, 25);

    doc.setFontSize(10);
    doc.text(`${t.invoiceNumber}: ${invoiceNumber}`, 150, 32);
    doc.text(`${t.date}: ${currentDate}`, 150, 39);

    if (orderData) {
      doc.text(`PayPal ID: ${orderData.id}`, 150, 46);
    }

    // Divider
    doc.setDrawColor(200);
    doc.line(20, 55, 190, 55);

    // Client info
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(t.clientInfo, 20, 65);

    doc.setFontSize(10);
    doc.setTextColor(80);
    doc.text(clientData.name, 20, 73);
    doc.text(clientData.company, 20, 80);
    doc.text(`${t.taxId}: ${clientData.taxId}`, 20, 87);
    doc.text(clientData.email, 20, 94);
    doc.text(clientData.address, 20, 101);

    // Table header
    const tableTop = 120;
    doc.setFillColor(88, 28, 135);
    doc.rect(20, tableTop, 170, 10, "F");

    doc.setFontSize(10);
    doc.setTextColor(255);
    doc.text(t.description, 25, tableTop + 7);
    doc.text(t.quantity, 100, tableTop + 7);
    doc.text(t.unitPrice, 130, tableTop + 7);
    doc.text(t.subtotal, 165, tableTop + 7);

    // Table rows
    let y = tableTop + 20;
    doc.setTextColor(0);

    const addRow = (role: string, roleHours: number, rate: number) => {
      if (roleHours > 0) {
        doc.text(`${t.developerHours} - ${role}`, 25, y);
        doc.text(`${roleHours} ${roleHours === 1 ? t.hour : t.hours}`, 100, y);
        doc.text(formatCurrency(rate), 130, y);
        doc.text(formatCurrency(roleHours * rate), 165, y);
        y += 10;
      }
    };

    addRow(roles.junior, hours.junior, pricing.junior);
    addRow(roles.middle, hours.middle, pricing.middle);
    addRow(roles.senior, hours.senior, pricing.senior);

    // Total
    doc.setDrawColor(200);
    doc.line(20, y + 5, 190, y + 5);

    doc.setFontSize(12);
    doc.setTextColor(88, 28, 135);
    doc.text(t.total, 130, y + 15);
    doc.text(formatCurrency(grandTotal), 165, y + 15);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text("FastLab - Software Development Services", 20, 280);
    doc.text("www.fastlab.dev | contact@fastlab.dev", 20, 285);

    // Save
    doc.save(`FastLab-Invoice-${invoiceNumber}.pdf`);
    setInvoiceGenerated(true);
  }, [clientData, hours, pricing, roles, t, formatCurrency, grandTotal]);

  // Validate form - only require hours selected
  const isFormValid = () => {
    return totalHours > 0;
  };

  // Render PayPal buttons when script loads
  useEffect(() => {
    if (scriptLoaded && paypalContainerRef.current && !paypalRendered) {
      // Clear previous buttons
      if (paypalContainerRef.current) {
        paypalContainerRef.current.innerHTML = "";
      }

      // @ts-expect-error - PayPal SDK types
      if (window.paypal?.Buttons) {
        // @ts-expect-error - PayPal SDK types
        window.paypal.Buttons({
          style: {
            layout: "vertical",
            color: "gold",
            shape: "rect",
            label: "paypal",
          },
          // @ts-expect-error - PayPal SDK types
          createOrder: (data, actions) => {
            // For COP, convert to USD (PayPal doesn't support COP directly)
            let amount = grandTotal > 0 ? grandTotal : 1; // Minimum $1 for rendering
            let currency = pricing.currency;

            if (pricing.currency === "COP") {
              // Approximate conversion rate - in production, use a real API
              amount = (grandTotal > 0 ? grandTotal : 4200) / 4200;
              currency = "USD";
            }

            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount.toFixed(2),
                  currency_code: currency,
                },
                description: `FastLab Development Services - ${totalHours} hours`,
              }],
            });
          },
          // @ts-expect-error - PayPal SDK types
          onApprove: async (data, actions) => {
            setPaymentStatus("processing");
            const order = await actions.order.capture();
            setPaymentStatus("success");
            // Generate invoice after successful payment
            generateInvoice({ id: order.id, status: order.status });
          },
          // @ts-expect-error - PayPal SDK types
          onError: (err) => {
            console.error("PayPal error:", err);
            setPaymentStatus("error");
          },
        }).render(paypalContainerRef.current);

        setPaypalRendered(true);
      }
    }
  }, [scriptLoaded, paypalRendered, grandTotal, pricing, totalHours, generateInvoice]);

  // Re-render PayPal when amount changes
  useEffect(() => {
    if (scriptLoaded && paypalRendered) {
      setPaypalRendered(false);
    }
  }, [grandTotal, scriptLoaded]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=${pricing.currency === "COP" ? "USD" : pricing.currency}`}
        onLoad={() => setScriptLoaded(true)}
        strategy="lazyOnload"
      />

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl text-center">{t.title}</CardTitle>
          <p className="text-center text-muted-foreground">{t.subtitle}</p>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Client Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.clientInfo}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="billing-name" className="block text-sm font-medium mb-2">
                  {t.name}
                </label>
                <input
                  id="billing-name"
                  type="text"
                  value={clientData.name}
                  onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="billing-company" className="block text-sm font-medium mb-2">
                  {t.company}
                </label>
                <input
                  id="billing-company"
                  type="text"
                  value={clientData.company}
                  onChange={(e) => setClientData({ ...clientData, company: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  autoComplete="organization"
                />
              </div>
              <div>
                <label htmlFor="billing-taxid" className="block text-sm font-medium mb-2">
                  {t.taxId}
                </label>
                <input
                  id="billing-taxid"
                  type="text"
                  value={clientData.taxId}
                  onChange={(e) => setClientData({ ...clientData, taxId: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="billing-email" className="block text-sm font-medium mb-2">
                  {t.email}
                </label>
                <input
                  id="billing-email"
                  type="email"
                  value={clientData.email}
                  onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  autoComplete="email"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="billing-address" className="block text-sm font-medium mb-2">
                  {t.address}
                </label>
                <input
                  id="billing-address"
                  type="text"
                  value={clientData.address}
                  onChange={(e) => setClientData({ ...clientData, address: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  autoComplete="street-address"
                />
              </div>
            </div>
          </div>

          {/* Hours Selection */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.hoursSection}</h3>
            <div className="space-y-4">
              {/* Junior */}
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div>
                  <span className="font-medium">{roles.junior}</span>
                  <span className="text-muted-foreground ml-2">
                    ({formatCurrency(pricing.junior)} {t.perHour})
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setHours({ ...hours, junior: Math.max(0, hours.junior - 1) })}
                    disabled={hours.junior === 0}
                  >
                    -
                  </Button>
                  <input
                    type="number"
                    min="0"
                    value={hours.junior}
                    onChange={(e) => setHours({ ...hours, junior: Math.max(0, parseInt(e.target.value) || 0) })}
                    className="w-20 text-center px-2 py-1 rounded border bg-background"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setHours({ ...hours, junior: hours.junior + 1 })}
                  >
                    +
                  </Button>
                  <span className="w-32 text-right font-medium">
                    {formatCurrency(juniorTotal)}
                  </span>
                </div>
              </div>

              {/* Middle */}
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div>
                  <span className="font-medium">{roles.middle}</span>
                  <span className="text-muted-foreground ml-2">
                    ({formatCurrency(pricing.middle)} {t.perHour})
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setHours({ ...hours, middle: Math.max(0, hours.middle - 1) })}
                    disabled={hours.middle === 0}
                  >
                    -
                  </Button>
                  <input
                    type="number"
                    min="0"
                    value={hours.middle}
                    onChange={(e) => setHours({ ...hours, middle: Math.max(0, parseInt(e.target.value) || 0) })}
                    className="w-20 text-center px-2 py-1 rounded border bg-background"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setHours({ ...hours, middle: hours.middle + 1 })}
                  >
                    +
                  </Button>
                  <span className="w-32 text-right font-medium">
                    {formatCurrency(middleTotal)}
                  </span>
                </div>
              </div>

              {/* Senior */}
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div>
                  <span className="font-medium">{roles.senior}</span>
                  <span className="text-muted-foreground ml-2">
                    ({formatCurrency(pricing.senior)} {t.perHour})
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setHours({ ...hours, senior: Math.max(0, hours.senior - 1) })}
                    disabled={hours.senior === 0}
                  >
                    -
                  </Button>
                  <input
                    type="number"
                    min="0"
                    value={hours.senior}
                    onChange={(e) => setHours({ ...hours, senior: Math.max(0, parseInt(e.target.value) || 0) })}
                    className="w-20 text-center px-2 py-1 rounded border bg-background"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setHours({ ...hours, senior: hours.senior + 1 })}
                  >
                    +
                  </Button>
                  <span className="w-32 text-right font-medium">
                    {formatCurrency(seniorTotal)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>{t.total}</span>
              <span className="text-primary">{formatCurrency(grandTotal)}</span>
            </div>
            {pricing.currency === "COP" && grandTotal > 0 && (
              <p className="text-sm text-muted-foreground mt-1 text-right">
                * PayPal convertirá a USD automáticamente
              </p>
            )}
          </div>

          {/* Payment Status Messages */}
          {paymentStatus === "success" && (
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500 text-green-700 dark:text-green-400 text-center">
              {t.success}
            </div>
          )}

          {paymentStatus === "error" && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500 text-red-700 dark:text-red-400 text-center">
              {t.error}
            </div>
          )}

          {paymentStatus === "processing" && (
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500 text-blue-700 dark:text-blue-400 text-center">
              {t.processing}
            </div>
          )}

          {/* PayPal Button Container */}
          {paymentStatus !== "success" && (
            <div className="relative">
              <div
                ref={paypalContainerRef}
                className={`min-h-[150px] flex items-center justify-center transition-opacity ${
                  totalHours === 0 ? "opacity-40 pointer-events-none" : ""
                }`}
              />
              {totalHours === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground bg-background/80 px-4 py-2 rounded-lg">
                    {t.selectHours}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Download Invoice Button */}
          {paymentStatus === "success" && (
            <Button
              onClick={() => generateInvoice()}
              className="w-full"
              size="lg"
            >
              {t.downloadInvoice}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
