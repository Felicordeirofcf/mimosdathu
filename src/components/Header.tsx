import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo-mimos-da-thu.jpg'; // Import the logo

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Updated nav items based on reference image
  const navItems = ['Home', 'Produtos', 'Categorias', 'Sobre', 'Contato']; 
  // Map display names to section IDs if they differ (using lowercase for IDs)
  const navLinks = {
    'Home': 'inicio', 
    'Produtos': 'produtos',
    'Categorias': 'categorias',
    'Sobre': 'sobre',
    'Contato': 'contato'
  };

  return (
    <header 
      // Style based on reference: white background, top border, shadow
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-t-4 border-rosa-medio"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <Link
            to="inicio" // Link to the top section
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset based on final header height
            duration={500}
            className="cursor-pointer"
          >
            <img 
              src={logo} 
              alt="Mimos da Thu Logo"
              className="h-14 md:h-16" // Adjust height as needed
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-6 lg:space-x-8 font-montserrat text-sm">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  activeClass="active-link-desktop" // Style this class in CSS/Tailwind
                  to={navLinks[item as keyof typeof navLinks]} // Use mapped ID
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust offset
                  duration={500}
                  className="text-preto-suave hover:text-marrom-dourado pb-1 border-b-2 border-transparent hover:border-marrom-dourado transition-all duration-300 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons and Account Button */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          {/* Account Button - Styled like reference */}
          <a 
            href="#" // Replace with actual account link/modal trigger
            className="hidden md:flex items-center bg-transparent border border-preto-suave text-preto-suave hover:bg-bege-claro hover:border-marrom-dourado hover:text-marrom-dourado text-xs font-medium font-montserrat px-3 py-1.5 rounded-md transition-colors duration-300"
          >
            <FaUser className="mr-1.5" size={14}/>
            Minha Conta {/* Text changed from reference */}
          </a>
          
          {/* Cart Icon - Placeholder Link - Keep for now */}
          {/* <a 
            href="#" // Replace with actual cart link/modal trigger
            className="relative text-preto-suave hover:text-marrom-dourado transition-colors duration-300"
          >
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-rosa-medio text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
              0
            </span>
          </a> */} 
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-preto-suave hover:text-marrom-dourado transition-colors duration-300"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 pt-16 relative"> {/* Added padding top */}
          <button 
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 text-preto-suave hover:text-marrom-dourado"
            aria-label="Fechar menu"
          >
            <FaTimes size={24} />
          </button>
          
          <nav className="mt-5">
            <ul className="space-y-4 font-montserrat">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    activeClass="text-marrom-dourado font-semibold" // Active style for mobile
                    to={navLinks[item as keyof typeof navLinks]} // Use mapped ID
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust offset
                    duration={500}
                    onClick={closeMobileMenu} // Close menu on click
                    className="block py-2 text-preto-suave hover:text-marrom-dourado transition-colors duration-300 text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              {/* Mobile Account Link */}
              <li>
                <a
                  href="#" // Replace with actual account link
                  className="flex items-center py-2 text-preto-suave hover:text-marrom-dourado transition-colors duration-300 text-lg"
                  onClick={closeMobileMenu}
                >
                  <FaUser className="mr-2" /> Minha Conta
                </a>
              </li>
              {/* Mobile Cart Link - Optional */}
              {/* <li>
                <a
                  href="#" // Replace with actual cart link
                  className="flex items-center py-2 text-preto-suave hover:text-marrom-dourado transition-colors duration-300 text-lg"
                  onClick={closeMobileMenu}
                >
                  <FaShoppingCart className="mr-2" /> Carrinho (0)
                </a>
              </li> */}              
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;

