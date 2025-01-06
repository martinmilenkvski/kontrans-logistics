import { Nav } from "../components/nav";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about-hero";
import { AboutContent } from "@/components/about-content";
import { AboutSections } from "@/components/about-sections";
import { TeamSection } from "@/components/team-section";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutHero />
      <AboutSections />
      <AboutContent />
      <TeamSection />
      <Footer />
    </main>
  );
}
