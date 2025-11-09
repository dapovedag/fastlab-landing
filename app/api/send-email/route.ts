import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  isRateLimited,
  getClientIp,
  validateAndSanitizeContactForm,
} from "@/lib/security";

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Rate limiting: 5 requests per minute per IP
    if (isRateLimited(clientIp, 5, 60000)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { lang } = body;

    // Validate and sanitize input
    const sanitizedData = validateAndSanitizeContactForm(body);
    if (!sanitizedData) {
      return NextResponse.json(
        { error: lang === "es" ? "Datos inválidos. Por favor verifica tu información." : "Invalid data. Please check your information." },
        { status: 400 }
      );
    }

    const { name, email, company, service, message, date, time } = sanitizedData;

    // Configurar el transportador de email
    // NOTA: Para producción, estas credenciales deben estar en variables de entorno
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "dapovedag@gmail.com",
        pass: process.env.EMAIL_PASSWORD || "", // Debe configurarse en .env.local
      },
    });

    // Email al destinatario (FastLab)
    const recipientEmailContent = {
      es: {
        subject: `Nueva solicitud de ${name} - ${service}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .field-label { font-weight: bold; color: #7c3aed; margin-bottom: 5px; }
              .field-value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #7c3aed; }
              .message-box { background: white; padding: 20px; border-radius: 6px; border: 2px solid #e5e7eb; margin-top: 20px; }
              .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📩 Nueva Solicitud de Contacto</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">👤 Nombre:</div>
                  <div class="field-value">${name}</div>
                </div>
                <div class="field">
                  <div class="field-label">📧 Email:</div>
                  <div class="field-value">${email}</div>
                </div>
                <div class="field">
                  <div class="field-label">🏢 Empresa/Universidad:</div>
                  <div class="field-value">${company}</div>
                </div>
                <div class="field">
                  <div class="field-label">⚙️ Servicio de interés:</div>
                  <div class="field-value">${service}</div>
                </div>
                <div class="field">
                  <div class="field-label">📅 Fecha preferida:</div>
                  <div class="field-value">${date}</div>
                </div>
                <div class="field">
                  <div class="field-label">🕐 Hora preferida:</div>
                  <div class="field-value">${time}</div>
                </div>
                <div class="message-box">
                  <div class="field-label">💬 Mensaje:</div>
                  <p style="margin-top: 10px;">${message}</p>
                </div>
                <div class="footer">
                  <p>Este mensaje fue enviado desde el formulario de contacto de FastLab</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      },
      en: {
        subject: `New request from ${name} - ${service}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .field-label { font-weight: bold; color: #7c3aed; margin-bottom: 5px; }
              .field-value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #7c3aed; }
              .message-box { background: white; padding: 20px; border-radius: 6px; border: 2px solid #e5e7eb; margin-top: 20px; }
              .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📩 New Contact Request</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">👤 Name:</div>
                  <div class="field-value">${name}</div>
                </div>
                <div class="field">
                  <div class="field-label">📧 Email:</div>
                  <div class="field-value">${email}</div>
                </div>
                <div class="field">
                  <div class="field-label">🏢 Company/University:</div>
                  <div class="field-value">${company}</div>
                </div>
                <div class="field">
                  <div class="field-label">⚙️ Service of interest:</div>
                  <div class="field-value">${service}</div>
                </div>
                <div class="field">
                  <div class="field-label">📅 Preferred date:</div>
                  <div class="field-value">${date}</div>
                </div>
                <div class="field">
                  <div class="field-label">🕐 Preferred time:</div>
                  <div class="field-value">${time}</div>
                </div>
                <div class="message-box">
                  <div class="field-label">💬 Message:</div>
                  <p style="margin-top: 10px;">${message}</p>
                </div>
                <div class="footer">
                  <p>This message was sent from FastLab contact form</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      },
    };

    const emailConfig = recipientEmailContent[lang as "es" | "en"];

    // Enviar email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "dapovedag@gmail.com",
      to: "dapovedag@gmail.com",
      subject: emailConfig.subject,
      html: emailConfig.html,
      replyTo: email, // Permite responder directamente al cliente
    });

    return NextResponse.json(
      { success: true, message: lang === "es" ? "Email enviado exitosamente" : "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: lang === "es" ? "Error al enviar el email" : "Error sending email" },
      { status: 500 }
    );
  }
}
