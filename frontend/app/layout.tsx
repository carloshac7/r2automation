import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// TODO: Reemplazar la fuente si es necesario (Inter es minimalista y moderna)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R2Automate - Plataforma de Automatizaciones Low-Code",
  description: "Crea flujos de automatización visuales de manera sencilla y poderosa.",
  // TODO: Agregar más metadata como icons, open graph, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-background text-text antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}