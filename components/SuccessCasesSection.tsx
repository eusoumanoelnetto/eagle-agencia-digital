
import React from 'react';
import AnimatedSection from './AnimatedSection';

const cases = [
    {
        icon: <i className="fa-solid fa-arrow-trend-up fa-3x"></i>,
        number: "+40%",
        title: "Aumento nas Reservas Diretas",
        description: "Em 6 meses, nosso parceiro 'Pousada Vista do Lago' viu um aumento de 40% nas reservas feitas diretamente pelo seu novo site, reduzindo custos com OTAs."
    },
    {
        icon: <i className="fa-solid fa-users fa-3x"></i>,
        number: "+150%",
        title: "Engajamento nas Redes Sociais",
        description: "Para o 'Restaurante Sabor do Tapajós', criamos uma estratégia de conteúdo que aumentou o engajamento e o alcance em 150%, atraindo novos clientes locais e turistas."
    },
    {
        icon: <i className="fa-solid fa-chart-line fa-3x"></i>,
        number: "95%",
        title: "Taxa de Ocupação Média",
        description: "Gerenciando o marketing digital da 'Casa de Férias Paraíso', alcançamos e mantivemos uma taxa de ocupação média de 95% durante a alta temporada."
    }
];

const SuccessCasesSection: React.FC = () => {
    return (
        <section id="cases" className="py-20 bg-brand-light dark:bg-brand-dark">
            <AnimatedSection>
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">
                        Cases de Sucesso
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Números que falam por si. Veja o impacto real que geramos para nossos parceiros.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cases.map((caseItem, index) => (
                            <div key={index} className="bg-white dark:bg-brand-dark-secondary rounded-xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700 hover:border-brand-gold/40 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="flex justify-center text-brand-gold mb-4">
                                    {caseItem.icon}
                                </div>
                                <p className="text-5xl font-bold text-brand-gold mb-2">{caseItem.number}</p>
                                <h3 className="text-xl font-semibold text-brand-blue dark:text-white mb-3">{caseItem.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{caseItem.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default SuccessCasesSection;
