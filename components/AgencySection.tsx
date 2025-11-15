
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { MissionIcon } from './icons/MissionIcon';

const AgencySection: React.FC = () => {
    return (
        <section id="agency" className="py-20 bg-rose-50 dark:bg-brand-dark-secondary/30">
            <AnimatedSection>
                <div className="container mx-auto px-6">
                    <div className="text-center md:text-left mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white">
                            Nossa Agência: <span className="font-light text-gray-600 dark:text-gray-400">Conectando Você ao Melhor de Alter do Chão</span>
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
                            <p>
                                Somos especialistas locais com profundo conhecimento do mercado e da cultura regional, dedicados a fortalecer o turismo sustentável. Nossa missão é ser a ponte entre o turista e as melhores experiências que a região oferece.
                            </p>
                            <p>
                                Possuímos um portfólio diversificado, incluindo casas de temporada, pousadas charmosas, restaurantes típicos e passeios exclusivos, todos selecionados com rigor. Nosso atendimento personalizado garante a satisfação do turista e o máximo retorno para os proprietários parceiros.
                            </p>
                            <div className="bg-white dark:bg-brand-dark-secondary/50 rounded-lg p-6 flex items-start gap-4 border border-gray-200 dark:border-gray-700">
                                <div className="flex-shrink-0 text-red-600">
                                    <MissionIcon className="w-8 h-8"/>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-brand-blue dark:text-white mb-2">Missão</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Fortalecer o turismo e ajudar empreendedores de Alter do Chão a atrair mais visitantes através de soluções de marketing digital inovadoras.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img 
                                src="https://i.pinimg.com/originals/e3/3c/6d/e33c6d708e136368352608405a3c2020.jpg" 
                                alt="Barco ao pôr do sol em Alter do Chão" 
                                className="rounded-lg shadow-2xl w-full h-auto object-cover" 
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default AgencySection;
