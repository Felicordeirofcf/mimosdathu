import React from 'react';
import { FaTimes, FaShoppingCart, FaTruck } from 'react-icons/fa'; // Import icons

// Interface for product data passed to the modal
interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  category?: string; // Optional category
  link?: string; // Optional link
}

// Interface for Modal props
interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null; // Don't render if no product is selected

  return (
    // Overlay
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose} // Close modal on overlay click
    >
      {/* Modal Content */}
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-10"
          aria-label="Fechar modal"
        >
          <FaTimes size={24} />
        </button>

        {/* Product Image */}
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-w-full max-h-64 md:max-h-96 object-contain rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <h2 className="text-2xl font-playfair font-bold text-preto-suave mb-3">{product.title}</h2>
          <p className="text-xl text-rosa-medio font-semibold mb-4">{product.price}</p>
          <p className="text-preto-suave font-montserrat text-sm mb-6 flex-grow">
            {product.description}
          </p>
          
          {/* Action Buttons */}
          <div className="mt-auto space-y-3">
            <button 
              className="w-full flex items-center justify-center bg-rosa-medio hover:bg-marrom-dourado text-white font-montserrat font-medium py-3 px-4 rounded-md text-sm transition-colors duration-300"
              // TODO: Implement purchase logic or link
            >
              <FaShoppingCart className="mr-2" /> COMPRAR
            </button>
            <button 
              className="w-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-preto-suave font-montserrat font-medium py-3 px-4 rounded-md text-sm transition-colors duration-300"
              // TODO: Implement shipping calculation logic/UI
            >
              <FaTruck className="mr-2" /> CALCULAR FRETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

