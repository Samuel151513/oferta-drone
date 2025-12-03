import { Switch, Route, Router as WouterRouter, useLocation, BaseLocationHook } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import RiHappyProduct from "@/pages/product";
import FileManager from "@/pages/file-manager";
import { useState, useEffect } from "react";

// Hash location hook for subdirectory deployment support
const useHashLocation: BaseLocationHook = () => {
  const [loc, setLoc] = useState(window.location.hash.replace(/^#/, "") || "/");
  
  useEffect(() => {
    const handler = () => setLoc(window.location.hash.replace(/^#/, "") || "/");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  
  const navigate = (to: string) => {
    window.location.hash = to;
  };
  
  return [loc, navigate];
};

function Router() {
  return (
    <WouterRouter hook={useHashLocation}>
      <Switch>
        <Route path="/" component={FileManager} />
        <Route path="/loja" component={RiHappyProduct} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
