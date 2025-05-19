import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-dark pt-16 pb-8"> {/* removi o text-white aqui */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Beleza Natural</h3>
            <p className="text-black/90 mb-6">
              Transformando vidas através de tratamentos estéticos personalizados e resultados visíveis desde a primeira sessão.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="mailto:contato@belezanatural.com" 
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Links Rápidos</h4> {/* título preto */}
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-black/90 hover:text-primary transition-colors">
                  Nossos Tratamentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-black/90 hover:text-primary transition-colors">
                  Sobre a Clínica
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-black/90 hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-black/90 hover:text-primary transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="text-black/90 hover:text-primary transition-colors">
                  Blog de Beleza
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Contato</h4> {/* título preto */}
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-black/90">
                  Dom José Tupinambá da Frota, 711 - Dom Jose<br />
                  Sobral - CE, 62010-290
                </p>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <p className="text-black/90">
                  +55 88 9987-9997
                </p>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <p className="text-black/90">
                  claraenfermagem@hotmail.com
                </p>
              </div>
              
              <div>
                <h5 className="font-medium mb-2 text-black">Horário de Funcionamento</h5> {/* título preto */}
                <p className="text-black/90">
                  Segunda a Sexta: 9h às 20h<br />
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/10 text-center text-black/70 text-sm"> {/* textos menores em cinza escuro */}
          <p>© {new Date().getFullYear()} Beleza Natural. Todos os direitos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-primary transition-colors text-black/90">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors text-black/90">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
