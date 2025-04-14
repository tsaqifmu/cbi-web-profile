import type { Metadata } from "next";
import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/navbar/index";
import Footer from "@/components/layout/footer/footer";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  fallback: ["system-ui", "arial"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Centra Biotech Indonesia",
  description: "Centra Biotech Indonesia",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  openGraph: {
    title: "Centra Biotech Indonesia",
    description: "Solusi Bioteknologi Terintegrasi untuk Masa Depan",
    url: "https://www.centrabiotechindonesia.com",
    siteName: "Centra Biotech Indonesia",
    images: [
      {
        url: "https://www.centrabiotechindonesia.com/og-image.jpg", // Ganti dengan URL gambar OG kamu
        width: 1200,
        height: 630,
        alt: "Centra Biotech Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  // Tambahkan properti twitter
  twitter: {
    card: "summary_large_image",
    title: "Centra Biotech Indonesia",
    description: "Solusi Bioteknologi Terintegrasi untuk Masa Depan",
    images: ["https://www.centrabiotechindonesia.com/og-image.jpg"], // Ganti dengan URL gambar OG kamu
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = "G-16L2MWL33B";

  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" expand={true} richColors />
      </body>
    </html>
  );
}
