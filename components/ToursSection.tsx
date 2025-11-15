
import React from 'react';
import AnimatedSection from './AnimatedSection';

const tourFeatures = [
    {
        icon: <i className="fa-solid fa-binoculars text-4xl"></i>,
        title: "Passeios Guiados",
        description: "Explore a Floresta Nacional do Tapajós e suas trilhas, o místico Lago Verde e o Morro do Cruzeiro com suas vistas panorâmicas."
    },
    {
        icon: <i className="fa-solid fa-water text-4xl"></i>,
        title: "Aventuras Aquáticas",
        description: "Desfrute de atividades como caiaque nas águas tranquilas do rio, trilhas de baixo impacto, pesca esportiva e visitas às comunidades tradicionais."
    },
    {
        icon: <i className="fa-solid fa-user-check text-4xl"></i>,
        title: "Parcerias de Confiança",
        description: "Trabalhamos apenas com agências renomadas: Gil Serique, Mae Natureza e Ynca Turismo, garantindo a segurança, autenticidade e excelência de cada roteiro."
    }
];

const ToursSection: React.FC = () => {
    return (
        <section 
            id="tours" 
            className="py-20 bg-cover bg-center relative"
            style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp5512217.jpg')" }}
        >
            <div className="absolute inset-0 bg-brand-blue/70"></div>
            <AnimatedSection className="relative z-10">
                <div className="container mx-auto px-6">
                    <div className="bg-white/90 dark:bg-brand-dark/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12">
                        <div className="text-center mb-12">
                             <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white">
                                Turismo e Passeios: <span className="font-light text-gray-600 dark:text-gray-400">Explore o Paraíso Natural</span>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {tourFeatures.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center text-center p-6 bg-transparent">
                                     <div className="flex items-center justify-center h-20 w-20 rounded-full border-2 border-orange-500 text-orange-500 mb-5 transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 border-t-2 border-orange-400/30 pt-12">
                            <h3 className="text-2xl font-bold text-brand-blue dark:text-white text-center mb-8">Explore os Pontos-Chave</h3>
                            <div className="relative w-full max-w-4xl h-96 mx-auto bg-brand-light dark:bg-brand-dark-secondary rounded-lg shadow-inner overflow-hidden border border-gray-200 dark:border-gray-700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.75704185791!2d-54.95874284144383!3d-2.515281198083861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92885406023c7269%3A0x71661e6177f8028a!2sAlter%20do%2C%20Santar%C3%A9m%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1689281543210!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mapa de Alter do Chão"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default ToursSection;
