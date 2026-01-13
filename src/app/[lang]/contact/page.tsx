"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { contactTranslations } from "@/data/contact";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Send,
  Clock,
  ArrowLeft,
} from "lucide-react";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone is required")
    .max(20, "Phone must be less than 20 characters"),
  subject: z
    .string()
    .trim()
    .max(200, "Subject must be less than 200 characters")
    .optional(),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { language, isRTL } = useLanguage();
  const t = contactTranslations[language as "en" | "ar"];
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const contactInfo = {
    email: "alfaimport25@gmail.com",
    phone: "+201007751355",
    address:
      language === "en"
        ? "Mansoura - El Bahr Street - Taiba Tower"
        : "المنصورة - شارع البحر - برج طيبة",
    facebook: "https://www.facebook.com/alfa.imp.export",
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Pre-fill subject from query parameter
  useEffect(() => {
    const product = searchParams.get("product");
    if (product) {
      form.setValue("subject", decodeURIComponent(product));
    }
  }, [searchParams, form]);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Construct WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${
        data.phone
      }\nSubject: ${data.subject || "General Inquiry"}\n\nMessage:\n${
        data.message
      }`
    );
    const whatsappUrl = `https://wa.me/${contactInfo.phone.replace(
      /[^0-9]/g,
      ""
    )}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title:
        language === "en"
          ? "Redirecting to WhatsApp"
          : "جاري التحويل إلى واتساب",
      description: t.successMessage,
    });

    setIsSubmitting(false);
    form.reset();
  };

  return (
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
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t.formTitle}
              </h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.name}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.namePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.email}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t.emailPlaceholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.phone}</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder={t.phonePlaceholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.subject}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t.subjectPlaceholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.message}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t.messagePlaceholder}
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4" />
                    {t.send}
                  </Button>
                </form>
              </Form>
            </motion.div>

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
                    <span className="text-muted-foreground">{t.weekdays}</span>
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
  );
}
