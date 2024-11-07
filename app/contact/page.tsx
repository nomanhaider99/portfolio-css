import SocialIcon from '@/components/ui/SocailIcon'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaThreads } from 'react-icons/fa6'

const page = () => {
  return (
    <div className='contact'>
      <SocialIcon
        icon={<FaLinkedin size={60} color='blue'/>}
        name='LinkedIn'
       />
      <SocialIcon
        icon={<FaGithub size={60} color='#fff'/>}
        name='GitHub'
       />
      <SocialIcon
        icon={<FaTwitter size={60} color='blue'/>}
        name='Twitter'
       />
      <SocialIcon
        icon={<FaThreads size={60} color='#fff'/>}
        name='Threads'
       />
    </div>
  )
}

export default page