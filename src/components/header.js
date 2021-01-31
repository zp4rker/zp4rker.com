import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Header() {
    const data = useStaticQuery(graphql`
        query {
            image: file(name: {eq: "logo"}, extension: {eq: "svg"}) {
                publicURL
            }
        }
    `)

    return (
        <div className="grid grid-cols-4 mt-4 ml-2">
            <div className="col-span-1">
                <Link to="/">
                    <img src={data.image.publicURL} alt="logo" className="inline h-12 w-12"/>
                </Link>
            </div>
            <div className="col-start-3 col-span-2 grid justify-end pr-4">
                <Link to="/blog" className="no-underline text-black transform-gpu transition-transform duration-200 hover:scale-125 hover:text-shadow-sm">
                    <h2 className="text-2xl font-semibold">blog</h2>
                </Link>
            </div>
        </div>
    )
}