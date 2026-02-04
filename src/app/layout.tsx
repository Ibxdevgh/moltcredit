import type { Metadata } from "next";
import Script from "next/script";
import { foundryPlek, youth, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoltCredit - Autonomous Credit for AI Agents",
  description:
    "MoltCredit provides autonomous credit for AI agents, enabling trusted, transparent, and scalable financial connections.",
  applicationName: "MoltCredit",
  keywords: [
    "MoltCredit",
    "AI agents",
    "autonomous credit",
    "onchain finance",
    "agent payments",
    "credit network",
  ],
  robots: "index, follow",
  alternates: { canonical: "https://molt.credit" },
  openGraph: {
    title: "MoltCredit - Autonomous Credit for AI Agents",
    description:
      "MoltCredit provides autonomous credit for AI agents, enabling trusted, transparent, and scalable financial connections.",
    url: "https://molt.credit",
    siteName: "MoltCredit",
    images: [
      {
        url: "https://molt.credit/favicon.ico",
        width: 1200,
        height: 630,
        alt: "MoltCredit",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoltCredit - Autonomous Credit for AI Agents",
    description:
      "MoltCredit provides autonomous credit for AI agents, enabling trusted, transparent, and scalable financial connections.",
    images: ["https://molt.credit/favicon.ico"],
  },
  icons: { icon: "/favicon.ico" },
  other: { "theme-color": "#F2EFE9" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="help" href="/SKILL.md" type="text/markdown" />
      </head>
      <body
        className={`${foundryPlek.variable} ${youth.variable} ${poppins.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BWRR65TVJS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BWRR65TVJS');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
