"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { motion } from "motion/react";
import { use, useState } from "react";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}) {
  const { slug } = use(params);
  const { language, isRTL } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.slug === slug);
  const content = product[language];

  if (!product) {
    return (
      <div className="min-h-screen pt-16 md:pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {language === "ar" ? "المنتج غير موجود" : "Product not found"}
          </h1>
          <Link href={`/${language}/products`}>
            <Button>
              {language === "ar" ? "العودة إلى المنتجات" : "Back to Products"}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const productData = product[language as "en" | "ar"];

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-gray-100">
      {/* Back Button */}
      <section className="bg-white py-6 border-b">
        <div className="container-section">
          <Link href={`/${language}/products`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {language === "ar" ? "العودة إلى المنتجات" : "Back to Products"}
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container-section max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12"
          >
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

            {/* Details */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">
                  {language === "ar" ? "متوفر" : "Available"}
                </Badge>
                <h1 className="text-4xl font-bold text-primary mb-4">
                  {productData.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {productData.summary}
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4">
                    {language === "ar" ? "الوصف" : "Description"}
                  </h2>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {productData.description}
                  </p>
                </CardContent>
              </Card>

              {productData.specifications &&
                productData.specifications.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-xl font-bold mb-4">
                        {language === "ar" ? "المواصفات" : "Specifications"}
                      </h2>
                      <div className="space-y-3">
                        {productData.specifications.map((spec, index) => (
                          <div
                            key={index}
                            className="flex justify-between py-2 border-b last:border-0"
                          >
                            <span className="font-medium">{spec.label}</span>
                            <span className="text-muted-foreground">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

              <div className="pt-4">
                <Link
                  href={`/${language}/contact?product=${encodeURIComponent(
                    content.title
                  )}`}
                >
                  <Button size="lg" className="w-full gap-2">
                    <Mail className="w-5 h-5" />
                    {language === "ar" ? "استفسر الآن" : "Inquire Now"}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
