import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Link from "next/link";

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
    <header className="flex items-center justify-between px-6 py-4">
      <Link href="/">
        <img src="/images/chain-giving-logo.png" width="200em"/>
      </Link>
      <nav className="space-x-4">
        <Link className="text-sm font-medium" href="/">
          Home
        </Link>
        <Link className="text-sm font-medium" href="/litepaper">
          Litepaper
        </Link>
        <Link className="text-sm font-medium" href="https://polkadot.giving">
          Get&nbsp;Involved
        </Link>
        <Link className="text-sm font-medium" href="https://chaingiving.substack.com/">
          Blog
        </Link>
      </nav>
    </header>
    {children}
    <Analytics/>
    </body>
    </html>
  );
}


function HeartIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
  );
}
