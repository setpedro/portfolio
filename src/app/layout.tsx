import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

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
      <body className={sourceCodePro.className}>{children}</body>
    </html>
  );
}
