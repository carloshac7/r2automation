import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { DemoSection } from "./components/DemoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <DemoSection />
      {/* TODO: Agregar más secciones si es necesario, como Testimonials o Pricing */}
    </>
  );
}