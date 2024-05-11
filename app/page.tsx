import { CopyRightSection } from "@/components/CopyRightSection";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/SectionContainer";

export default function Home() {
  return (
    <div>
      <h1>Hey, This is Physiotherapy site</h1>
      <SectionContainer className="bg-slate-700">
        <Footer />
      </SectionContainer>
      <SectionContainer className="bg-slate-700">
        <CopyRightSection />
      </SectionContainer>
    </div>
  );
}
