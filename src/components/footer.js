import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Container from './container'
import * as styles from './footer.module.css'

const getSocialIcon = (link) => {
  return (
    <SocialIcon
      url={link}
      style={{
        borderBottom: 'none',
        marginRight: '0.5rem',
        height: '2rem',
        width: '2rem',
      }}
    />
  )
}

const Footer = () => (
  <Container as="footer">
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
  </Container>
)

export default Footer
