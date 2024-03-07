import Contact from "./ui/contact/contact";
import HeroSection from "./ui/hero/hero-section";
import Menu from "./ui/menu";
import Portfolio from "./ui/portfolio/portfolio";

export default function Home() {
  return (
    <main id="home">
      <Menu />
      <HeroSection />
      <Portfolio />
      <Contact />
    </main>
  );
}
