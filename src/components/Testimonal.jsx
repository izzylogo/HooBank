import React from 'react'
import '../styles/Testimonal.scss'
import Feedback from './Feedback'
import { clients } from '../constants'

const Testimonal = () => {
  return (
    <div className='test'>
        <div className="test-contain">
            <div className="test-top">
                <h2 className="top-left">
                    What people say about us
                </h2>
                <p className="top-right">
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
            </div>
            <div className="test-bot">
                <Feedback/>
            </div>
            <div className="logos">
                {clients.map((logos) => (
                    <img src={logos.logo} key={logos.id} alt='logos' />
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Testimonal