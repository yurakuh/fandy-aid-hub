import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelpLayout } from "./components/HelpLayout";
import Introduction from "./pages/Introduction";
import UnderstandingCampaigns from "./pages/UnderstandingCampaigns";
import CustomerFunded from "./pages/CustomerFunded";
import StoreFunded from "./pages/StoreFunded";
import GettingStarted from "./pages/GettingStarted";
import AppBlocksEmbeds from "./pages/AppBlocksEmbeds";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HelpLayout>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/understanding-campaigns" element={<UnderstandingCampaigns />} />
            <Route path="/customer-funded" element={<CustomerFunded />} />
            <Route path="/store-funded" element={<StoreFunded />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/app-blocks-embeds" element={<AppBlocksEmbeds />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HelpLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
