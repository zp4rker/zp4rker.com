import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Header(props) {
    const data = useStaticQuery(graphql`
        query {
            image: file(name: {eq: "logo"}, extension: {eq: "svg"}) {
                publicURL
            }
        }
    `)

    return (
        <div className="grid grid-cols-3 mt-4 ml-2 overflow-hidden">
            <div>
                <Link to="/">
                    <img src={data.image.publicURL} alt="logo" className="inline h-12 w-12 hover:animate-pulse"/>
                </Link>
            </div>
            <div className="text-center hidden md:block">
                <h1 className="text-3xl font-bold truncate" style={{animation: `.5s ease-in-out 0s 1 slideIn${localStorage.slideDirection} forwards`}}>
                    {props.title === `home` ? "" : props.title}
                </h1>
            </div>
            <div className="justify-self-end pr-4 col-span-2 md:col-span-1">
                <ul className="space-x-4">
                    <li className="inline-block transform-gpu transition-transform duration-200 hover:scale-125">
                        <Link to="/" className="no-underline text-black">
                            <h2 className="text-2xl font-semibold">home</h2>
                        </Link>
                    </li>
                    <li className="inline-block transform-gpu transition-transform duration-200 hover:scale-125">
                        <Link to="/blog" className="no-underline text-black">
                            <h2 className="text-2xl font-semibold">blog</h2>
                        </Link>
                    </li>
                    <li className="inline-block transform-gpu transition-transform duration-200 hover:scale-125">
                        <Link to="/portfolio" className="no-underline text-black">
                            <h2 className="text-2xl font-semibold">portfolio</h2>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}