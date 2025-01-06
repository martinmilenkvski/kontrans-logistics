import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { ServicesHero } from "../components/services-hero.tsx";
import { ServiceDetails } from "../components/service-details.tsx";

export default function ServicesPage() {
  return (
    <main>
      <Nav />
      <ServicesHero />
      <ServiceDetails />
      <Footer />
    </main>
  );
}
