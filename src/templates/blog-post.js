import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Disqus } from 'gatsby-plugin-disqus'

import * as styles from './blog-post.module.css'
import Seo from '../components/seo'
import Tags from '../components/tags'
import Layout from '../components/layout'
import BlogPostHero from '../components/blog-post-hero'
import MobileSocialShare from '../components/mobile-social-share'
import DesktopSocialShare from '../components/desktop-social-share'
import useSiteMetadata from '../components/useSiteMetadata'

const BlogPostTemplate = ({ data, location }) => {
  const post = get(data, 'contentfulBlogPost')
  const previous = get(data, 'previous')
  const next = get(data, 'next')
  const { siteUrl } = useSiteMetadata().siteMetadata
  const fullUrl = `${siteUrl}${location.pathname}`

  return (
    <Layout location={location}>
      <Seo
        title={post.title}
        description={post.description.childMarkdownRemark.excerpt}
        image={`http:${post.heroImage.resize.src}`}
      />
      <div className={styles.container}>
        <DesktopSocialShare blogPost={post} pageUrl={fullUrl} />
        <div className={styles.blogPostContainer}>
          <BlogPostHero
            image={post.heroImage?.gatsbyImageData}
            title={post.title}
            citation={{
              authorName: post.author?.name,
              rawDate: post.rawDate,
              publishDate: post.publishDate,
              timeToRead: post.body?.childMarkdownRemark?.timeToRead,
            }}
          />

          <div className={styles.article}>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{
                __html: post.body?.childMarkdownRemark?.html,
              }}
            />
            <hr style={{ border: '1px thin #efefef', width: '100%' }} />
            <Tags tags={post.tags} />
            <MobileSocialShare blogPost={post} pageUrl={fullUrl} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li className={styles.blogPostBottomNavigation}>
                      <Link
                        to={`/blog/${previous.slug}`}
                        rel="prev"
                        style={{ display: 'block', textAlign: 'left' }}
                      >
                        <strong style={{ letterSpacing: '0.1rem' }}>
                          ← Previous Post
                        </strong>
                        <br />
                        <small>{previous.title}</small>
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li className={styles.blogPostBottomNavigation}>
                      <Link
                        to={`/blog/${next.slug}`}
                        rel="next"
                        style={{ display: 'block', textAlign: 'right' }}
                      >
                        <strong style={{ letterSpacing: '0.1rem' }}>
                          Next Post →
                        </strong>
                        <br />
                        <small>{next.title}</small>
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
            <div id="ife" className={styles.author}>
              <div
                style={{
                  fontWeight: 'bold',
                  fontSize: '21px',
                  marginBottom: '0.5rem',
                }}
              >
                About {post.author.name}
              </div>
              <div
                style={{
                  fontSize: '16px',
                }}
              >
                {post.author.shortBio.shortBio}
              </div>
            </div>
            <Disqus
              config={{
                /* Replace PAGE_URL with your post's canonical URL variable */
                url: `${siteUrl}${fullUrl}`,
                /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
                identifier: post.slug,
                /* Replace PAGE_TITLE with the title of the page */
                title: post.title,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
        shortBio {
          shortBio
        }
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      tags
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`

export default BlogPostTemplate
