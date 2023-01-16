import React from 'react'
import '../styles/Hero.scss'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='hero' className="hero">
        <div className="hero-contain">
            <div className="hero-left">
                {/* Discount */}
                <div className="hero-discount">
                    <img src={discount} alt="discount_icon" />
                    <p className="discount">
                        <span>20% </span>
                         DISCOUNT FOR {" "}
                        <span>1 MONTH {" "}</span>
                        ACCOUNT
                    </p>
                </div>

                {/* Below the discount */}
                <div className="intro">
                    <h1>
                        The Next <br />
                        <span> Generation </span> <br />
                        <GetStarted className="start"/>
                        Payment Method.
                    </h1>
                    <p>
                        Our team of experts uses a methodology to identify the credit cards
                        most likely to fit your needs. We examine annual percentage rates,
                        annual fees.
                    </p>
                </div>
            </div>

            {/* The images */}
            <div className="hero-right">
                <img src={robot} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero