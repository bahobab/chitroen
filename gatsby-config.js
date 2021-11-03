/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Great Chicago Tours in 2CV Citroen Charleston",
    description:
      "Discover Chicago that you never thought existed. Take a view in different angles and get the feeling that will transform you!",
    author: "khoophdev@gmail.com",
    twitterUsername: "@",
    image: "/2cvtour.jpg",
    siteUrl: "https://chitours.netlify.app",
    keywords: ["Chicago Tours", "Chicago Tourism", "Citroen in Chicago", "2CV Citroen Charleston", "Tours in Chicago", "Tourism in Chicago", "2CV Citroen"],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://chitours.netlify.app",
        sitemap: "https://chitours.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
