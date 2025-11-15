import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';

const InstagramFeed: React.FC = () => {
  // Posts do Instagram do perfil @a.eagledigital
  const instagramPosts = [
    {
      url: 'https://www.instagram.com/p/B9pmrAJFyEy/',
      image: 'https://instagram.fqnv10-1.fna.fbcdn.net/v/t51.2885-15/87687858_231887661191525_6866686776436839673_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODR4MTA4NC5zZHIuZjI4ODUuZGVmYXVsdF9pbWFnZS5jMiJ9&_nc_ht=instagram.fqnv10-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QHoAu994LXu3qX4W6s9iwwAR1Cqbedy-XnJtaM-SFnp6q2g6nIwb2uC7nisCBLc6gW5mkEzzOx_j4PpH-1KSMev&_nc_ohc=COOmyqBVtOsQ7kNvwFMspUf&_nc_gid=F_lg3h2OJbnowW1Ozyr5fg&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjI1NDA3MTY1ODgxNzM1NDAwNQ%3D%3D.3-ccb7-5&oh=00_AfiDrliaRSMdlyAuDcdMrL0Xgi22749vFCGkHPVv3oDsbg&oe=691EB5EE&_nc_sid=10d13b',
    },
    {
      url: 'https://www.instagram.com/p/B9IEhy9lykt/',
      image: 'https://instagram.fqnv10-1.fna.fbcdn.net/v/t51.29350-15/362775526_652821686872417_5271764917087676248_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuZXhwZXJpbWVudGFsIn0&_nc_ht=instagram.fqnv10-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QG84SLhmKYsWA4ZWUkWakbX88ojF9JsPJdnXSo2dBYkfBGvURX2HzCz0ImR2Dp3hneB1podEL9lg4x40GsM7Jbz&_nc_ohc=7cyJ-i-RetYQ7kNvwHZ69y1&_nc_gid=fusLmoCx4z472YZk2vLOng&edm=AOmX9WgBAAAA&ccb=7-5&ig_cache_key=MzE1NTUyMTIwMjc1OTk0NDA0MQ%3D%3D.3-ccb7-5&oh=00_AfjheE2_rnlgs035YxeG5FnGOJRSBOOzb_4yoAOaSdN-Rg&oe=691E8D45&_nc_sid=bfaa47',
    },
    {
      url: 'https://www.instagram.com/p/CvKqdCzuEdp/',
      image: 'https://instagram.fqnv10-1.fna.fbcdn.net/v/t51.2885-15/84853814_2518757775007357_1705427010259599861_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwNzN4MTA3MS5zZHIuZjI4ODUuZGVmYXVsdF9pbWFnZS5jMiJ9&_nc_ht=instagram.fqnv10-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QHG7GiLgMeU0kaldhgSGStwpwXi_cpsHuTvHOpSrboWu65aeF-6m8wNH5VSmy7z_zMUJhQQyDzjy7vjEwmAeP0N&_nc_ohc=tpwXGx543LQQ7kNvwFrr-Jg&_nc_gid=Odefnsr9X51g4CF9h-TJTQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MjI1MzE4Nzk0MDU0MDEwMjE4Ng%3D%3D.3-ccb7-5&oh=00_AfiGzPewJPoepKv48URCsCTl1RT1U82XslbpELJDPEtiJw&oe=691EB4EF&_nc_sid=22de04',
    },
    {
      url: 'https://www.instagram.com/p/B9IEju8lh-_/',
      image: 'https://instagram.fqnv10-1.fna.fbcdn.net/v/t51.29350-15/362647661_832930998560967_2978910652544828504_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fqnv10-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QFZ6gwH1swyV-I3dSen40PbrYsSV4H76LKngw3Jloy4Mn_OuLbtCoik3nRKh-00w2N12nAoX3gD2_ZpHuzZxTk8&_nc_ohc=RzFY3miDe6IQ7kNvwGMA1H3&_nc_gid=HyAhYQ0rvuo_2_JE2Gr5yg&edm=AOmX9WgBAAAA&ccb=7-5&ig_cache_key=MzE1NDc2MTMyMTc5NDg4OTcxMQ%3D%3D.3-ccb7-5&oh=00_Afgul5PO1NUiqtNRhrbx6E7HStqa4fZYFYQBS1uGpInBWQ&oe=691EABE2&_nc_sid=bfaa47',
    },
  ];

  return (
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">Siga-nos no Instagram</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Siga nosso Instagram e fique por dentro das novidades, promoções e conteúdos exclusivos! Interaja, compartilhe e faça parte da nossa comunidade digital.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        {instagramPosts.map((post, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl aspect-square bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Imagem do post com overlay ao hover */}
            <a 
              href={post.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <img
                src={post.image}
                data-src={post.image}
                alt={`Instagram Post ${index + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  const original = (img.getAttribute('data-src') || '').replace(/^https?:\/\//, '');
                  const triedProxy = img.getAttribute('data-tried-proxy');
                  if (!triedProxy && original) {
                    img.setAttribute('data-tried-proxy', '1');
                    img.src = `https://images.weserv.nl/?url=${encodeURIComponent(original)}&w=800&h=800&fit=cover`;
                  } else {
                    img.src = '/ig-fallback.svg';
                  }
                }}
              />
              {/* Overlay escuro ao hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              {/* Ícone do Instagram no centro ao hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <InstagramIcon className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
            </a>
          </div>
        ))}
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
