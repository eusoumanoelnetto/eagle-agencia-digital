
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray dark:bg-black text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
            <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhXgPFQIeTNOR-nGiUs4XHw9yUrocFME3YJsXr2p6uh8kbaDHSazM_OAqX8k2NVDv1FtHBrsPFADs5cyQh5asD2AHm9KFDZ4I6FhG4hS61t5DG6iouwzest0RSbnAYLHfJxBg52XIrg-wm_ngawLug34MPlDVusjWU8omeD9KXntbRkyOeLVZUmD4V3rq8=s1600" alt="Eagle Agência Digital Logo" className="h-12 mx-auto" />
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Marketing com visão de águia para o seu negócio em Alter do Chão.
        </p>
        <div className="mt-4">
          <p className="text-xs text-gray-500 dark:text-gray-600">
            &copy; {new Date().getFullYear()} Eagle Agência Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
