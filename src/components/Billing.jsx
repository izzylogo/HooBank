import React from 'react'
import '../styles/Billing.scss'
import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <div className='billing'>
        <div className="billing-contain">
            <img src={bill} alt="" />
            <div className="bill-info">
                <h2>
                    Easily control your billing & invoicing.
                </h2>
                <p>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                </p>
                <div className="info-img">
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Billing