import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blogCard"
import Bio from "../components/bio"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
import PostPrueba from "../components/postPrueba"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const Blog = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0
  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div className="logo-lmps">
        <Bio />
      </div>
      <div className="div-title-blog">
        <h2>BLOG</h2>
        <p>Hola Bienvenid@ a mi blog. En este espacio encontrarás</p>
      </div>
      <article className="post-content page-template no-image">
        <div className="post-feed">
          {posts.map(({ node }) => {
            postCounter++
            if (node.frontmatter.blog) {
              return (
                <PostPrueba
                  key={node.fields.slug}
                  count={postCounter}
                  node={node}
                />
              )
            }
          })}
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            blog
            read
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Blog location={props.location} props data={data} {...props} />
    )}
  />
)
