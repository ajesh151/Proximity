
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PitchHub from "./pages/PitchHub";
import PitchDetail from "./pages/PitchDetail";
import PitchCreate from "./pages/PitchCreate";
import PitchEvent from "./pages/PitchEvent";
import UserVerification from "./pages/UserVerification";
import StartupDashboard from "./pages/dashboards/StartupDashboard";
import EnterpriseDashboard from "./pages/dashboards/EnterpriseDashboard";
import InvestorDashboard from "./pages/dashboards/InvestorDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/verification" element={<UserVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pitches" element={<PitchHub />} />
          <Route path="/pitches/:id" element={<PitchDetail />} />
          <Route path="/pitches/create" element={<PitchCreate />} />
          <Route path="/pitches/event/:id" element={<PitchEvent />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/dashboard/startup" element={<StartupDashboard />} />
          <Route path="/dashboard/enterprise" element={<EnterpriseDashboard />} />
          <Route path="/dashboard/investor" element={<InvestorDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
