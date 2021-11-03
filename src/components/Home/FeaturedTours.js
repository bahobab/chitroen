import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Title from "../Title"
import Tour from "../Tours/Tour"
import styles from "../../css/items.module.css"

const getTours = graphql `
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

function FeaturedTours() {
  const data = useStaticQuery(getTours)
  const featuredTours = data.featuredTours.edges

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours"/>
      <div className={styles.center}>
        {featuredTours.map(({node}) => {
          return <Tour key={node.contentful_id} tour={node}/>
        })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        All Tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours