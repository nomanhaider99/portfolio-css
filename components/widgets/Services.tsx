import React from 'react'
import ServiceCard from '../ui/ServiceCard'

const Services = () => {
  return (
    <div className='services'>
        {/* Heading and text */}
        <div className='services-text'>
            {/* small about heading */}
            <div className='services-sm-heading'>SERVICES</div>
            <div className='services-big-heading'>Want to know about my skills and technologies.</div>
        </div>
        {/* Cards */}
        <div className='services-cards'>
            <ServiceCard
                title="Web Development"
                description="Specialized in building responsive and interactive websites using HTML, CSS, and JavaScript."
            />
            <ServiceCard
                title="Frontend Frameworks"
                description="Proficient in React and Next.js, creating dynamic single-page applications with optimized performance."
            />
            <ServiceCard
                title="Backend Development"
                description="Experienced in server-side development with Node.js, Express, and REST API design."
            />
            <ServiceCard
                title="Database Management"
                description="Knowledgeable in working with both SQL and NoSQL databases, including MySQL and MongoDB."
            />
            <ServiceCard
                title="Version Control"
                description="Skilled in using Git and GitHub for version control, enabling efficient project collaboration."
            />
            <ServiceCard
                title="Problem Solving"
                description="Adept at solving complex programming problems using algorithms and data structures."
            />
        </div>
    </div>
  )
}

export default Services