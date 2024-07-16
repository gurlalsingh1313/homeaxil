import AboutSection from "@/components/AboutSection";
import Catalogue from "@/components/Catalogue";
import CatalogueSection from "@/components/CatalogueSection";
import CatalogueSwiper from "@/components/CatalogueSwiper";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanySection />
      <AboutSection />
      <Catalogue />
      <CatalogueSwiper />
      <ContactSection />
    </div>
  );
}
