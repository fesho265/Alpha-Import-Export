# Quick Reference: Language-Based Routing

## URL Format

Routes now require language prefix: `/<lang>/<path>`

- English: `/en/<path>`
- Arabic: `/ar/<path>`

## Examples

| Action        | Old URL                     | New URL                                      |
| ------------- | --------------------------- | -------------------------------------------- |
| Home          | `/`                         | `/en/` or `/ar/`                             |
| Products      | `/products/:slug`           | `/en/products/:slug` or `/ar/products/:slug` |
| Product Links | `/products/electric-motors` | `/en/products/electric-motors`               |
| Anchors       | `/#about`                   | `/en/#about` or `/ar/#about`                 |
| Query Params  | `/#contact?product=X`       | `/en/#contact?product=X`                     |

## Using Language-Aware Paths in Components

```tsx
// Import the hook
import { useLanguagePath } from "@/hooks/use-language-path";

// In your component
const MyComponent = () => {
  const { getPath } = useLanguagePath();

  // Use getPath() to generate language-prefixed routes
  return <Link to={getPath("/products/electric-motors")}>View</Link>;
};
```

## How Language Detection Works

1. Language is detected from URL path (e.g., `/en/` → English)
2. `LanguageContext` reads URL on mount
3. When language switcher is clicked, URL is updated
4. Page reloads to apply the language change

## Files Modified

- ✏️ `src/App.tsx` - Router setup
- ✏️ `src/contexts/LanguageContext.tsx` - Language detection
- ✏️ `src/components/Header.tsx` - Language switcher
- ✏️ `src/components/ProductsSection.tsx` - Product links
- ✏️ `src/pages/ProductDetail.tsx` - Detail page links
- ✏️ `src/pages/NotFound.tsx` - Error handling
- ✨ `src/hooks/use-language-path.ts` - **NEW** helper hook
