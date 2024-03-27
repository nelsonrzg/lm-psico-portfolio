import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const SesionPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Sesiones"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div className="logo-lmps">
        <Bio title="Bio" />
      </div>
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Description about sesion page
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3 id="dynamic-styles">¿En qué consiste tu primera sesión?</h3>
          <p>
            <lu>
              <li>
                Realizo una anamnesis psicológica en donde recolecto información
                de tu historia y reviso tu estado emocional y psicológico, así
                como los síntomas que puedes estar presentando.
              </li>
              <li>
                Te brindaré información relevante sobre tu sintomatología para
                que puedas empezar a entender qué está sucediendo.
              </li>
              <li>
                Construimos juntos los objetivos iniciales de tu proceso. (Los
                iniciales, en el camino irás descubriendo que quieres proponerte
                otros objetivos)
              </li>
              <li>
                Te doy algunas estrategias y actividades para que desde casa
                puedas empezar a trabajar en esos objetivos mientras tomas y
                agendas tu siguiente sesión.
              </li>
              <li>
                Como valor agregado de tu consulta, te enviaré algún libro
                digital que pueda potenciar tu desarrollo personal acorde con
                los objetivos terapeúticos
              </li>
            </lu>
          </p>
        </div>

        <div className="post-content-body">
          <h2 id="table">Información de Sesiones</h2>
          <table>
            <tbody>
              <tr>
                <td aria-label="Sesines">
                  <figure className="kg-card kg-image-card kg-custom-card">
                    <Img
                      fluid={data.smallPic.childImageSharp.fluid}
                      className="kg-image"
                    />
                    <p className="parrafo-center">Duración</p>
                  </figure>
                </td>
                <td>
                  <figure className="kg-card kg-image-card kg-custom-card">
                    <Img
                      fluid={data.medPic.childImageSharp.fluid}
                      className="kg-image"
                    />
                    Online
                  </figure>
                </td>
                <td>
                  <figure className="kg-card kg-image-card kg-custom-card">
                    <Img
                      fluid={data.smallPic2.childImageSharp.fluid}
                      className="kg-image"
                    />
                    Horarios flexibles
                  </figure>
                </td>
                <td>
                  <figure className="kg-card kg-image-card kg-custom-card">
                    <Img
                      fluid={data.largePic.childImageSharp.fluid}
                      className="kg-image"
                    />
                    Vídeo llamada
                  </figure>
                </td>
              </tr>
            </tbody>
          </table>

          <a href="https://api.whatsapp.com/send?phone=573003262690&text=Hola Lucía, estoy interesad@ en agendar una sesión...">
            <h2>&#10048;&#10083; Agendar cita &#10083;&#10048;</h2>
          </a>
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
    smallPic: file(relativePath: { eq: "45-minutos.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    smallPic2: file(relativePath: { eq: "calendario.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "navegador.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(relativePath: { eq: "entrevista-online.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    booking: file(relativePath: { eq: "booking.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
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
      <SesionPage location={props.location} data={data} {...props} />
    )}
  />
)
