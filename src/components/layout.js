import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/`}>Inicio</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>Acerca de mi</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/sesions`}>Sesiones</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/faq`} title="Preguntas frecuentes">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <Link
                to={`/blog`}
                title="Blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Link>

              <Link
                to={`/elements`}
                title="Publicaciones"
                target="_blank"
                rel="noopener noreferrer"
              >
                Publicaciones
              </Link>

              <a
                href="https://linktr.ee/luciamottapsicologa?utm_source=linktree_admin_share"
                title="Contacto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built by{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          NZ
        </a>
      </footer>
    </div>
  )
}

export default Layout
