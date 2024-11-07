import React from 'react'
import Logo from '../ui/Logo'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaThreads } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='footer'>
        {/* Logo and others */}
        <div className='footer-intro'>
            {/* Logo */}
            <div>
                <Logo />
            </div>
            {/* Others */}
            <div className='footer-intro-contact'>
                <div>noman567n@gmail.com</div>
                <div>+92 318 2454773</div>
            </div>
        </div>
        {/* Social Icons */}
        <div className='footer-social-icons'>
            <FaLinkedin size={40} color='blue' />
            <FaGithub size={40} color='#fff' />
            <FaTwitter size={40} color='blue' />
            <FaThreads size={40} color='#fff' />
        </div>
    </div>
  )
}

export default Footer