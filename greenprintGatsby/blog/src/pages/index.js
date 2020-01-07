import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Jumbotron, Card, Button } from "react-bootstrap"

export default ({ data }) => {
  return (
    <Layout>
      <Jumbotron style={{ margin: "15px" }}>
        <h1 style={{ textAlign: "center" }}> Welcome to Greenprint Blog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et
          pharetra pharetra massa massa ultricies.
        </p>
      </Jumbotron>
      <SEO title="home" />
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <Card style={{ margin: "15px" }}>
            <h2 style={{ textAlign: "center", margin: "5px" }}>{node.title}</h2>
            <hr />
            <p
              style={{ margin: "10px", textAlign: "center", fontSize: "15px" }}
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            ></p>
            <Link to={node.slug}>
              <Button
                style={{
                  textAlign: "center",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Click
              </Button>
            </Link>
            <br />
          </Card>
          <hr />
          <hr />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 500, height: 300) {
                  base64
                  tracedSVG
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  originalName
                }
              }
            }
          }
          title
          excerpt
          slug
        }
      }
    }
  }
`
