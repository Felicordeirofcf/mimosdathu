import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header.tsx'; // Added .tsx
import Hero from './components/Hero.tsx'; // Added .tsx
import Categories from './components/Categories.tsx'; // Added .tsx
import Products from './components/Products.tsx'; // Added .tsx
import About from './components/About.tsx'; // Added .tsx
import Contact from './components/Contact.tsx'; // Added .tsx
import Footer from './components/Footer.tsx'; // Added .tsx
import Shop from './components/Shop.tsx'; // Import the new Shop component with .tsx
import './index.css';

// Component for the Home Page content
const HomePage: React.FC = () => (
  <>
    <Hero />
    <Categories />
    <Products />
    <About />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loja" element={<Shop />} />
            {/* Add other routes here if needed, e.g., for specific product pages */}
            {/* <Route path="/produtos/:productId" element={<ProductDetail />} /> */}
            {/* Consider adding a 404 Not Found page */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

