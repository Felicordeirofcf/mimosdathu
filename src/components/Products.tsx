import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import productCaixaLuxo from '../assets/images/produtos/produto_caixa_luxo.jpg';
import productBrindeEmpresarial from '../assets/images/produtos/produto_brinde_empresarial.jpg';

// Interface for product data
interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  link: string; // Link for the 'COMPRAR' button
}

// Product data based on the reference image
const productsData: Product[] = [
  {
    id: 1,
    image: productCaixaLuxo,
    title: "Caixa Personalizada Luxo",
    price: "R$ 120,00",
    description: "Caixa rígida personalizada com laço de cetim, ideal para presentes sofisticados.",
    link: "#" // Replace with actual product link
  },
  {
    id: 2,
    image: productBrindeEmpresarial,
    title: "Brinde Empresarial Elegante",
    price: "R$ 95,00",
    description: "Kit corporativo com itens selecionados em caixa personalizada com a sua marca.",
    link: "#" // Replace with actual product link
  },
  {
    id: 3,
    image: '/placeholder_produto_3.jpg', // TODO: Adicionar imagem real em src/assets/images/produtos/ e atualizar caminho
    title: "Novo Produto Exemplo",
    price: "R$ 00,00", // TODO: Atualizar preço
    description: "Descrição do novo produto exemplo.", // TODO: Atualizar descrição
    link: "#" // TODO: Atualizar link do produto
  },
  // Add more products here if needed, following the same structure
  // {
  //   id: 3,
  //   image: 'path/to/image3.jpg',
  //   title: "Produto 3",
  //   price: "R$ 00,00",
  //   description: "Descrição do produto 3.",
  //   link: "#"
  // },
  // {
  //   id: 4,
  //   image: 'path/to/image4.jpg',
  //   title: "Produto 4",
  //   price: "R$ 00,00",
  //   description: "Descrição do produto 4.",
  //   link: "#"
  // }
];

const Products: React.FC = () => {
  return (
    <section id="produtos" className="py-16 bg-bege-claro">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-preto-suave text-center mb-12">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {productsData.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm flex flex-col transform hover:scale-105 transition-transform duration-300"
            >
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover"/>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-playfair font-semibold text-preto-suave mb-1">{product.title}</h3>
                <p className="text-rosa-medio font-semibold text-md mb-2">{product.price}</p>
                <p className="text-preto-suave font-montserrat text-sm mb-4 flex-grow">{product.description}</p>
                <a 
                  href={product.link} 
                  className="mt-auto block text-center bg-rosa-medio hover:bg-marrom-dourado text-white font-montserrat font-medium py-2 px-4 rounded-md text-sm transition-colors duration-300"
                >
                  COMPRAR
                </a>
                {/* Optional: Add WhatsApp icon/link here if needed, similar to reference */}
                {/* <a href="#" className="absolute bottom-4 right-4 text-green-500"><FaWhatsapp size={20}/></a> */}
              </div>
            </div>
          ))}
          {/* Card "Ver Mais Produtos" */}
          <Link 
            to="/loja" // Use Link component for client-side routing
            className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm flex flex-col items-center justify-center p-8 text-center transform hover:scale-105 transition-transform duration-300 border-2 border-dashed border-rosa-medio hover:border-marrom-dourado"
          >
            <h3 className="text-lg font-playfair font-semibold text-preto-suave mb-2">Ver Mais Produtos</h3>
            <p className="text-preto-suave font-montserrat text-sm mb-4">Explore nossa coleção completa de brindes e personalizados.</p>
            <span className="text-rosa-medio hover:text-marrom-dourado font-bold">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
