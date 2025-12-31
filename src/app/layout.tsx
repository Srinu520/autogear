import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileActionBar } from "@/components/MobileActionBar";
import { OpenNowBadge } from "@/components/OpenNowBadge";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Auto Accessories Store in Dommasandra",
    template: "%s | Auto Accessories Store",
  },
  description:
    "Professional fitting, honest recommendations, and reliable electrical repairs in Dommasandra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable}`}>
        <SiteHeader />
        <OpenNowBadge />
        <main>{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
