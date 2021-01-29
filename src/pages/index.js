import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <img alt="logo" src={data.image.publicURL} style={{ width: `100px`, height: `100px` }}/>
      <br/>
      <Link to="/blog">Blog</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    image: file(base: { eq: "logo.png" }) {
      publicURL
    }
  }
`
