
import React from 'react';
import AnimatedSection from './AnimatedSection';

const ProcessSection: React.FC = () => {
    return (
        <section id="process" className="py-20 bg-orange-400">
            <AnimatedSection>
                <div className="container mx-auto px-6 text-center text-brand-blue">
                    <div className="relative mb-12">
                        <div className="flex flex-col md:flex-row justify-around items-center">
                           <div className="text-center z-10 mb-8 md:mb-0">
                                <div className="p-6 bg-white/50 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold">Contato</h3>
                                    <p>Inicie a conversa conosco</p>
                                </div>
                           </div>
                           <div className="hidden md:block text-3xl font-thin mx-4">&rarr;</div>
                           <div className="text-center z-10 mb-8 md:mb-0">
                                <div className="p-6 bg-white/50 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold">Parceria</h3>
                                    <p>Planeje e alinhe objetivos</p>
                                </div>
                           </div>
                            <div className="hidden md:block text-3xl font-thin mx-4">&rarr;</div>
                           <div className="text-center z-10">
                                <div className="p-6 bg-white/50 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold">Sucesso</h3>
                                    <p>Resultados e crescimento local</p>
                                </div>
                           </div>
                        </div>
                    </div>
                    
                    <div className="max-w-3xl mx-auto space-y-4 text-xl">
                        <p>
                            Entre em contato hoje e descubra como podemos potencializar seus aluguéis por temporada e promover o seu negócio turístico no coração da Amazônia.
                        </p>
                        <p>
                            Seja parte do crescimento sustentável e autêntico do destino mais encantador do Brasil. <span className="bg-yellow-300 px-2 py-1 rounded">Alter do Chão espera por você – e nós também!</span>
                        </p>
                    </div>

                    <div className="mt-10">
                        <a 
                            href="#contact"
                            className="bg-brand-gray hover:bg-black text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105"
                        >
                          Fale Conosco Agora
                        </a>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default ProcessSection;
