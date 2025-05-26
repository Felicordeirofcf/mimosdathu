import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-marrom-dourado text-center mb-8">Sobre Nós</h2>
        {/* Conteúdo institucional aqui */}
        <p className="text-center text-preto-suave font-montserrat">
          Aqui você encontrará informações sobre a Mimos da Thu, nossa história, missão e valores.
          (Texto placeholder - substituir pelo conteúdo real)
        </p>
      </div>
    </section>
  );
};

export default About;
