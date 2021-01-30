module.exports = {
  siteMetadata: {
    title: `zp4rker`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`
      }
    },
    `gatsby-transformer-remark`
  ],
}
