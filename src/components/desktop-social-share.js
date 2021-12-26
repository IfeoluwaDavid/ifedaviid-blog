import React from 'react'
import * as styles from './desktop-social-share.module.css'
import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share'

const DesktopSocialShare = ({ blogPost, pageUrl }) => {
  console.log('pageurl ds -', pageUrl)
  return (
    <div className={styles.socialShareContainer}>
      <a href={`https://www.facebook.com/sharer.php?u=${pageUrl}`}>
        <FacebookIcon round={true} />
      </a>
      <a
        href={`https://twitter.com/share?url=${pageUrl}&text=Read "${
          blogPost.title
        }"&via=${`IfeDaviid's Blog`}`}
      >
        <TwitterIcon round={true} />
      </a>
      <a
        href={`
          https://www.linkedin.com/shareArticle?url=${pageUrl}&title=${blogPost.title}`}
      >
        <LinkedinIcon round={true} />
      </a>
    </div>
  )
}

export default DesktopSocialShare
