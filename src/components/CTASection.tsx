'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLanguagePath } from "@/hooks/use-language-path";
import { motion } from "motion/react";

const CTASection = () => {
  const { t } = useLanguage();
  const { getPath } = useLanguagePath();

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container-section text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
          {t.cta.title1} <span className="text-primary">{t.cta.title2}</span>?
        </h2>
        <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
          {t.cta.subtitle}
        </p>
        <Button size="lg" className="text-base px-8" asChild>
          <Link href={getPath("/contact")}>{t.cta.button}</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;
