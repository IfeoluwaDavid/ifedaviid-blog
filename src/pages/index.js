import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import FeaturedPostHero from '../components/home-hero'
import ArticlePreview from '../components/article-preview'

const RootIndex = ({ location, data }) => {
  // const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
  // const [author] = get(this, 'props.data.allContentfulPerson.nodes')
  const posts = data.allContentfulBlogPost.nodes
  // const [author] = data.allContentfulPerson.nodes

  const getFeaturedPost = (posts) => {
    const post = posts.find((post) => post.featuredPost === true)
    return post
  }

  // const featuredPost = getFeaturedPost(posts)
  // console.log(featuredPost)

  return (
    <Layout location={location}>
      <FeaturedPostHero
        post={getFeaturedPost(posts)}
        // image={featuredPost.heroImage.gatsbyImageData}
        // title={featuredPost.title}
        // author={featuredPost.author.name}
        // category={featuredPost.category}
      />
      <h2 style={{ marginTop: '3rem' }}>Recent Posts</h2>
      <ArticlePreview posts={posts} />
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        featuredPost
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        body {
          childMarkdownRemark {
            timeToRead
          }
        }
        author {
          name
        }
        category
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
  }
`
