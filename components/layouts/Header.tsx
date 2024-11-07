import React from 'react'
import Logo from '../ui/Logo'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='header'>
        {/* Logo */}
        <div>
            <Logo />
        </div>
        {/* Links */}
        <div className='links'>
            <div><Link className='link' href={"/"}>Home</Link></div>
            <div><Link className='link' href={"/about"}>About</Link></div>
            <div><Link className='link' href={"/contact"}>Contact</Link></div>
        </div>
    </div>
  )
}

export default Header