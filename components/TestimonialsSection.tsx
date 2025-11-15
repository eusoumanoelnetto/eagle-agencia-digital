
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { QuoteIcon } from './icons/QuoteIcon';

const testimonials = [
  {
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "A agência nos ajudou a alugar nossa casa rapidamente e com segurança. O suporte foi impecável em todas as etapas do processo.",
    author: "Sílvio, Proprietário"
  },
  {
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Passei dias incríveis em Alter do Chão graças às recomendações de passeios e à organização da agência. Voltarei em breve!",
    author: "Vanessa, Turista"
  },
  {
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "O atendimento personalizado fez toda a diferença, garantindo que nossa experiência fosse perfeita. Profissionalismo e carinho.",
    author: "Fernanda, Cliente"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-brand-dark-secondary">
      <AnimatedSection>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white">
              O que Dizem Nossos Parceiros e Clientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img 
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.author}`}
                  className="w-40 h-40 object-cover rounded-full mb-[-80px] z-10 border-4 border-white dark:border-brand-dark-secondary shadow-lg"
                />
                <div className="w-full border-2 border-orange-400 rounded-lg p-8 pt-24 relative bg-brand-light dark:bg-brand-dark">
                    <QuoteIcon className="absolute top-4 left-4 w-10 h-10 text-orange-200 dark:text-orange-800" />
                    <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                        "{testimonial.quote}"
                    </p>
                    <p className="font-bold text-brand-blue dark:text-white">
                        – {testimonial.author}
                    </p>
                    <QuoteIcon className="absolute bottom-4 right-4 w-10 h-10 text-orange-200 dark:text-orange-800 transform rotate-180" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default TestimonialsSection;
