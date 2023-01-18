import React from 'react'
import { feedback } from '../constants'
import { quotes } from '../assets'
import '../styles/Feedback.scss'

const Feedback = () => {
  return (
    <div className='feedback'>
        {feedback.map((feed) => (
            <div className='feed-contain'>
                <img src={quotes} alt="" />
                <p>{feed.content}</p>
                <div className="feed-bottom">
                    <img src={feed.img} alt="" />
                    <div className="name">
                        <h4>{feed.name}</h4>
                        <p>{feed.title}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Feedback