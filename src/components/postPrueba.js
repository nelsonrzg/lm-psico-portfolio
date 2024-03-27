import React from "react"
import { Link } from "gatsby"

export default props => (
  <body className="body-class">
    <div className="card">
      <img
        src={props.node.frontmatter.thumbnail.childImageSharp.fluid.src}
        alt="Imagen del blog"
      />
      <div>
        <h2>{props.node.frontmatter.title}</h2>
        <h3>
          {props.node.frontmatter.date} &#x2022; {props.node.frontmatter.read}
        </h3>
        <p>{props.node.frontmatter.description}</p>
        <a href={props.node.fields.slug} className="boton-blog">
          Leer más...
        </a>
      </div>
    </div>
  </body>
)
