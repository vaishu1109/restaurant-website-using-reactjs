import React from 'react'
import "../Menu/Menu.css"
import {menu} from "../../Data"
const Menu = () => {
  return (
    <>
    <section className='menu' id='menu'>
        <h1 className='heading'>Our<span>Menu</span></h1>
        <div className='box-container'>
            { menu.map((item,index) =>(
                <div className='box'>
                    <img src={item.img} alt="menuImg"/>
                    <h3>{item.name}</h3>
                    <div className='price'>
                        {item.price} <span> {item.off}</span>
                    </div>
                    <a href='#' className='btn'>
                        Add to cart
                    </a>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default Menu
