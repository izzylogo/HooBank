import React from 'react'
import '../styles/CardDeal.scss'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <div className='cardDeal'>
      <div className="cardDeal-contain">
        <div className="card-left">
          <h2>
            Find a better card deal in few easy steps.
          </h2>
          <p>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
        </div>
        <div className="card-right">
          <img src={card} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CardDeal