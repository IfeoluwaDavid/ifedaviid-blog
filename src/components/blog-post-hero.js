import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './blog-post-hero.module.css'

const BlogPostHero = ({ image, title, citation }) => (
  <div className={styles.hero}>
    <div className={styles.details}>
      <strong className={styles.title}>{title}</strong>
    </div>
    <div className={styles.meta}>
      <time dateTime={citation.rawDate}>{citation.publishDate}</time> by{' '}
      {citation.authorName} - {citation.timeToRead} minute read
    </div>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
  </div>
)

export default BlogPostHero
