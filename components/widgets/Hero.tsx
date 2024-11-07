import React from 'react'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-inner'>
            {/* Name */}
            <div className='name-in-hero'>Noman Haider</div>
            {/* Heading */}
            <div className='hero-heading'>Full Stack Developer</div>
            {/* Paragraph */}
            <div className='hero-para'>Need to build a web application for your bussiness, or portfolio.</div>
            {/* Button */}
            <div className='hero-buttons'>
                <Button
                    text='Hire now'
                 />
                <Button
                    text='Download CV'
                    secondary
                 />
            </div>
        </div>
    </div>
  )
}

export default Hero