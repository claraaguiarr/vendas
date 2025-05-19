import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="testimonial-card h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 mr-4">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          <p className="text-text-light text-sm">{testimonial.location}</p>
          <div className="flex mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-primary" fill="#c6a664" />
            ))}
          </div>
        </div>
      </div>
      
      <p className="italic text-text-light flex-grow">"{testimonial.text}"</p>
    </div>
  );
};

export default TestimonialCard;