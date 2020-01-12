import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Jumbotron, Card, Button } from "react-bootstrap"

import landingImg from "../images/dollar-499481_1920-2.jpg"

export default ({ data }) => {
  return (
    <Layout>
      <Jumbotron
        style={{ margin: "15px", backgroundImage: `url(${landingImg})` }}
      >
        <h1 style={{ textAlign: "center", color: "#270e40" }}>
          {" "}
          Welcome to Greenprint Blog
        </h1>
        <p style={{ textAlign: "center", color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et
          pharetra pharetra massa massa ultricies.
        </p>
      </Jumbotron>
      <SEO title="home" />
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <Card
            style={{
              margin: "15px",
              borderColor: "#FEA711",
              borderWidth: "1.5px",
            }}
          >
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
                  width: "300px",
                  backgroundColor: "#7022c3",
                  border: "none",
                }}
                size="lg"
              >
                Click
              </Button>
            </Link>
            <br />
          </Card>
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
