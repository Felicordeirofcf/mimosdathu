import React from 'react';
// Using the same product images for the carousel as requested
import productCaixaLuxo from '../assets/images/produtos/produto_caixa_luxo.jpg';
import productBrindeEmpresarial from '../assets/images/produtos/produto_brinde_empresarial.jpg';

// Simple placeholder for a carousel - Consider using a library like react-slick or swiper for a full implementation
const carouselImages = [
  { id: 1, src: productCaixaLuxo, alt: 'Caixa Personalizada Luxo' },
  { id: 2, src: productBrindeEmpresarial, alt: 'Brinde Empresarial Elegante' },
  // Add more images if needed
];

const Hero: React.FC = () => {
  // Basic state for cycling through images (manual for this placeholder)
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Basic next/prev functions (no auto-play or complex features)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="inicio" className="relative h-screen bg-rosa-claro flex items-center justify-center overflow-hidden">
      {/* Carousel Image */}
      <img 
        src={carouselImages[currentIndex].src} 
        alt={carouselImages[currentIndex].alt} 
        className="absolute inset-0 w-full h-full object-cover opacity-80" // Added opacity for potential text overlay
      />
      
      {/* Optional: Add text overlay or CTA button here */}
      {/* <div className="relative z-10 text-center p-8 bg-black bg-opacity-50 rounded">
        <h1 className="text-4xl font-bold text-white font-playfair mb-4">Mimos da Thu</h1>
        <p className="text-xl text-white font-montserrat">Presentes que encantam</p>
      </div> */}

      {/* Basic Carousel Controls (Placeholder) */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-preto-suave p-2 rounded-full z-10"
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-preto-suave p-2 rounded-full z-10"
      >
        &#10095; {/* Right Arrow */}
      </button>

      {/* Dots Indicator (Placeholder) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {carouselImages.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-rosa-medio' : 'bg-white bg-opacity-50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
