import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Providers from "../utils/Providers";

const JetBrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${JetBrains.variable} ${inter.variable}`}>
      <body>
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-5xl px-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
