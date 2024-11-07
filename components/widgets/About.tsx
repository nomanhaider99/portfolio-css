import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='about'>
        {/* Picture */}
        <div className='about-image'>
            <Image
                src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width={400}
                height={400}
                alt=''
             />
        </div>
        {/* Texts */}
        <div className='about-texts'>
            <div className='about-texts-heading'>ABOUT ME</div>
            <div className='about-texts-big-heading'>Passionate Developer & Future Innovator in Web & AI</div>
            <div className='about-texts-para'>Hello, I'm Noman Haider, a dedicated JAMstack developer and emerging generative AI engineer with a strong foundation in Next.js, Tailwind CSS, and the latest web development technologies. Currently, I'm advancing my expertise through a comprehensive one-year course at GIAIC Institute, where I am honing my skills to bridge the gap between cutting-edge web solutions and the transformative potential of AI. My passion lies in creating highly responsive, dynamic websites that are not only aesthetically pleasing but also fully optimized for performance and scalability. From building seamless user interfaces to architecting robust backend systems, I’m focused on delivering solutions that make an impact. I love diving into complex projects that challenge me to innovate and grow, and I have a keen interest in exploring how AI can enhance web user experiences.</div>
        </div>
    </div>
  )
}

export default About