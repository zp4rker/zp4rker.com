import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <img alt="logo" src={data.image.publicURL} style={{ width: `100px`, height: `100px` }}/>
      <br/>
      <Link to="/blog">Blog</Link>
    </div>
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
