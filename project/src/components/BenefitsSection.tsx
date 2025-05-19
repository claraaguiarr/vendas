import React from 'react';
import { Sparkles, Zap, HeartPulse, Smile, Clock, Award } from 'lucide-react';
import BenefitCard from './ui/BenefitCard';

const benefits = [
  {
    id: 1,
    title: 'Redução Visível de Rugas e Linhas de Expressão',
    description: 'Chega de se incomodar com marcas que não representam quem você é. Com nossos protocolos personalizados, você nota a suavização das rugas já nas primeiras sessões – sem exageros, com naturalidade e elegância.',
    icon: <Sparkles className="w-8 h-8 text-primary" />
  },
  {
    id: 2,
    title: 'Autoestima Renovada a Cada Sessão',
    description: 'Mais do que estética, é sobre se sentir bem consigo mesma. Nossos tratamentos devolvem o brilho no olhar, o sorriso espontâneo e a confiança de ocupar espaços com segurança e leveza.',
    icon: <Zap className="w-8 h-8 text-primary" />
  },
  {
    id: 3,
    title: 'Contorno Facial Redefinido e Natural',
    description: 'O tempo pode mudar o formato do rosto – mas nós temos como devolver a harmonia. Reestruture seu contorno facial com técnicas modernas, sem perder sua essência. É você, só que ainda mais radiante.',
    icon: <HeartPulse className="w-8 h-8 text-primary" />
  },
  {
    id: 4,
    title: 'Flacidez Sob Controle e Firmeza Restaurada',
    description: 'Papada, queda do malar e pele frouxa? Nossos tratamentos combatem a flacidez de dentro pra fora, estimulando o colágeno e reativando a sustentação da sua pele com tecnologia de ponta.',
    icon: <Smile className="w-8 h-8 text-primary" />
  },
  {
    id: 5,
    title: 'Conforto e Segurança em Cada Procedimento',
    description: 'Nada de medo ou desconforto. Usamos métodos minimamente invasivos que oferecem resultados visíveis com o máximo de bem-estar e segurança. Você relaxa enquanto o cuidado acontece.',
    icon: <Clock className="w-8 h-8 text-primary" />
  },
  {
    id: 6,
    title: 'Resultados Reais e Duradouros',
    description: 'Aqui, o resultado não some em poucos dias. Trabalhamos com protocolos que mantêm a beleza ao longo do tempo, tratando a causa e não só o sintoma.',
    icon: <Award className="w-8 h-8 text-primary" />
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="section bg-white py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Benefícios dos Nossos Tratamentos Estéticos Avançados</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Descubra como nossos tratamentos estéticos avançados podem transformar sua aparência e aumentar sua confiança.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;