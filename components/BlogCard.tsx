
import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface BlogCardProps {
  title: string;
  thumbnail: string;
  link: string;
  snippet: string;
  pubDate: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, thumbnail, link, snippet, pubDate }) => {
  const formattedDate = new Date(pubDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const fallbackImage = 'https://media.melhoresdestinos.com.br/2019/04/alter-do-chao-noite.jpg';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImage;
  };

  // Lembrete: Este link é um placeholder. A implementação de rotas requer um roteador (ex: React Router).
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Previne o comportamento padrão até que o roteamento seja implementado.
    // Em uma aplicação real com roteador, essa linha seria removida.
    e.preventDefault(); 
    console.log(`Navegação para: ${link}. Implementar roteamento.`);
  };

  return (
    <a 
      href={link} 
      // onClick={handleClick} // Descomente quando o roteador estiver pronto
      className="group bg-white dark:bg-brand-dark rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={thumbnail || fallbackImage} 
          alt={title} 
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{formattedDate}</p>
        <h3 className="text-lg font-bold text-brand-blue dark:text-white mb-3 flex-grow group-hover:text-brand-gold transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{snippet}</p>
        <div className="mt-auto">
          <span className="inline-flex items-center gap-1 text-brand-gold font-semibold group-hover:underline">
            Leia Mais
            <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
