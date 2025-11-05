import React from 'react';
import { HeartIcon } from './icons/HeartIcon';
import { ChatBubbleIcon } from './icons/ChatBubbleIcon';

interface InstagramPostCardProps {
  imgSrc: string;
  postUrl: string;
  likes: number;
  comments: number;
}

const InstagramPostCard: React.FC<InstagramPostCardProps> = ({ imgSrc, postUrl, likes, comments }) => {
  return (
    <a
      href={postUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
    >
      <img
        src={imgSrc}
        alt="Post do Instagram"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
        <div className="flex items-center space-x-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-2 transition-transform duration-300 ease-in-out group-hover:scale-110">
            <HeartIcon className="w-6 h-6" />
            <span className="font-bold text-lg">{likes}</span>
          </div>
          <div className="flex items-center space-x-2 transition-transform duration-300 ease-in-out delay-100 group-hover:scale-110">
            <ChatBubbleIcon className="w-6 h-6" />
            <span className="font-bold text-lg">{comments}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default InstagramPostCard;