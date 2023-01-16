import React from 'react'
import { feedback } from '../constants'
import { quotes } from '../assets'

const Feedback = () => {
  return (
    <div className='feedback'>
        {feedback.map((feed) => (
            <div className='feed-contain'>
                <img src={quotes} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Feedback