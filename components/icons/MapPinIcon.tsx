
import React from 'react';

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path fillRule="evenodd" d="M11.54 22.35a.75.75 0 01-1.08 0l-6.75-6.75a.75.75 0 010-1.08l10.5-10.5a.75.75 0 011.08 0l10.5 10.5a.75.75 0 010 1.08l-6.75 6.75a.75.75 0 01-1.08 0z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12 4.5a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V5.25A.75.75 0 0112 4.5z" clipRule="evenodd" />
    <path d="M12 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
  </svg>
);
