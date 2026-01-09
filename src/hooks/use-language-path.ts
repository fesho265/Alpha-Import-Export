import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Hook to generate language-prefixed paths
 * Examples:
 * - getPath("/") → "/en/" or "/ar/"
 * - getPath("/products/motor") → "/en/products/motor" or "/ar/products/motor"
 */
export const useLanguagePath = () => {
  const { language } = useLanguage();

  const getPath = (path: string) => {
    // Remove leading slash if present for cleaner concatenation
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `/${language}${cleanPath}`;
  };

  return { getPath };
};
