import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../../css/blog-card.module.css"

const BlogCard = ({ blog }) => {
  const { slug, title, image, published } = blog
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} fluid={image.fluid} alt="blog image" />
        <AniLink fade to={`/blog/${slug}`} className={styles.link}>
          read more...
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>{title}</div>
    </article>
  )
}

export default BlogCard
