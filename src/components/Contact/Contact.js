import React from 'react'
import "../Contact/Contact.css"
const Contact = () => {
  return (
    <>
      <section className='contact' id='contact'>
        <h1 className='heading'>
          <span>Contact</span> us
        </h1>
        <div className='row'>
          <iframe
          className='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.601933118347!2d73.94068021469391!3d18.49878578741564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3b715d0cb1b%3A0x10a667220145b833!2sHadapsar%2C%20Pune%2C%20Maharashtra%20411028%2C%20India!5e0!3m2!1sen!2sus!4v1693849360021!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form>
            <h3>get in touch</h3>
            <div className='inputBox'>
              <span className="fa-solid fa-user"></span>
              <input type='text' placeholder='name'/>
            </div>
            <div className='inputBox'>
              <span className="fa-solid fa-envelope"></span>
              <input type='email' placeholder='email'/>
            </div>
            <div className='inputBox'>
              <span className="fa-solid fa-phone"></span>
              <input type='number' placeholder='number'/>
            </div>
            <input type='submit' value="contact now" className='btn'/>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
