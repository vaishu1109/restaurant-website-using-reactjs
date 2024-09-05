import React from 'react'
import "../Blogs/Blogs.css"
import { blog } from "../../Data";
const Blogs = () => {
  return (
    <>
        <section className='blogs' id='blogs'>
            <h1 className='heading'>
                Our <span>blogs</span>
            </h1>
            <div className='box-container'>
              {blog.map((item,index) => (
                <div className='box' key={index}>
                  <div className='image'>
                    <img src={item.img} alt='blogpic'/>
                  </div>
                  <div className='content'>
                    <a href='#' className='title'>
                      Tasty and refresh spices
                    </a>
                    <span>by admin / 21st may, 2024</span>
                    <p>
                      random text
                    </p>
                    <a href='#' className='btn'>
                      read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
        </section>
    </>
  )
}

export default Blogs
