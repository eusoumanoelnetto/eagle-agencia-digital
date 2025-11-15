
import React from 'react';

export const KayakIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-10 w-10" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 7a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4-4m0 0l-4-4m4 4l-4 4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 14.5c0-3.5 2-6.5 5-8s6-1.5 8 1.5c2 3 1.5 6-.5 8-2 2-5 2.5-8 .5s-4.5-2-4.5-2z" />
  </svg>
);
