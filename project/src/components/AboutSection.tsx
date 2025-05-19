import React from 'react';
import { Medal, CheckCircle, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="section bg-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary/20 rounded-full"></div>
              
              <div className="relative bg-gradient-to-tr from-gradient-start to-gradient-end rounded-lg overflow-hidden shadow-xl h-[500px]">
                <img 
                  src="/src/6.jpeg" 
                  alt="Estética profissional" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 stagger-children">
            <h2 className="mb-6">Excelência em Tratamentos Estéticos de Alto Padrão</h2>
            
            <p className="text-text-light mb-8">
              Com centenas de rostos transformados, Dra Clara Aguiar une  tecnologia de ponta, segurança e um olhar clínico apurado para valorizar o que há de mais bonito em você.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-full">
                  <Medal className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Profissional Altamente Qualificada</h4>
                  <p className="text-text-light text-sm">
                    Especialista em Estética Avançada e harmonização Facial com certificações nacionais e internacionais, sempre atualizada nas técnicas mais modernas da área. 
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-full">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Protocolos Personalizados para Resultados Reais</h4>
                  <p className="text-text-light text-sm">
                    Cada procedimento é pensado exclusivamente para o seu tipo de pele, suas queixas e seus objetivos — com naturalidade, equilíbrio e sofisticação.

                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-full">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Segurança e Produtos Aprovados pela ANVISA</h4>
                  <p className="text-text-light text-sm">
                    Seguimos padrões rigorosos de biossegurança e trabalhamos apenas com marcas reconhecidas e aprovadas pelos órgãos competentes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 inline-block bg-primary/10 py-2 px-4 rounded-lg">
              <p className="text-primary font-medium text-sm">
                +5.000 procedimentos realizados com 98% de satisfação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
