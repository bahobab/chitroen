import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg.jpeg"

const getImages = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "frontRowSeat.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getImages)
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="ChiTours" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about container" /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>You are Special</h4>
          <p>
            After touring Chicago with us your will be a transformed as a happy
            world citizen. Discover the unique, rich and amazing faces of the
            city of Chicago that you can ONLY see in a Citroen 2CV Charleston.
          </p>
          <p>
            I you want have made it to Chicago then it belongs to us to make you
            happy with an unforgetable souvenir that no one else will provide.
          </p>
          <p>We have your front row seat ready for you!</p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
