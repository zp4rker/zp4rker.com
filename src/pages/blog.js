import React from "react"
import { graphql, Link } from "gatsby"

export default function Blog({ data }) {
    return (
        <div>
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
        </div>
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