import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Shop from './components/Shop'; // Import the new Shop component
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

