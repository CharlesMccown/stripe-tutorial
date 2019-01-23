import React from "react"
import { css } from "@emotion/core"
import Logo from "../images/logo-vector-white.svg"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
<StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
  <div className={["grid-container", "full-width"]} >
    <header>
      <nav className="grid-container">
        <div className="home-link-container">
          <Link to={`/`} className="home-link">
            <h3>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
        </div>
        <div className="site-link-container">
          <Link to={`/about/`} className="site-link">
            About
          </Link>
          <Link to={`/system/`} className="site-link">
            System
          </Link>
          <Link to={`/contact/`} className="site-link">
            Contact
          </Link>
          <Link to={`/support/`} className="site-link">
            Support Us!
          </Link>
        </div>      
      </nav>
      <div className="site-logo-container">
          <img src={Logo} className="site-logo"/>            
      </div>
    </header>
    {children}
  </div>    
  )}
  />
)