import React from 'react'

interface SocailIconProps {
    name: string,
    icon: any
}

const SocialIcon: React.FC<SocailIconProps> = ({
    name,
    icon
}) => {
  return (
    <div className='social-icon'>
        {/* Logo */}
        <div>{icon}</div>
        {/* Name */}
        <div className='soical-icon-text'>{name}</div>
    </div>
  )
}

export default SocialIcon