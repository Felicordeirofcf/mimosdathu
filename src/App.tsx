import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Categories from './components/Categories.tsx';
import Products from './components/Products.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
