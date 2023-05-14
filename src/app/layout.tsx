import "@/styles/globals.scss";
import { Rubik } from "next/font/google";
import Toaster from "@/components/Toaster";

const rubik = Rubik({ subsets: ["latin"] });

/*
You should not manually add <head> tags such as <title> and <meta> to root layouts. Instead, you should use the Metadata API which automatically handles advanced requirements such as streaming and de-duplicating <head> elements. 
*/

export const metadata = {
  title: "Shav Dev",
  metadataBase: new URL("https://shav.dev"),
  description:
    "Quadra is the ultimate solution for investors; with advanced algorithmic order execution, centralized risk management, and a complete portfolio management system, you'll have everything you need to succeed. Master the Crypto Markets with Quadra: Multi-Asset Multi-Exchange Portfolio Management & Execution.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "pt-BR": "/pt-BR",
    },
  },
  openGraph: {
    title: "Quadra",
    url: "https://quadra.trade",
    images: [
      {
        url: "https://d3i7fbcjmpexee.cloudfront.net/screens/orderbook_trade.png",
        width: 800,
        height: 600,
      },
    ],
  },
  robots: {
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body className={rubik.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
