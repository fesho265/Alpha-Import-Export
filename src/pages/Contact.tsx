import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  ArrowLeft,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

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

const ContactContent = () => {
  const { language, isRTL } = useLanguage();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t =
    language === "en"
      ? {
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
          successMessage:
            "Message sent successfully! We'll get back to you soon.",
          errorMessage: "Failed to send message. Please try again.",
          namePlaceholder: "Your full name",
          emailPlaceholder: "your@email.com",
          phonePlaceholder: "+20 100 XXX XXXX",
          subjectPlaceholder: "What's this about?",
          messagePlaceholder: "Tell us more about your inquiry...",
        }
      : {
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
        };

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors mb-6"
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
      <section className="py-16 md:py-24">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
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
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t.contactInfo}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {t.emailLabel}
                      </h4>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {t.phoneLabel}
                      </h4>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {t.addressLabel}
                      </h4>
                      <p className="text-muted-foreground">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t.followUs}
                </h3>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Facebook className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Facebook</span>
                </a>
              </div>

              {/* Business Hours */}
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
};

const Contact = () => {
  return <ContactContent />;
};

export default Contact;
