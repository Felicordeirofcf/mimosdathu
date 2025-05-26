import React from 'react';

const Contact: React.FC = () => {
  const whatsappNumber = '21987708652';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contato" className="py-16 bg-bege-claro">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-marrom-dourado text-center mb-8">Entre em Contato</h2>
        <div className="text-center">
          <p className="mb-4 text-preto-suave font-montserrat">Fale conosco diretamente pelo WhatsApp!</p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-rosa-medio hover:bg-marrom-dourado text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 font-montserrat"
          >
            {/* Ícone do WhatsApp */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.58 3.09C12.18 1.9 10.33 1.2 8.38 1.2 4.07 1.2 1.2 4.07 1.2 8.38c0 1.55.47 3.02 1.37 4.3L1.2 18.8l4.44-1.36c1.28.87 2.75 1.37 4.3 1.37h.01c4.3 0 7.18-2.87 7.18-7.18 0-1.95-.7-3.8-1.9-5.2zm-5.2 12.45c-1.36 0-2.67-.42-3.77-1.18l-.27-.16-2.82.86.88-2.75-.18-.28c-.82-1.13-1.28-2.48-1.28-3.9 0-3.48 2.83-6.3 6.3-6.3 1.7 0 3.3.67 4.45 1.83s1.83 2.75 1.83 4.45c0 3.48-2.83 6.3-6.3 6.3zm3.18-4.88c-.17-.08-1-.48-1.15-.53s-.27-.08-.38.08c-.1.17-.43.53-.53.63s-.18.1-.33.03c-.15-.07-.63-.23-1.2-.73s-.9-1.1-.98-1.28c-.08-.18 0-.28.07-.36s.17-.2.2-.27.03-.17.02-.28c-.02-.1-.38-.9-.52-1.23s-.27-.2-.38-.2h-.36c-.1 0-.27.03-.4.18s-.53.52-.53 1.25.55 1.45.63 1.55c.08.1.98 1.5 2.4 2.1.34.15.6.23.82.3.38.12.72.1.98.08.3-.03.98-.4.13-.78s-.75-.88-.92-.97z"></path></svg>
            Conversar no WhatsApp
          </a>
          <p className="mt-4 text-preto-suave font-montserrat">Número: {whatsappNumber}</p>
        </div>
        {/* Outras informações de contato podem ser adicionadas aqui, como email, endereço, etc. */}
      </div>
    </section>
  );
};

export default Contact;
