import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { TermsContent } from "../components/terms-content.tsx";

export default function TermsPage() {
  return (
    <main>
      <Nav />
      <TermsContent />
      <Footer />
    </main>
  );
}
