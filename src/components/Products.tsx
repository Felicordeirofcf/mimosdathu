import React, { useState } from 'react';
// Removed Link import as we'll use modal click instead of direct navigation for product cards
import productCaixaLuxo from '../assets/images/produtos/produto_caixa_luxo.jpg';
import productBrindeEmpresarial from '../assets/images/produtos/produto_brinde_empresarial.jpg';
import ProductModal from './ProductModal.tsx'; // Import the modal component
import { Link as RouterLink } from 'react-router-dom'; // Keep RouterLink for the "Ver Mais" card

// Interface for product data
interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  link?: string; // Keep link for potential future use or data structure consistency
}

// Product data based on the reference image
const productsData: Product[] = [
  {
    id: 1,
    image: productCaixaLuxo,
    title: "Caixa Personalizada Luxo",
    price: "R$ 120,00",
    description: "Caixa rígida personalizada com laço de cetim, ideal para presentes sofisticados.",
    link: "#" // Placeholder link
  },
  {
    id: 2,
    image: productBrindeEmpresarial,
    title: "Brinde Empresarial Elegante",
    price: "R$ 95,00",
    description: "Kit corporativo com itens selecionados em caixa personalizada com a sua marca.",
    link: "#" // Placeholder link
  },
  {
    id: 3,
    image: '/placeholder_produto_3.jpg', // TODO: Add real image
    title: "Novo Produto Exemplo",
    price: "R$ 00,00", // TODO: Update price
    description: "Descrição do novo produto exemplo.", // TODO: Update description
    link: "#" // TODO: Update link if needed
  },
];

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <section id="produtos" className="py-16 bg-bege-claro">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-preto-suave text-center mb-12">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {productsData.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm flex flex-col transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openModal(product)} // Open modal on card click
            >
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover"/>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-playfair font-semibold text-preto-suave mb-1">{product.title}</h3>
                <p className="text-rosa-medio font-semibold text-md mb-2">{product.price}</p>
                <p className="text-preto-suave font-montserrat text-sm mb-4 flex-grow">{product.description}</p>
                {/* Removed the explicit 'COMPRAR' button, card click opens modal */}
              </div>
            </div>
          ))}
          {/* Card "Ver Mais Produtos" - Keep using RouterLink */}
          <RouterLink 
            to="/loja" 
            className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm flex flex-col items-center justify-center p-8 text-center transform hover:scale-105 transition-transform duration-300 border-2 border-dashed border-rosa-medio hover:border-marrom-dourado"
          >
            <h3 className="text-lg font-playfair font-semibold text-preto-suave mb-2">Ver Mais Produtos</h3>
            <p className="text-preto-suave font-montserrat text-sm mb-4">Explore nossa coleção completa de brindes e personalizados.</p>
            <span className="text-rosa-medio hover:text-marrom-dourado font-bold">→</span>
          </RouterLink>
        </div>
      </div>
      {/* Render Modal */}
      {isModalOpen && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </section>
  );
};

export default Products;

