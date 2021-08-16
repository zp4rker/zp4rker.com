import * as React from "react"

import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <Layout title="Home" centerContent={true} showFooter={true}>
            <p className="intro">
                Hey there! I'm zp4rker, just your regular old guy. 
                My main interests are in religion, programming, history, tech and a bunch of other stuff.
            </p>
        </Layout>
    )
}

export default IndexPage