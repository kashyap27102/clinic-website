import { PageHeader } from "@/components/PageTitle";
import { SectionContainer } from "@/components/SectionContainer";
import { ServiceSection } from "@/components/ServiceSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Comprehensive Physiotherapy Treatments in Gandhinagar",
  description:
    "Explore our range of physiotherapy treatments, including sports rehabilitation, orthopedic therapy, and more. Visit The Physiotherapeutic Clinic for expert care in Gandhinagar.",
};

const TreatmenentsPage = () => {
  return (
    <>
      <PageHeader title="All Treatments" />
      <SectionContainer>
        <ServiceSection />
      </SectionContainer>
    </>
  );
};

export default TreatmenentsPage;
