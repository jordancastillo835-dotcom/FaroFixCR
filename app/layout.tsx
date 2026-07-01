import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "FaroFix | Restauración de faros en Alajuela, San José y Heredia",
  description:
    "Restauración profesional de faros opacos, amarillentos o rayados con pulido técnico, protección UV y tratamiento cerámico en Alajuela, San José y Heredia.",
  keywords: [
    "restauración de faros",
    "pulido de faros",
    "faros opacos",
    "faros amarillentos",
    "tratamiento cerámico para faros",
    "protección UV faros",
    "restauración de faros Alajuela",
    "restauración de faros San José",
    "restauración de faros Heredia",
    "FaroFix",
  ],
  openGraph: {
    title: "FaroFix | Restauración profesional de faros",
    description:
      "Recupera claridad, brillo y seguridad con restauración de faros, protección UV y acabado cerámico en Alajuela, San José y Heredia.",
    url: "https://farofix.com",
    siteName: "FaroFix",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: "/despues1.jpg",
        width: 1200,
        height: 630,
        alt: "Resultado de restauración de faros FaroFix",
      },
    ],
  },
  alternates: {
    canonical: "https://farofix.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es-CR">
      <body>{children}</body>
    </html>
  );
}
