import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import * as styles from './mobile-social-share.module.css'

const StyledButton = styled(Button)`
  margin: 0.5rem 0.5rem;
  width: fit-content;
`

const MobileSocialShare = ({ blogPost, pageUrl }) => {
  return (
    <div className={styles.socialShare}>
      <p
        style={{
          margin: '0.5rem',
          fontWeight: 'bolder',
        }}
      >
        Share this post
      </p>
      <div className={styles.socialButtonGroup}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.facebook.com/sharer.php?u=${pageUrl}`}
        >
          <StyledButton style={{ background: '#4267B2' }}>
            <FontAwesomeIcon icon={faFacebook} /> Share on Facebook
          </StyledButton>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/share?url=${pageUrl}&text=Read "${
            blogPost.title
          }"&via=${`IfeDaviid's Blog`}`}
        >
          <StyledButton style={{ background: '#1DA1F2' }}>
            <FontAwesomeIcon icon={faTwitter} /> Share on Twitter
          </StyledButton>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`
          https://www.linkedin.com/shareArticle?url=${pageUrl}&title=${blogPost.title}
          `}
        >
          <StyledButton style={{ background: '#0077b5' }}>
            <FontAwesomeIcon icon={faLinkedin} /> Share on LinkedIn
          </StyledButton>
        </a>
      </div>
    </div>
  )
}

export default MobileSocialShare
