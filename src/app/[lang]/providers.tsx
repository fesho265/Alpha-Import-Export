"use client";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  // const [queryClient] = useState(() => new QueryClient());

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>{children}</LanguageProvider>
    </TooltipProvider>
  );
}
