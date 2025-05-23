import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/home/Footer";
import { BRAND_NAME } from "@/data/constant";
import { getWhatsappUrl } from "@/utils/whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: BRAND_NAME,
  description: "Sewa Villa Puncak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <a
          href={getWhatsappUrl()} 
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center z-50"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat via WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.76 11.76 0 0012 0a11.83 11.83 0 00-10.3 17.7L0 24l6.5-1.7A11.8 11.8 0 0012 24a11.75 11.75 0 008.32-3.48 11.75 11.75 0 000-16.64zM12 21.5a9.59 9.59 0 01-5.2-1.52l-.38-.24-3.85 1 1-3.74-.25-.39A9.6 9.6 0 1112 21.5zm5.28-7.37l-1.66-.47a1 1 0 00-1 .26l-.77.8a9.34 9.34 0 01-4.32-4.33l.8-.77a1 1 0 00.26-1L9.87 6a1 1 0 00-.95-.67h-.67a1.67 1.67 0 00-1.68 1.68 9.94 9.94 0 0010 10 1.68 1.68 0 001.68-1.68v-.66a1 1 0 00-.67-.94z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
