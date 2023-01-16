import React from 'react'
import '../styles/Business.scss'
import { features } from '../constants'


const Business = () => {
  return (
    <div className='business'>
        <div className="business-contain">
            <div className="business-left">
                <h2>
                    You do the business, we{`'`}ll handle the money.
                </h2>
                <p>
                    With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.  
                </p>
            </div>
            <div className="business-right">
                {features.map((feat) => (
                    <div key={feat.id} className='ri'>
                        <img src={feat.icon} alt="" />
                        <div>
                            <h3>{feat.title}</h3>
                            <p>{feat.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Business