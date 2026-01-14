"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "motion/react";
import Link from "next/link";
import { useLanguagePath } from "@/hooks/use-language-path";

const HeroSection = () => {
  const { t, language } = useLanguage();
  const { getPath } = useLanguagePath();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/hero-industrial.jpg)` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 container-section text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {language === "ar" ? (
              <>
                ألفا <span className="text-primary">للاستيراد والتصدير</span>
              </>
            ) : (
              <>
                Alfa <span className="text-primary">Import & Export</span>
              </>
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
            {t.hero.subtitle}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href={getPath("/products")}>
              <Button size="lg" className="text-base px-8">
                {t.hero.cta}
              </Button>
            </Link>

            <Link href={getPath("/contact")}>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-white/10 border-white/40 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-sm"
              >
                {t.hero.secondary}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
