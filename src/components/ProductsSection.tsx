import { Zap, Wind, Truck, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLanguagePath } from "@/hooks/use-language-path";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const { t, isRTL } = useLanguage();
  const { getPath } = useLanguagePath();

  const products = [
    {
      icon: Zap,
      title: t.products.electricMotors.title,
      description: t.products.electricMotors.description,
      href: getPath("/products/electric-motors"),
    },
    {
      icon: Wind,
      title: t.products.airCompressors.title,
      description: t.products.airCompressors.description,
      href: getPath("/products/air-compressors"),
    },
    {
      icon: Truck,
      title: t.products.trucks.title,
      description: t.products.trucks.description,
      href: getPath("/products/mercedes-trucks"),
    },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="products" className="py-20 md:py-28 bg-gray-100">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.products.title1}{" "}
            <span className="text-primary">{t.products.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="industrial-card group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>
              <Link
                to={product.href}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                {t.products.learnMore} <ArrowIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
