import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SectionContainer } from "@/components/SectionContainer";
import { Footer } from "@/components/Footer";
import { CopyRightSection } from "@/components/CopyRightSection";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lato = Lato({ subsets: ["latin"], weight: ["400", "300", "700", "900"] });

export const metadata: Metadata = {
  title: "The Physiothraputic Clinic",
  description: "This is physiotherapy clinic site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <SectionContainer className="bg-dark">
          <Footer />
        </SectionContainer>
        <hr className="text-light" />
        <SectionContainer className="bg-dark md:p-4 lg:p-4">
          <CopyRightSection />
        </SectionContainer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
