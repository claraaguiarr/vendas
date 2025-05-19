import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/558899879997"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Fale Conosco Agora</span>
    </a>
  );
};

export default WhatsAppButton;