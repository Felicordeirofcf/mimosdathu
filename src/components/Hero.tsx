import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll Link
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
        className="absolute inset-0 w-full h-full object-cover opacity-70" // Adjusted opacity
      />
      
      {/* Text Overlay and CTA Button - Based on new reference */}
      <div className="relative z-10 text-center p-8 max-w-lg mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-marrom-dourado mb-6 leading-tight">
          Presentes que encantam,<br/> momentos que ficam
        </h1>
        <ScrollLink
          to="produtos" // ID of the products section
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset based on header height
          duration={500}
          className="inline-block bg-rosa-medio hover:bg-marrom-dourado text-white font-montserrat font-medium py-2 px-6 rounded-md text-sm transition-colors duration-300 cursor-pointer"
        >
          VER PRODUTOS
        </ScrollLink>
      </div>

      {/* Basic Carousel Controls (Placeholder) */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-preto-suave p-2 rounded-full z-10 transition-opacity duration-300"
        aria-label="Slide anterior"
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-preto-suave p-2 rounded-full z-10 transition-opacity duration-300"
        aria-label="Próximo slide"
      >
        &#10095; {/* Right Arrow */}
      </button>

      {/* Dots Indicator (Placeholder) - Styled like reference */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {carouselImages.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-rosa-medio' : 'bg-white bg-opacity-70 hover:bg-opacity-90'}`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
