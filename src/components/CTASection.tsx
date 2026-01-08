import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const CTASection = () => {
  const { t } = useLanguage();

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
        <Button size="lg" className="text-base px-8">
          {t.cta.button}
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;
