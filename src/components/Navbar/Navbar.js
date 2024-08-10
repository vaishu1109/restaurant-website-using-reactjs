import React ,{useRef}from 'react'
import Logo from "../../assets/images/logo.png"
import "../../assets/css/style.css"
import "../Navbar/Navbar.css"

function Navbar() {
  const searchRef= useRef();
  const searchHandler =() =>{
    searchRef.current.classList.toggle("active");
  }
  
  return (
    <>
        <header className="header">
            <a href="#" className='logo'>
                <img src={Logo} alt="logo"/>
            </a>
            <nav className='navbar'>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#menu">Menu</a>
              <a href="#product">Product</a>
              <a href="#review">Review</a>
              <a href="#contact">Contact</a>
              <a href="#blogs">Blogs</a>
            </nav>
            <div className='icons'>
              <div className='fa-solid fa-magnifying-glass' onClick={searchHandler}></div>
              <div className='fa-solid fa-cart-shopping'></div>
              <div className="fa-solid fa-bars" id='menu-btn'></div>
            </div>
            <div className='search-form' ref={searchRef}>
              <input type='search' id='search-box' placeholder='Search here..'/>
              <label htmlFor="search-box" className='fa-solid fa-magnifying-glass'></label>
            </div>
        </header>
    </>
  )
}

export default Navbar