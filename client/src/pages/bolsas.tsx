import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calendar, DollarSign, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";

const scholarships = [
  {
    id: 1,
    title: "Bolsa de Mestrado CAPES - Metodologia Aplicada",
    institution: "ESSAG - Escola Superior de Administração e Gestão",
    description: "Bolsa de estudos para mestrado em Administração com foco em metodologias quantitativas e qualitativas aplicadas à gestão empresarial.",
    value: "R$ 1.500,00/mês",
    duration: "24 meses",
    deadline: "15/02/2024",
    location: "Presencial - São Paulo/SP",
    requirements: ["Graduação em Administração ou áreas afins", "Conhecimento em métodos estatísticos", "Experiência prévia em pesquisa"],
    status: "Aberta",
    type: "Mestrado"
  },
  {
    id: 2,
    title: "Iniciação Científica PIBIC - Inovação Tecnológica",
    institution: "ESSAG - Escola Superior de Administração e Gestão",
    description: "Programa de bolsas para graduandos interessados em pesquisa sobre inovação tecnológica em pequenas e médias empresas.",
    value: "R$ 400,00/mês",
    duration: "12 meses",
    deadline: "28/02/2024",
    location: "Híbrido - São Paulo/SP",
    requirements: ["Cursando graduação em áreas relacionadas", "Disponibilidade de 20h semanais", "Inglês intermediário"],
    status: "Aberta",
    type: "Iniciação Científica"
  },
  {
    id: 3,
    title: "Bolsa de Doutorado CNPq - Sustentabilidade Empresarial",
    institution: "ESSAG - Escola Superior de Administração e Gestão",
    description: "Bolsa para doutorado em pesquisa sobre sustentabilidade e responsabilidade social corporativa no contexto brasileiro.",
    value: "R$ 2.200,00/mês",
    duration: "48 meses",
    deadline: "10/03/2024",
    location: "Presencial - São Paulo/SP",
    requirements: ["Mestrado em área afim", "Publicações científicas", "Proficiência em inglês", "Projeto de pesquisa aprovado"],
    status: "Abertura em breve",
    type: "Doutorado"
  },
  {
    id: 4,
    title: "Bolsa de Extensão - Metodologia de Pesquisa",
    institution: "ESSAG - Escola Superior de Administração e Gestão",
    description: "Bolsa para estudantes participarem de projetos de extensão universitária focados no ensino de metodologia de pesquisa.",
    value: "R$ 300,00/mês",
    duration: "6 meses",
    deadline: "05/02/2024",
    location: "Presencial - São Paulo/SP",
    requirements: ["Cursando graduação ou pós-graduação", "Interesse em ensino", "Experiência em pesquisa acadêmica"],
    status: "Encerrada",
    type: "Extensão"
  }
];

export default function Bolsas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "" || scholarship.type === selectedType;
    const matchesStatus = selectedStatus === "" || scholarship.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const types = [...new Set(scholarships.map(scholarship => scholarship.type))];
  const statuses = [...new Set(scholarships.map(scholarship => scholarship.status))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aberta": return "default";
      case "Abertura em breve": return "secondary";
      case "Encerrada": return "outline";
      default: return "outline";
    }
  };

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
            Bolsas de Pesquisa Científica
          </h1>
          <p className="text-muted-foreground text-lg" data-testid="page-description">
            Encontre oportunidades de financiamento para sua pesquisa acadêmica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtros Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Filtros</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Buscar</label>
                  <Input
                    placeholder="Buscar bolsas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    data-testid="search-input"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Tipo de Bolsa</label>
                  <select
                    className="w-full p-2 border border-input rounded-md bg-background"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    data-testid="type-filter"
                  >
                    <option value="">Todos os tipos</option>
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Status</label>
                  <select
                    className="w-full p-2 border border-input rounded-md bg-background"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    data-testid="status-filter"
                  >
                    <option value="">Todos os status</option>
                    {statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Bolsas */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredScholarships.map((scholarship) => (
                <Card key={scholarship.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2" data-testid={`scholarship-title-${scholarship.id}`}>
                          {scholarship.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground" data-testid={`scholarship-institution-${scholarship.id}`}>
                          {scholarship.institution}
                        </p>
                      </div>
                      <Badge variant={getStatusColor(scholarship.status)} data-testid={`scholarship-status-${scholarship.id}`}>
                        {scholarship.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4" data-testid={`scholarship-description-${scholarship.id}`}>
                      {scholarship.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-sm">
                          <strong>Valor:</strong> {scholarship.value}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">
                          <strong>Duração:</strong> {scholarship.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-red-600" />
                        <span className="text-sm">
                          <strong>Prazo:</strong> {scholarship.deadline}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">
                          <strong>Local:</strong> {scholarship.location}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-sm font-medium">Requisitos:</span>
                      <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                        {scholarship.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4">
                      <Badge variant="outline">
                        <GraduationCap className="w-3 h-3 mr-1" />
                        {scholarship.type}
                      </Badge>
                      <Button 
                        disabled={scholarship.status === "Encerrada"}
                        data-testid={`button-apply-${scholarship.id}`}
                      >
                        {scholarship.status === "Encerrada" ? "Encerrada" : 
                         scholarship.status === "Abertura em breve" ? "Em breve" : "Candidatar-se"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredScholarships.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <GraduationCap className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Nenhuma bolsa encontrada</h3>
                  <p className="text-muted-foreground">
                    Tente ajustar os filtros para encontrar bolsas relevantes.
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