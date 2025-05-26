import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-marrom-dourado text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Informações do Footer, como links, redes sociais, etc. */}
        <p className="text-sm font-montserrat">
          &copy; {currentYear} Mimos da Thu. Todos os direitos reservados.
        </p>
        {/* Adicionar links para redes sociais, termos de uso, política de privacidade, etc. */}
      </div>
    </footer>
  );
};

export default Footer;
