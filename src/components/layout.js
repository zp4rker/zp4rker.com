import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export default function Layout({ children }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className="container">
            <Link to="/">
                <h1>{data.site.siteMetadata.title}</h1>
            </Link>
            {children}
        </div>
    )
}