import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const LocalImage = ({ fileName, alt }) => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "images"}}) {
            nodes {
                base
                publicURL
            }
        }
    }
    `)
    return (
        <img src={data.allFile.nodes.find(node => node.base === fileName).publicURL} alt={alt}/>
    )
}

export default LocalImage