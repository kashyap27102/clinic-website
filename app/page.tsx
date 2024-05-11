import { CopyRightSection } from "@/components/CopyRightSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { Navbar } from "@/components/Navbar";
import { PatientReviewSection } from "@/components/PatientReviewSection";
import { SectionContainer } from "@/components/SectionContainer";
import { ServiceSection } from "@/components/ServiceSection";

export default function Home() {
  return (
    <div className="bg-light relative">
      <Navbar />
      <SectionContainer className="bg-gradient-to-r from-primaryDark to-primaryLight sm:p-0 lg:p-0 md:p-0">
        <HeroSection />
      </SectionContainer>
      <SectionContainer className="bg-white">
        <ServiceSection />
      </SectionContainer> 
      <SectionContainer>
        <PatientReviewSection/>
      </SectionContainer>
      <SectionContainer className="bg-dark/70">
        <LocationSection/>
      </SectionContainer>
      <hr className="text-light"/>
      <SectionContainer className="bg-dark">
        <Footer />
      </SectionContainer>
      <hr />
      <SectionContainer className="bg-dark md:p-4 lg:p-4">
        <CopyRightSection />
      </SectionContainer>
    </div>
  );
}
