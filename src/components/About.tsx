import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-marrom-dourado text-center mb-8">Sobre Nós</h2>
        {/* Conteúdo institucional aqui */}
        <p className="text-center text-preto-suave font-montserrat">
          👩‍❤️‍👩 Quem Somos
Desde 2016, duas irmãs uniram sua paixão pela criatividade e pelo cuidado artesanal para dar vida à Mimos da Thu — uma marca dedicada a transformar gestos de carinho em presentes únicos.

Ao longo dos anos, nos especializamos na criação de brindes personalizados e caixas cartonadas sob medida, sempre com atenção especial aos detalhes, acabamentos delicados e experiências que emocionam. Cada mimo é pensado com amor, feito à mão e criado para surpreender em datas especiais, eventos corporativos ou momentos que merecem ser celebrados.

Mais do que entregar produtos, entregamos sentimentos embalados com afeto.
        </p>
      </div>
    </section>
  );
};

export default About;
