import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { MaritimeHero } from "../components/maritime-hero";
import { MaritimeIntro } from "../components/maritime-intro";
import { MaritimeServices } from "../components/maritime-services";

export default function MaritimePage() {
  return (
    <main>
      <Nav />
      <MaritimeHero />
      <MaritimeIntro />
      <MaritimeServices />
      <Footer />
    </main>
  );
}
