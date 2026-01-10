import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LanguageWrapper = () => (
  <LanguageProvider>
    <Header />
    <Outlet />
    <Footer />
  </LanguageProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to /en by default */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* Language-specific routes */}
          <Route path="/:lang" element={<LanguageWrapper />}>
            <Route index element={<Index />} />
            <Route path="home" element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:slug" element={<ProductDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Redirect some common non-prefixed routes to default English prefix */}
          <Route
            path="/contact"
            element={<Navigate to="/en/contact" replace />}
          />

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
