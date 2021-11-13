import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './home-hero.module.css'

const FeaturedPostHero = ({ post }) => (
  <div className={styles.hero}>
    <GatsbyImage
      className={styles.image}
      alt={post.title}
      image={post.heroImage.gatsbyImageData}
    />
    <div className={styles.details}>
      <p className={styles.category}>{post.category[0]}</p>
      <h1 className={styles.title}>{post.title}</h1>
      <p>
        {post.publishDate} / {post.body?.childMarkdownRemark?.timeToRead} minute
        read
      </p>
      <p>Written by {post.author.name}</p>
    </div>
  </div>
)

export default FeaturedPostHero
