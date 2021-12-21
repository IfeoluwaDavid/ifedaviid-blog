import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import SocialShare from '../components/social-share'
import Seo from '../components/seo'
import Layout from '../components/layout'
import BlogPostHero from '../components/blog-post-hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.description.childMarkdownRemark.excerpt}
          image={`http:${post.heroImage.resize.src}`}
        />

        <div className={styles.container}>
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

            <Tags tags={post.tags} />
            <SocialShare blogPost={post} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/blog/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/blog/${next.slug}`} rel="next">
                        {next.title} →
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
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

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
