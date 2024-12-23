
import "../global.css";
import { Inter } from 'next/font/google';
import localFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "krzysztofwicki",
    template: "%s | krzysztofwicki",
  },
  description: "Software engineer at Sevenet S.A.",
  openGraph: {
    title: "krzysztofwicki",
    description: "Software engineer at Sevenet S.A.",
    url: "https://krzysztofwicki.com",
    siteName: "krzysztofwicki.com",
    images: [
      {
        url: "https://krzysztofwicki.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-EU",
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
    title: "kicky",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${calSans.variable}`} suppressHydrationWarning>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

