import "@/styles/globals.css";
import { BlurredBackground, Footer, Header } from "@/components";

import { jetbrainsMono, roboto } from "@/lib/fonts";

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
        <Footer />
      </body>
    </html>
  );
}
