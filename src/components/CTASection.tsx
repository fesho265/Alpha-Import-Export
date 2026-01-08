import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container-section text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
          {t.cta.title1} <span className="text-primary">{t.cta.title2}</span>?
        </h2>
        <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
          {t.cta.subtitle}
        </p>
        <Button size="lg" className="text-base px-8">
          {t.cta.button}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
