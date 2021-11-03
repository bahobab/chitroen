import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import SEO from "../components/SEO"
import Banner from "../components/Banner"
import styles from "../css/error.module.css"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error..." />
      <header className={styles.error}>
        <Banner
          title="Page not found"
          info="Ooops! You've place yourself in a cul-de-sac."
        >
          <AniLink fade to="/" className="btn-white">
            Return to home page...
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error
