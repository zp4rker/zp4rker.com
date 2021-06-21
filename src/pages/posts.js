import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"

const PostsPage = () => {
    return (
        <Layout title="Blog">
            <div id="topics">
                <label className="title">Topics</label>
                <div className="category">
                    {["Islām", "History", "Programming"].map((item, index) => {
                    return <Link key={index} to={"/category/"+item}>{item}</Link>
                    }).reduce((prev, curr) => [prev, ", ", curr])}
                </div>
            </div>
            <div id="articles">
                <label className="title mt-3">Recent Posts</label>
                    <Link to="/posts"><article className="mt-3 mb-3">
                        <h2 className="pb-0 mb-0 h5">First Post</h2>
                        <span>25th March 2021</span>
                        <p className="pt-0 mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. Animi nobis libero, corporis error eligendi sint repellat ex ratione aliquid, minus, consectetur voluptatibus ab doloribus unde saepe labore dolor!</p>
                    </article></Link>
                    <span className="d-block p-0 m-0" style={{ borderTop: "1px solid #CCCCCC" }}></span>
                    <Link to="/posts"><article className="mt-3 mb-3">
                        <h2 className="pb-0 mb-0 h5">Second Post</h2>
                        <span>26th March 2021</span>
                        <p className="pt-0 mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. Animi nobis libero, corporis error eligendi sint repellat ex ratione aliquid, minus, consectetur voluptatibus ab doloribus unde saepe labore dolor!</p>
                    </article></Link>
                    <span className="d-block p-0 m-0" style={{ borderTop: "1px solid #CCCCCC" }}></span>
                    <Link to="/posts"><article className="mt-3 mb-3">
                        <h2 className="pb-0 mb-0 h5">Third Post</h2>
                        <span>27th March 2021</span>
                        <p className="pt-0 mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. Animi nobis libero, corporis error eligendi sint repellat ex ratione aliquid, minus, consectetur voluptatibus ab doloribus unde saepe labore dolor!</p>
                    </article></Link>
                    <span className="d-block p-0 m-0" style={{ borderTop: "1px solid #CCCCCC" }}></span>
                    <Link to="/posts"><article className="mt-3 mb-3">
                        <h2 className="pb-0 mb-0 h5">Fourth Post</h2>
                        <span>28th March 2021</span>
                        <p className="pt-0 mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. Animi nobis libero, corporis error eligendi sint repellat ex ratione aliquid, minus, consectetur voluptatibus ab doloribus unde saepe labore dolor!</p>
                    </article></Link>
                    <span className="d-block p-0 m-0" style={{ borderTop: "1px solid #CCCCCC" }}></span>
                    <Link to="/posts"><article className="mt-3 mb-3">
                        <h2 className="pb-0 mb-0 h5">Fifth Post</h2>
                        <span>29th March 2021</span>
                        <p className="pt-0 mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. Animi nobis libero, corporis error eligendi sint repellat ex ratione aliquid, minus, consectetur voluptatibus ab doloribus unde saepe labore dolor!</p>
                    </article></Link>
                    <span className="d-block p-0 m-0" style={{ borderTop: "1px solid #CCCCCC" }}></span>
                    <Link to="/posts"><article className="mt-3 mb-3">
                        <h2 className="pb-0 mb-0 h5">Sixth Post</h2>
                        <span>30th March 2021</span>
                        <p className="pt-0 mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. Animi nobis libero, corporis error eligendi sint repellat ex ratione aliquid, minus, consectetur voluptatibus ab doloribus unde saepe labore dolor!</p>
                    </article></Link>
                <div id="blog-viewall" className="pt-2">
                    <Link to="/blog/all">View all →</Link>
                </div>
            </div>
        </Layout>
    )
}

export default PostsPage