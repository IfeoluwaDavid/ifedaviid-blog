import React from 'react'
import { SocialIcon } from 'react-social-icons'
import * as styles from './footer.module.css'

const getSocialIcon = (link) => {
  return (
    <SocialIcon
      target="_blank"
      rel="noopener noreferrer"
      url={link}
      style={{
        borderBottom: 'none',
        margin: '0rem 0.3rem',
        height: '3rem',
        width: '3rem',
      }}
    />
  )
}

const Footer = () => (
  <footer className={styles.footerContainer}>
    <div className={styles.footerContent}>
      <div>
        <div className={styles.footerTag}>Powered by Gatsby & Contentful</div>
      </div>
      <div>
        {getSocialIcon('https://facebook.com/ifedaviid')}
        {getSocialIcon('https://instagram.com/ifedaviid')}
        {getSocialIcon('https://github.com/IfeoluwaDavid')}
        {getSocialIcon('https://www.linkedin.com/in/ifedaviid/')}
        {getSocialIcon('mailto:ifeoluwaadese@ymail.com')}
      </div>
    </div>
  </footer>
)

export default Footer
