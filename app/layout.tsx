import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linktree in NextJS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
      lang="en"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
