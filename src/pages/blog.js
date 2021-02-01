import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export default function Blog({ data }) {
    return (
        <Layout title="blog">
            <h1>Posts</h1>

            {data.blog.posts.map(post => (
                <article key={post.id}>
                    <Link to={post.fields.slug}>
                        <h2>{post.frontmatter.title}</h2>
                    </Link>
                    <small>{post.frontmatter.date}</small>
                    <p>{post.excerpt}</p>
                </article>
            ))}
        </Layout>
    )
}

export const query = graphql`
    query {
        blog: allMarkdownRemark {
            posts: nodes {
                frontmatter {
                    date(formatString: "MMMM Do, YYYY")
                    title
                }
                fields {
                    slug
                }
                excerpt
                id
            }
        }
    }
`