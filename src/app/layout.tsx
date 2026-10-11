import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeLanguageProvider } from "@/context/ThemeLanguageContext";
import { InitThemeAndLanguage } from "@/components/InitThemeAndLanguage";
import { ScrollToTop } from "@/components/ScrollToTop";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const cairo = localFont({
  src: "./fonts/CairoVF.woff2",
  variable: "--font-cairo",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "Mostafa Morad | Data Engineer & Software Developer",
  description:
    "Portfolio of Mostafa Morad Sayed — Data Engineer, Software Developer, OR & DS Student at FCAI-CU & DEPI Fellow. Scalable data pipelines, Next.js web applications, and insightful BI analytics.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Mostafa Morad | Data Engineer & Software Developer",
    description:
      "Portfolio of Mostafa Morad — Data Engineer & Software Developer. Scalable data pipelines, Next.js web applications, and insightful BI analytics.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mostafa Morad | Data Engineer & Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Morad | Data Engineer & Software Developer",
    description:
      "Scalable data pipelines, Next.js web applications, and insightful BI analytics.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <InitThemeAndLanguage />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} font-sans antialiased selection:bg-indigo-500 selection:text-white bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}
      >
        <ThemeLanguageProvider>{children}</ThemeLanguageProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
