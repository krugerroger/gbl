import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MobileNav } from "./components/gabriella/MobileNav";
import { CartProvider } from "./context/Cartcontext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// OPTIMISATION DES METADATA
export const metadata: Metadata = {
  title: {
    default: "Gabriella — Escort Indépendante",
    template: "%s | Gabriella Indépendante",
  },
  description: "Découvrez l'univers de Gabriella, escorte indépendante basée en France. Rencontres élégantes, massages professionnels et compagnie de classe internationale pour gentlemen exigeants.",
  keywords: [
    "Escorte indépendante Paris",
    "Escorte indépendante",
    "Escorte de luxe", 
    "Rencontre sensuelle", 
    "Massage érotique", 
    "Escorte VIP", 
    "Rencontre discrète", 
    "Rencontre intime", 
    "Expérience haut de gamme"
  ],
  authors: [{ name: "Gabriella" }],
  creator: "Gabriella",
  metadataBase: new URL("https://www.gabriellaindependante.com"), // Remplace par ton vrai domaine
  
  // OpenGraph (pour le partage sur WhatsApp, X, etc.)
  openGraph: {
    title: "Gabriella — Escorte Indépendante et Compagnie de Prestige",
    description: "L'élégance et la discrétion pour vos moments d'exception à Paris.",
    url: "https://www.gabriellaindependante.com",
    siteName: "Gabriella Indépendante",
    images: [
      {
        url: "/og-image.png", // Crée une image élégante de 1200x630px
        width: 1200,
        height: 630,
        alt: "Gabriella Indépendante - Escorte de Luxe",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Gabriella — Escorte Indépendante",
    description: "Compagnie de prestige et discrétion absolue.",
    images: ["/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Favicons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">
        <CartProvider>
          <MobileNav />
          <main className="flex-grow">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}