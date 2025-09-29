import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Build Advisor",
  authors: [
    {
      name: "ibrewcoffeeonthemoon",
      url: "https://github.com/ibrewcoffeeonthemoon",
    },
  ],
  title: "Build Advisor",
  description: "A build advisor for The Division 2 game",
  keywords: ["Tom Clancy's", "Division 2", "Build", "Advisor", "DPS"],
  robots: "all",
};

export const viewport: Viewport = {
  themeColor: "#431407",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
