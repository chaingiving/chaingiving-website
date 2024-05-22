import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chain.Giving",
  description: "Leveraging Polkadot for fundraising and aid distribution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"/>
    </head>
    <body className={inter.className}>
    {children}
    <Analytics/>
    </body>
    </html>
  );
}
