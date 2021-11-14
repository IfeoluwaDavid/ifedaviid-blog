import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './home-hero.module.css'

const FeaturedPostHero = ({ post }) => (
  <Link to={`/blog/${post.slug}`} className={styles.hero}>
    <GatsbyImage
      className={styles.image}
      alt={post.title}
      image={post.heroImage.gatsbyImageData}
    />
    <div className={styles.details}>
      <p className={styles.category}>{post.category[0]}</p>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.dateAndTimeToRead}>- by {post.author.name}</p>
      <p className={styles.dateAndTimeToRead}>
        {post.publishDate} / {post.body?.childMarkdownRemark?.timeToRead} minute
        read
      </p>
    </div>
  </Link>
)

export default FeaturedPostHero
