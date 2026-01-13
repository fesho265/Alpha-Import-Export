"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useLanguagePath } from "@/hooks/use-language-path";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  const { t, language } = useLanguage();
  const { getPath } = useLanguagePath();

  const navLinks = [
    { name: t.nav.home, href: getPath("/") },
    { name: t.nav.about, href: getPath("/about") },
    { name: t.nav.products, href: getPath("/products") },
    { name: t.nav.contact, href: getPath("/contact") },
  ];

  const contactInfo = {
    email: "alfaimport25@gmail.com",
    phone: "+201007751355",
    address:
      language === "en"
        ? "Mansoura - El Bahr Street - Taiba Tower"
        : "المنصورة - شارع البحر - برج طيبة",
    facebook: "https://www.facebook.com/alfa.imp.export",
  };

  return (
    <footer className="bg-yellow-400 border-t border-yellow-500">
      <div className="container-section py-6 md:py-8">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-4">
          {/* Contact Information Column */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">
              {language === "ar" ? "معلومات الاتصال" : "Contact Information"}
            </h3>
            <div className="border-t border-black/20 pt-4 space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-3 text-black hover:text-yellow-700 transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="break-all">{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-start gap-3 text-black hover:text-yellow-700 transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span>{contactInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-black">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </h3>
            <div className="border-t border-black/20 pt-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center text-black hover:text-yellow-700 transition-colors group"
                >
                  <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mr-3 group-hover:scale-150 transition-transform" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">
              {language === "ar" ? "تابعنا" : "Follow Us"}
            </h3>
            <div className="border-t border-black/20 pt-4">
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-black/10 text-black hover:bg-black hover:text-yellow-400 transition-all duration-300 group"
              >
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
      </div>
      <div className="border-t bg-white border-black/20 py-8 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <div className="w-10 rounded-md flex items-center justify-center">
            <img
              src="/Alpha_logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-black font-semibold">
            {language === "ar"
              ? "ألفا للاستيراد والتصدير"
              : "Alfa Import & Export"}
          </span>
        </div>
        <p className="text-black/70 text-sm">
          © {new Date().getFullYear()}{" "}
          {language === "ar"
            ? "ألفا للاستيراد والتصدير"
            : "Alfa Import & Export"}
          . {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
