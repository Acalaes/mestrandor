export default function Footer() {
  return (
    <footer className="bg-muted mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground" data-testid="footer-developer-title">
              DESENVOLVIDO POR:
            </h4>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=96&h=96"
                alt="ESSAG Pós-graduação"
                className="w-12 h-12 rounded-full"
                data-testid="essag-logo"
              />
              <div>
                <p className="font-medium text-foreground" data-testid="developer-name">
                  Mestrando Alexandre P Calaes
                </p>
                <p className="text-sm text-muted-foreground" data-testid="institution-name">
                  ESSAG - Escola Superior de Administração e Gestão
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground" data-testid="research-group-title">
              Grupo de Pesquisa
            </h4>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=96&h=96"
                alt="Metodologia Aplicada Research Group"
                className="w-12 h-12 rounded-full"
                data-testid="research-group-logo"
              />
              <div>
                <p className="font-medium text-foreground" data-testid="research-group-name">
                  Metodologia Aplicada
                </p>
                <p className="text-sm text-muted-foreground" data-testid="research-group-leader">
                  (Dr. Nério Amboni)
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="copyright">
            © 2024 MESTRANDOR. Todos os direitos reservados. Plataforma acadêmica brasileira para pesquisadores.
          </p>
        </div>
      </div>
    </footer>
  );
}
