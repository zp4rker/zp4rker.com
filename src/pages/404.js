import * as React from "react"

import Layout from "../components/layout"

const NotFoundPage = () => {
    return (
        <Layout title="404: Page not found!" centerContent={true}>
            <h1>Unable to find that page!</h1>
            <p>Looks like you're a bit lost...</p>
        </Layout>
    )
}

export default NotFoundPage