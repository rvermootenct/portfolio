import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "../components/Theme";
import DarkLight from "@/components/DarkLight";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <DarkLight />
          {children}</Theme></body>
    </html>
  );
}
