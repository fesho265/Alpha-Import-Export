// src/translations/contact.ts

export type ContactTranslations = {
  pageTitle: string;
  pageSubtitle: string;
  formTitle: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  send: string;
  contactInfo: string;
  emailLabel: string;
  phoneLabel: string;
  addressLabel: string;
  followUs: string;
  businessHours: string;
  weekdays: string;
  weekdaysHours: string;
  weekend: string;
  closed: string;
  backToHome: string;
  successMessage: string;
  errorMessage: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
};

export const contactTranslations: Record<"en" | "ar", ContactTranslations> = {
  en: {
    pageTitle: "Contact Us",
    pageSubtitle: "Get in touch with us",
    formTitle: "Send Message",
    name: "Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject / Product",
    message: "Message",
    send: "Send Message",
    contactInfo: "Contact Information",
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Address",
    followUs: "Follow Us",
    businessHours: "Business Hours",
    weekdays: "Sunday - Thursday",
    weekdaysHours: "9:00 AM - 5:00 PM",
    weekend: "Friday - Saturday",
    closed: "Closed",
    backToHome: "Back to Home",
    successMessage: "Message sent successfully! We'll get back to you soon.",
    errorMessage: "Failed to send message. Please try again.",
    namePlaceholder: "Your full name",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "+20 100 XXX XXXX",
    subjectPlaceholder: "What's this about?",
    messagePlaceholder: "Tell us more about your inquiry...",
  },
  ar: {
    pageTitle: "اتصل بنا",
    pageSubtitle: "تواصل معنا",
    formTitle: "إرسال رسالة",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    subject: "الموضوع / المنتج",
    message: "الرسالة",
    send: "إرسال الرسالة",
    contactInfo: "معلومات الاتصال",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    addressLabel: "العنوان",
    followUs: "تابعنا",
    businessHours: "ساعات العمل",
    weekdays: "الأحد - الخميس",
    weekdaysHours: "9:00 صباحاً - 5:00 مساءً",
    weekend: "الجمعة - السبت",
    closed: "مغلق",
    backToHome: "العودة للرئيسية",
    successMessage: "تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.",
    errorMessage: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    namePlaceholder: "اسمك الكامل",
    emailPlaceholder: "بريدك@email.com",
    phonePlaceholder: "+20 100 XXX XXXX",
    subjectPlaceholder: "ما الموضوع؟",
    messagePlaceholder: "أخبرنا المزيد عن استفسارك...",
  },
};
