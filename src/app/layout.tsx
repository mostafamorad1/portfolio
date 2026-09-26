import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeLanguageProvider } from "@/context/ThemeLanguageContext";
import { InitThemeAndLanguage } from "@/components/InitThemeAndLanguage";

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

import { Cairo } from "next/font/google";
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mostafa Morad | Data Engineer & Software Developer",
  description:
    "Portfolio of Mostafa Morad Sayed — Data Engineer, Software Developer, DEPI Trainee & BI Specialist. Scalable data pipelines, Next.js web applications, and insightful BI analytics.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mostafa Morad | Data Engineer & Software Developer",
    description:
      "Scalable data pipelines, Next.js web applications, and insightful BI analytics.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
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
      </body>
    </html>
  );
}
