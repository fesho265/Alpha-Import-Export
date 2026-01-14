type Lang = "en" | "ar";

export function getPageMetadata(
  page: "home" | "about" | "contact" | "products",
  lang: Lang
) {
  const titles = {
    home: {
      en: "Alfa Import Export | Industrial Air Compressors, Mercedes Trucks & Electric Motors",
      ar: "ألفا للاستيراد والتصدير | ضواغط الهواء، شاحنات مرسيدس والمحركات الكهربائية",
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
      en: "We import and export air compressors, Mercedes trucks, and electric motors across Egypt and the Middle East.",
      ar: "نستورد ونصدر ضواغط الهواء وشاحنات مرسيدس والمحركات الكهربائية عبر مصر والشرق الأوسط.",
    },
    about: {
      en: "Learn more about Alfa Import Export, our mission, and our industrial expertise.",
      ar: "تعرف على المزيد عن ألفا للاستيراد والتصدير، مهمتنا وخبرتنا الصناعية.",
    },
    contact: {
      en: "Get in touch with Alfa Import Export for inquiries about industrial equipment.",
      ar: "تواصل مع ألفا للاستيراد والتصدير للاستفسار عن المعدات الصناعية.",
    },
    products: {
      en: "Explore our range of industrial air compressors, Mercedes trucks, and electric motors.",
      ar: "استكشف مجموعتنا من ضواغط الهواء الصناعية وشاحنات مرسيدس والمحركات الكهربائية.",
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
