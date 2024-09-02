import React from 'react'
import "../Review/Review.css";
import { review } from "../../Data";
import quoteImg from "../../assets/images/quote-img.png"
const Review = () => {
    return (
        <>
            <section className='review' id='review'>
                <h1 className='heading'>
                    Customer's <span>review</span>
                </h1>
                <div className='box-container'>
                    {
                        review.map((item, index) => (
                            <div className='box'>
                                <img src={quoteImg} alt="quoteImg" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic mollitia doloribus dicta assumenda, excepturi
                                    quaerat dolor deserunt earum non, aperiam odit cumque et, unde rem eos tempore minima rerum.
                                </p>
                                <img src={item.img} alt="people" className='user' />
                                <h3>{item.name}</h3>
                                <div className='stars'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star-half-stroke"></i>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Review
