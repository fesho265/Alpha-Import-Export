'use client';

import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "motion/react";

const WhyChooseSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t.whyChoose.quality.title,
      description: t.whyChoose.quality.description,
    },
    {
      title: t.whyChoose.experience.title,
      description: t.whyChoose.experience.description,
    },
    {
      title: t.whyChoose.support.title,
      description: t.whyChoose.support.description,
    },
    {
      title: t.whyChoose.competitive.title,
      description: t.whyChoose.competitive.description,
    },
  ];

  return (
    <section className="py-20 md:py-28 ">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.whyChoose.title1}{" "}
            <span className="text-primary">{t.whyChoose.title2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-lg hover:bg-card transition-colors"
            >
              <div className="check-badge shrink-0">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
