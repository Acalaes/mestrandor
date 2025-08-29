import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, User, Mail, Phone, MapPin, GraduationCap, Building2, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";

const userTypes = [
  { id: "researcher", label: "Pesquisador", icon: Microscope, description: "Professores e pesquisadores institucionais" },
  { id: "student", label: "Mestrando/Doutorando", icon: GraduationCap, description: "Estudantes de pós-graduação" },
  { id: "company", label: "Empresa", icon: Building2, description: "Empresas interessadas em parcerias" },
  { id: "candidate", label: "Candidato", icon: User, description: "Interessados em oportunidades de pesquisa" }
];

const skills = [
  { id: "research-exp", label: "Experiência prévia em pesquisa" },
  { id: "statistics", label: "Conhecimento em métodos estatísticos" },
  { id: "teamwork", label: "Habilidade de trabalhar em equipe" },
  { id: "languages", label: "Domínio de línguas estrangeiras" },
  { id: "writing", label: "Habilidades de escrita acadêmica" },
  { id: "data-analysis", label: "Análise de dados" },
  { id: "project-management", label: "Gestão de projetos" },
  { id: "presentation", label: "Habilidades de apresentação" }
];

export default function Cadastro() {
  const [selectedUserType, setSelectedUserType] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    instituicao: "",
    area: "",
    biografia: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillToggle = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedUserType) {
      toast({
        title: "Erro",
        description: "Por favor, selecione um tipo de usuário.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simular cadastro
    setTimeout(() => {
      toast({
        title: "Cadastro realizado!",
        description: "Bem-vindo ao MESTRANDOR! Seu perfil foi criado com sucesso.",
      });
      
      // Reset form
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        instituicao: "",
        area: "",
        biografia: ""
      });
      setSelectedUserType("");
      setSelectedSkills([]);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4" data-testid="page-title">
            Cadastro na Plataforma
          </h1>
          <p className="text-muted-foreground text-lg" data-testid="page-description">
            Complete seu cadastro para ter acesso a todas as funcionalidades do MESTRANDOR.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Tipo de Usuário */}
          <Card>
            <CardHeader>
              <CardTitle>Tipo de Usuário *</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userTypes.map((userType) => {
                  const IconComponent = userType.icon;
                  return (
                    <div
                      key={userType.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedUserType === userType.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedUserType(userType.id)}
                      data-testid={`user-type-${userType.id}`}
                    >
                      <div className="flex items-start space-x-3">
                        <IconComponent className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">{userType.label}</h3>
                          <p className="text-sm text-muted-foreground">{userType.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Informações Pessoais */}
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="pl-10"
                      data-testid="input-nome"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      data-testid="input-email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="pl-10"
                      data-testid="input-telefone"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="instituicao" className="block text-sm font-medium mb-2">
                    Instituição *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="instituicao"
                      name="instituicao"
                      type="text"
                      required
                      placeholder="Nome da sua instituição"
                      value={formData.instituicao}
                      onChange={handleInputChange}
                      className="pl-10"
                      data-testid="input-instituicao"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-medium mb-2">
                  Área de Atuação/Interesse *
                </label>
                <Input
                  id="area"
                  name="area"
                  type="text"
                  required
                  placeholder="Ex: Administração, Engenharia, Ciências Sociais..."
                  value={formData.area}
                  onChange={handleInputChange}
                  data-testid="input-area"
                />
              </div>

              <div>
                <label htmlFor="biografia" className="block text-sm font-medium mb-2">
                  Biografia/Apresentação
                </label>
                <Textarea
                  id="biografia"
                  name="biografia"
                  placeholder="Conte um pouco sobre você, sua experiência e objetivos..."
                  value={formData.biografia}
                  onChange={handleInputChange}
                  rows={4}
                  data-testid="textarea-biografia"
                />
              </div>
            </CardContent>
          </Card>

          {/* Competências */}
          <Card>
            <CardHeader>
              <CardTitle>Competências e Habilidades</CardTitle>
              <p className="text-sm text-muted-foreground">
                Selecione as competências que você possui para melhor correspondência de oportunidades.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={skill.id}
                      checked={selectedSkills.includes(skill.id)}
                      onCheckedChange={() => handleSkillToggle(skill.id)}
                      data-testid={`skill-checkbox-${skill.id}`}
                    />
                    <label 
                      htmlFor={skill.id} 
                      className="text-sm font-medium cursor-pointer"
                    >
                      {skill.label}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Botão de Cadastro */}
          <div className="flex justify-end space-x-4">
            <Link href="/">
              <Button variant="outline" type="button">
                Cancelar
              </Button>
            </Link>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              data-testid="button-submit"
            >
              {isSubmitting ? "Cadastrando..." : "Finalizar Cadastro"}
            </Button>
          </div>
        </form>
      </div>
      
      <Footer />
    </div>
  );
}