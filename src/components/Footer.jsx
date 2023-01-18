import React from 'react'
import '../styles/Footer.scss'
import { logo } from '../assets'
import {footerLinks, socialMedia} from '../constants'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-contain">
            <div className="first">
                <img src={logo} alt="logo" />
                <p>A new way to make the payments easy, reliable and secure.</p>
            </div>
            {/* <div className="links"> */}
                {footerLinks.map((footerlink) => (
                    <div className="link">
                        <h4>{footerlink.title}</h4>
                        <ul>
                            {footerlink.links.map((link) => (
                                <li>
                                    {link.name}
                                </li>  
                            ))}
                            
                        </ul>
                    </div>
                ))}
            {/* </div> */}
        </div>
        <hr />
        <div className="copyright">
            <div className="copy-left">
                Copyright 2022 HooBank.All Rights Reserved.
            </div>
            <div className="icons">
                {socialMedia.map((icon) => (
                    <a href={icon.link}>
                        <img src={icon.icon} key={icon.id}  alt="" />
                    </a>
                ))}
            </div>  
        </div>
    </div>
  )
}

export default Footer