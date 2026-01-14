import { getPageMetadata } from "@/utils/generateMetadata";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "ar" };
}) {
  return getPageMetadata("home", params.lang);
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseSection />
      <CTASection />
    </main>
  );
}
