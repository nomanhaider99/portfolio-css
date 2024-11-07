import React from 'react'
import styles from '@/components/ui/servicecard.module.css'

interface ServiceCardProps {
    title: string,
    description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description
}) => {
  return (
    <div className={styles.servicecard}>
        {/* Title */}
        <div className={styles.servicecardTitle}>{title}</div>
        {/* Paragraph */}
        <div className={styles.servicecardPara}>{description}</div>
        {/* Button */}
        <div></div>
    </div>
  )
}

export default ServiceCard