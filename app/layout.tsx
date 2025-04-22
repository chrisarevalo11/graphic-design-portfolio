import type { Metadata } from "next";
import "./globals.css";
import { instrumentSans, instrumentSerif } from "./lib/fonts";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Juliana Ortegon Portafolio",
  description: "Juliana Ortegon Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased h-[300svh]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
