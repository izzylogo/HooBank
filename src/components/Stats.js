import React from 'react'
import { stats } from '../constants'
import '../styles/Stats.scss'

const Stats = () => {
  return (
    <div className="stats">
        {stats.map((stat) => (
            <div key={stat.id} className='stat-contain'>
                <h4>{stat.value}</h4>
                <p>{stat.title}</p> 
            </div>
        ))}
    </div>
  )
}

export default Stats