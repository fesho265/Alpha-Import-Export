"use client";

import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getContactInfo } from "@/data/contact";

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

export default function ContactFormWrapper({
  language,
  isRTL,
  t,
}: {
  language: "en" | "ar";
  isRTL: boolean;
  t: any;
}) {
  //   const { language, isRTL } = useLanguage();
  //   const t = contactTranslations[language as "en" | "ar"];
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const contactInfo = getContactInfo(language as "en" | "ar");

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
    <div>
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    <Input placeholder={t.subjectPlaceholder} {...field} />
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
    </div>
  );
}
