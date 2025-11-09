import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FastLab - MVPs de Grado Profesional en 2 Semanas",
  description: "Transformamos levantamientos estudiantiles en MVPs profesionales en 2 semanas. Gratis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
