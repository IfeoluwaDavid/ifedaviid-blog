import React from 'react'
import * as styles from './desktop-social-share.module.css'
import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share'
import useSiteMetadata from '../components/useSiteMetadata'

const DesktopSocialShare = ({ blogPost, location }) => {
  const { siteUrl } = useSiteMetadata().siteMetadata
  return (
    <div className={styles.socialShareContainer}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.facebook.com/sharer.php?u=${siteUrl}${location.pathname}`}
      >
        <FacebookIcon round={true} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/share?url=${siteUrl}${
          location.pathname
        }&text=Read "${blogPost.title}"&via=${`IfeDaviid's Blog`}`}
      >
        <TwitterIcon round={true} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`
          https://www.linkedin.com/shareArticle?url=${siteUrl}${location.pathname}&title=${blogPost.title}`}
      >
        <LinkedinIcon round={true} />
      </a>
    </div>
  )
}

export default DesktopSocialShare
