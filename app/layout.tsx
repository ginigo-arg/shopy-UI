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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = await authenticated();
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid min-h-dvh grid-rows-[auto,1fr,auto]`}
      >
        <Providers authenticated={isAuthenticated}>
          <Header></Header>
          <main className="container mx-auto my-auto">{children}</main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p className="text-sm">
              &copy; Shopy Next App. All rights reserved.
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
