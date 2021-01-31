import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Header() {
    const data = useStaticQuery(graphql`
        query {
            image: file(name: {eq: "logo"}, extension: {eq: "svg"}) {
                publicURL
            }
        }
    `)

    return (
        <div className="grid grid-cols-4 mt-4 ml-2 overflow-hidden">
            <div className="col-span-1">
                <AniLink cover to="/" direction="right" bg="#000000" duration={0.75}>
                    <img src={data.image.publicURL} alt="logo" className="inline h-12 w-12"/>
                </AniLink>
            </div>
            <div className="col-start-3 col-span-2 grid justify-end pr-4">
                <AniLink cover to="/blog" bg="#000000" direction="left" duration={0.75} className="no-underline text-black transform-gpu transition-transform duration-200 hover:scale-125 hover:text-shadow-sm">
                    <h2 className="text-2xl font-semibold">blog</h2>
                </AniLink>
            </div>
        </div>
    )
}