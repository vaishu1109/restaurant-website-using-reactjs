import React, { useRef } from 'react'
import Logo from "../../assets/images/logo.png"
import "../../assets/css/style.css"
import "../Navbar/Navbar.css"
import { cart } from "../../Data"

function Navbar() {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        <a href="#" className='logo'>
          <img src={Logo} alt="logo" />
        </a>
        <nav className='navbar' ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#product">Product</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>
        <div className='icons'>
          <div className='fa-solid fa-magnifying-glass' id='search-btn' onClick={searchHandler}></div>
          <div className='fa-solid fa-cart-shopping' id='cart-btn' onClick={cartHandler}></div>
          <div className="fa-solid fa-bars" id='menu-btn' onClick={navbarHandler}></div>
        </div>
        <div className='search-form' ref={searchRef}>
          <input type='search' id='search-box' placeholder='Search here..' />
          <label htmlFor="search-box" className='fa-solid fa-magnifying-glass'></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index * Math.random()}>
              <span className="fa-solid fa-xmark"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99/-</div>
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar