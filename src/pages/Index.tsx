import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "@/components/ui/ScrollToTop";

const Index = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const scrollToId = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      const headerOffset = 100; // adjust for fixed header
      const start = window.scrollY || window.pageYOffset;
      const target = el.getBoundingClientRect().top + start - headerOffset;
      const distance = target - start;
      const duration = 600;
      let startTime: number | null = null;

      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const time = Math.min(1, (timestamp - startTime) / duration);
        const eased = easeInOutQuad(time);
        window.scrollTo(0, Math.round(start + distance * eased));
        if (time < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => scrollToId(id), 50);
      return;
    }

    // If path like /en/about or /ar/products, map last segment to section id
    const parts = pathname.split("/").filter(Boolean);
    // parts = ["en", "about"]
    if (parts.length >= 2) {
      const last = parts[1];
      const allowed = ["home", "about", "products"];
      if (allowed.includes(last)) {
        setTimeout(() => scrollToId(last), 50);
      }
    }
  }, [hash, pathname]);

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
