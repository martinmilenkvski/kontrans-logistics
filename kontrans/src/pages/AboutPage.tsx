import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { AboutHero } from "../components/about-hero";
import { AboutContent } from "../components/about-content"; 
import { AboutSections } from "../components/about-sections";


function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutHero />
      <AboutSections />
      <AboutContent />
      
      <Footer />
    </main>
  );
}

export default AboutPage;
