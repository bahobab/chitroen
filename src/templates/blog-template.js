import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Layout } from "../components/Layout"
import styles from "../css/blog-single.module.css"
import SEO from "../components/SEO"

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className="rich">
            <h3>This is an Awesome image</h3>
            <img
              width="400"
              src={node.data.target.fields.file["en-US"].url}
              alt="post"
            />
            <p>Image provided by john doe</p>
          </div>
        )
      },

      "embedded-entry-block": node => {
        const { title, image, text } = node.target.fields
        return (
          <div>
            <h1>This is another post: {title}</h1>
            <img
              src={image["en-US"].fields.file["en-US"].url}
              alt="embedded post"
            />
            documentToReactComponents(text["en-US"])
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const getPost = graphql`
  query getPost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`
