import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://r2automate.com"), // 👈 Agregado para SEO y evitar warnings
  title: "R2Automate - Automatización Inteligente con IA",
  description:
    "Desarrollamos soluciones de automatización, chatbots con IA, web scraping y APIs personalizadas. Optimiza tus procesos empresariales con tecnología de punta.",
  keywords: [
    "automatización",
    "chatbots IA",
    "web scraping",
    "n8n",
    "flowise",
    "voiceflow",
    "kommo crm",
    "apis",
    "python",
    "streamlit"
  ],
  authors: [{ name: "R2Automate" }],
  creator: "R2Automate",
  publisher: "R2Automate",
  openGraph: {
    title: "R2Automate - Automatización Inteligente con IA",
    description: "Soluciones de automatización e inteligencia artificial para empresas",
    url: "https://r2automate.com",
    siteName: "R2Automate",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "R2Automate - Automatización Inteligente"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "R2Automate - Automatización Inteligente con IA",
    description: "Soluciones de automatización e inteligencia artificial para empresas",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Analytics (reemplaza con tu ID si lo usas) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}

        {/* Metadatos adicionales */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#06b6d4" />
        <link rel="canonical" href="https://r2automate.com" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
