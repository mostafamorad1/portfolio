import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeLanguageProvider } from "@/context/ThemeLanguageContext";

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

export const metadata: Metadata = {
  title: "Mostafa Morad | Data Engineer & Software Developer",
  description:
    "Portfolio of Mostafa Morad Sayed — Data Engineer, Software Developer, DEPI Trainee & BI Specialist. Scalable data pipelines, Next.js web applications, and insightful BI analytics.",
  icons: {
    icon: "/favicon.ico",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('portfolio_theme');
                  if (savedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                  var savedLang = localStorage.getItem('portfolio_lang');
                  if (savedLang === 'ar') {
                    document.documentElement.lang = 'ar';
                    document.documentElement.dir = 'rtl';
                  } else {
                    document.documentElement.lang = 'en';
                    document.documentElement.dir = 'ltr';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased selection:bg-indigo-500 selection:text-white`}
      >
        <ThemeLanguageProvider>{children}</ThemeLanguageProvider>
      </body>
    </html>
  );
}
