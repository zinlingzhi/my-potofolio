import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';

// import * as styles from "./layout.module.css.d"
const Layout = (props: any) => {
  const {pageTitle, children} = props;
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          siteUrl
          title
        }
      }
    }
  `)
  return (
    <div>
      <title>{pageTitle}</title>
      <header>{data.site.siteMetadata.siteUrl}</header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout