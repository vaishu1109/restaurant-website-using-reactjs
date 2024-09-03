import React from 'react'
import Navbar from './components/Navbar/Navbar';
import "./assets/css/style.css";
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Product from './components/Product/Product';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Menu />
      <Product />
      <Review />
      <Contact />
    </div>
  )
}

export default App