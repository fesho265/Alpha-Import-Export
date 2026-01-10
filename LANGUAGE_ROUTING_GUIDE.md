# Language-Based Routing Implementation Guide

## Overview

Your application now implements **language-based routing with URL prefixes**. All routes include language prefixes (`/en/` for English and `/ar/` for Arabic).

## URL Structure

### Before

```
http://example.com/
http://example.com/products/electric-motors
```

### After

```
http://example.com/en/
http://example.com/en/products/electric-motors

http://example.com/ar/
http://example.com/ar/products/mercedes-trucks
```

## Implementation Details

### 1. **App.tsx** - Router Configuration

- Root path `/` now redirects to `/en`
- Routes are structured under `/:lang/*` parameter
- Language layout wrapper handles the LanguageProvider
- All routes are nested under language prefix

### 2. **LanguageContext.tsx** - Language Detection & Management

- **Automatic Detection**: Detects language from URL pathname
- **URL Sync**: Automatically updates language state when URL changes
- **Navigation Handler**: `setLanguage()` now changes the URL path instead of just state
- Language persists across page navigation via URL

### 3. **useLanguagePath Hook** - Path Helper

Created new hook at `src/hooks/use-language-path.ts` for generating language-aware paths:

```typescript
const { getPath } = useLanguagePath();
const homePath = getPath("/"); // Returns "/en/" or "/ar/"
const productPath = getPath("/products/electric-motors"); // Returns "/en/products/..." or "/ar/products/..."
```

### 4. **Component Updates**

#### Header Component

- Language switcher buttons now reload the page to apply language change
- All navigation links remain hash-based (for scroll sections) within language prefix

#### ProductsSection Component

- Product links use `getPath()` to generate language-prefixed routes
- Links like `/products/electric-motors` become `/en/products/electric-motors` or `/ar/products/electric-motors`

#### ProductDetail Page

- Breadcrumb links use `getPath()`
- Back to products link uses `getPath("/#products")`
- Contact CTA link uses language-prefixed path with query parameter

#### NotFound Page

- Auto-redirects to `/en` if no language prefix in URL
- Dynamically generates home path based on detected language

## Features

✅ **Automatic Language Detection** - Detects language from URL on page load
✅ **Persistent Language** - Language persists as user navigates
✅ **SEO-Friendly** - Language is clear in the URL structure
✅ **Clean Switching** - Language switcher updates URL and reloads page
✅ **Fallback Handling** - 404 pages redirect to English version
✅ **Helper Hook** - `useLanguagePath` simplifies path generation
✅ **RTL Support** - Maintains existing RTL support for Arabic

## Usage Examples

### In Components

```tsx
import { useLanguagePath } from "@/hooks/use-language-path";

const MyComponent = () => {
  const { getPath } = useLanguagePath();

  return <Link to={getPath("/products/air-compressors")}>View Product</Link>;
};
```

### In LanguageProvider

```tsx
import { LanguageProvider } from "@/contexts/LanguageContext";

// LanguageProvider is already set up in the layout
// It automatically detects language from /:lang/* path
```

## File Changes Summary

| File                                 | Change                                                   |
| ------------------------------------ | -------------------------------------------------------- |
| `src/App.tsx`                        | Added language routing structure with `/:lang/*` pattern |
| `src/contexts/LanguageContext.tsx`   | Added URL detection and path-based language switching    |
| `src/hooks/use-language-path.ts`     | **NEW** - Helper hook for language-aware paths           |
| `src/components/Header.tsx`          | Updated language switcher to use URL navigation          |
| `src/components/ProductsSection.tsx` | Updated product links to use `getPath()`                 |
| `src/pages/ProductDetail.tsx`        | Updated all links to use language-prefixed paths         |
| `src/pages/NotFound.tsx`             | Added auto-redirect and language-aware home link         |

## Testing the Implementation

1. **Home Page**

   - Visit `http://localhost:5173/en/`
   - Visit `http://localhost:5173/ar/`
   - Root `/` should redirect to `/en/`

2. **Language Switching**

   - Switch between EN/AR buttons
   - Page should reload with new language in URL
   - Page direction (LTR/RTL) should update

3. **Product Navigation**

   - Click "Learn More" on products
   - URL should include language prefix: `/en/products/electric-motors`
   - Back button should preserve language

4. **Product Detail Page**

   - Navigate to product detail page
   - Back to products link should maintain language
   - Contact CTA should use language-prefixed anchor

5. **Error Handling**
   - Visit invalid route like `/invalid-route`
   - Should redirect to `/en/` automatically

## Browser URL Examples

```
/en/                                    - English home
/ar/                                    - Arabic home
/en/products/electric-motors           - English product detail
/ar/products/electric-motors           - Arabic product detail
/en/#about                             - English with scroll to section
/ar/#contact?product=Air%20Compressors - Arabic with query parameter
```

## Notes

- Language switching reloads the page to ensure complete UI refresh
- Hash-based internal navigation (`#home`, `#about`) still works within language prefix
- Query parameters are preserved when switching language paths
- The language parameter in URL is the source of truth for current language
