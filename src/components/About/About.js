import React from 'react'
import "../About/About.css"
import AboutImg from "../../assets/images/about-img.jpeg"
const About = () => {
  return (
    <>
      <section className='about' id="about">
        <h1 className='heading'>
          <span>about</span>us
        </h1>
        <div className='row'>
          <div className='image'>
            <img src={AboutImg} alt='aboutImg' />
          </div>
          <div className='content'>
            <h3>What Makes Our Food Special</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at illo dignissimos asperiores quos tempora eum obcaecati magnam voluptas autem!     Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at illo dignissimos asperiores quos tempora eum obcaecati magnam voluptas autem!
            </p>
            <a href='#' className='btn'>
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
