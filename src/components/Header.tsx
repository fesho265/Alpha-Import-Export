import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { handleSmoothScroll } = useSmoothScroll();

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.products, href: "#products" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary">
      <div className="container-section">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={handleSmoothScroll}
            className="flex items-center gap-2 transition duration-200 ease-in-out hover:scale-125"
          >
            <div className="w-20 rounded-md flex items-center justify-center">
              <img
                src="/public/Alpha_logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-secondary-foreground font-bold text-lg md:text-xl">
              {language === "ar" ? (
                <>
                  ألفا <span className="text-primary">للاستيراد والتصدير</span>
                </>
              ) : (
                <>
                  Alfa <span className="text-primary">Import & Export</span>
                </>
              )}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                onClick={handleSmoothScroll}
                href={link.href}
                className="text-secondary-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-secondary-foreground/80">
              <button
                className={`font-medium transition-colors ${
                  language === "en" ? "text-primary" : "hover:text-primary"
                }`}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
              <span>/</span>
              <button
                className={`font-medium transition-colors ${
                  language === "ar" ? "text-primary" : "hover:text-primary"
                }`}
                onClick={() => setLanguage("ar")}
              >
                AR
              </button>
            </div>

            <button
              className="md:hidden text-secondary-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-secondary-foreground/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-secondary-foreground/80 hover:text-primary transition-colors font-medium"
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-4 text-secondary-foreground/80">
              <button
                className={`font-medium transition-colors ${
                  language === "en" ? "text-primary" : "hover:text-primary"
                }`}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
              <span>/</span>
              <button
                className={`font-medium transition-colors ${
                  language === "ar" ? "text-primary" : "hover:text-primary"
                }`}
                onClick={() => setLanguage("ar")}
              >
                AR
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
