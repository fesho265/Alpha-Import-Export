"use client";
import { getPageMetadata } from "@/utils/generateMetadata";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useLanguagePath } from "@/hooks/use-language-path";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "ar" };
}) {
  return getPageMetadata("about", params.lang);
}

export default function AboutPage() {
  const { language, t } = useLanguage();
  const { getPath } = useLanguagePath();
  const router = useRouter();

  return (
    <div className="min-h-screen pt-16 md:pt-20 ">
      {/* Hero Section */}
      <section className="bg-[#3d3d3d] py-12 md:py-20">
        <div className="container-section text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {language === "ar" ? "حول ألفا" : "About Alfa"}
            </h1>
            <p className="text-lg  mb-8 leading-relaxed">
              {language === "ar"
                ? "ألفا للاستيراد والتصدير هي شركة رائدة في توفير الحلول الصناعية والتجارية عالية الجودة. مع سنوات من الخبرة والالتزام بالتميز، نحن نخدم العملاء في جميع أنحاء المنطقة بمنتجات وخدمات موثوقة."
                : "Alfa Import & Export is a leading provider of high-quality industrial and commercial solutions. With years of expertise and commitment to excellence, we serve customers across the region with reliable products and services."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-12 md:py-20">
        <div className=" container-section grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/50 dark:bg-secondary/30 rounded-lg p-8 border border-secondary/20"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">
              {language === "ar" ? "مهمتنا" : "Our Mission"}
            </h2>
            <p className=" leading-relaxed">
              {language === "ar"
                ? "توفير منتجات وخدمات صناعية عالية الجودة تلبي احتياجات العملاء الحالية والمستقبلية، مع الحفاظ على أعلى معايير الموثوقية والابتكار."
                : "To provide high-quality industrial products and services that meet our customers' current and future needs, while maintaining the highest standards of reliability and innovation."}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/50 dark:bg-secondary/30 rounded-lg p-8 border border-secondary/20"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">
              {language === "ar" ? "رؤيتنا" : "Our Vision"}
            </h2>
            <p className=" leading-relaxed">
              {language === "ar"
                ? "أن نكون الشريك الموثوق والمفضل للشركات والمؤسسات في تلبية احتياجاتها من المعدات الصناعية والحلول التجارية."
                : "To be the trusted and preferred partner for companies and organizations in meeting their industrial equipment and commercial solution needs."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className=" section-light  py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="container-section text-3xl font-bold text-primary mb-12 text-center">
            {language === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: language === "ar" ? "الجودة" : "Quality",
                description:
                  language === "ar"
                    ? "نلتزم بتقديم منتجات وخدمات بأعلى مستويات الجودة والمعايير الدولية."
                    : "We are committed to delivering products and services that meet the highest international standards.",
              },
              {
                title: language === "ar" ? "الموثوقية" : "Reliability",
                description:
                  language === "ar"
                    ? "يمكن الاعتماد على شركتنا لتقديم ما تعدنا به في الوقت المحدد وبالجودة المتوقعة."
                    : "Our company is dependable, delivering on our promises on time and with expected quality.",
              },
              {
                title: language === "ar" ? "الابتكار" : "Innovation",
                description:
                  language === "ar"
                    ? "نسعى دائماً لتحسين منتجاتنا وخدماتنا من خلال البحث والتطوير المستمر."
                    : "We constantly strive to improve our products and services through ongoing research and development.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/50 dark:bg-secondary/30 rounded-lg p-6 border border-secondary/20 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section className="bg-gray-100 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto  from-primary/10 to-primary/5 rounded-lg p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">
            {language === "ar" ? "خبرتنا" : "Our Experience"}
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            {language === "ar"
              ? "لدينا سجل حافل من النجاح والنمو المستمر. عملنا مع مئات العملاء من مختلف القطاعات الصناعية، مما أعطانا فهماً عميقاً لاحتياجات السوق ومتطلبات العملاء."
              : "We have a proven track record of continued success and growth. Working with hundreds of customers across various industrial sectors has given us a deep understanding of market needs and customer requirements."}
          </p>
          <p className=" leading-relaxed">
            {language === "ar"
              ? "نحن نستمر في التطور والنمو، ونسعى دائماً للابتكار وتقديم حلول أفضل لعملائنا."
              : "We continue to evolve and grow, always seeking to innovate and provide better solutions to our customers."}
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-light py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">
            {language === "ar" ? "اكتشف منتجاتنا" : "Discover Our Products"}
          </h2>
          <p className="text-lg mb-8">
            {language === "ar"
              ? "استكشف مجموعتنا الشاملة من المنتجات والحلول الصناعية."
              : "Explore our comprehensive range of industrial products and solutions."}
          </p>
          <Button
            onClick={() => router.push(getPath("/products"))}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            {language === "ar" ? "عرض المنتجات" : "View Products"}
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
