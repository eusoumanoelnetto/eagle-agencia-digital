
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import { MarketingIcon } from './components/icons/MarketingIcon';
import { WebsiteIcon } from './components/icons/WebsiteIcon';
import { HostingIcon } from './components/icons/HostingIcon';
import { TIIcon } from './components/icons/TIIcon';
import { ConsultingIcon } from './components/icons/ConsultingIcon';
import { SocialMediaIcon } from './components/icons/SocialMediaIcon';
import AnimatedSection from './components/AnimatedSection';
import InstagramFeed from './components/InstagramFeed';
import WhatsAppButton from './components/WhatsAppButton';
import BlogCard from './components/BlogCard';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Fix: Cast anchor to HTMLAnchorElement to access properties like pathname and hostname.
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      
      if (!anchor) return;

      if (anchor.pathname === window.location.pathname && anchor.hostname === window.location.hostname) {
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            event.preventDefault();
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            element.scrollIntoView({
              behavior: prefersReducedMotion ? 'auto' : 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  const createSnippet = (htmlContent: string, maxLength = 120) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    if (text.length > maxLength) {
        return text.substring(0, maxLength).trim() + '...';
    }
    return text;
  };

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://agenciaeagledigital.blogspot.com/feeds/posts/default')
        .then(res => res.json())
        .then(data => {
            if (data.status === 'ok' && data.items) {
                setPosts(data.items.slice(0, 3));
            }
            setLoadingPosts(false);
        })
        .catch(error => {
            console.error("Erro ao carregar os posts do blog:", error);
            setLoadingPosts(false);
        });
  }, []);

  const services = [
    {
      icon: <MarketingIcon />,
      title: "Marketing Digital",
      description: "Estratégias para sua marca ganhar destaque na Internet."
    },
    {
      icon: <HostingIcon />,
      title: "Hospedagem de WebSite",
      description: "Trabalhamos com a hospedagem mais moderna e segura da atualidade."
    },
    {
      icon: <WebsiteIcon />,
      title: "Criação de WebSite",
      description: "Desenvolvemos Websites focados em converter visitantes em clientes."
    },
    {
      icon: <TIIcon />,
      title: "Serviços de TI",
      description: "Suporte técnico e soluções de TI para manter seu negócio funcionando."
    },
    {
      icon: <ConsultingIcon />,
      title: "Assessoria Completa",
      description: "Consultoria estratégica para otimizar seus resultados e processos."
    },
    {
      icon: <SocialMediaIcon />,
      title: "Social Media",
      description: "Gestão de redes sociais para engajar seu público e fortalecer sua marca."
    }
  ];

  const validate = (fieldValues = formData) => {
    const tempErrors: { [key: string]: string } = {};
    if (!fieldValues.name) tempErrors.name = 'Nome é obrigatório.';
    if (!fieldValues.email) {
      tempErrors.email = 'Email é obrigatório.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)) {
      tempErrors.email = 'Formato de email inválido.';
    }
    if (!fieldValues.message) tempErrors.message = 'Mensagem é obrigatória.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validate(formData);
  };
  
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      validate(formData);
    }
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (validate(formData)) {
      setIsSubmitting(true);
      // Simulação de envio de formulário
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
    }
  };

  const getBorderClass = (fieldName: 'name' | 'email' | 'message') => {
    if (!touched[fieldName]) return 'border-gray-500/50';
    return errors[fieldName] ? 'border-red-500' : 'border-green-500';
  };
  
  const isFormInvalid = !formData.name || !formData.email || !formData.message || Object.keys(errors).length > 0;

  return (
    <div className="bg-brand-light dark:bg-brand-dark text-brand-gray dark:text-brand-light-gray font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-ken-burns" 
            style={{ 
              backgroundImage: "url('https://levenaviagem.com.br/wp-content/uploads/2016/10/alter-do-chao-ilha-do-amor-2.jpg.webp')",
              willChange: 'transform'
            }}
          ></div>
          <div className="absolute inset-0 bg-brand-blue bg-opacity-60"></div>
          <div className="relative z-10 p-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-fade-in-down">
              Conectando <span className="bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold bg-clip-text text-transparent">Alter do Chão</span> ao Mundo Digital
            </h1>
            <p className="text-lg md:text-xl mb-8 font-light animate-fade-in-up">
              Marketing digital e social media para pousadas, hotéis e ONGs que querem prosperar.
            </p>
            <a 
              href="#contact"
              className="bg-brand-gold hover:bg-yellow-600 text-brand-blue font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
            >
              Fale Conosco
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white dark:bg-brand-dark-secondary">
          <AnimatedSection>
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">Nossos Serviços</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Soluções completas para fortalecer sua presença online e atrair mais clientes.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-brand-light dark:bg-brand-dark">
          <AnimatedSection>
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img src={`${import.meta.env.BASE_URL}alter-do-chao-para-brasil.jpg`} alt="Vista de Alter do Chão" className="rounded-lg shadow-2xl w-full" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">Nossa Missão é o seu Sucesso</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  A Eagle Agência Digital nasceu da paixão pelo marketing e pelo potencial único de Alter do Chão. Entendemos as necessidades específicas de pousadas, hotéis e ONGs da região.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Nosso objetivo é usar a estratégia digital para contar sua história, valorizar o turismo sustentável e fortalecer o impacto social, garantindo que seu negócio não apenas seja visto, mas também lembrado e preferido.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>
        
        {/* Blog Section */}
        <section id="blog" className="py-20 bg-white dark:bg-brand-dark-secondary">
            <AnimatedSection>
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">Últimas do Nosso Blog</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Dicas, novidades e insights sobre marketing digital e o turismo em Alter do Chão.</p>
                    
                    {loadingPosts ? (
                        <p className="dark:text-white">Carregando posts...</p>
                    ) : posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
                            {posts.map((post, index) => (
                                <BlogCard 
                                    key={index} 
                                    title={post.title}
                                    thumbnail={post.thumbnail}
                                    link={post.link}
                                    pubDate={post.pubDate}
                                    snippet={createSnippet(post.content)}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="dark:text-white">Não foi possível carregar os posts do blog. Tente novamente mais tarde.</p>
                    )}

                    <a 
                      href="https://agenciaeagledigital.blogspot.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-brand-gold hover:bg-yellow-600 text-brand-blue font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
                    >
                      Ver Todos os Posts
                    </a>
                </div>
            </AnimatedSection>
        </section>

        {/* Instagram Feed Section */}
        <section id="instagram-feed" className="py-20 bg-brand-light dark:bg-brand-dark">
          <AnimatedSection>
            <InstagramFeed />
          </AnimatedSection>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-brand-blue text-white">
          <AnimatedSection>
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Conversar?</h2>
              {!isSubmitted ? (
                <>
                  <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Envie uma mensagem e descubra como podemos impulsionar seu negócio em Alter do Chão.
                  </p>
                  <form className="max-w-xl mx-auto text-left" onSubmit={handleSubmit} noValidate>
                    <div className="relative mb-6">
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder=" "
                        className={`peer block w-full px-4 py-3 bg-white bg-opacity-10 rounded border appearance-none focus:outline-none focus:ring-0 transition-colors duration-300 ${getBorderClass('name')}`}
                      />
                      <label htmlFor="name" className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Nome</label>
                      {touched.name && errors.name && <p className="text-red-400 text-sm mt-1 px-1">{errors.name}</p>}
                    </div>
                    <div className="relative mb-6">
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder=" "
                        className={`peer block w-full px-4 py-3 bg-white bg-opacity-10 rounded border appearance-none focus:outline-none focus:ring-0 transition-colors duration-300 ${getBorderClass('email')}`}
                      />
                      <label htmlFor="email" className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                      {touched.email && errors.email && <p className="text-red-400 text-sm mt-1 px-1">{errors.email}</p>}
                    </div>
                    <div className="relative mb-8">
                       <textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder=" "
                        className={`peer block w-full px-4 py-3 bg-white bg-opacity-10 rounded border appearance-none focus:outline-none focus:ring-0 transition-colors duration-300 ${getBorderClass('message')}`}
                      ></textarea>
                      <label htmlFor="message" className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Mensagem</label>
                      {touched.message && errors.message && <p className="text-red-400 text-sm mt-1 px-1">{errors.message}</p>}
                    </div>
                    <div className="text-center">
                      <button 
                        type="submit" 
                        disabled={isFormInvalid || isSubmitting}
                        className="bg-brand-gold hover:bg-yellow-600 text-brand-blue font-bold py-3 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="max-w-xl mx-auto">
                    <h3 className="text-2xl font-bold text-brand-gold mb-3">Obrigado!</h3>
                    <p className="text-lg">Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
                </div>
              )}
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
