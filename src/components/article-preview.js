import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Card, Badge } from 'react-bootstrap'
import Container from './container'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <div className={styles.articleList}>
        {posts.map((post) => {
          return (
            <Card key={post.slug} className={styles.card}>
              <GatsbyImage
                alt=""
                image={post.heroImage.gatsbyImageData}
                style={{ borderRadius: '1rem', overflow: 'hidden' }}
              />
              <Card.Body
                style={{
                  flexDirection: 'column',
                  background: 'white',
                  padding: '1rem 2rem',
                  color: 'black',
                }}
              >
                <Card.Subtitle style={{ marginBottom: '0.5rem' }}>
                  <Badge
                    bg="secondary"
                    style={{
                      background: 'grey',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '0.5rem',
                      fontSize: '1.1rem',
                      fontWeight: 'bolder',
                      color: 'white',
                    }}
                  >
                    {post.category[0]}
                  </Badge>
                </Card.Subtitle>
                <Link to={`/blog/${post.slug}`} className={styles.link}>
                  <Card.Title className={styles.title}>{post.title}</Card.Title>
                  <Card.Text className={styles.description}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.description.childMarkdownRemark.html,
                      }}
                    />
                  </Card.Text>
                </Link>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </Container>
  )
}

export default ArticlePreview
