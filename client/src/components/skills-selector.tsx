import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

interface Skill {
  id: string;
  label: string;
  description: string;
}

const skills: Skill[] = [
  {
    id: "research-exp",
    label: "Experiência prévia em pesquisa",
    description: "Projetos anteriores, publicações, participação em grupos de pesquisa"
  },
  {
    id: "statistics",
    label: "Conhecimento em métodos estatísticos",
    description: "SPSS, R, Python, análise de dados quantitativos"
  },
  {
    id: "teamwork",
    label: "Habilidade de trabalhar em equipe",
    description: "Colaboração, liderança, comunicação interpessoal"
  },
  {
    id: "languages",
    label: "Domínio de línguas estrangeiras",
    description: "Inglês, espanhol, francês para pesquisa internacional"
  },
  {
    id: "writing",
    label: "Habilidades de escrita acadêmica",
    description: "Redação científica, normas ABNT, artigos e relatórios"
  }
];

export default function SkillsSelector() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSkillToggle = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleFindOpportunities = () => {
    console.log("Finding opportunities for skills:", selectedSkills);
    // TODO: Implement opportunity matching logic
  };

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="text-xl">
          Selecione as competências que você possui para encontrar oportunidades compatíveis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-start space-x-3">
            <Checkbox
              id={skill.id}
              checked={selectedSkills.includes(skill.id)}
              onCheckedChange={() => handleSkillToggle(skill.id)}
              className="mt-1"
              data-testid={`skill-checkbox-${skill.id}`}
            />
            <label htmlFor={skill.id} className="text-sm cursor-pointer">
              <span className="font-medium">{skill.label}</span>
              <p className="text-muted-foreground text-xs mt-1">{skill.description}</p>
            </label>
          </div>
        ))}
        
        <div className="space-y-3 mt-6">
          <Link href="/pesquisa" className="block">
            <Button 
              className="w-full"
              onClick={handleFindOpportunities}
              data-testid="button-find-opportunities"
            >
              <Search className="w-4 h-4 mr-2" />
              Encontrar Oportunidades Compatíveis
            </Button>
          </Link>
          
          <Link href="/cadastro" className="block">
            <Button 
              variant="outline"
              className="w-full"
              data-testid="button-register"
            >
              Cadastre-se na Plataforma
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
