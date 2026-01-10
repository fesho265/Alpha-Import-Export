import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLanguagePath } from "@/hooks/use-language-path";
import { getProductBySlug } from "@/data/products";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const ProductDetailContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t, isRTL } = useLanguage();
  const { getPath } = useLanguagePath();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = getProductBySlug(slug || "");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {language === "en" ? "Product not found" : "المنتج غير موجود"}
          </h1>
          <Link to={getPath("/")} className="text-primary hover:underline">
            {language === "en" ? "Return to home" : "العودة للرئيسية"}
          </Link>
        </div>
      </div>
    );
  }

  const content = product[language];
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b">
          <div className="container-section py-4">
            <Link
              to={getPath("/products")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <BackArrow className="w-4 h-4" />
              {language === "en" ? "Back to Products" : "العودة للمنتجات"}
            </Link>
          </div>
        </div>

        <div className="container-section py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                <img
                  src={product.images[selectedImage]}
                  alt={content.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-transparent hover:border-muted-foreground/30"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${content.title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {content.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {content.summary}
                </p>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {language === "en" ? "Description" : "الوصف"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {content.description}
                </p>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {language === "en"
                    ? "Technical Specifications"
                    : "المواصفات الفنية"}
                </h2>
                <div className="space-y-4">
                  {content.specifications.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="border-b border-border pb-3"
                    >
                      <dt className="font-medium text-primary mb-1">
                        {spec.label}
                      </dt>
                      <dd className="text-muted-foreground">{spec.value}</dd>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                  <Link
                    to={getPath(
                      `/contact?product=${encodeURIComponent(content.title)}`
                    )}
                  >
                    <Phone className="w-4 h-4" />
                    {language === "en" ? "Contact for Product" : "تواصل للمنتج"}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

const ProductDetail = () => {
  return <ProductDetailContent />;
};

export default ProductDetail;
