import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Uso - FastLab",
  description: "Términos y condiciones de uso de los servicios de FastLab. Conoce tus derechos y responsabilidades.",
};

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-8">Términos de Uso</h1>
        <p className="text-muted-foreground mb-8">Última actualización: 1 de diciembre de 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Al acceder y utilizar el sitio web fastlab.art y los servicios de FastLab, usted acepta estar sujeto a estos Términos de Uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Descripción de los Servicios</h2>
            <p className="text-muted-foreground leading-relaxed">
              FastLab es una empresa de desarrollo de software que ofrece servicios de creación de productos digitales, incluyendo pero no limitado a: desarrollo de aplicaciones web, soluciones de inteligencia artificial, dashboards, sistemas de automatización y consultoría tecnológica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Producto Inicial Gratuito</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FastLab ofrece un producto inicial sin costo bajo las siguientes condiciones:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>El producto inicial es un desarrollo funcional entregado en un plazo aproximado de 2 semanas.</li>
              <li>El código fuente del producto inicial es propiedad del cliente.</li>
              <li>No existe obligación de continuar con servicios adicionales después del producto inicial.</li>
              <li>FastLab se reserva el derecho de evaluar y aceptar proyectos según su viabilidad técnica.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Propiedad Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Respecto a la propiedad intelectual:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Código del cliente:</strong> Todo el código desarrollado específicamente para el cliente es propiedad exclusiva del cliente.</li>
              <li><strong>Herramientas y librerías:</strong> FastLab puede utilizar herramientas, frameworks y librerías de terceros sujetas a sus propias licencias.</li>
              <li><strong>Contenido del sitio:</strong> El contenido, diseño y marca de fastlab.art son propiedad de FastLab.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Responsabilidades del Cliente</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">El cliente se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Proporcionar información precisa y completa sobre los requerimientos del proyecto.</li>
              <li>Responder oportunamente a las solicitudes de información o clarificación.</li>
              <li>No utilizar los servicios para fines ilegales o no autorizados.</li>
              <li>Mantener la confidencialidad de cualquier credencial o acceso proporcionado.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitación de Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              FastLab no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad máxima estará limitada al monto pagado por el cliente por los servicios en cuestión.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Confidencialidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              FastLab se compromete a mantener la confidencialidad de toda la información del cliente compartida durante el proceso de desarrollo. No divulgaremos información confidencial a terceros sin el consentimiento previo del cliente, excepto cuando sea requerido por ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Garantías y Soporte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para proyectos contratados (posterior al producto inicial gratuito):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Se proporciona documentación técnica completa.</li>
              <li>Se ofrece un período de corrección de errores según el acuerdo específico del proyecto.</li>
              <li>El soporte continuo está disponible bajo contratos de mantenimiento separados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Terminación</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cualquiera de las partes puede terminar la relación de servicios con notificación por escrito. En caso de terminación, el cliente recibirá todo el código y documentación generados hasta la fecha de terminación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Modificaciones a los Términos</h2>
            <p className="text-muted-foreground leading-relaxed">
              FastLab se reserva el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de su publicación en el sitio web. El uso continuado de nuestros servicios después de dichos cambios constituye su aceptación de los nuevos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Ley Aplicable</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estos Términos de Uso se regirán e interpretarán de acuerdo con las leyes de la República de Colombia. Cualquier disputa será sometida a la jurisdicción de los tribunales competentes de Colombia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para preguntas sobre estos Términos de Uso, puede contactarnos a través de nuestro <Link href="/#contact-form" className="text-primary hover:underline">formulario de contacto</Link> o enviando un correo electrónico a contacto@fastlab.art.
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
