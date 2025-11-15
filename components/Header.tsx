
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || isMobileMenuOpen ? 'bg-brand-blue dark:bg-brand-dark shadow-lg py-3' : 'bg-transparent py-5'
  }`;

  const navLinkClasses = "relative text-white hover:text-brand-gold font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full hover:after:left-0";

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div>
          <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhXgPFQIeTNOR-nGiUs4XHw9yUrocFME3YJsXr2p6uh8kbaDHSazM_OAqX8k2NVDv1FtHBrsPFADs5cyQh5asD2AHm9KFDZ4I6FhG4hS61t5DG6iouwzest0RSbnAYLHfJxBg52XIrg-wm_ngawLug34MPlDVusjWU8omeD9KXntbRkyOeLVZUmD4V3rq8=s1600" 
            alt="Eagle Agência Digital Logo" 
            className={`transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'h-10' : 'h-12'}`} 
          />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className={navLinkClasses}>Soluções</a>
          <a href="#agency" className={navLinkClasses}>Agência</a>
          <a href="#differentials" className={navLinkClasses}>Diferenciais</a>
          <a href="#cases" className={navLinkClasses}>Cases</a>
          <a href="#blog" className={navLinkClasses}>Blog</a>
          <a 
            href="#contact" 
            className={`bg-brand-gold hover:bg-yellow-600 text-brand-blue font-bold py-2 px-5 rounded-full transition duration-300 transform hover:scale-105 ${!isScrolled && 'animate-pulse-subtle'}`}
          >
            Contato
          </a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="text-white focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir menu">
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="bg-brand-blue dark:bg-brand-dark flex flex-col items-center space-y-5 py-5 border-t border-white/10">
          <a href="#services" onClick={handleMobileLinkClick} className={navLinkClasses}>Soluções</a>
          <a href="#agency" onClick={handleMobileLinkClick} className={navLinkClasses}>Agência</a>
          <a href="#differentials" onClick={handleMobileLinkClick} className={navLinkClasses}>Diferenciais</a>
          <a href="#cases" onClick={handleMobileLinkClick} className={navLinkClasses}>Cases</a>
          <a href="#blog" onClick={handleMobileLinkClick} className={navLinkClasses}>Blog</a>
          <a href="#contact" onClick={handleMobileLinkClick} className="bg-brand-gold hover:bg-yellow-600 text-brand-blue font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
