import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../styles/globals.css";

import { Navbar } from "../components/header/NavBar";

import { Toaster } from "@/src/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tyson Burger 🍔 | Hamburguesas artesanales",
    template: "%s | Tyson Burger",
  },
  description:
    "Descubrí el sabor inigualable de Tyson Burger: hamburguesas artesanales, pan de papa, salsas caseras y combos irresistibles. Pedí online y disfrutá el mejor sabor de Berazategui.",
  keywords: [
    "hamburguesas",
    "Tyson Burger",
    "comida rápida",
    "hamburguesería",
    "delivery Berazategui",
    "burgers artesanales",
    "comida casera",
  ],
  authors: [{ name: "Tyson Burger", url: "https://tysonburger.com" }],
  openGraph: {
    title: "Tyson Burger 🍔 | Hamburguesas artesanales",
    description:
      "El sabor casero de verdad. Probá nuestras burgers 100% carne, pan de papa y salsas únicas.",
    url: "https://tysonburger.com",
    siteName: "Tyson Burger",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://tysonburger.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hamburguesa doble Tyson Burger con cheddar y bacon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tysonburger.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Rich Snippet (schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: "Tyson Burger",
              url: "https://tysonburger.com",
              telephone: "+54 9 11 3283 0604",
              image: "https://tysonburger.com/images/tyson-logo.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Berazategui",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              servesCuisine: "Hamburguesas artesanales",
              openingHours: "Tu-Su 11:00-23:00",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-foreground pt-28 max-w-[1400px] mx-auto px-10`}
      >
        <Navbar />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
