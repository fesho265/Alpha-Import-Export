import { useLanguage } from "@/contexts/LanguageContext";
import { useLanguagePath } from "@/hooks/use-language-path";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Products = () => {
  const { language, t } = useLanguage();
  const { getPath } = useLanguagePath();

  return (
    <div className="min-h-screen bg-secondary/20 pt-24 pb-12">
      {/* Header */}
      <section className="container-section py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {language === "ar" ? "منتجاتنا" : "Our Products"}
          </h1>
          <p className="text-lg text-secondary-foreground/80">
            {language === "ar"
              ? "استكشف مجموعتنا الشاملة من الحلول الصناعية والتجارية عالية الجودة"
              : "Explore our comprehensive range of high-quality industrial and commercial solutions"}
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="container-section py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const productData = product[language as "en" | "ar"];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white dark:bg-secondary/50 rounded-lg overflow-hidden border border-secondary/20 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-secondary/10">
                  <img
                    src={product.images[0]}
                    alt={productData.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <Badge className="w-fit mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                    {language === "ar" ? "متاح" : "Available"}
                  </Badge>

                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {productData.title}
                  </h3>

                  <p className="text-sm text-secondary-foreground/70 mb-6 line-clamp-2 flex-grow">
                    {productData.summary}
                  </p>

                  <Link
                    to={getPath(`/products/${product.slug}`)}
                    className="w-full"
                  >
                    <Button
                      variant="default"
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      {language === "ar" ? "عرض التفاصيل" : "View Details"}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Additional Info */}
      <section className="container-section py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center border border-primary/20"
        >
          <h2 className="text-2xl font-bold text-primary mb-4">
            {language === "ar"
              ? "هل تحتاج إلى مزيد من المعلومات؟"
              : "Need More Information?"}
          </h2>
          <p className="text-secondary-foreground/80 mb-6">
            {language === "ar"
              ? "تواصل معنا الآن للحصول على استشارة مجانية والإجابة على جميع أسئلتك"
              : "Contact us now for a free consultation and answers to all your questions"}
          </p>
          <Link to={getPath("/contact")}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              {language === "ar" ? "اتصل بنا" : "Contact Us"}
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Products;
