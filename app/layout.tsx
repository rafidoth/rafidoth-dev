import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/lib/font'

export const metadata: Metadata = {
  title: "rafidoth",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
