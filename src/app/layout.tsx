import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils";
import Script from "next/script";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coming soon...",
  description: "Where passion meets code.",
  openGraph: {
    images: "https://pedroserrano.dev/metadata.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("no-scrollbar", sourceCodePro.className)}>
        {children}
        <Script 
          src="https://chatbot-production-6039.up.railway.app/widget.js?client=clinicax" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
