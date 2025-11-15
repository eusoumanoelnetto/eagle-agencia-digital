
import React, { useState, useEffect } from 'react';
import InstagramPostCard from './InstagramPostCard';
import { InstagramIcon } from './icons/InstagramIcon';
import InstagramPostSkeleton from './InstagramPostSkeleton';

interface Post {
  imgSrc: string;
  postUrl: string;
  likes: number;
  comments: number;
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        // Simula um delay para visualização do skeleton
        setTimeout(() => {
          setPosts(data.slice(0, 4)); // Limita a 4 posts
          setLoading(false);
        }, 1000);
      })
      .catch(error => {
        console.error("Erro ao carregar os posts do Instagram:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">Siga-nos no Instagram</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Acompanhe nossas novidades e os paraísos de Alter do Chão.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => ( // Mostra 4 skeletons
            <InstagramPostSkeleton key={index} />
          ))
        ) : (
          posts.map((post, index) => (
            <InstagramPostCard key={index} {...post} />
          ))
        )}
      </div>
      
      <a 
        href="https://www.instagram.com/a.eagledigital/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-brand-gold hover:bg-yellow-600 text-brand-blue font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
      >
        <InstagramIcon className="w-6 h-6" />
        Ver Perfil
      </a>
    </div>
  );
};

export default InstagramFeed;
