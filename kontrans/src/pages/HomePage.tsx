import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { WhyChooseUs } from "../components/why-choose-us";
import { AnimatedCounter } from "../components/animated-counter.tsx";
import { ServicesSection } from "../components/services-section";
import { TestimonialSlider } from "../components/testimonial-slider";
import { BlogSection } from "../components/blog-section";
import { Footer } from "../components/footer";

export default function Home() {

  return (
    <main>
      <Nav />
      <Hero />
      <ServicesSection />
      <AnimatedCounter />
      <TestimonialSlider />
      <WhyChooseUs />
      <BlogSection />
      <Footer />
    </main>
  );
}
