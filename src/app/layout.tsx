import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LAVISH FURNITURE | Premium Handcrafted Furniture for Modern Living",
  description:
    "Discover exquisitely crafted furniture that transforms your space. Luxury sofas, dining sets, bedroom collections & office furniture. Free delivery on orders over $999.",
  keywords:
    "luxury furniture, premium sofas, handcrafted furniture, modern living room, dining sets, bedroom furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", poppins.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
