import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLanguagePath } from "@/hooks/use-language-path";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { getPath } = useLanguagePath();

  const handleLanguageChange = (newLang: "en" | "ar") => {
    setLanguage(newLang);
    // reload to ensure components pick up new language/prefix
    setTimeout(() => window.location.reload(), 0);
  };

  const navLinks = [
    { name: t.nav.home, href: getPath("/home") },
    { name: t.nav.about, href: getPath("/about") },
    { name: t.nav.products, href: getPath("/products") },
    { name: t.nav.contact, href: getPath("/contact") },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary"
      dir="ltr"
    >
      <div className="container-section">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo - Fixed width */}
          <Link
            to={getPath("/home")}
            className="flex items-center gap-2 transition duration-200 ease-in-out hover:scale-125 flex-shrink-0"
          >
            <div className="w-20 rounded-md flex items-center justify-center">
              <img
                src="/Alpha_logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className="text-secondary-foreground font-bold text-lg md:text-xl hidden sm:inline"
              dir="ltr"
            >
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
          </Link>

          {/* Desktop Navigation - Center, flex-1 */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-secondary-foreground/80 font-medium transition-all border-b-2 pb-1 ${
                    isActive
                      ? "text-yellow-400 border-yellow-400"
                      : "border-transparent hover:text-yellow-400 hover:border-yellow-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu - Fixed width */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="hidden md:flex items-center gap-2 text-secondary-foreground/80">
              <button
                className={`font-medium transition-colors w-8 text-center ${
                  language === "en" ? "text-primary" : "hover:text-primary"
                }`}
                onClick={() => handleLanguageChange("en")}
              >
                EN
              </button>
              <span>/</span>
              <button
                className={`font-medium transition-colors w-8 text-center ${
                  language === "ar" ? "text-primary" : "hover:text-primary"
                }`}
                onClick={() => handleLanguageChange("ar")}
              >
                AR
              </button>
            </div>

            <button
              className="md:hidden text-secondary-foreground w-6"
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
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `block py-3 font-medium transition-all border-l-2 pl-2 ml-2 ${
                    isActive
                      ? "text-yellow-400 border-yellow-400"
                      : "text-secondary-foreground/80 border-transparent hover:text-yellow-400 hover:border-yellow-400"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 pt-4 text-secondary-foreground/80">
              <button
                className={`font-medium transition-colors ${
                  language === "en" ? "text-primary" : "hover:text-primary"
                }`}
                onClick={() => handleLanguageChange("en")}
              >
                EN
              </button>
              <span>/</span>
              <button
                className={`font-medium transition-colors ${
                  language === "ar" ? "text-primary" : "hover:text-primary"
                }`}
                onClick={() => handleLanguageChange("ar")}
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
