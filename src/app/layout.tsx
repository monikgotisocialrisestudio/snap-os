import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadClassName from "./_components/load-classname";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "block",
});

export const metadata: Metadata = {
  title: "SnapOs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <TooltipProvider>
          {children}
          <LoadClassName />
        </TooltipProvider>
      </body>
    </html>
  );
}
