import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="py-8 bg-secondary border-t border-secondary-foreground/10">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-14 rounded-md flex items-center justify-center">
              <img
                src="/public/Alpha_logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-secondary-foreground font-semibold">
              {language === "ar"
                ? "ألفا للاستيراد والتصدير"
                : "Alfa Import & Export"}
            </span>
          </div>
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()}{" "}
            {language === "ar"
              ? "ألفا للاستيراد والتصدير"
              : "Alfa Import & Export"}
            . {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
