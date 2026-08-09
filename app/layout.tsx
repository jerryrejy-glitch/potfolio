import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jerry V Rejy — Social Media Manager",
  description:
    "Social Media Manager with 8+ years growing brands organically. 400K+ followers, ₹1Cr+ revenue, currently at Provident Real Estate, Dubai.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
