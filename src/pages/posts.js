import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"

const PostsPage = () => {
    const posts = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                nodes {
                    excerpt(pruneLength: 155)
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "Do MMMM YYYY")
                        title
                        description
                    }
                }
            }
        }
    `).allMarkdownRemark.nodes

    return (
        <Layout title="Blog">
            <div id="topics">
                <h2 className="title">Topics</h2>
                <div className="category">
                    {["Islām", "History", "Programming"].map((item, index) => {
                    return <Link key={index} to={"/category/"+item}>{item}</Link>
                    }).reduce((prev, curr) => [prev, ", ", curr])}
                </div>
            </div>
            <div id="articles">
                <h2 className="title mt-3">Recent Posts</h2>
                    {posts.map((post, index) => {
                        var divider = <></>
                        if (index < (posts.length - 1)) {
                            divider = <span className="d-block p-0 m-0" style={{ borderTop: "1px solid #CCCCCC" }}></span>
                        }
                        return (
                            <>
                                <Link to={`/blog${post.fields.slug}`}><article className="mt-3 mb-3">
                                    <h2 className="pb-0 mb-0">{post.frontmatter.title}</h2>
                                    <span class="text-muted">{post.frontmatter.date}</span>
                                    <p className="mt-0 text-limit-2">{post.excerpt}</p>
                                </article></Link>
                                {divider}
                            </>
                        )
                    })}
                <div id="blog-viewall" className="pt-2">
                    <Link to="/blog/all">View all →</Link>
                </div>
            </div>
        </Layout>
    )
}

export default PostsPage