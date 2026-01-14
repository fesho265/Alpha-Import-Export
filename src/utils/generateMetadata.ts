type Lang = "en" | "ar";

export function getPageMetadata(
  page: "home" | "about" | "contact" | "products",
  lang: Lang
) {
  const titles = {
    home: {
      en: "Alfa Import Export | Industrial Equipment Supplier",
      ar: "ألفا للاستيراد والتصدير | مورد المعدات الصناعية",
    },
    about: {
      en: "About Alfa Import Export | Trusted Industrial Supplier",
      ar: "عن ألفا للاستيراد والتصدير | مورد صناعي موثوق",
    },
    contact: {
      en: "Contact Alfa Import Export | Get in Touch",
      ar: "اتصل بألفا للاستيراد والتصدير | تواصل معنا",
    },
    products: {
      en: "Our Products | Air Compressors, Mercedes Trucks, Electric Motors",
      ar: "منتجاتنا | ضواغط الهواء، شاحنات مرسيدس، المحركات الكهربائية",
    },
  };

  const descriptions = {
    home: {
      en: "Trusted supplier of air compressors, Mercedes trucks, and electric motors in the Middle East. Quality equipment, competitive prices, expert support.",
      ar: "مورد موثوق لضواغط الهواء وشاحنات مرسيدس والمحركات الكهربائية في الشرق الأوسط. معدات ذات جودة عالية، أسعار تنافسية، ودعم خبير.",
    },
    about: {
      en: "Learn about Alfa Import & Export's commitment to providing high-quality industrial equipment with over 20 years of experience serving businesses across the Middle East region.",
      ar: "تعرف على التزام ألفا للاستيراد والتصدير بتوفير معدات صناعية عالية الجودة مع أكثر من 20 عامًا من الخبرة في خدمة الشركات في منطقة الشرق الأوسط.",
    },
    contact: {
      en: "Contact Alfa Import & Export for industrial equipment inquiries. Get expert advice on air compressors, Mercedes trucks, and electric motors. Fast response, professional service.",
      ar: "اتصل بألفا للاستيراد والتصدير للاستفسارات عن المعدات الصناعية. احصل على استشارات الخبراء حول الضواغط الهوائية وشاحنات مرسيدس والمحركات الكهربائية.",
    },
    products: {
      en: "Browse our extensive range of industrial air compressors, Mercedes trucks, and electric motors. Premium quality equipment for manufacturing, construction, and industrial operations.",
      ar: "تصفح مجموعتنا الواسعة من الضواغط الهوائية الصناعية وشاحنات مرسيدس والمحركات الكهربائية. معدات عالية الجودة للتصنيع والبناء والعمليات الصناعية.",
    },
  };

  return {
    title: titles[page][lang],
    description: descriptions[page][lang],
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Alfa Import Export",
        url: "https://alpha-import-export.vercel.app/",
        logo: "https://alpha-import-export.vercel.app/",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+201007751355",
          contactType: "sales",
          areaServed: "EG",
          availableLanguage: ["en", "ar"],
        },
      }),
    },
    alternates: {
      languages: {
        en: `https://alpha-import-export.vercel.app/en/${
          page === "home" ? "" : page
        }`,
        ar: `https://alpha-import-export.vercel.app/ar/${
          page === "home" ? "" : page
        }`,
      },
    },
  };
}
