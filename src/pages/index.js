import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
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
