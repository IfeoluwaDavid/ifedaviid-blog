import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import * as styles from './social-share.module.css'

const StyledButton = styled(Button)`
  margin: 0.5rem 0.5rem;
  width: fit-content;
`

export const SocialShare = ({ blogPost }) => {
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
          href={`https://www.facebook.com/sharer.php?u=${'hello facebook'}`}
          rel="noopener noreferrer"
        >
          <StyledButton style={{ background: '#4267B2' }}>
            <FontAwesomeIcon icon={faFacebook} /> Share on Facebook
          </StyledButton>
        </a>
        <a
          target="_blank"
          href={`https://twitter.com/share?url=${window.href}&text=Read "${
            blogPost.title
          }"&via=${`IfeDaviid's Blog`}`}
          rel="noopener noreferrer"
        >
          <StyledButton style={{ background: '#1DA1F2' }}>
            <FontAwesomeIcon icon={faTwitter} /> Share on Twitter
          </StyledButton>
        </a>
        <a
          target="_blank"
          href={`
          https://www.linkedin.com/shareArticle?url=${'hello facebook'}&title=${
            blogPost.title
          }
          `}
          rel="noopener noreferrer"
        >
          <StyledButton style={{ background: '#0077b5' }}>
            <FontAwesomeIcon icon={faLinkedin} /> Share on LinkedIn
          </StyledButton>
        </a>
      </div>
    </div>
  )
}

export default SocialShare
