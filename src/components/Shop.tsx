import React, { useState } from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import ProductModal from './ProductModal.tsx'; // Import the modal component

// Interface for product data (can be moved to a separate file later)
interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  category: string; // Added category for filtering
  link?: string; // Optional link for product details
}

// Placeholder product data (consider moving to src/data/products.ts)
const allProductsData: Product[] = [
  { id: 1, image: '/placeholder_produto_1.jpg', title: 'Produto Casamento 1', price: 'R$ 110,00', description: 'Descrição produto casamento 1.', category: 'casamento', link: '#' },
  { id: 2, image: '/placeholder_produto_2.jpg', title: 'Produto Festa XV 1', price: 'R$ 95,00', description: 'Descrição produto festa XV 1.', category: 'festa de XV', link: '#' },
  { id: 3, image: '/placeholder_produto_3.jpg', title: 'Produto Casamento 2', price: 'R$ 150,00', description: 'Descrição produto casamento 2.', category: 'casamento', link: '#' },
  { id: 4, image: '/placeholder_produto_4.jpg', title: 'Produto Geral 1', price: 'R$ 50,00', description: 'Descrição produto geral 1.', category: 'geral', link: '#' }, // Example of another category
  { id: 5, image: '/placeholder_produto_5.jpg', title: 'Produto Festa XV 2', price: 'R$ 130,00', description: 'Descrição produto festa XV 2.', category: 'festa de XV', link: '#' },
  // TODO: Add more products (up to 50+)
  // TODO: Replace placeholders with real data and images (store images in src/assets/images/produtos/)
];

// Get unique categories from product data
const categories = ['Todos', ...Array.from(new Set(allProductsData.map(p => p.category)))];

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = selectedCategory === 'Todos'
    ? allProductsData
    : allProductsData.filter(product => product.category === selectedCategory);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-4 mb-8 md:mb-0 md:border-r md:border-gray-200">
          <h2 className="text-xl font-playfair font-bold text-preto-suave mb-4">Filtros</h2>
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-preto-suave">Categorias</h3>
            <ul>
              {categories.map(category => (
                <li key={category} className="mb-1">
                  <button 
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-2 py-1 rounded ${selectedCategory === category ? 'bg-rosa-medio text-white font-semibold' : 'text-preto-suave hover:text-rosa-medio hover:bg-gray-100'}`}
                  >
                    {category === 'Todos' ? 'Mostrar Todos' : category.charAt(0).toUpperCase() + category.slice(1)} 
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="w-full md:w-3/4 md:pl-8">
          <h1 className="text-3xl font-playfair font-bold text-preto-suave text-center mb-12">Nossos Produtos</h1>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden w-full flex flex-col transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openModal(product)} // Open modal on card click
                >
                  <img src={product.image} alt={product.title} className="w-full h-48 object-cover"/>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-playfair font-semibold text-preto-suave mb-1">{product.title}</h3>
                    <p className="text-rosa-medio font-semibold text-md mb-2">{product.price}</p>
                    <p className="text-preto-suave font-montserrat text-sm mb-4 flex-grow">{product.description}</p>
                    {/* Removed the explicit 'VER DETALHES' button */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-preto-suave font-montserrat">Nenhum produto encontrado para a categoria selecionada.</p>
          )}
        </div>
      </main>
      <Footer />
      {/* Render Modal */}
      {isModalOpen && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default Shop;

