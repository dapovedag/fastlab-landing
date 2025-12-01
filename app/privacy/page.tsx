import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad - FastLab",
  description: "Política de privacidad de FastLab. Conoce cómo protegemos y utilizamos tu información personal.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <Link href="/" className="text-2xl font-bold hover:text-primary transition-colors">
            FastLab
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-12 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-8">Última actualización: 1 de diciembre de 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Información General</h2>
            <p className="text-muted-foreground leading-relaxed">
              FastLab (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la empresa&quot;) se compromete a proteger la privacidad de los visitantes de nuestro sitio web fastlab.art y de nuestros clientes. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Información que Recopilamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Podemos recopilar los siguientes tipos de información:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Información de contacto:</strong> nombre, correo electrónico, número de teléfono y empresa, cuando nos contacta a través de nuestro formulario.</li>
              <li><strong>Información técnica:</strong> dirección IP, tipo de navegador, dispositivo utilizado y páginas visitadas, recopiladas automáticamente para mejorar nuestro servicio.</li>
              <li><strong>Información del proyecto:</strong> detalles sobre sus necesidades de software que comparte voluntariamente durante las consultas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Uso de la Información</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Utilizamos su información para:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Responder a sus consultas y solicitudes de servicio.</li>
              <li>Proporcionar y mejorar nuestros servicios de desarrollo de software.</li>
              <li>Enviar comunicaciones relacionadas con proyectos activos.</li>
              <li>Mejorar la experiencia del usuario en nuestro sitio web.</li>
              <li>Cumplir con obligaciones legales aplicables.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Protección de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Estas medidas incluyen cifrado de datos, acceso restringido y servidores seguros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Compartir Información</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio (hosting, email).</li>
              <li>Cuando sea requerido por ley o autoridades competentes.</li>
              <li>Con su consentimiento explícito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Sus Derechos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Usted tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Acceder a la información personal que tenemos sobre usted.</li>
              <li>Solicitar la corrección de datos inexactos.</li>
              <li>Solicitar la eliminación de sus datos personales.</li>
              <li>Oponerse al procesamiento de sus datos.</li>
              <li>Retirar su consentimiento en cualquier momento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro sitio web utiliza cookies esenciales para su funcionamiento básico. No utilizamos cookies de seguimiento de terceros ni publicidad. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Retención de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Cambios a esta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página con una fecha de actualización revisada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, puede contactarnos a través de nuestro <Link href="/#contact-form" className="text-primary hover:underline">formulario de contacto</Link> o enviando un correo electrónico a contacto@fastlab.art.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link href="/" className="text-primary hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto px-6 lg:px-12 text-center text-muted-foreground">
          <p>&copy; 2025 FastLab. Tu fábrica de software.</p>
        </div>
      </footer>
    </div>
  );
}
