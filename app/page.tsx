import { HeroSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { PatientReviewSection } from "@/components/PatientReviewSection";
import { SectionContainer } from "@/components/SectionContainer";
import { ServiceSection } from "@/components/ServiceSection";
import { TreatmentOptionsSection } from "@/components/TreatmentOptionSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Physiotherapy Clinic in Gandhinagar | The Physiotherapeutic Clinic",
  description:
    "Welcome to The Physiotherapeutic Clinic, the leading physiotherapy clinic in Gandhinagar. Our expert therapists provide personalized treatment plans to help you recover and stay healthy.",
};

export default function Home() {
  return (
    <div className="bg-light relative">
      <SectionContainer className="bg-gradient-to-r from-primaryDark to-primaryLight sm:p-0 lg:p-0 md:p-0">
        <HeroSection />
      </SectionContainer>

      <SectionContainer className="">
        <ServiceSection />
      </SectionContainer>
      <SectionContainer className="bg-white">
        <TreatmentOptionsSection />
      </SectionContainer>
      <SectionContainer>
        <PatientReviewSection />
      </SectionContainer>
      <SectionContainer className="bg-dark    ">
        <LocationSection />
      </SectionContainer>
    </div>
  );
}
