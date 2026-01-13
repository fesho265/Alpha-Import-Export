'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "motion/react";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 section-light">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.about.title1}{" "}
            <span className="text-primary">{t.about.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {t.about.paragraph1}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.paragraph2}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
