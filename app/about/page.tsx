import { PageHeader } from "@/components/PageTitle";
import { SectionContainer } from "@/components/SectionContainer";
import { AboutClinic } from "@/components/about/AboutClinic";
import { MissionVision } from "@/components/about/MissionVission";
import { OwnerInfo } from "@/components/about/OwnerInfo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Professional Physiotherapists in Gandhinagar",
  description:
    "Know more about The Physiotherapeutic, our experienced team of physiotherapists, and our commitment to providing top-quality care in Gandhinagar.",
};

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <main>
        <SectionContainer className="bg-light md:p-10">
          <AboutClinic />
        </SectionContainer>
        <SectionContainer className=" md:p-10">
          <MissionVision />
        </SectionContainer>
        <SectionContainer className="bg-light">
          <OwnerInfo />
        </SectionContainer>
      </main>
    </>
  );
};

export default AboutPage;
