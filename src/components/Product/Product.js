import React from 'react'
import "../Product/Product.css"
import { product } from '../../Data'
const Product = () => {
  return (
    <>
      <section className='product' id='product'>
        <h1 className='heading'>Our <span>Products</span></h1>
        <div className='box-container'>
          {
            product.map((item, index) => (
              <div className='box'>
                <div className='icons'>
                  <a href='#' className='fa-solid fa-cart-shopping'></a>
                  <a href='#' className='fa-solid fa-heart'></a>
                  <a href='#' className='fa-regular fa-eye'></a>
                </div>
                <div className='image'>
                  <img src={item.img} alt="images" />
                </div>
                <div className='content'>
                  <h3>Fresh Coffee</h3>
                  <div className='stars'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                  </div>
                  <div className='price'>$20.99 <span>$30.99</span></div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Product
