import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
// Components
import Toaster from "@/components/Toaster";

const fontSans = Roboto_Slab({ subsets: ["latin"], variable: "--font-sans" });

/*
You should not manually add <head> tags such as <title> and <meta> to root layouts. Instead, you should use the Metadata API which automatically handles advanced requirements such as streaming and de-duplicating <head> elements. 
*/

export const metadata: Metadata = {
  title: {
    default: "Shav Vimalendiran",
    template: "%s | Shav Vimalendiran",
  },
  metadataBase: new URL("https://shav.dev"),
  description: "AI, Machine Learning, Developer.",
  openGraph: {
    title: "Shav Vimalendiran",
    description: "AI, Machine Learning, Developer.",
    url: "https://shav.dev",
    siteName: "Shav Vimalendiran",
    images: [
      {
        url: "https://shav.dev/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Shav Vimalendiran",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Toaster />
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
