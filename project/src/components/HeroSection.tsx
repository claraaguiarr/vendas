import React from 'react';
import { Sparkles, Clock, ShieldCheck } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      />
      
     <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center stagger-children">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-xl font-semibold text-red-600 animate-blink-red"> {/* Changed text-base to text-xl */}
              Oferta por tempo limitado
            </span>
          </div>


          <h1 className="mb-6 text-text-dark">
            Transforme Sua Aparência em 1 Única Sessão ou Seu Dinheiro de Volta
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-text-light max-w-xl mx-auto">
            Resultados visíveis desde o primeiro tratamento com tecnologia exclusiva e garantia de satisfação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://wa.me/558899879997" 
              target="_blank"
              rel="noopener noreferrer" 
              className="btn btn-primary-darker flex items-center justify-center gap-2 group border-2 border-red-500" /* Added border */
            > 
              <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              <span>Agende Agora com 50% OFF</span>
            </a>
            <a 
              href="#depoimentos" 
              className="btn btn-outline border-2 border-red-500" /* Added border */
            >
              Ver Resultados Reais
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm">Satisfação Garantida</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-text-light/20"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Resultados em 1 Sessão</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-text-light/20"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm">+5.000 Clientes Satisfeitas</span>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/women/${30 + i}.jpg`} 
                    alt="Cliente satisfeita" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-text-light">
              <span className="font-bold text-primary">98% de aprovação</span> entre nossas clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;