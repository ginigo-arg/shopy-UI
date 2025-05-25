import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./ui/Header";
import authenticated from "./auth/authenticated";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopy Next App",
  description: "NextJs + NesJs + Prisma + Tailwind CSS + TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = authenticated();
  return (
    <html lang="en">
      <Providers authenticated={isAuthenticated}>
        <Header />
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
