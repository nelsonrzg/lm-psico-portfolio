import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const FaqPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="FAQ" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <div className="logo-lmps">
        <Bio title="Bio" />
      </div>
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <figure className="kg-card kg-image-card kg-width">
            <Img fluid={data.faq.childImageSharp.fluid} className="kg-image" />
          </figure>
          <p>
            <h4>¿La consulta es presencial o virtual?</h4>
            <p>La consulta es 100% virtual.</p>

            <h4>¿Qué horarios manejas?</h4>
            <p>
              Tengo agenda disponible de Lunes a Viernes de 8am a 7pm Hora
              Colombia. Ten presente la diferencia horaria con tu país para que
              puedas estar segur@ de tener disponibilidad en la franja de tiempo
              que eliges para tu sesión.
            </p>

            <h4>¿Qué tipo de enfoque manejas?</h4>
            <p>Mi enfoque psicológico es humanista-existencial</p>

            <h4>¿Cómo es el proceso para agendar una sesión?</h4>
            <p>El proceso para agendar es el siguiente:</p>
            <ul>
              <li>Realizas el pago de la sesión que vas a solicitar</li>
              <li>Envías el comprobante a la línea whatsapp </li>
              <li>
                Me envías los datos que necesito para abrir tu historia y firmas
                el consentimiento informado
              </li>
              <li>Validamos nuestra disponibilidad de agenda</li>
              <li>Estás list@ para iniciar tu proceso</li>
            </ul>

            <h4>¿Qué medios de pago manejas?</h4>
            <ul>
              <li>
                Si estás en{" "}
                <span role="img" aria-label="Colombia">
                  &#127464;&#127476;
                </span>{" "}
                Colombia puedes hacer tu pago por transferencia o consignación a
                cuenta de ahorros Bancolombia o Nequi.
              </li>
              <li>
                Si estás en otro país{" "}
                <span role="img" aria-label="Pais">
                  &#127758;
                </span>{" "}
                puedes usar
                <a href="https://www.paypal.com/co/home"> PayPal </a>o
                <a href="https://global66.com/co?utm_source=google&utm_medium=cpc&utm_campaign=col-b2c-brand-sem&utm_term=global66&gad_source=1&gclid=Cj0KCQiAw6yuBhDrARIsACf94RWWYvyg6xS7506et0Pu310N5EdBnPhDT_opc8WLlsZm7aHz4TwjWvMaAkgiEALw_wcB">
                  {" "}
                  Global66.
                </a>{" "}
              </li>
            </ul>
            <h6>
              *Cualquier duda o inquietud con gusto te la puedo resolver
              <a href="https://api.whatsapp.com/send?phone=573003262690&text=Hola Lucía, tengo la siguiente duda...">
                {" "}
                aquí.
              </a>
            </h6>
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
    faq: file(relativePath: { eq: "faq.jpg" }) {
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
      <FaqPage location={props.location} data={data} {...props} />
    )}
  />
)
