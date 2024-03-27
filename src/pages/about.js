import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Acerca de mi"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div className="logo-lmps">
        <Bio title="Bio" />
      </div>
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            ¡Hola soy Lucía! Soy profesional en psicología y pedagogía,
            psicoterapeuta, docente universitaria y mamá de Samu y Luci. Quiero
            contarte que desde hace varios años he enfocado mi propuesta como
            terapeuta en trabajar la sanación de heridas emocionales y la
            relación que estas tienen con las experiencias que has tenido dentro
            de tu sistema familiar.
          </h3>
          <figure className="kg-card kg-image-card kg-width">
            <Img fluid={data.benchAccounting.childImageSharp.fluid} />
            <figcaption>Olga Lucía Motta Pastrana</figcaption>
          </figure>
          <h3 id="dynamic-styles">Como psicoterapeuta...</h3>
          <p>
          tengo la convicción de que la relación con papá y mamá tiene un impacto significativo en el desarrollo
          de tu personalidad, en tu autoestima, en tu vida adulta, en tus éxitos y fracasos amorosos y en la forma
          como ves y percibes la vida y la realidad hoy en día. 
          </p>
          <p>
          Quiero compartir contigo este conocimiento maravilloso que he adquirido y que inició cuando yo misma entendí
          la carga familiar que me hacía ser quien era. Te doy la bienvenida a este espacio y te felicito por dar este 
          paso importante que te ayudará a entender tu historia, sanar y lograr tu mejor versión. 
          </p>
          <p>
            Vamos! Te acompaño en este camino que estás a punto de empezar.
            Trabajaremos junt@s en sanar tus heridas emocionales para que así
            puedas enfocarte en tus propósitos de vida. ¿Empezamos?
          </p>
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
      }
    }
    benchAccounting: file(relativePath: { eq: "doc1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
