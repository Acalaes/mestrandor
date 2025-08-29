import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Microscope, GraduationCap, Building2, User } from "lucide-react";

const researchImages = [
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Researcher analyzing data"
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Students collaborating on research"
  },
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "University laboratory equipment"
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Students presenting research"
  },
  {
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Academic library research"
  },
  {
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Chemical laboratory research"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Field research work"
  },
  {
    src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Microscope laboratory research"
  }
];

const scholarships = [
  {
    id: 1,
    title: "Bolsa de Mestrado - Metodologia Aplicada",
    description: "Oportunidade para pesquisa em metodologias quantitativas e qualitativas aplicadas à gestão empresarial.",
    deadline: "15/02/2024"
  },
  {
    id: 2,
    title: "Iniciação Científica - ESSAG",
    description: "Programa de bolsas para graduandos interessados em pesquisa acadêmica e desenvolvimento científico.",
    deadline: "28/02/2024"
  }
];

const userTypes = [
  { id: "researcher", label: "Sou Pesquisador", icon: Microscope },
  { id: "student", label: "Sou Mestrando", icon: GraduationCap },
  { id: "company", label: "Sou Empresa", icon: Building2 },
  { id: "candidate", label: "Sou Candidato", icon: User }
];

export default function MainContent() {
  const handleSearchScholarships = () => {
    console.log("Searching scholarships...");
    // TODO: Implement scholarship search
  };

  const handleViewDetails = (scholarshipId: number) => {
    console.log("Viewing details for scholarship:", scholarshipId);
    // TODO: Implement scholarship details view
  };

  const handleSelectUserType = (userType: string) => {
    console.log("User type selected:", userType);
    // TODO: Implement user type selection and redirect
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center bg-gradient-to-r from-primary to-blue-600 text-primary-foreground rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-2" data-testid="hero-title">MESTRANDO PESQUISADOR</h1>
        <p className="text-xl opacity-90 mb-6" data-testid="hero-subtitle">
          Conectando pesquisadores com oportunidades de bolsas científicas
        </p>
        <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
          <span className="text-sm font-medium" data-testid="hero-badge">BOLSAS DE PESQUISA CIENTÍFICA</span>
        </div>
      </div>

      {/* Research Images Gallery */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Pesquisa em Ação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {researchImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                data-testid={`research-image-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-24 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scholarship Opportunities */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">Bolsas Anunciadas</CardTitle>
            <Button onClick={handleSearchScholarships} data-testid="button-search-scholarships">
              <Search className="w-4 h-4 mr-2" />
              Buscar Pesquisa
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scholarships.map((scholarship) => (
              <Card key={scholarship.id} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2" data-testid={`scholarship-title-${scholarship.id}`}>
                    {scholarship.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3" data-testid={`scholarship-description-${scholarship.id}`}>
                    {scholarship.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" data-testid={`scholarship-deadline-${scholarship.id}`}>
                      Prazo: {scholarship.deadline}
                    </Badge>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => handleViewDetails(scholarship.id)}
                      data-testid={`button-view-details-${scholarship.id}`}
                    >
                      Ver detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Types Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Como você gostaria de usar o MESTRANDOR?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userTypes.map((userType) => {
              const IconComponent = userType.icon;
              return (
                <Button
                  key={userType.id}
                  variant="secondary"
                  className="p-4 h-auto flex flex-col items-center space-y-2 hover:bg-accent transition-colors duration-200"
                  onClick={() => handleSelectUserType(userType.id)}
                  data-testid={`button-user-type-${userType.id}`}
                >
                  <IconComponent className="w-8 h-8" />
                  <span className="font-medium text-center">{userType.label}</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
