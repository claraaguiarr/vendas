import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gradient-to-br from-gradient-start to-gradient-end/30 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-start">
        <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-text-dark">{title}</h3>
        
        <p className="text-text-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;