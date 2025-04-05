
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Calendar from "./pages/Calendar";
import Leaderboard from "./pages/Leaderboard";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import OrganizerDashboard from "./pages/OrganizerDashboard";

const queryClient = new QueryClient();

// In a real app, this would come from authentication state
const App = () => {
  // Using state to track authentication for demo purposes
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<'student' | 'organizer'>('student');

  // This function would be passed to the Login component
  const handleLogin = (type: 'student' | 'organizer') => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public route - Login page */}
            <Route 
              path="/login" 
              element={<Login onLogin={handleLogin} />} 
            />
            
            {/* Protected routes - Redirect to login if not authenticated */}
            <Route 
              element={
                isAuthenticated ? 
                  userType === 'student' ? <AppLayout /> : null 
                : <Navigate to="/login" replace />
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
            
            {/* Organizer Dashboard - Protected route */}
            <Route 
              path="/organizer-dashboard/*" 
              element={
                isAuthenticated && userType === 'organizer' ? 
                  <OrganizerDashboard /> 
                : <Navigate to="/login" replace />
              } 
            />
            
            {/* Redirect from index to login if not authenticated */}
            <Route 
              path="/" 
              element={
                isAuthenticated ? 
                  userType === 'student' ? <Navigate to="/dashboard" replace /> : <Navigate to="/organizer-dashboard" replace />
                : <Navigate to="/login" replace />
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
