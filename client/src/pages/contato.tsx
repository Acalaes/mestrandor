import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio de formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderemos em breve.",
      });
      
      setFormData({
        nome: "",
        email: "",
        assunto: "",
        mensagem: ""
      });
      setIsSubmitting(false);
    }, 1000);
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
            Entre em Contato
          </h1>
          <p className="text-muted-foreground text-lg" data-testid="page-description">
            Tem dúvidas sobre a plataforma ou oportunidades de pesquisa? Entre em contato conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">acalaes@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-sm text-muted-foreground">(48) 998666777</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-sm text-muted-foreground">
                      ESSAG - Escola Superior de Administração e Gestão<br />
                      São Paulo, SP - Brasil
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grupo de Pesquisa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Metodologia Aplicada</p>
                    <p className="text-sm text-muted-foreground">
                      Coordenador: Dr. Nério Amboni
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Grupo focado em pesquisas sobre metodologias quantitativas e qualitativas 
                    aplicadas à gestão empresarial e inovação tecnológica.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Horário de Atendimento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span>8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  
                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium mb-2">
                      Assunto *
                    </label>
                    <Input
                      id="assunto"
                      name="assunto"
                      type="text"
                      required
                      placeholder="Sobre o que você gostaria de falar?"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      data-testid="input-assunto"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      placeholder="Descreva sua dúvida ou comentário..."
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={6}
                      data-testid="textarea-mensagem"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Como me candidatar a uma bolsa?</h4>
                    <p className="text-sm text-muted-foreground">
                      Acesse a seção "Bolsas" e clique em "Candidatar-se" na bolsa de seu interesse. 
                      Você será direcionado para o processo de inscrição.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Posso participar de múltiplos projetos?</h4>
                    <p className="text-sm text-muted-foreground">
                      Sim, desde que você tenha disponibilidade para dedicar o tempo necessário 
                      para cada projeto. Consulte os orientadores sobre a compatibilidade.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Como funciona o sistema de matching?</h4>
                    <p className="text-sm text-muted-foreground">
                      Nossa plataforma analisa suas competências selecionadas e sugere 
                      oportunidades compatíveis com seu perfil acadêmico.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}