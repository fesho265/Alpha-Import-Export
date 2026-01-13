"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import Image from "next/image";

export default function ProductsPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Header */}
      <section className="bg-[#3d3d3d] py-12 md:py-20">
        <div className="container-section text-white">
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
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gray-100 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const productData = product[language as "en" | "ar"];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white dark:bg-secondary/50 rounded-lg overflow-hidden border border-secondary/20 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 w-full ">
                  <Image
                    src={product.images[0]}
                    alt={productData.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-2">
                      {productData.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">
                      {productData.summary}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link href={`/${language}/products/${product.slug}`}>
                      <Button className="w-full">
                        {language === "ar" ? "عرض التفاصيل" : "View Details"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
