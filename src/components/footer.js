import React from 'react'
import { SocialIcon } from 'react-social-icons'
import * as styles from './footer.module.css'

const getSocialIcon = (link) => {
  return (
    <SocialIcon
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
  <footer style={{ background: 'black', padding: '2rem 0rem' }}>
    <div className={styles.container}>
      <div>
        <div className={styles.footerTag}>Powered by Gatsby & Contentful</div>
      </div>
      <div>
        {getSocialIcon('https://facebook.com/jaketrent')}
        {getSocialIcon('https://instagram.com/ifedaviid')}
        {getSocialIcon('https://github.com/jaketrent')}
        {getSocialIcon('https://linkedin.com/jaketrent')}
        {getSocialIcon('mailto:ifeoluwaadese@ymail.com')}
      </div>
    </div>
  </footer>
)

export default Footer
