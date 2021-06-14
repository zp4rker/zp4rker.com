import * as React from "react"
import { Helmet } from "react-helmet"

import Content from "../components/content"

const IndexPage = () => {
    return (
        <main>
            <Helmet>
                <title>Home - zp4rker</title>
            </Helmet>
            <Content centerContent={true} showFooter={true}>
                <p className="intro">Hey there! I'm zp4rker, just your regular old guy. 
                My main interests are in religion, programming, history, tech and a bunch of other stuff.</p>
            </Content>
        </main>
    )
}

export default IndexPage