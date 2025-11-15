
import React from 'react';
import AnimatedSection from './AnimatedSection';

const rentalFeatures = [
    {
        title: "Casa de Alter (Destaque)",
        description: "Uma casa espaçosa com piscina privativa, ar-condicionado em todos os cômodos e localização privilegiada, a apenas 17 minutos de caminhada da praia principal."
    },
    {
        title: "Variedade para Todos",
        description: "Oferecemos opções para todos os perfis: desde kitnets econômicas, ideais para casais aventureiros, até casas de luxo com vista e acesso privativo ao Lago Verde."
    },
    {
        title: "Estrutura Completa",
        description: "Todos os aluguéis contam com facilidades essenciais como Wi-Fi de alta velocidade, estacionamento seguro e áreas de lazer perfeitas para famílias e grupos."
    }
];

const RentalsSection: React.FC = () => {
    return (
        <section id="rentals" className="py-20 bg-brand-light dark:bg-brand-dark">
            <AnimatedSection>
                <div className="container mx-auto px-6">
                    <div className="text-center md:text-left mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white">
                            Aluguéis por Temporada: <span className="font-light text-gray-600 dark:text-gray-400">Conforto e Autenticidade</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        {rentalFeatures.map((feature, index) => (
                            <div key={index}>
                                <h3 className="text-2xl font-semibold text-brand-blue dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default RentalsSection;
