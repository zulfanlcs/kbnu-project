import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Lazy-load secondary routes to reduce initial JS bundle (SEO: unused JS)
const MaterialDetail = lazy(() => import("./pages/MaterialDetail.tsx"));
const NahdlatulUlama = lazy(() => import("./pages/NahdlatulUlama.tsx"));
const SejarahPesantren = lazy(() => import("./pages/SejarahPesantren.tsx"));
const GpAnsor = lazy(() => import("./pages/GpAnsor.tsx"));
const Banser = lazy(() => import("./pages/Banser.tsx"));
const FatayatNu = lazy(() => import("./pages/FatayatNu.tsx"));
const Ipnu = lazy(() => import("./pages/Ipnu.tsx"));
const Ippnu = lazy(() => import("./pages/Ippnu.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/materi/nahdlatul-ulama" element={<NahdlatulUlama />} />
              <Route path="/materi/sejarah-pesantren" element={<SejarahPesantren />} />
              <Route path="/materi/gp-ansor" element={<GpAnsor />} />
              <Route path="/materi/banser-barisan-ansor-serbaguna" element={<Banser />} />
              <Route path="/materi/fatayat-nu" element={<FatayatNu />} />
              <Route path="/materi/ipnu" element={<Ipnu />} />
              <Route path="/materi/ippnu" element={<Ippnu />} />
              <Route path="/materi/:slug" element={<MaterialDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
