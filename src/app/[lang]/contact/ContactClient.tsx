"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { contactTranslations } from "@/data/contact";
import Link from "next/link";
import { Suspense } from "react";
import { Mail, Phone, MapPin, Facebook, Clock, ArrowLeft } from "lucide-react";
import ContactFormWrapper from "@/components/ui/ContactFormWrapper";
import { getContactInfo } from "@/utils/getContactInfo";

function ContactClient() {
  const { language, isRTL } = useLanguage();
  const t = contactTranslations[language as "en" | "ar"];
  const contactInfo = getContactInfo(language as "en" | "ar");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen pt-16 md:pt-20">
        {/* Header */}
        <section className="bg-secondary py-12 md:py-20">
          <div className="container-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                {t.backToHome}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
                {t.pageTitle}
              </h1>
              <p className="text-lg text-secondary-foreground/80">
                {t.pageSubtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 bg-gray-100">
          <div className="container-section max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Suspense fallback={<div>Loading form...</div>}>
                <ContactFormWrapper language={language} isRTL={isRTL} t={t} />
              </Suspense>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      {language === "ar"
                        ? "معلومات الاتصال"
                        : "Contact Information"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-start gap-4 text-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">
                          {language === "ar" ? "البريد الإلكتروني" : "Email"}
                        </p>
                        <p className="text-muted-foreground">
                          {contactInfo.email}
                        </p>
                      </div>
                    </a>

                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="flex items-start gap-4 text-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">
                          {language === "ar" ? "الهاتف" : "Phone"}
                        </p>
                        <p className="text-muted-foreground" dir="ltr">
                          {contactInfo.phone}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">
                          {language === "ar" ? "العنوان" : "Address"}
                        </p>
                        <p className="text-muted-foreground">
                          {contactInfo.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {language === "ar" ? "تابعنا" : "Follow us"}
                  </h3>
                  <Link
                    href={contactInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Facebook className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Facebook</span>
                  </Link>
                </div>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    {t.businessHours}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        {t.weekdays}
                      </span>
                      <span className="font-medium text-foreground">
                        {t.weekdaysHours}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{t.weekend}</span>
                      <span className="font-medium text-destructive">
                        {t.closed}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}

export default ContactClient;
