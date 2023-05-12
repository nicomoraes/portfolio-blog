import "@/styles/globals.css";
import { Metadata } from "next";
import { BlurredBackground, Footer, Header } from "@/components";
import { Analytics } from "@vercel/analytics/react";

import { jetbrainsMono, roboto } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Nicolas Moraes - Desenvolvedor Front-end",
    template: "%s | Nicolas Moraes",
  },
  icons: {
    icon: "./favicon.ico",
    apple: '/apple-touch-icon.png'
  },
  category: "technology",
  creator: "Nicolas Moraes",
  keywords: [
    "Blog",
    "Front-end",
    "Moraes",
    "Next.js",
    "Nicolas",
    "Portfolio",
    "React",
  ],
  publisher: "Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${jetbrainsMono.variable} font-sans`}
    >
      <body>
        <BlurredBackground
          variant={"blue"}
          position={{
            top: "10%",
            left: "60%",
          }}
        />
        <BlurredBackground
          variant={"orange"}
          position={{
            top: "30%",
            left: "10%",
          }}
        />
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
