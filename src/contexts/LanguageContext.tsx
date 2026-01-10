import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "ar";

interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
  };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    cta: string;
    secondary: string;
  };
  about: {
    title1: string;
    title2: string;
    paragraph1: string;
    paragraph2: string;
  };
  products: {
    title1: string;
    title2: string;
    subtitle: string;
    learnMore: string;
    electricMotors: {
      title: string;
      description: string;
    };
    airCompressors: {
      title: string;
      description: string;
    };
    trucks: {
      title: string;
      description: string;
    };
  };
  whyChoose: {
    title1: string;
    title2: string;
    quality: { title: string; description: string };
    experience: { title: string; description: string };
    support: { title: string; description: string };
    competitive: { title: string; description: string };
  };
  cta: {
    title1: string;
    title2: string;
    subtitle: string;
    button: string;
  };
  footer: {
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",
    },
    hero: {
      title1: "Industrial Equipment",
      title2: "You Can Trust",
      subtitle:
        "Leading supplier of air compressors, Mercedes trucks, and electric motors for industrial applications across the region.",
      cta: "View Products",
      secondary: "Contact Us",
    },
    about: {
      title1: "Leading",
      title2: "Industrial Equipment",
      paragraph1:
        "Alfa Import & Export is a trusted provider of high-quality industrial equipment and heavy machinery. With years of experience in the industry, we specialize in supplying air compressors, Mercedes trucks, and electric motors to businesses across the region.",
      paragraph2:
        "Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for industries seeking dependable equipment solutions. We work with leading manufacturers to ensure our clients receive only the best products backed by comprehensive support.",
    },
    products: {
      title1: "Our",
      title2: "Products",
      subtitle:
        "We offer a comprehensive range of industrial equipment designed to meet your business needs.",
      learnMore: "Learn More",
      electricMotors: {
        title: "Electric Motors",
        description:
          "High-performance electric motors for industrial applications, available in various power ratings and specifications.",
      },
      airCompressors: {
        title: "Air Compressors",
        description:
          "Reliable air compressors for manufacturing, construction, and industrial operations with superior efficiency.",
      },
      trucks: {
        title: "Mercedes Trucks",
        description:
          "Premium Mercedes-Benz commercial trucks known for durability, performance, and long-term reliability.",
      },
    },
    whyChoose: {
      title1: "Why Choose",
      title2: "Alfa Import & Export",
      quality: {
        title: "Premium Quality",
        description:
          "We source only the highest quality equipment from trusted manufacturers worldwide.",
      },
      experience: {
        title: "Years of Experience",
        description:
          "Decades of expertise in industrial equipment supply and customer service excellence.",
      },
      support: {
        title: "Full Support",
        description:
          "Comprehensive after-sales support, maintenance services, and technical assistance.",
      },
      competitive: {
        title: "Competitive Pricing",
        description:
          "Best value for your investment with transparent pricing and flexible payment options.",
      },
    },
    cta: {
      title1: "Ready to Upgrade Your",
      title2: "Industrial Equipment",
      subtitle:
        "Contact us today to discuss your requirements and discover how we can help your business thrive with the right equipment solutions.",
      button: "Get in Touch",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "المنتجات",
      contact: "اتصل بنا",
    },
    hero: {
      title1: "معدات صناعية",
      title2: "يمكنك الوثوق بها",
      subtitle:
        "المورد الرائد لضواغط الهواء وشاحنات مرسيدس والمحركات الكهربائية للتطبيقات الصناعية في جميع أنحاء المنطقة.",
      cta: "عرض المنتجات",
      secondary: "اتصل بنا",
    },
    about: {
      title1: "الشركة الرائدة في",
      title2: "المعدات الصناعية",
      paragraph1:
        "ألفا للاستيراد والتصدير هي مزود موثوق للمعدات الصناعية عالية الجودة والآلات الثقيلة. مع سنوات من الخبرة في الصناعة، نحن متخصصون في توريد ضواغط الهواء وشاحنات مرسيدس والمحركات الكهربائية للشركات في جميع أنحاء المنطقة.",
      paragraph2:
        "التزامنا بالجودة والموثوقية ورضا العملاء جعلنا الخيار المفضل للصناعات التي تبحث عن حلول معدات موثوقة. نعمل مع الشركات المصنعة الرائدة لضمان حصول عملائنا على أفضل المنتجات المدعومة بدعم شامل.",
    },
    products: {
      title1: "منتجاتنا",
      title2: "",
      subtitle:
        "نقدم مجموعة شاملة من المعدات الصناعية المصممة لتلبية احتياجات عملك.",
      learnMore: "اعرف المزيد",
      electricMotors: {
        title: "المحركات الكهربائية",
        description:
          "محركات كهربائية عالية الأداء للتطبيقات الصناعية، متوفرة بتصنيفات ومواصفات طاقة مختلفة.",
      },
      airCompressors: {
        title: "ضواغط الهواء",
        description:
          "ضواغط هواء موثوقة للتصنيع والبناء والعمليات الصناعية بكفاءة فائقة.",
      },
      trucks: {
        title: "شاحنات مرسيدس",
        description:
          "شاحنات مرسيدس-بنز التجارية الممتازة المعروفة بالمتانة والأداء والموثوقية طويلة الأمد.",
      },
    },
    whyChoose: {
      title1: "لماذا تختار",
      title2: "ألفا للاستيراد والتصدير",
      quality: {
        title: "جودة عالية",
        description:
          "نحصل فقط على أعلى جودة من المعدات من الشركات المصنعة الموثوقة في جميع أنحاء العالم.",
      },
      experience: {
        title: "سنوات من الخبرة",
        description:
          "عقود من الخبرة في توريد المعدات الصناعية والتميز في خدمة العملاء.",
      },
      support: {
        title: "دعم كامل",
        description: "دعم شامل لما بعد البيع وخدمات الصيانة والمساعدة التقنية.",
      },
      competitive: {
        title: "أسعار تنافسية",
        description: "أفضل قيمة لاستثمارك مع تسعير شفاف وخيارات دفع مرنة.",
      },
    },
    cta: {
      title1: "هل أنت مستعد لترقية",
      title2: "معداتك الصناعية",
      subtitle:
        "اتصل بنا اليوم لمناقشة متطلباتك واكتشاف كيف يمكننا مساعدة عملك على الازدهار مع حلول المعدات المناسبة.",
      button: "تواصل معنا",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Detect language from URL pathname
  const getLanguageFromPath = (): Language => {
    const pathname = window.location.pathname;
    const match = pathname.match(/^\/(en|ar)/);
    return (match?.[1] as Language) || "en";
  };

  const [language, setLanguage] = useState<Language>(getLanguageFromPath());

  const isRTL = language === "ar";

  // Update language when URL changes
  useEffect(() => {
    const urlLanguage = getLanguageFromPath();
    setLanguage(urlLanguage);
  }, [window.location.pathname]);

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const handleSetLanguage = (lang: Language) => {
    const pathname = window.location.pathname;
    // Remove existing language prefix if present
    const pathWithoutLang = pathname.replace(/^\/(en|ar)/, "");
    const newPath = `/${lang}${pathWithoutLang || "/"}`;
    window.history.pushState(null, "", newPath);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
        isRTL,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
