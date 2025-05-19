import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Beleza Natural</h3>
            <p className="text-white/70 mb-6">
              Transformando vidas através de tratamentos estéticos personalizados e resultados visíveis desde a primeira sessão.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@belezanatural.com" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-white/70 hover:text-primary transition-colors">
                  Nossos Tratamentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/70 hover:text-primary transition-colors">
                  Sobre a Clínica
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-white/70 hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-primary transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Blog de Beleza
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-white/70">
                  Av. Paulista, 1000, Jardins<br />
                  São Paulo - SP, 01310-100
                </p>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <p className="text-white/70">
                  (11) 99999-9999
                </p>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <p className="text-white/70">
                  contato@belezanatural.com
                </p>
              </div>
              
              <div>
                <h5 className="font-medium mb-2">Horário de Funcionamento</h5>
                <p className="text-white/70">
                  Segunda a Sexta: 9h às 19h<br />
                  Sábado: 9h às 16h
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Beleza Natural. Todos os direitos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;