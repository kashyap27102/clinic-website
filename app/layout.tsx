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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PVKLVJ7P');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={lato.className} suppressHydrationWarning={true}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PVKLVJ7P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
