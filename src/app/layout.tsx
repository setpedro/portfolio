import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Serrano's Portfolio",
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
      <body className={cn("no-scrollbar", sourceCodePro.className)}>{children}</body>
    </html>
  );
}
