import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    image: '/src/1.jpeg',
  },
  {
    id: 2,
    image: '/src/2.jpeg',
  },
  {
    id: 3,
    image: '/src/3.jpeg',
  },
  {
    id: 4,
    image: '/src/4.jpeg',
  },
  {
    id: 5,
    image: '/src/5.jpeg',
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="depoimentos" className="section bg-gradient-to-br from-gradient-start to-gradient-end py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Transformações Reais</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Resultados que falam por si mesmos. Conheça algumas de nossas clientes satisfeitas.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="aspect-[3/2] w-full">
                    <img 
                      src={testimonial.image} 
                      alt="Cliente satisfeita"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-text-light/30 hover:bg-text-light/50'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;