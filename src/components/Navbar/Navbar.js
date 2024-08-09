import React from 'react'
import Logo from "../../assets/images/logo.png"
import "../../assets/css/style.css"
import "../Navbar/Navbar.css"
function Navbar() {
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
              
            </div>
        </header>
    </>
  )
}

export default Navbar