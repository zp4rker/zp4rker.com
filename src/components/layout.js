import React from "react"
import Header from "./header"
import { Helmet } from "react-helmet"

export default function Layout(props) {
    return (
        <>
            <Helmet>
                <title>{props.htmlTitle ? props.htmlTitle : `zp4rker | ${props.title}`}</title>
            </Helmet>
            <Header title={props.title}/>
            <div className="mt-12 ml-6" style={{animation: `.5s ease-in-out 0s 1 slideIn${localStorage.slideDirection} forwards`}}>
                {props.children}
            </div>
        </>
    )
}