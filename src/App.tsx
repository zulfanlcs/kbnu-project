import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import MaterialDetail from "./pages/MaterialDetail.tsx";
import NahdlatulUlama from "./pages/NahdlatulUlama.tsx";
import SejarahPesantren from "./pages/SejarahPesantren.tsx";
import GpAnsor from "./pages/GpAnsor.tsx";
import Banser from "./pages/Banser.tsx";
import FatayatNu from "./pages/FatayatNu.tsx";
import Ipnu from "./pages/Ipnu.tsx";
import Ippnu from "./pages/Ippnu.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
