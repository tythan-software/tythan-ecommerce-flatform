import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/layouts/theme-provider";
import { CartProvider } from "@/lib/hooks/use-cart";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header/header";
import { Toaster } from "@/components/partials/toaster";
import { SEO_CONFIG } from "@/app";

import "@/styles/globals.css";
import ChatBox from "@/components/layouts/chatbox";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: `${SEO_CONFIG.slogan}`,
  title: `${SEO_CONFIG.name}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen bg-gradient-to-br from-white to-slate-100
          text-neutral-900 antialiased
          selection:bg-primary/80
          dark:from-neutral-950 dark:to-neutral-900 dark:text-neutral-100
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <CartProvider>
            <Header showAuth={true} />
            <main className={`flex min-h-screen flex-col`}>{children}</main>
            <Footer />
            <Toaster />
            <ChatBox />
          </CartProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
