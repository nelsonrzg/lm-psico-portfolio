/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

function Bio() {
  return <StaticImage src="../components/LM-PS_.png" />
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/LogoLM.png/" }) {
      childImageSharp {
        fixed(width: 450, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
    logo: file(relativePath: { eq: "Logo.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Bio
