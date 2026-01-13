import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import Providers from "./providers";

// import Providers from './providers';

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return (
    <Providers>
      <Header />
      {children}
      <ScrollToTopButton />
      <Footer />
    </Providers>
  );
}
