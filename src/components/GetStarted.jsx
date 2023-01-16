import React from 'react'
import { arrowUp } from '../assets'
import '../styles/GetStarted.scss'

const GetStarted = () => {
  return (
    <div className='getStarted'>
        <div className="get-contain">
            <div className="get">
                <div className="arrow">
                    <span>Get</span>
                    <img src={arrowUp} alt="" /> <br />
                </div>
                <span>Started</span>
            </div>
        </div>
    </div>
  )
}

export default GetStarted