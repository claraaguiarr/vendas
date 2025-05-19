import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppCTA: React.FC = () => {
  const whatsappNumber = '5585998220207'; // seu DDI+DDD
  const message = 'Olá! Gostaria de agendar minha avaliação com 50% de desconto.'; 
  const waLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section id="agendar-whatsapp" className="section py-16 bg-gradient-to-b from-white to-gradient-start">
      <div className="container max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
          <Phone className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary">Promoção válida por 24h</span>
        </div>
        <h2 className="text-3xl font-semibold mb-4">Agende pelo WhatsApp e ganhe 50% OFF</h2>
        <p className="text-text-light mb-8">
          Clique no botão abaixo e envie sua reserva sem precisar preencher nenhum campo.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn btn-primary text-lg px-6 py-4 border-2 border-red-500 text-text-dark" /* Added text-text-dark for better contrast */
        >
          <Phone className="w-6 h-6" />
          Falar no WhatsApp
        </a>
        <p className="text-xs text-text-light mt-4">
          Resposta rápida garantida em até 5 minutos.
        </p>
      </div>
    </section>
  );
};

export default WhatsAppCTA;