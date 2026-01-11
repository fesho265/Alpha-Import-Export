export interface Product {
  id: string;
  slug: string;
  images: string[];
  en: {
    title: string;
    summary: string;
    description: string;
    specifications: { label: string; value: string }[];
  };
  ar: {
    title: string;
    summary: string;
    description: string;
    specifications: { label: string; value: string }[];
  };
}

export const products: Product[] = [
  {
    id: "electric-motors",
    slug: "electric-motors",
    images: [
      "https://cdn.sanity.io/images/qghx43q1/production/d605ffd433643ad7243906207e0fd2fc038bd7ff-400x292.jpg?w=800&h=600",
      "https://cdn.sanity.io/images/qghx43q1/production/d605ffd433643ad7243906207e0fd2fc038bd7ff-400x292.jpg?w=800&h=600",
    ],
    en: {
      title: "Siemens Electric Motor ",
      summary:
        "High-efficiency SIMOTICS GP (General Purpose) motor for industrial applications.",
      description:
        "This is a high-efficiency SIMOTICS GP (General Purpose) motor. It is part of Siemens' flagship line of low-voltage motors, designed for reliability in industrial applications such as pumps, fans, and conveyor systems.",
      specifications: [
        {
          label: "Efficiency Class",
          value:
            "IE2 (High Efficiency) - designed to reduce energy costs and thermal stress during continuous operation",
        },
        {
          label: "Frame Construction",
          value:
            "Lightweight yet durable aluminum housing (Frame Size 80M) with excellent heat dissipation",
        },
        {
          label: "Output Specifications",
          value:
            "4-pole motor providing 0.75 kW (1.0 HP) with synchronous speed of 1500 rpm (at 50Hz)",
        },
        {
          label: "Environmental Protection",
          value:
            "IP55 rating - protection against dust and water jets, suitable for standard industrial environments",
        },
      ],
    },
    ar: {
      title: "محرك سيمنز الكهربائي (1LE1002-0EA42-2AA4)",
      summary: "محرك SIMOTICS GP عالي الكفاءة للتطبيقات الصناعية.",
      description:
        "هذا محرك SIMOTICS GP (الغرض العام) عالي الكفاءة. وهو جزء من خط سيمنز الرائد للمحركات ذات الجهد المنخفض، المصمم للموثوقية في التطبيقات الصناعية مثل المضخات والمراوح وأنظمة النقل.",
      specifications: [
        {
          label: "فئة الكفاءة",
          value:
            "IE2 (كفاءة عالية) - مصمم لتقليل تكاليف الطاقة والإجهاد الحراري أثناء التشغيل المستمر",
        },
        {
          label: "بنية الإطار",
          value:
            "غلاف ألمنيوم خفيف الوزن ومتين (حجم الإطار 80M) مع تبديد حراري ممتاز",
        },
        {
          label: "مواصفات الإخراج",
          value:
            "محرك 4 أقطاب يوفر 0.75 كيلوواط (1.0 حصان) بسرعة متزامنة 1500 دورة في الدقيقة (عند 50 هرتز)",
        },
        {
          label: "الحماية البيئية",
          value:
            "تصنيف IP55 - حماية ضد الغبار ونفاثات المياه، مناسب للبيئات الصناعية القياسية",
        },
      ],
    },
  },
  {
    id: "air-compressors",
    slug: "air-compressors",
    images: [
      "/alphaCompressor.png",
      "https://cdn.sanity.io/images/qghx43q1/production/e01eebb57c87596c6f635a754e5349ba7a209f63-1040x585.jpg?w=800&h=600",
    ],
    en: {
      title: "AIRCENTER 3 – 8",
      summary:
        "Complete compressed air station for reliable industrial operations.",
      description:
        "The AIRCENTER series represents a complete compressed air station in one compact package. These units combine a rotary screw compressor with a refrigerant dryer and air receiver, making them ideal for workshops, manufacturing facilities, and industrial operations requiring clean, dry compressed air.",
      specifications: [
        {
          label: "Power Range",
          value:
            "3 kW to 8 kW options available to match your operational needs",
        },
        {
          label: "Air Delivery",
          value: "Up to 1.2 m³/min free air delivery at 8 bar working pressure",
        },
        {
          label: "Integrated Dryer",
          value:
            "Built-in refrigerant dryer ensuring dry, clean compressed air",
        },
        {
          label: "Noise Level",
          value: "Low noise operation suitable for indoor installation",
        },
      ],
    },
    ar: {
      title: "نظام ضاغط AIRCENTER 3 – 8",
      summary: "محطة هواء مضغوط متكاملة للعمليات الصناعية الموثوقة.",
      description:
        "تمثل سلسلة AIRCENTER محطة هواء مضغوط متكاملة في حزمة واحدة مدمجة. تجمع هذه الوحدات بين ضاغط لولبي دوار ومجفف تبريد وخزان هواء، مما يجعلها مثالية للورش ومنشآت التصنيع والعمليات الصناعية التي تتطلب هواء مضغوط نظيف وجاف.",
      specifications: [
        {
          label: "نطاق الطاقة",
          value:
            "خيارات من 3 كيلوواط إلى 8 كيلوواط متاحة لتتناسب مع احتياجاتك التشغيلية",
        },
        {
          label: "توصيل الهواء",
          value: "حتى 1.2 م³/دقيقة توصيل هواء حر عند ضغط عمل 8 بار",
        },
        {
          label: "مجفف متكامل",
          value: "مجفف تبريد مدمج يضمن هواء مضغوط جاف ونظيف",
        },
        {
          label: "مستوى الضوضاء",
          value: "تشغيل منخفض الضوضاء مناسب للتركيب الداخلي",
        },
      ],
    },
  },
  {
    id: "mercedes-trucks",
    slug: "mercedes-trucks",
    images: [
      "/alphaAtego.jpeg",
      "https://cdn.sanity.io/images/qghx43q1/production/6c12847de3890908428ef21269d8fe0d8bbce2b3-1680x944.jpg?w=800&h=600",
    ],
    en: {
      title: "Mercedes-Benz Atego",
      summary:
        "Premium commercial truck for versatile distribution and logistics operations",
      description:
        "The Mercedes-Benz Atego is a versatile medium-duty truck designed for distribution and logistics operations. Known for its reliability, fuel efficiency, and driver comfort, the Atego is the perfect choice for businesses requiring dependable transportation solutions.",
      specifications: [
        {
          label: "Engine Options",
          value: "Euro VI compliant engines ranging from 156 HP to 299 HP",
        },
        {
          label: "Payload Capacity",
          value: "Gross vehicle weight options from 6.5 to 16 tonnes",
        },
        {
          label: "Cab Variants",
          value: "S-Cab, ClassicSpace, and BigSpace configurations available",
        },
        {
          label: "Safety Features",
          value:
            "ABS, ESP, Lane Keeping Assist, and Active Brake Assist as standard",
        },
      ],
    },
    ar: {
      title: "مرسيدس-بنز أتيغو",
      summary:
        "شاحنة تجارية متميزة لعمليات التوزيع والخدمات اللوجستية المتنوعة.",
      description:
        "مرسيدس-بنز أتيغو هي شاحنة متوسطة الحجم متعددة الاستخدامات مصممة لعمليات التوزيع والخدمات اللوجستية. معروفة بموثوقيتها وكفاءة استهلاك الوقود وراحة السائق، أتيغو هي الخيار الأمثل للشركات التي تتطلب حلول نقل موثوقة.",
      specifications: [
        {
          label: "خيارات المحرك",
          value: "محركات متوافقة مع Euro VI تتراوح من 156 حصان إلى 299 حصان",
        },
        {
          label: "سعة الحمولة",
          value: "خيارات الوزن الإجمالي للمركبة من 6.5 إلى 16 طن",
        },
        {
          label: "متغيرات الكابينة",
          value: "تكوينات S-Cab و ClassicSpace و BigSpace متاحة",
        },
        {
          label: "ميزات السلامة",
          value:
            "ABS و ESP ومساعد الحفاظ على المسار ومساعد الفرامل النشط كمعيار",
        },
      ],
    },
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
