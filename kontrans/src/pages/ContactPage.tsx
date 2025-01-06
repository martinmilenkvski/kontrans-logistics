import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { ContactHero } from "../components/contact-hero";
import { ContactSection } from "../components/contact-section.tsx";

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
