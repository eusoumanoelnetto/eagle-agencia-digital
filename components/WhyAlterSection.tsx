
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { CloudIcon } from './icons/CloudIcon';
import { CubeIcon } from './icons/CubeIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';

const features = [
    {
        icon: <CloudIcon />,
        title: "Belezas Naturais Incomparáveis",
        description: "Conhecida como o \"Caribe da Amazônia\", Alter do Chão ostenta praias de areia branca e águas doces e cristalinas do Rio Tapajós, um cenário de tirar o fôlego."
    },
    {
        icon: <CubeIcon />,
        title: "Ecoturismo e Cultura Local",
        description: "É um destino cult para ecoturismo e turismo alternativo, oferecendo atrações únicas como a Ilha do Amor e a vasta Floresta Nacional do Tapajós (FLONA)."
    },
    {
        icon: <ChartBarIcon />,
        title: "Demanda Turística em Alta",
        description: "O turismo regional apresenta crescimento constante, gerando alta demanda por hospedagens exclusivas e experiências autênticas. O momento é ideal para investir."
    }
];

const WhyAlterSection: React.FC = () => {
    return (
        <section id="why-alter" className="py-20 bg-white dark:bg-brand-dark-secondary">
            <AnimatedSection>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white">
                            Por que Alter do Chão? <span className="font-light text-gray-600 dark:text-gray-400">O Caribe da Amazônia</span>
                        </h2>
                    </div>

                    <div className="relative md:px-10">
                        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-orange-400"></div>
                        <div className="grid md:grid-cols-3 gap-y-20 md:gap-x-8 relative">
                            {features.map((feature, index) => (
                                <div key={index} className="relative flex flex-col items-center">
                                    {/* Vertical line for mobile */}
                                    {index < features.length - 1 && (
                                        <div className="md:hidden absolute top-8 left-1/2 -translate-x-1/2 h-full w-[2px] bg-orange-400"></div>
                                    )}

                                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full text-white mb-[-32px] border-4 border-white dark:border-brand-dark-secondary">
                                        {feature.icon}
                                    </div>
                                    
                                    <div className="relative border-2 border-orange-400 rounded-lg p-6 pt-12 w-full text-left bg-white dark:bg-brand-dark-secondary shadow-md">
                                        <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-3 text-center">{feature.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default WhyAlterSection;
