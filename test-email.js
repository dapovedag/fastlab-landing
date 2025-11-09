// Script de prueba para verificar el sistema de email
// Ejecutar con: node test-email.js

require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

console.log('🔍 Verificando configuración de email...\n');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASSWORD length:', process.env.EMAIL_PASSWORD ? process.env.EMAIL_PASSWORD.length : 0);
console.log('EMAIL_PASSWORD (hidden):', process.env.EMAIL_PASSWORD ? '****' + process.env.EMAIL_PASSWORD.slice(-4) : 'NO CONFIGURADA');
console.log('\n📧 Intentando enviar email de prueba...\n');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verificar conexión
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Error de autenticación:', error.message);
    console.error('\n💡 Posibles soluciones:');
    console.error('   1. Verifica que la contraseña de aplicación no tenga espacios');
    console.error('   2. Asegúrate de tener activada la verificación en dos pasos en Gmail');
    console.error('   3. Genera una nueva contraseña de aplicación en https://myaccount.google.com/apppasswords');
    process.exit(1);
  } else {
    console.log('✅ Autenticación exitosa con Gmail!');
    console.log('\n📨 Enviando email de prueba...\n');

    // Enviar email de prueba
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Enviar a ti mismo como prueba
      subject: '✅ Prueba exitosa - Sistema de email FastLab',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border-radius: 10px; margin-top: 20px; }
            .success { color: #10b981; font-size: 24px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 ¡Sistema de Email Configurado!</h1>
            </div>
            <div class="content">
              <p class="success">✅ El sistema de envío de emails está funcionando correctamente</p>
              <p>Este es un email de prueba para verificar que:</p>
              <ul>
                <li>✅ Las credenciales de Gmail están configuradas correctamente</li>
                <li>✅ La contraseña de aplicación funciona sin espacios</li>
                <li>✅ Nodemailer puede conectarse a Gmail SMTP</li>
                <li>✅ Los emails HTML se renderizan correctamente</li>
              </ul>
              <p style="margin-top: 20px; padding: 15px; background: white; border-radius: 6px; border-left: 4px solid #7c3aed;">
                <strong>Fecha de prueba:</strong> ${new Date().toLocaleString('es-ES', { timeZone: 'America/Bogota' })}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    .then(() => {
      console.log('✅ Email de prueba enviado exitosamente!');
      console.log('\n📬 Revisa tu bandeja de entrada:', process.env.EMAIL_USER);
      console.log('   (Si no lo ves, revisa la carpeta de Spam)\n');
      console.log('🎉 ¡El sistema de email está listo para usar!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Error al enviar el email:', error.message);
      process.exit(1);
    });
  }
});
