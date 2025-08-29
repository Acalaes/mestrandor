import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Search, Filter, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";

const researchProjects = [
  {
    id: 1,
    title: "Metodologias Quantitativas em Gestão Empresarial",
    description: "Pesquisa sobre aplicação de métodos estatísticos na análise de performance organizacional.",
    supervisor: "Dr. Nério Amboni",
    area: "Administração",
    requiredSkills: ["Métodos Estatísticos", "Análise de Dados", "Gestão Empresarial"],
    startDate: "Março 2024",
    status: "Ativo"
  },
  {
    id: 2,
    title: "Inovação Tecnológica em Pequenas Empresas",
    description: "Estudo sobre adoção de tecnologias digitais em pequenas e médias empresas brasileiras.",
    supervisor: "Dra. Maria Silva",
    area: "Tecnologia da Informação",
    requiredSkills: ["Pesquisa de Campo", "Análise Qualitativa", "Inovação"],
    startDate: "Abril 2024",
    status: "Recrutando"
  },
  {
    id: 3,
    title: "Sustentabilidade e Responsabilidade Social Corporativa",
    description: "Análise do impacto de práticas sustentáveis no desempenho financeiro das empresas.",
    supervisor: "Dr. João Santos",
    area: "Sustentabilidade",
    requiredSkills: ["Pesquisa Bibliográfica", "Análise Documental", "Escrita Acadêmica"],
    startDate: "Maio 2024",
    status: "Planejamento"
  }
];

export default function Pesquisa() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === "" || project.area === selectedArea;
    return matchesSearch && matchesArea;
  });

  const areas = [...new Set(researchProjects.map(project => project.area))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4" data-testid="page-title">
            Oportunidades de Pesquisa
          </h1>
          <p className="text-muted-foreground text-lg" data-testid="page-description">
            Explore projetos de pesquisa disponíveis e encontre oportunidades que combinem com suas habilidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtros Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filtros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Buscar</label>
                  <Input
                    placeholder="Buscar projetos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    data-testid="search-input"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Área de Pesquisa</label>
                  <select
                    className="w-full p-2 border border-input rounded-md bg-background"
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    data-testid="area-filter"
                  >
                    <option value="">Todas as áreas</option>
                    {areas.map(area => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Projetos */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2" data-testid={`project-title-${project.id}`}>
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <BookOpen className="w-4 h-4" />
                          <span data-testid={`project-supervisor-${project.id}`}>{project.supervisor}</span>
                          <span>•</span>
                          <span data-testid={`project-area-${project.id}`}>{project.area}</span>
                        </div>
                      </div>
                      <Badge 
                        variant={project.status === "Ativo" ? "default" : project.status === "Recrutando" ? "secondary" : "outline"}
                        data-testid={`project-status-${project.id}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium">Habilidades necessárias:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {project.requiredSkills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4">
                        <span className="text-sm text-muted-foreground">
                          Início: {project.startDate}
                        </span>
                        <Button data-testid={`button-apply-${project.id}`}>
                          Candidatar-se
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Nenhum projeto encontrado</h3>
                  <p className="text-muted-foreground">
                    Tente ajustar os filtros ou termos de busca para encontrar projetos relevantes.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}