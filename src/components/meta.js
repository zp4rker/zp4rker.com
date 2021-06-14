import * as React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Meta = ({ title, description, meta}) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    const metaTitle = site.siteMetadata.title || "zp4rker's site"
    const metaDesc = description || site.siteMetadata.description
    const lang = `en`

    return (
        <Helmet
            title={title}
            titleTemplate={`${metaTitle} | %s`}
            meta={[
                {
                    name: `description`,
                    content: metaDesc
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDesc
                }
            ]}
        />
    )
}

Meta.defaultProps = {
    title: ``,
    description: ``,
    meta: []
}

export default Meta