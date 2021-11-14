import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './blog-post-hero.module.css'

const BlogPostHero = ({ image, title, content }) => (
  <div className={styles.hero}>
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
  </div>
)

export default BlogPostHero
