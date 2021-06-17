import * as React from "react"

import Content from "./content"
import Meta from "./meta"

const Layout = ({ centerContent, showFooter, title, description, meta, children }) => {
    return (
        <>
            <Meta title={title} description={description} meta={meta} />
            <Content centerContent={centerContent} showFooter={showFooter}>
                {children}
            </Content>
        </>
    )
}

export default Layout