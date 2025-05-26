import React from 'react';

// Placeholder for category icons - replace with actual icons or images if available
const PlaceholderIcon = () => (
  <svg className="w-8 h-8 mb-2 text-marrom-dourado" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
);

const categoriesData = [
  {
    icon: <PlaceholderIcon />, // Replace with actual icon/image path if needed
    title: "Caixas Personalizadas",
    description: "Presentes únicos e memoráveis.",
    link: "#"
  },
  {
    icon: <PlaceholderIcon />, // Replace with actual icon/image path if needed
    title: "Kits para Presente",
    description: "Combinações perfeitas para surpreender.",
    link: "#"
  },
  {
    icon: <PlaceholderIcon />, // Replace with actual icon/image path if needed
    title: "Caixas para Eventos",
    description: "Detalhes que fazem a diferença.",
    link: "#"
  },
  {
    icon: <PlaceholderIcon />, // Replace with actual icon/image path if needed
    title: "Brindes Corporativos",
    description: "Presenteie clientes e colaboradores.",
    link: "#"
  }
];

const Categories: React.FC = () => {
  return (
    <section id="categorias" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-marrom-dourado text-center mb-12">Categorias em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categoriesData.map((category, index) => (
            <div 
              key={index} 
              className="bg-white border border-rosa-claro rounded-lg shadow-md p-6 text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
            >
              {/* Icon Placeholder - Add image tag if using images */}
              {/* <img src={category.icon} alt={`${category.title} icon`} className="w-10 h-10 mb-3" /> */}
              {category.icon} 
              <h3 className="text-xl font-playfair font-semibold text-marrom-dourado mb-2">{category.title}</h3>
              <p className="text-preto-suave font-montserrat text-sm mb-4 flex-grow">{category.description}</p>
              <a 
                href={category.link} 
                className="mt-auto inline-block border border-rosa-medio text-rosa-medio hover:bg-rosa-medio hover:text-white font-montserrat font-medium py-2 px-5 rounded-full text-sm transition-colors duration-300"
              >
                VER OPÇÕES
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
