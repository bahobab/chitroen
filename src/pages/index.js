import React from "react"
import {graphql} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import {Layout} from "../components/Layout"
// import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import FeaturedTours from "../components/Home/FeaturedTours"
import SEO from "../components/SEO"

export default({data}) => (
  <div>
    <Layout>
      <SEO title="Fun Chicago Tours" description="Enjoy a unique visit in Chicago"/>
      <StyledHero home={true} img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="Chicago! 2CV Citroen Tours"
          info="A rare and unique opportunity to discover Chicago with a historic and human touch">
          <AniLink fade className="btn-white" to="/tours">
            Explore Tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About/>
      <Services/>
      <FeaturedTours/>
    </Layout>
  </div>
)

export const query = graphql `
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
