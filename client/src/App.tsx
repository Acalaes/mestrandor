import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Pesquisa from "@/pages/pesquisa";
import Bolsas from "@/pages/bolsas";
import Contato from "@/pages/contato";
import Cadastro from "@/pages/cadastro";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pesquisa" component={Pesquisa} />
      <Route path="/bolsas" component={Bolsas} />
      <Route path="/contato" component={Contato} />
      <Route path="/cadastro" component={Cadastro} />
      <Route component={NotFound} />
    </Switch>
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
