import AboutSection from "@/components/screen/home/About";
import Experience from "@/components/screen/home/Experience";
import HeroSection from "@/components/screen/home/HeroSection";
import Services from "@/components/screen/home/Services";
import TagsSection from "@/components/screen/home/Tags";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TagsSection />
      <Services />
      <AboutSection />
      <Experience />
    </>
  );
}
