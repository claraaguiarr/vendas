import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Quanto tempo dura uma sessão de tratamento?',
    answer: 'A duração varia de acordo com o procedimento. Tratamentos faciais básicos duram cerca de 30-45 minutos, enquanto procedimentos mais completos podem levar até 90 minutos. Na sua consulta inicial, forneceremos um cronograma detalhado.'
  },
  {
    id: 2,
    question: 'Os procedimentos são dolorosos?',
    answer: 'A maioria dos nossos tratamentos é indolor ou causa apenas um leve desconforto. Para procedimentos específicos que podem causar sensibilidade, aplicamos anestésicos tópicos para garantir seu conforto durante todo o processo.'
  },
  {
    id: 3,
    question: 'Quando verei os resultados?',
    answer: 'Muitos clientes percebem melhorias imediatas após a primeira sessão, especialmente em tratamentos de hidratação e brilho. Para resultados que envolvem remodelação de colágeno ou redução de rugas, os efeitos completos geralmente são visíveis após 2-3 sessões, com melhorias contínuas ao longo do tempo.'
  },
  {
    id: 4,
    question: 'Quantas sessões são necessárias para ver resultados?',
    answer: 'O número ideal de sessões varia de acordo com o tratamento e suas necessidades individuais. Alguns procedimentos mostram resultados imediatos com uma única sessão, enquanto outros podem exigir uma série de 3-6 tratamentos para resultados ótimos. Desenvolvemos um plano personalizado durante sua consulta inicial.'
  },
  {
    id: 5,
    question: 'É necessário algum cuidado especial após os procedimentos?',
    answer: 'Sim, fornecemos instruções detalhadas de cuidados pós-tratamento para maximizar os resultados. Geralmente, recomendamos evitar exposição solar direta, usar protetor solar diariamente e seguir uma rotina de skincare específica que complementa os tratamentos realizados.'
  }
];

const FaqSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="section bg-white py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Perguntas Frequentes</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Esclarecemos suas principais dúvidas sobre nossos tratamentos e procedimentos.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className="border border-text-light/10 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-4 flex justify-between items-center bg-gradient-start/30 hover:bg-gradient-start/50 transition-colors"
                >
                  <h4 className="font-medium text-lg">{faq.question}</h4>
                  {openItem === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openItem === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-4 text-text-light bg-white">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-text-light mb-6">
              Ainda tem dúvidas? Entre em contato conosco diretamente
            </p>
                        <a 
              href="https://wa.me/558899879997" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline inline-flex items-center gap-2"
            >
              <span>Fale com um especialista</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;