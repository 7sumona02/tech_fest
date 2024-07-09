import type { Metadata } from "next";
import { Pixelify_Sans, Square_Peg, Inter } from "next/font/google";
import "./globals.css";
import { cn } from '../utils/cn';

const pixelify = Pixelify_Sans({ subsets: ["latin"], variable: "--pixel-font" });
const squarePeg = Square_Peg({ subsets: ["latin"], weight: ["400"], variable: "--square-font" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Fest, ACM 🧑‍💻",
  description: "Developed using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(pixelify.variable, squarePeg.variable, inter.className )}>
        {children}
      </body>
    </html>
  );
}
