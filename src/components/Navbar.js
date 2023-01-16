import React, {useState} from 'react'
import '../styles/Nav.scss'
import {logo, close, menu} from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <nav>
        <img src={logo} alt="" />
        <ul className='mn'>
            {navLinks.map((nav, index) => (
                <li key={nav.id} className='list'>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
        <div className="menu">
            <img 
                src={toggle ? close : menu} 
                alt="menu"
                className='icon'
                onClick={() => setToggle(!toggle)} 
            />
        </div>
        {/* mobile */}
        <div 
            className="mobile"
            style={toggle ? {display: 'block'} : {display: 'none'}}
        >
        <ul>
            {navLinks.map((nav, index) => (
                <li key={nav.id} className='m-list'>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
        </div>
    </nav>
  )
}

export default Navbar