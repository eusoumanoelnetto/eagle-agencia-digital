import React, { useRef } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-white dark:bg-brand-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden border border-gray-200/50 dark:border-gray-700 hover:border-brand-gold/40"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px at var(--mouse-x, 0) var(--mouse-y, 0), rgba(192, 160, 98, 0.1), transparent 80%)`,
        }}
      />
      <div className="relative z-10 text-center flex flex-col items-center h-full">
        <div className="inline-block mb-4 text-brand-gold transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-brand-blue dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
