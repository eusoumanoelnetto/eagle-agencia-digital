
import React from 'react';
import AnimatedSection from './AnimatedSection';

const differentials = [
  {
    title: "Plataforma Digital Integrada",
    description: "Reservas online fluidas, acompanhadas de fotos profissionais do seu espaço e avaliações reais de clientes para construir confiança.",
    align: "left"
  },
  {
    title: "Estratégias de Marketing Digital",
    description: "Campanhas focadas em SEO, anúncios segmentados e e-mail marketing personalizados para garantir a máxima taxa de ocupação do seu imóvel.",
    align: "right"
  },
  {
    title: "Suporte 24h e Multilíngue",
    description: "Atendimento ininterrupto para hóspedes e proprietários, com foco em soluções rápidas e eficazes, recebendo turistas de todo o mundo.",
    align: "left"
  },
];

const DifferentialsSection: React.FC = () => {
  return (
    <section id="differentials" className="py-20 bg-rose-50 dark:bg-brand-dark-secondary/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white">
              Diferenciais: <span className="font-light text-gray-600 dark:text-gray-400">O Marketing que Transforma Seu Negócio</span>
            </h2>
          </div>
        </AnimatedSection>
        
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-orange-500 h-full border" style={{left: '50%'}}></div>
          
          {differentials.map((item, index) => {
            const isLeft = item.align === 'left';
            return (
              <AnimatedSection key={index} direction={isLeft ? 'left' : 'right'}>
                <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white"></h1>
                  </div>
                  <div className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${isLeft ? 'text-right' : 'text-left'}`}>
                    <h3 className="mb-3 font-bold text-brand-blue dark:text-white text-xl">{item.title}</h3>
                    <p className="text-base leading-snug tracking-wide text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;