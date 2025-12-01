import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FastLab - Tu Fábrica de Software",
  description: "Transformamos los desafíos de tu empresa en soluciones de software profesional. Productos listos para producción en 2 semanas.",
  keywords: ["software", "desarrollo", "aplicaciones", "MVP", "startup", "empresa", "FastLab", "Colombia"],
  authors: [{ name: "FastLab" }],
  creator: "FastLab",
  metadataBase: new URL("https://fastlab.art"),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://fastlab.art",
    siteName: "FastLab",
    title: "FastLab - Tu Fábrica de Software",
    description: "Transformamos los desafíos de tu empresa en soluciones de software profesional. Productos listos para producción en 2 semanas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastLab - Tu Fábrica de Software",
    description: "Transformamos los desafíos de tu empresa en soluciones de software profesional. Productos listos para producción en 2 semanas.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
