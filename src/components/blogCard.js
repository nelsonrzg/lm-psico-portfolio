import React from "react"
import { Link } from "gatsby"

export default props => (
  <div
    className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${
      props.postClass
    } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
      }
    }
  >
    <div className="title-blog-post">{props.node.frontmatter.title}</div>
    <Link to={props.node.fields.slug} className="post-card-link">
      <div className="div-blog">
        {props.node.frontmatter.description}
        <div className="div-date-blog">
          {props.node.frontmatter.date} &#x2022; {props.node.frontmatter.read}
        </div>
      </div>
      <a href={props.node.fields.slug} className="boton-blog">
        Leer más
      </a>
    </Link>
  </div>
)
